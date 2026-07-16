#!/usr/bin/env python3
"""Generate mfm-dashboard data files from farm analyses + ledger extractions.
Re-runnable: run again when the overnight ledger completes."""
import json, glob, os, collections, statistics, re

SP = "/private/tmp/claude-501/-Users-tracecohen/6e7e43f6-bd35-4f9b-bab7-5cc8f4cd359f/scratchpad/mfm"
OUT = os.path.expanduser("~/mfm-dashboard/app")

def load_dir(d):
    out = {}
    for p in glob.glob(f"{d}/*.json"):
        stem = os.path.basename(p).replace(".json","")
        try:
            j = json.load(open(p))
            if isinstance(j, dict) and not j.get("error"): out[stem] = j
        except: pass
    return out

A = load_dir(f"{SP}/farm/analysis")           # deep sample (160)
L = load_dir(f"{SP}/ledger/out")              # slim ledger (growing)
who_norm = lambda w: ("Shaan" if "shaan" in str(w).lower() else "Sam" if str(w).lower().startswith("sam")
                      else "Guest" if "guest" in str(w).lower() else "Panel")

# ---------- IDEA LEDGER: union of deep + slim, dedup within episode by fuzzy idea text
def norm_idea(t): return " ".join(re.sub(r"[^a-z0-9 ]+"," ", str(t).lower()).split())[:60]
ideas = []
seen = set()
for src, tag in [(A, "deep"), (L, "ledger")]:
    for stem, d in src.items():
        date = stem[:8]
        for i in (d.get("business_ideas") or []):
            if not isinstance(i, dict) or not i.get("idea"): continue
            key = (date[:6], norm_idea(i["idea"]))
            if key in seen: continue
            seen.add(key)
            conv = str(i.get("conviction","?")).lower()
            conviction = ("build" if "build" in conv else "serious" if "serious" in conv else "throwaway")
            ideas.append({"date": f"{date[:4]}-{date[4:6]}", "who": who_norm(i.get("who")),
                          "idea": str(i["idea"])[:180], "conviction": conviction})
ideas.sort(key=lambda x: x["date"])

# ---------- predictions
preds = []
pseen = set()
for src in (A, L):
    for stem, d in src.items():
        for p in (d.get("predictions") or []):
            if not isinstance(p, dict) or not p.get("text"): continue
            key = (stem[:6], norm_idea(p["text"]))
            if key in pseen: continue
            pseen.add(key)
            preds.append({"date": f"{stem[:4]}-{stem[4:6]}", "who": who_norm(p.get("who")), "text": str(p["text"])[:200]})
preds.sort(key=lambda x: x["date"])

# ---------- quotes (deep only, curated: attributed to Sam/Shaan, punchy)
quotes = []
for stem, d in A.items():
    for q in (d.get("banger_quotes") or []):
        if not isinstance(q, dict): continue
        w = who_norm(q.get("who")); t = str(q.get("quote",""))
        if w in ("Sam","Shaan") and 25 < len(t) < 110:
            quotes.append({"date": f"{stem[:4]}-{stem[4:6]}", "who": w, "quote": t})
quotes.sort(key=lambda x: x["date"])

# ---------- disagreements (deep, curated: mentions both hosts)
debates = []
for stem, d in A.items():
    t = str(d.get("disagreements") or "")
    if len(t) > 80 and re.search(r"sam", t, re.I) and re.search(r"shaan", t, re.I):
        debates.append({"date": f"{stem[:4]}-{stem[4:6]}", "text": t[:320]})
debates.sort(key=lambda x: x["date"])

# ---------- frameworks (deep)
fws = []
fseen = set()
for stem, d in A.items():
    for f in (d.get("frameworks") or []):
        t = str(f)[:160]
        k = norm_idea(t)[:40]
        if k in fseen or len(t) < 15: continue
        fseen.add(k)
        fws.append({"date": f"{stem[:4]}-{stem[4:6]}", "text": t})

# ---------- yearly stats (sample-based)
years = sorted({s[:4] for s in A})
fmt_names = {"guest-interview":"interviews","idea-brainstorm":"brainstorms","frameworks/advice":"frameworks","news-reaction":"news","story-breakdown":"stories","mixed":"mixed","brainstorm":"brainstorms"}
yearly = []
for y in years:
    eps = [d for s,d in A.items() if s.startswith(y)]
    n = len(eps)
    fm = collections.Counter(fmt_names.get(str(d.get("format")), "mixed") for d in eps)
    sc = [d.get("sponsor_read_count") for d in eps if isinstance(d.get("sponsor_read_count"),(int,float))]
    yi = [len(d.get("business_ideas") or []) for d in eps]
    yearly.append({"year": y, "n": n,
                   "interviews": round(100*fm["interviews"]/n), "brainstorms": round(100*fm["brainstorms"]/n),
                   "mixed": round(100*(fm["mixed"]+fm["news"]+fm["stories"])/n), "frameworks": round(100*fm["frameworks"]/n),
                   "ideasPerEp": round(statistics.mean(yi),1) if yi else 0,
                   "sponsor": round(statistics.mean(sc),1) if sc else 0})

by_who = collections.Counter(i["who"] for i in ideas)
pred_who = collections.Counter(p["who"] for p in preds)
summary = {
    "episodesTotal": 880, "episodesDeepRead": len(A), "episodesLedger": len(L),
    "ideasTotal": len(ideas), "ideasSam": by_who["Sam"], "ideasShaan": by_who["Shaan"], "ideasGuest": by_who["Guest"],
    "ideasSerious": sum(1 for i in ideas if i["conviction"] != "throwaway"),
    "predictionsTotal": len(preds), "predsSam": pred_who["Sam"], "predsShaan": pred_who["Shaan"],
    "quotes": len(quotes), "debates": len(debates), "frameworks": len(fws),
}

os.makedirs(OUT, exist_ok=True)
def ts(name, typ, data):
    open(f"{OUT}/{name}.ts","w").write(f"// Generated by gen_dashboard_data.py — re-run to refresh\nexport const {typ} = " + json.dumps(data, ensure_ascii=False) + ";\n")
ts("gen_summary", "SUMMARY", summary)
ts("gen_yearly", "YEARLY", yearly)
ts("gen_ideas", "IDEAS", ideas)
ts("gen_predictions", "PREDICTIONS", preds)
ts("gen_quotes", "QUOTES", quotes[:120])
ts("gen_debates", "DEBATES", debates[:40])
ts("gen_frameworks", "FRAMEWORKS", fws[:200])

# ---------- idea taxonomy (keyword classifier)
CATS = [
    ("AI & automation", r"\bai\b|artificial intelligence|gpt|chatbot|automation|agent|llm|machine learning"),
    ("Content & media", r"newsletter|podcast|youtube|content|media|creator|audience|blog|tiktok|course|video"),
    ("SaaS & software", r"saas|software|app\b|platform|tool\b|api\b|dashboard|plugin"),
    ("Services & agencies", r"agency|service business|concierge|cleaning|staffing|consulting|done-for-you|booking"),
    ("Consumer products", r"brand|dtc|d2c|product line|drink|food|snack|supplement|apparel|merch|candle|toy"),
    ("Real estate & physical", r"real estate|property|land\b|storage|laundromat|vending|gym|hotel|parking|car wash|franchise"),
    ("Health & wellness", r"health|fitness|wellness|therapy|medical|peptide|longevity|sleep|mental"),
    ("Finance & investing", r"invest|fund\b|etf|stock|crypto|bitcoin|fintech|insurance|lending|banking|roll-?up|holdco"),
    ("Marketplaces & community", r"marketplace|community|membership|network\b|matchmaking|dating|club\b|events"),
]
import re as _re
def categorize(text):
    t = text.lower()
    for name, pat in CATS:
        if _re.search(pat, t): return name
    return "Other"
for i in ideas: i["cat"] = categorize(i["idea"])
cat_counts = collections.Counter(i["cat"] for i in ideas)
cat_by_year = {}
for i in ideas:
    y = i["date"][:4]
    cat_by_year.setdefault(y, collections.Counter())[i["cat"]] += 1
CATEGORIES = [{"name": c, "count": n} for c, n in cat_counts.most_common()]
top6 = [c["name"] for c in CATEGORIES[:6]]
CAT_TREND = []
for y in sorted(cat_by_year):
    tot = sum(cat_by_year[y].values()) or 1
    row = {"year": y}
    for c in top6: row[c] = round(100 * cat_by_year[y][c] / tot)
    CAT_TREND.append(row)

# ---------- host conviction & disagreement/prediction rates by year (deep read)
HOSTSTATS = []
for w in ("Sam", "Shaan"):
    ws = [i for i in ideas if i["who"] == w]
    ser = sum(1 for i in ws if i["conviction"] != "throwaway")
    HOSTSTATS.append({"who": w, "ideas": len(ws), "seriousPct": round(100*ser/len(ws)) if ws else 0})
DISAGREE = []
for y in sorted({s[:4] for s in A}):
    eps = [d for s, d in A.items() if s.startswith(y)]
    n = len(eps)
    dis = sum(1 for d in eps if d.get("disagreements") and len(str(d.get("disagreements"))) > 80)
    DISAGREE.append({"year": y, "pct": round(100*dis/n) if n else 0})

ts("gen_categories", "CATEGORIES", CATEGORIES)
ts("gen_cat_trend", "CAT_TREND", CAT_TREND)
ts("gen_hoststats", "HOSTSTATS", HOSTSTATS)
ts("gen_disagree", "DISAGREE", DISAGREE)
print("cats:", CATEGORIES[:5])

print(json.dumps(summary, indent=1))
