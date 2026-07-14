"use client";
import { useState, useRef } from "react";
import {
  Mic,
  Clock,
  TrendingUp,
  MessageSquareQuote,
  Users,
  Layers,
  ExternalLink,
  Sparkles,
  RotateCcw,
  ShieldAlert,
  Search,
  Share,
  Lightbulb,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SHOW, YEARLY, ERAS, CASE_STUDIES, REPEAT_GUESTS, LEARNINGS_GROUPS, ASSERTIVENESS_BY_YEAR } from "./data";
import { RT_PREDICTIONS, RT_QUOTES } from "./rtdata";
import { NUGGETS } from "./wisdom";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { LogoWall } from "@/components/LogoWall";
import { Funnel } from "@/components/Funnel";
import { AssertivenessGauge } from "@/components/AssertivenessGauge";

export default function Page() {
  return (
    <div id="top" className="min-h-screen text-slate-900">
      <Nav />

      {/* HERO */}
      <header className="relative overflow-hidden bg-slate-950 text-white pt-24 sm:pt-28 pb-16 sm:pb-24">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob-3" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 pulse-dot" />
                  <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                1,481 episodes analyzed · 2015–2026
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                <Mic className="h-3 w-3" aria-hidden /> The Twenty Minute VC
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-center">
            <div>
              <Reveal delay={120}>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                  1,481 episodes. 11 years.
                  <br />
                  <span className="text-cyan-300">The evolution of Harry Stebbings.</span>
                </h1>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <HeroPortrait />
            </Reveal>
          </div>

          <Reveal delay={220}>
            <p className="mt-5 text-base sm:text-xl text-blue-100/85 max-w-3xl leading-relaxed">
              A full metadata sweep of every 20VC episode since 2015, plus 180 real transcript reads
              spanning 2015–2026, tracking how Harry Stebbings&rsquo; show, questions, and depth of
              understanding have evolved. <span className="text-white font-semibold">Episodes nearly tripled in length. Titles went from one clean hook to four stacked theses.</span>
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Reveal delay={300}>
              <HeroStat label="Episodes analyzed" value={<CountUp to={1481} />} sub="Jan 2015 – Jul 2026" accentColor="#22d3ee" />
            </Reveal>
            <Reveal delay={380}>
              <HeroStat label="Avg length, 2015" value={<><CountUp to={25} />min</>} sub="vs. 72.6min in 2026" accentColor="#34d399" />
            </Reveal>
            <Reveal delay={460}>
              <HeroStat label="Title density growth" value={<><CountUp to={3.9} decimals={1} />x</>} sub="topics stacked per title" accentColor="#fb923c" />
            </Reveal>
            <Reveal delay={540}>
              <HeroStat label="Real transcripts read" value={<CountUp to={180} />} sub="~15/year, dual-rated by 2 AI raters" accentColor="#38bdf8" />
            </Reveal>
          </div>
        </div>
      </header>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="px-4 sm:px-6 pt-6">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">
              A sample of the guests behind the data
            </div>
          </div>
          <LogoWall />
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* BENTO KPI GRID */}
        <Reveal>
          <section>
            <SectionTitle eyebrow="At a glance" title="The show, by the numbers" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[112px] sm:auto-rows-[140px]">
              <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-5 sm:p-6 text-white flex flex-col overflow-hidden relative">
                <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                <div className="flex items-center gap-2 relative">
                  <Clock className="h-4 w-4" aria-hidden />
                  <span className="text-xs uppercase tracking-wider opacity-80">Avg episode length</span>
                </div>
                <div className="relative mt-3">
                  <div className="text-3xl sm:text-5xl font-bold">
                    <CountUp to={72.6} decimals={1} />min
                  </div>
                  <div className="text-xs sm:text-sm text-blue-100 mt-1">
                    Up from 25.0min in 2015 · nearly <CountUp to={2.9} decimals={1} />x longer
                  </div>
                </div>
                <div
                  className="relative mt-auto pt-4 flex items-end gap-1 h-20 sm:h-24"
                  role="img"
                  aria-label="Bar chart of average episode length by year, rising from 25 minutes in 2015 to 72.6 minutes in 2026"
                >
                  {YEARLY.map((y, i) => (
                    <div key={y.year} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-full rounded-sm bg-white/70" style={{ height: `${(y.avgMin / 72.6) * 100}%` }} />
                      {(i === 0 || i === YEARLY.length - 1) && (
                        <span className="text-[9px] text-blue-100">{y.year.replace("*", "")}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <BentoStat icon={Layers} label="Peak episodes/year" value={<CountUp to={156} />} sub="2016 — 3 per week" color="text-emerald-700" iconBg="bg-emerald-100" />
              <BentoStat icon={TrendingUp} label="Theses per title, 2026" value={<><CountUp to={3.89} decimals={2} />x</>} sub="vs. 1.0 clean hook in 2015" color="text-amber-700" iconBg="bg-amber-100" />
              <BentoStat icon={Users} label="Wisdom nuggets mined" value={<CountUp to={930} />} sub="from 147 guests, all searchable" color="text-sky-700" iconBg="bg-sky-100" />
              <BentoStat icon={MessageSquareQuote} label="Predictions logged" value={<CountUp to={171} />} sub="from the roundtable, scored live" color="text-cyan-700" iconBg="bg-cyan-100" />
            </div>
          </section>
        </Reveal>

        {/* TIMELINE: episode length + title density */}
        <section id="timeline" className="scroll-mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="The headline trend"
              title="The show got 3x longer, and 2022 is the inflection point"
              sub="Average episode length climbed steadily from 2015, but title complexity — the number of distinct topics stacked into one title — stayed flat near 1.0 for seven straight years, then broke sharply upward in 2022. That's when the format shifted from one narrative arc to a thesis-dump of standalone, quotable claims."
            />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <Reveal delay={100}>
              <div className="lg:col-span-2">
                <Card>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Average episode length</h3>
                      <p className="text-xs text-slate-500">Minutes per episode, by year</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">2015 → 2026</div>
                      <div className="text-2xl font-bold text-emerald-600">+190%</div>
                    </div>
                  </div>
                  <div className="h-[280px] sm:h-[340px]" role="img" aria-label="Area chart showing average 20VC episode length climbing from 25 minutes in 2015 to 72.6 minutes in 2026">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={YEARLY} margin={{ top: 16, right: 16, left: -8, bottom: 0 }}>
                        <defs>
                          <linearGradient id="lenGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.7} />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="year" tick={{ fill: "#475569", fontSize: 11 }} />
                        <YAxis tick={{ fill: "#475569", fontSize: 12 }} tickFormatter={(v) => `${v}m`} />
                        <Tooltip
                          contentStyle={{ background: "#0f172a", border: "none", borderRadius: 8, color: "#fff" }}
                          formatter={(v: number) => [`${v} min`, "Avg length"]}
                          labelStyle={{ color: "#94a3b8" }}
                        />
                        <Area type="monotone" dataKey="avgMin" stroke="#3b82f6" strokeWidth={3} fill="url(#lenGrad)" dot={{ r: 4, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 7 }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full flex flex-col">
                <div className="text-xs uppercase tracking-wider text-blue-600 font-semibold mb-1">Format shift</div>
                <h3 className="font-bold text-slate-900 mb-3">Title complexity by era</h3>
                <p className="text-xs text-slate-500 mb-4">Avg. topics stacked per title — flat until 2022, then breaks upward</p>
                <div role="img" aria-label="Bar comparison of title clause density: roughly 1x from 2015-2021, 1.5x in 2022-23, 2.5x in 2024, and 3.9x by 2025-26">
                <Funnel
                  stages={[
                    { label: "2015-21", value: 101, color: "#f59e0b", note: "~1.0x" },
                    { label: "2022-23", value: 149, color: "#10b981", note: "~1.5x" },
                    { label: "2024", value: 250, color: "#0ea5e9", note: "2.5x" },
                    { label: "2025-26", value: 389, color: "#0284c7", note: "3.9x" },
                  ]}
                />
                </div>
                <div className="mt-4 text-xs text-slate-500 leading-relaxed">
                  By 2026 a typical title carries 4 distinct claims (&ldquo;Why X | How Y | The Bottleneck Is Z&rdquo;) instead of one clean hook — each episode is packaged as standalone, quotable arguments.
                </div>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="mt-4 sm:mt-6">
              <Card>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900">Episodes per year</h3>
                  <span className="text-xs text-slate-500">Volume held steady even as length tripled</span>
                </div>
                <div className="h-[220px] sm:h-[260px]" role="img" aria-label="Bar chart of 20VC episode count per year, ranging from 82 to 156 episodes annually">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={YEARLY} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="epGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#0891b2" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="year" tick={{ fill: "#475569", fontSize: 11 }} />
                      <YAxis tick={{ fill: "#475569", fontSize: 11 }} />
                      <Tooltip contentStyle={{ background: "#0f172a", border: "none", borderRadius: 8, color: "#fff" }} labelStyle={{ color: "#94a3b8" }} />
                      <Bar dataKey="episodes" fill="url(#epGrad)" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </Reveal>
        </section>

        {/* TOPICS */}
        <section id="topics" className="scroll-mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="What he talks about"
              title="From “how to VC” to an AI-economics show"
              sub="Keyword frequency in episode titles across all 1,481 episodes, grouped into four eras. Early years are generic VC-101 territory; by 2024-26, OpenAI and Anthropic are top-8 title words across 375 episodes — something with zero precedent pre-2023."
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {ERAS.map((era, i) => (
              <Reveal key={era.key} delay={100 + i * 50}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider rounded-full px-2 py-1 text-white" style={{ background: era.color }}>
                      {era.label}
                    </span>
                    <span className="text-[10px] text-slate-500">{era.episodes} eps</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mt-2 mb-3">{era.name}</h3>
                  <div className="space-y-2 flex-1">
                    {era.keywords.map((k) => (
                      <div key={k.word} className="flex items-center gap-2">
                        <div className="w-16 text-xs text-slate-600 text-right shrink-0">{k.word}</div>
                        <div className="flex-1 h-4 rounded bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded"
                            style={{ width: `${(k.count / era.keywords[0].count) * 100}%`, background: era.color }}
                          />
                        </div>
                        <div className="w-8 text-[10px] text-slate-500 tabular-nums">{k.count}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* INTERVIEW STYLE */}
        <section id="style" className="scroll-mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="From real transcripts"
              title="From receiving answers to contesting guests"
              sub="180 episodes read in full — ~15 per year from episode #1 (2015) through 2026, each scored by two independent AI raters (one blind to the other). The earliest episodes show one-line questions and zero pushback; the pushback score more than doubles across the decade."
            />
          </Reveal>

          <Reveal delay={80}>
            <Card className="mb-4 sm:mb-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Assertiveness Index, 2015-2026</h3>
                  <p className="text-xs text-slate-500">Editorial 1-10 score per read episode, averaged by year</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Episode #1 → 2026</div>
                  <div className="text-2xl font-bold text-emerald-600">2.8 → 6.2</div>
                </div>
              </div>
              <div className="h-[240px] sm:h-[280px]" role="img" aria-label="Line chart showing Harry Stebbings' assertiveness score climbing from 2.8 in 2015 to 6.2 in 2026, with 95 percent confidence bands">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ASSERTIVENESS_BY_YEAR} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fill: "#475569", fontSize: 11 }} />
                    <YAxis tick={{ fill: "#475569", fontSize: 11 }} domain={[0, 10]} />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "none", borderRadius: 8, color: "#fff" }} labelStyle={{ color: "#94a3b8" }} />
                    <Line type="monotone" dataKey="score" stroke="#f97316" strokeWidth={4} dot={{ r: 6, fill: "#f97316", stroke: "#fff", strokeWidth: 2 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                With ~15 episodes per year and two independent raters, the climb is steady and unambiguous: 2.8 in 2015 to 6.2 in 2026, with 95% confidence intervals of roughly ±0.3-0.9 per year — far tighter than the 3.4-point rise they're measuring. The steepest gains come in 2024-26, as the guest mix shifts toward AI/frontier-model operators.
              </p>
            </Card>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <Reveal delay={100}>
              <Card className="h-full flex flex-col items-center justify-center">
                <div className="text-xs uppercase tracking-wider text-blue-600 font-semibold mb-1">Editorial score, 1-10</div>
                <h3 className="font-bold text-slate-900 mb-2">Early vs. recent</h3>
                <AssertivenessGauge early={3} recent={6} />
                <p className="mt-2 text-xs text-slate-500 text-center leading-relaxed">
                  Episode #1 (2015) vs. the most recent read episode (2026): from terse, zero-pushback one-liners to routinely contesting the guest's claims.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="lg:col-span-2 h-full flex flex-col">
                <h3 className="font-bold text-slate-900 mb-3">What actually changed</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                  <MiniInsight icon={RotateCcw} color="#f59e0b" title="Preparation" desc="Went from 'read the guest's book' to visibly cross-referencing dozens of prior guests to pressure-test the person in front of him." />
                  <MiniInsight icon={Sparkles} color="#0ea5e9" title="Tone" desc="Stayed constant the whole time — casual, matey, first-name, opinion-forward. This didn't evolve; depth and pushback did." />
                  <MiniInsight icon={TrendingUp} color="#10b981" title="Technical depth" desc="Rose sharply, tracking a more technical AI/finance guest mix — scaling laws, HBM pricing, fund mechanics." />
                  <MiniInsight icon={Users} color="#3b82f6" title="Relationships" desc="Repeat guests go back to at least 2018 (Elad Gil's 3 appearances) — what changed isn't the practice, it's the intimacy of the callback." />
                </div>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-bold mb-4">Case studies from the 180-episode sample, scroll to compare eras — episode #1 to today</div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory">
                  {CASE_STUDIES.map((cs, i) => (
                    <div
                      key={i}
                      className="snap-start shrink-0 w-[280px] sm:w-[320px] rounded-2xl bg-white/[0.07] backdrop-blur border border-white/15 p-5 flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-1 text-white" style={{ background: cs.color }}>
                          {cs.date}
                        </span>
                        <span className="text-[10px] text-blue-200">assertiveness {cs.assertiveness}/10</span>
                      </div>
                      <div className="font-bold text-white text-lg">{cs.guest}</div>
                      <div className="text-xs text-blue-200 mb-3">{cs.role}</div>
                      <div className="rounded-lg bg-white/10 p-3 mb-3">
                        <MessageSquareQuote className="h-3 w-3 text-cyan-300 mb-1" aria-hidden />
                        <p className="text-xs text-blue-50 italic leading-snug">&ldquo;{cs.quote}&rdquo;</p>
                      </div>
                      <p className="text-xs text-blue-100/85 leading-relaxed">{cs.style}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* REPEAT GUESTS */}
        <section>
          <Reveal>
            <SectionTitle
              eyebrow="Relationship building"
              title="With repeat guests, he explicitly calls back to the last conversation"
              sub="Both Nikesh Arora and Aravind Srinivas were interviewed twice. On their second appearance, Harry treats the guest as a known relationship, not a fresh interview subject — a signal the show has shifted toward cultivated, recurring access with top-tier guests."
            />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {REPEAT_GUESTS.map((rg, i) => (
              <Reveal key={rg.guest} delay={100 + i * 50}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900">{rg.guest}</h3>
                      <p className="text-xs text-slate-500">{rg.role}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="rounded-lg bg-slate-50 p-2.5">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">{rg.first.date}</div>
                      <div className="text-xs text-slate-700 mt-0.5">{rg.first.note}</div>
                    </div>
                    <div className="rounded-lg bg-cyan-50 border border-cyan-200 p-2.5">
                      <div className="text-[10px] text-cyan-700 uppercase tracking-wider">{rg.second.date}</div>
                      <div className="text-xs text-cyan-900 mt-0.5">{rg.second.note}</div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-900 p-3 mt-auto">
                    <p className="text-xs text-slate-100 italic leading-relaxed">{rg.callback}</p>
                    <div className="text-[10px] text-emerald-400 mt-2 font-semibold uppercase tracking-wider">Verified verbatim via caption re-check</div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LEARNINGS */}
        <section id="learnings" className="scroll-mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="Compiled from guest answers"
              title="Key learnings, grouped"
              sub="Pulled from the 9 case-study transcripts — in our own words, not verbatim."
            />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {LEARNINGS_GROUPS.map((g, i) => (
              <Reveal key={g.title} delay={100 + i * 50}>
                <Card className="h-full flex flex-col">
                  <div className="h-1 w-full rounded-full mb-4" style={{ background: g.color }} />
                  <h3 className="font-bold text-slate-900 mb-3">{g.title}</h3>
                  <ul className="space-y-3 flex-1">
                    {g.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-700 leading-relaxed flex gap-2">
                        <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full" style={{ background: g.color }} aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>


        {/* ROUNDTABLE ERA */}
        <section id="roundtable" className="scroll-mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="The show within the show"
              title="The Roundtable Era: 171 predictions on the record"
              sub="In April 2025, 20VC added a weekly news roundtable with Jason Lemkin and Rory O'Driscoll — 49 episodes analyzed. Every explicit prediction made on air is cataloged below with attribution; statuses update as calls resolve."
            />
          </Reveal>
          <Reveal delay={100}>
            <PredictionsBoard />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-6">
              <h3 className="font-bold text-slate-900 mb-1">The Harry quote wall</h3>
              <p className="text-sm text-slate-600 mb-4">Verbatim, from the roundtable transcripts — the opinion-forward Harry the interviews only hint at.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {RT_QUOTES.map((q, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
                    <p className="text-sm text-slate-800 font-medium leading-snug">&ldquo;{q.quote}&rdquo;</p>
                    <div className="mt-3 text-[10px] uppercase tracking-wider text-slate-500">Harry Stebbings · {q.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>


        {/* WISDOM WALL */}
        <section id="wisdom" className="scroll-mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="The knowledge base"
              title="930 nuggets of wisdom from 147 guests"
              sub="Every key insight mined from the fully-read transcripts, attributed and shareable. Search by topic, guest, or idea — then post the ones worth spreading."
            />
          </Reveal>
          <WisdomWall />
        </section>

        {/* METHODOLOGY */}
        <section id="methodology" className="scroll-mt-20">
          <Reveal>
            <Card className="border-2 border-amber-200 bg-amber-50/40">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="h-4 w-4 text-amber-700" aria-hidden />
                <h3 className="font-bold text-slate-900">About this data — read before you cite it</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Quantitative section</strong> (duration, title structure, keyword trends) covers the
                  <strong> full population of all 1,481 episodes</strong> — no sampling error there.
                </p>
                <p>
                  <strong>Qualitative section</strong> covers a stratified sample of ~180 fully-read transcripts,
                  roughly 15 per year from episode #1 (2015) through mid-2026 — transcribed via Whisper from the
                  show&rsquo;s original RSS audio (the show has never published transcripts, and YouTube captions only
                  exist for 2022+; verified directly).
                </p>
                <p>
                  <strong>Assertiveness Index</strong>: each episode was scored 1-10 against a fixed rubric by two
                  independent AI raters, the second blind to the first. Agreement: 68% of pairs within ±1 point, 88%
                  within ±2 (r=0.51), with one rater scoring +0.5 higher on average — noise far smaller than the
                  3.4-point trend. Yearly values are two-rater means; 95% CIs run ±0.3-0.9.
                </p>
                <p>
                  <strong>Format exclusions</strong>: panel/roundtable episodes (the weekly Lemkin/O&rsquo;Driscoll
                  news show launched in 2025), compilation episodes, and the one episode where Harry is himself the
                  interviewee are excluded from the index — it measures Harry-interviews-guest episodes only.
                </p>
              </div>
            </Card>
          </Reveal>
        </section>

        {/* Closing manifesto */}
        <Reveal>
          <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-bold mb-3">The throughline</div>
                <p className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Eleven years in, the tone never changed &mdash;
                  <span className="text-cyan-300"> the willingness to push back did.</span>
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white">
                    TC
                  </div>
                  <div>
                    <div className="font-bold text-white">20VC Decoded</div>
                    <div className="text-sm text-blue-100">1,481 episodes analyzed · built by @Trace_Cohen</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-4">
                  <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Episodes</div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mt-1">1,481</div>
                  <div className="text-xs text-blue-100 mt-1">2015-2026</div>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-4">
                  <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Length growth</div>
                  <div className="text-3xl sm:text-4xl font-bold text-cyan-300 mt-1">2.9x</div>
                  <div className="text-xs text-blue-100 mt-1">25min &rarr; 72.6min</div>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-4">
                  <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Transcripts read</div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mt-1">180</div>
                  <div className="text-xs text-blue-100 mt-1">dual-rated, 2015-2026</div>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-4">
                  <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Repeat guests</div>
                  <div className="text-3xl sm:text-4xl font-bold text-cyan-300 mt-1">3</div>
                  <div className="text-xs text-blue-100 mt-1">callback verified</div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10 mt-12">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 text-center">
          <p className="text-sm text-slate-600 mb-3">
            Sourced from the 20VC public RSS feed (all 1,481 episodes) and 9 YouTube auto-caption transcripts,
            2015&ndash;2026. Independent analysis, not affiliated with 20VC or Harry Stebbings.
          </p>
          <p className="text-sm text-slate-500">
            Built by{" "}
            <a href="https://x.com/Trace_Cohen" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-semibold">
              @Trace_Cohen
            </a>
            {" · "}
            <a href="mailto:t@nyvp.com" className="text-blue-600 hover:underline font-semibold">
              t@nyvp.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Building blocks ---------- */

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mb-6 sm:mb-8">
      {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-2">{eyebrow}</div>}
      <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>
      {sub && <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl">{sub}</p>}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm ${className}`}>{children}</div>;
}

function HeroStat({ label, value, sub, accentColor }: { label: string; value: React.ReactNode; sub?: string; accentColor: string }) {
  return (
    <div className="glass rounded-2xl p-4 sm:p-5">
      <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/70 font-semibold">{label}</div>
      <div className="text-2xl sm:text-4xl font-bold mt-2" style={{ color: accentColor }}>{value}</div>
      {sub && <div className="text-xs text-white/70 mt-1">{sub}</div>}
    </div>
  );
}

function BentoStat({ icon: Icon, label, value, sub, color, iconBg }: { icon: any; label: string; value: React.ReactNode; sub?: string; color: string; iconBg: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col justify-center gap-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-center gap-2">
        <div className={`h-7 w-7 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
          <Icon className={`h-4 w-4 ${color}`} aria-hidden />
        </div>
        <div className="text-xs text-slate-500 font-medium leading-tight">{label}</div>
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-slate-900">{value}</div>
      {sub && <div className="text-[11px] text-slate-500 leading-tight">{sub}</div>}
    </div>
  );
}

function MiniInsight({ icon: Icon, color, title, desc }: { icon: any; color: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="h-6 w-6 rounded-md flex items-center justify-center" style={{ background: `${color}20` }}>
          <Icon className="h-3.5 w-3.5" style={{ color }} aria-hidden />
        </div>
        <span className="text-sm font-bold text-slate-900">{title}</span>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function PredictionsBoard() {
  const [who, setWho] = useState<string>("All");
  const whos = ["All", "Lemkin", "O'Driscoll", "Harry", "Panel"];
  const rows = RT_PREDICTIONS.filter((p) => who === "All" || p.who === who);
  const rightCount = RT_PREDICTIONS.filter((p) => p.status === "right").length;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="font-bold text-slate-900">Predictions scoreboard</h3>
          <p className="text-xs text-slate-500">{RT_PREDICTIONS.length} on-air calls · {rightCount} confirmed so far · statuses conservative, only marked when later episodes confirm</p>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {whos.map((w) => (
            <button
              key={w}
              onClick={() => setWho(w)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition active:scale-[0.97] ${
                who === w ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {w}{w !== "All" ? ` (${RT_PREDICTIONS.filter((p) => p.who === w).length})` : ""}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-y-auto max-h-[480px] rounded-lg border border-slate-100">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-slate-50">
            <tr className="text-left text-xs uppercase tracking-wider text-slate-500">
              <th className="py-2 px-3 w-24">Date</th>
              <th className="py-2 px-3 w-24">Who</th>
              <th className="py-2 px-3">Prediction</th>
              <th className="py-2 px-3 w-24">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p, i) => (
              <tr key={i} className="border-t border-slate-100 align-top">
                <td className="py-2 px-3 text-xs text-slate-500 tabular-nums whitespace-nowrap">{p.date}</td>
                <td className="py-2 px-3 text-xs font-semibold text-slate-700 whitespace-nowrap">{p.who}</td>
                <td className="py-2 px-3 text-slate-700 leading-snug">{p.text}</td>
                <td className="py-2 px-3">
                  {p.status === "right" ? (
                    <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">Came true</span>
                  ) : (
                    <span className="inline-block rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };
  return (
    <div className="hidden lg:block relative" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="absolute -inset-6 rounded-3xl bg-cyan-500/20 blur-3xl animate-pulse-slow" aria-hidden />
      <div
        ref={ref}
        className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-transform duration-200 will-change-transform hero-float"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/harry-hero.jpeg" alt="Podcast host at the microphone" className="w-full h-auto block" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 font-bold">The voice of 1,481 episodes</div>
        </div>
      </div>
    </div>
  );
}

function WisdomWall() {
  const [q, setQ] = useState("");
  const [era, setEra] = useState("All");
  const [limit, setLimit] = useState(48);
  const eras = ["All", "2015-17", "2018-21", "2022-23", "2024-26"];
  const ql = q.toLowerCase();
  const filtered = NUGGETS.filter(
    (n) =>
      (era === "All" || n.era === era) &&
      (!ql || n.text.toLowerCase().includes(ql) || n.guest.toLowerCase().includes(ql) || n.topics.some((t) => t.includes(ql)))
  );
  const shown = filtered.slice(0, limit);
  const share = (n: (typeof NUGGETS)[number]) =>
    `https://x.com/intent/post?text=${encodeURIComponent(`"${n.text}" — ${n.guest} on @twentyminutevc`)}`;
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" aria-hidden />
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setLimit(48); }}
            placeholder="Search 930 insights — try 'moat', 'hiring', 'AI', or a guest name"
            aria-label="Search guest wisdom"
            className="w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {eras.map((e) => (
            <button
              key={e}
              onClick={() => { setEra(e); setLimit(48); }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition active:scale-[0.97] ${
                era === e ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="text-xs text-slate-500 tabular-nums">{filtered.length} results</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {shown.map((n, i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
            <p className="text-sm text-slate-800 leading-snug">{n.text}</p>
            <div className="mt-3 flex items-end justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-slate-900">{n.guest}</div>
                <div className="text-[10px] text-slate-500">{n.role} · {n.date}</div>
              </div>
              <a
                href={share(n)}
                target="_blank"
                rel="noopener"
                aria-label={`Share this insight from ${n.guest} on X`}
                className="shrink-0 inline-flex items-center gap-1 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 px-2.5 py-1.5 text-[10px] font-bold transition active:scale-[0.97]"
              >
                <Share className="h-3 w-3" aria-hidden /> Share
              </a>
            </div>
          </div>
        ))}
      </div>
      {filtered.length > limit && (
        <div className="mt-5 text-center">
          <button
            onClick={() => setLimit((l) => l + 96)}
            className="rounded-full bg-blue-600 text-white px-6 py-2.5 text-sm font-semibold hover:bg-blue-700 active:scale-[0.97]"
          >
            Show more ({filtered.length - limit} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
