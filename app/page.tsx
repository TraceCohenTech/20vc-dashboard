"use client";
import { useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
  Quote,
  Flame,
  Heart,
  ThumbsDown,
  Laugh,
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
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { LogoWall } from "@/components/LogoWall";
import { Funnel } from "@/components/Funnel";
import { AssertivenessGauge } from "@/components/AssertivenessGauge";

export default function Page() {
  const caseRef = useRef<HTMLDivElement>(null);
  return (
    <div id="top" className="min-h-screen text-white">
      <Nav />

      {/* HERO */}
      <header className="relative overflow-hidden bg-black text-white pt-24 sm:pt-28 pb-16 sm:pb-24">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob-3" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
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

          <Reveal delay={120}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              1,481 episodes. 11 years.
              <br />
              <span className="text-cyan-300">One question: how has Harry changed?</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-5 text-base sm:text-xl text-blue-100/85 max-w-3xl leading-relaxed">
              A full metadata sweep of every 20VC episode since 2015, plus 180 real transcript reads
              across 2022–2026, tracking how Harry Stebbings&rsquo; show, questions, and depth of
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

      <section className="border-y border-[#262626] bg-[#141414]">
        <div className="mx-auto max-w-[1200px]">
          <div className="px-4 sm:px-6 pt-6">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              A sample of the guests behind the data
            </div>
          </div>
          <LogoWall />
        </div>
      </section>

      <main className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* BENTO KPI GRID */}
        <Reveal>
          <section>
            <SectionTitle eyebrow="At a glance" title="The show, by the numbers" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[120px] sm:auto-rows-[140px]">
              <div className="col-span-2 row-span-2 rounded-2xl bg-[#141414] border border-[#262626] p-5 sm:p-6 text-white flex flex-col overflow-hidden relative">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-neutral-400" aria-hidden />
                  <span className="text-xs uppercase tracking-wider text-neutral-400">Avg episode length</span>
                </div>
                <div className="flex items-baseline gap-3 mt-1">
                  <div className="text-4xl sm:text-6xl font-black tracking-tight">
                    <CountUp to={72.6} decimals={1} /><span className="text-2xl sm:text-3xl text-neutral-400">min</span>
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-400 font-semibold">2.9x longer than 2015</div>
                </div>
                <div className="flex-1 mt-2 -mx-2" role="img" aria-label="Sparkline of average episode length rising from 25 minutes in 2015 to 72.6 in 2026">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={YEARLY} margin={{ top: 4, right: 8, left: 8, bottom: 0 }}>
                      <defs>
                        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.5} />
                          <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="avgMin" stroke="#22d3ee" strokeWidth={2.5} fill="url(#sparkGrad)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <BentoStat icon={Layers} label="Episodes/yr, peak" value={<CountUp to={156} />} color="text-emerald-400" iconBg="bg-emerald-500/15" />
              <BentoStat icon={TrendingUp} label="Title clauses 2026" value={<><CountUp to={3.89} decimals={2} />x</>} color="text-amber-400" iconBg="bg-amber-500/15" />
              <BentoStat icon={Users} label="Repeat guests tracked" value={<CountUp to={3} />} color="text-sky-400" iconBg="bg-sky-500/15" />
              <BentoStat icon={MessageSquareQuote} label="Verified quotes" value={<CountUp to={5} />} color="text-cyan-400" iconBg="bg-cyan-500/15" />
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
                      <h3 className="text-lg font-bold text-white">Average episode length</h3>
                      <p className="text-xs text-neutral-400">Minutes per episode, by year</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-neutral-400">2015 → 2026</div>
                      <div className="text-2xl font-bold text-emerald-400">+190%</div>
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
                        <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                        <XAxis dataKey="year" tick={{ fill: "#a3a3a3", fontSize: 11 }} />
                        <YAxis tick={{ fill: "#a3a3a3", fontSize: 12 }} tickFormatter={(v) => `${v}m`} />
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
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Format shift</div>
                <h3 className="font-bold text-white mb-3">Title complexity by era</h3>
                <p className="text-xs text-neutral-400 mb-4">Avg. topics stacked per title — flat until 2022, then breaks upward</p>
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
                <div className="mt-4 text-xs text-neutral-400 leading-relaxed">
                  By 2026 a typical title carries 4 distinct claims (&ldquo;Why X | How Y | The Bottleneck Is Z&rdquo;) instead of one clean hook — each episode is packaged as standalone, quotable arguments.
                </div>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="mt-4 sm:mt-6">
              <Card>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-white">Episodes per year</h3>
                  <span className="text-xs text-neutral-400">Volume held steady even as length tripled</span>
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
                      <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                      <XAxis dataKey="year" tick={{ fill: "#a3a3a3", fontSize: 11 }} />
                      <YAxis tick={{ fill: "#a3a3a3", fontSize: 11 }} />
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
                    <span className="text-[10px] text-neutral-400">{era.episodes} eps</span>
                  </div>
                  <h3 className="font-bold text-white mt-2 mb-3">{era.name}</h3>
                  <div className="space-y-2 flex-1">
                    {era.keywords.map((k) => (
                      <div key={k.word} className="flex items-center gap-2">
                        <div className="w-16 text-xs text-neutral-400 text-right shrink-0">{k.word}</div>
                        <div className="flex-1 h-4 rounded bg-[#242424] overflow-hidden">
                          <div
                            className="h-full rounded"
                            style={{ width: `${(k.count / era.keywords[0].count) * 100}%`, background: era.color }}
                          />
                        </div>
                        <div className="w-8 text-[10px] text-neutral-400 tabular-nums">{k.count}</div>
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
                  <h3 className="text-lg font-bold text-white">Assertiveness Index, 2015-2026</h3>
                  <p className="text-xs text-neutral-400">Editorial 1-10 score per read episode, averaged by year</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-400">Episode #1 → 2026</div>
                  <div className="text-2xl font-bold text-emerald-400">2.8 → 6.2</div>
                </div>
              </div>
              <div className="h-[240px] sm:h-[280px]" role="img" aria-label="Line chart showing Harry Stebbings' assertiveness score climbing gradually from 1 in 2015 to about 5 by 2021, dipping slightly in 2022, then rising sharply to 7.5-8 by 2025-2026">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ASSERTIVENESS_BY_YEAR} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                    <XAxis dataKey="year" tick={{ fill: "#a3a3a3", fontSize: 11 }} />
                    <YAxis tick={{ fill: "#a3a3a3", fontSize: 11 }} domain={[0, 10]} />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "none", borderRadius: 8, color: "#fff" }} labelStyle={{ color: "#94a3b8" }} />
                    <Line type="monotone" dataKey="score" stroke="#f97316" strokeWidth={4} dot={{ r: 6, fill: "#f97316", stroke: "#fff", strokeWidth: 2 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                With ~15 episodes per year and two independent raters, the climb is steady and unambiguous: 2.8 in 2015 to 6.2 in 2026, with 95% confidence intervals of roughly ±0.3-0.9 per year — far tighter than the 3.4-point rise they're measuring. The steepest gains come in 2024-26, as the guest mix shifts toward AI/frontier-model operators.
              </p>
            </Card>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <Reveal delay={100}>
              <Card className="h-full flex flex-col items-center justify-center">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Editorial score, 1-10</div>
                <h3 className="font-bold text-white mb-2">Early vs. recent</h3>
                <AssertivenessGauge early={3} recent={6} />
                <p className="mt-2 text-xs text-neutral-400 text-center leading-relaxed">
                  Episode #1 (2015) vs. the most recent read episode (2026): from terse, zero-pushback one-liners to routinely contesting the guest's claims.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="lg:col-span-2 h-full flex flex-col">
                <h3 className="font-bold text-white mb-3">What actually changed</h3>
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
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-bold">Case studies — episode #1 to today · scroll or use arrows</div>
                  <div className="flex gap-2">
                    <button aria-label="Scroll case studies left" onClick={() => caseRef.current?.scrollBy({ left: -340, behavior: "smooth" })} className="h-9 w-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 active:scale-[0.97]"><ChevronLeft className="h-4 w-4" aria-hidden /></button>
                    <button aria-label="Scroll case studies right" onClick={() => caseRef.current?.scrollBy({ left: 340, behavior: "smooth" })} className="h-9 w-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 active:scale-[0.97]"><ChevronRight className="h-4 w-4" aria-hidden /></button>
                  </div>
                </div>
                <div ref={caseRef} className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory">
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
                      <h3 className="font-bold text-white">{rg.guest}</h3>
                      <p className="text-xs text-neutral-400">{rg.role}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="rounded-lg bg-[#1c1c1c] p-2.5">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider">{rg.first.date}</div>
                      <div className="text-xs text-neutral-300 mt-0.5">{rg.first.note}</div>
                    </div>
                    <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/30 p-2.5">
                      <div className="text-[10px] text-cyan-400 uppercase tracking-wider">{rg.second.date}</div>
                      <div className="text-xs text-cyan-200 mt-0.5">{rg.second.note}</div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-black border border-[#262626] p-3 mt-auto">
                    <p className="text-xs text-neutral-200 italic leading-relaxed">{rg.callback}</p>
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
                  <h3 className="font-bold text-white mb-3">{g.title}</h3>
                  <ul className="space-y-3 flex-1">
                    {g.items.map((item, j) => (
                      <li key={j} className="text-sm text-neutral-300 leading-relaxed flex gap-2">
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


        {/* THE FUN STUFF */}
        <section id="fun" className="scroll-mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="The fun stuff"
              title="1.4 million words of Harry, quantified"
              sub="Everything below is computed from the 180 read transcripts — every count is real."
            />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <Reveal delay={100}>
              <Card className="h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Quote className="h-4 w-4 text-cyan-400" aria-hidden />
                  <h3 className="font-bold text-white">The Harry lexicon</h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    { word: "“incredible”", count: 767, note: "in 148 of 163 episodes", w: 100 },
                    { word: "“amazing”", count: 642, note: "143 episodes", w: 84 },
                    { word: "“absolutely”", count: 618, note: "150 episodes", w: 81 },
                    { word: "“fantastic”", count: 306, note: "132 episodes", w: 40 },
                    { word: "“can I ask…”", count: 235, note: "his signature pivot", w: 31 },
                    { word: "“dude”", count: 162, note: "only 47 episodes — all modern era", w: 21 },
                    { word: "“my friend”", count: 119, note: "67 episodes", w: 16 },
                    { word: "“insane”", count: 107, note: "41 episodes, mostly 2024+", w: 14 },
                  ].map((r) => (
                    <div key={r.word} className="flex items-center gap-3">
                      <div className="w-28 shrink-0 text-sm font-semibold text-white">{r.word}</div>
                      <div className="flex-1 h-5 rounded bg-[#242424] overflow-hidden">
                        <div className="h-full rounded bg-gradient-to-r from-cyan-500 to-cyan-300" style={{ width: `${r.w}%` }} />
                      </div>
                      <div className="w-32 shrink-0 text-right">
                        <span className="text-sm font-bold text-cyan-300 tabular-nums">{r.count}×</span>
                        <span className="text-[10px] text-neutral-400 block">{r.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
                  And the robotic intro stinger <span className="text-white font-semibold">“You have now arrived at your destination”</span> appears
                  in <span className="text-cyan-300 font-bold">151 of 163</span> interview episodes — eleven years, same sound effect.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <Card>
                  <div className="flex items-center gap-2 mb-3">
                    <Flame className="h-4 w-4 text-orange-400" aria-hidden />
                    <h3 className="font-bold text-white">Superlatives</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="rounded-lg bg-[#1c1c1c] p-3"><div className="text-[10px] uppercase tracking-wider text-orange-400 font-bold">Most grilled</div><div className="text-white font-semibold mt-0.5">Monday.com co-CEO</div><div className="text-xs text-neutral-400">7.5/10 — “is SaaS dead?”, contested for an hour</div></div>
                    <div className="rounded-lg bg-[#1c1c1c] p-3"><div className="text-[10px] uppercase tracking-wider text-sky-400 font-bold">Most pampered</div><div className="text-white font-semibold mt-0.5">Rishi Sunak</div><div className="text-xs text-neutral-400">2/10 — you don’t grill a sitting PM</div></div>
                    <div className="rounded-lg bg-[#1c1c1c] p-3"><div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Dream-guest paradox</div><div className="text-white font-semibold mt-0.5">Marc Andreessen</div><div className="text-xs text-neutral-400">10 years on the wishlist → 5/10, softest 2026 interview</div></div>
                    <div className="rounded-lg bg-[#1c1c1c] p-3"><div className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">Boldest question</div><div className="text-white font-semibold mt-0.5">“Are you high?”</div><div className="text-xs text-neutral-400">— to a Princeton professor, about AI scaling, 2024</div></div>
                  </div>
                </Card>
                <Card>
                  <div className="flex items-center gap-2 mb-3">
                    <Laugh className="h-4 w-4 text-yellow-400" aria-hidden />
                    <h3 className="font-bold text-white">Genuinely weird moments</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex gap-2"><span className="text-yellow-400 shrink-0">01</span>Apologized to the CEO of Palo Alto Networks for being “hangry” — he’d been 22 hours into a 24-hour fast at their last taping.</li>
                    <li className="flex gap-2"><span className="text-yellow-400 shrink-0">02</span>Thanked a dating-app founder, on air, for fixing his love life — twice.</li>
                    <li className="flex gap-2"><span className="text-yellow-400 shrink-0">03</span>Got interviewed on his own show about raising his $400M fund — the only episode where Harry is the guest.</li>
                    <li className="flex gap-2"><span className="text-yellow-400 shrink-0">04</span>Elad Gil’s layoff-era story: the startup bought a pool table to boost morale — everyone seen playing it was cut in the next round.</li>
                    <li className="flex gap-2"><span className="text-yellow-400 shrink-0">05</span>Byron Deeter explained Twilio’s core value on air: “draw the rest of the f***ing owl.”</li>
                  </ul>
                </Card>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
            <Reveal delay={200}>
              <Card className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-4 w-4 text-emerald-400" aria-hidden />
                  <h3 className="font-bold text-white">What we loved</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">+</span>The glow-up is real and earned: from one-line questions at 19 to citing HBM pricing against Perplexity’s CEO at 30.</li>
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">+</span>Repeat guests get callbacks, not reruns — the Ed Sim 2015→2023 pair is an 8-year relationship on tape.</li>
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">+</span>The tone never corporatized: same matey, first-name, self-deprecating register in 2026 as 2015.</li>
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">+</span>He asks the money question others skip: “Can I be blunt? Why raise external money?” — to Chris Sacca.</li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={250}>
              <Card className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <ThumbsDown className="h-4 w-4 text-red-400" aria-hidden />
                  <h3 className="font-bold text-white">What we&rsquo;d push back on</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">–</span>Status still buys softness: PMs, legends and dream guests get half the pushback of a mid-stage founder.</li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">–</span>Sponsor reads quadrupled (0.8 → 3.2 per episode) — the 2021-era ad stack tests patience.</li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">–</span>The “20 minute” brand promise died in 2016 — episodes now run 73 minutes on average.</li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">–</span>Titles became 4-thesis keyword stacks — great for clicks, exhausting to read.</li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section id="methodology" className="scroll-mt-20">
          <Reveal>
            <Card className="border-2 border-amber-500/30 bg-amber-500/5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="h-4 w-4 text-amber-400" aria-hidden />
                <h3 className="font-bold text-white">About this data — read before you cite it</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-300 leading-relaxed">
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

      <footer className="border-t border-[#262626] bg-[#141414] py-10 mt-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <p className="text-sm text-neutral-400 mb-3">
            Sourced from the 20VC public RSS feed (all 1,481 episodes) and 9 YouTube auto-caption transcripts,
            2022&ndash;2026. Independent analysis, not affiliated with 20VC or Harry Stebbings.
          </p>
          <p className="text-sm text-neutral-400">
            Built by{" "}
            <a href="https://x.com/Trace_Cohen" target="_blank" rel="noopener" className="text-neutral-400 hover:underline font-semibold">
              @Trace_Cohen
            </a>
            {" · "}
            <a href="mailto:t@nyvp.com" className="text-neutral-400 hover:underline font-semibold">
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
      {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-2">{eyebrow}</div>}
      <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
      {sub && <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-3xl">{sub}</p>}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-[#262626] bg-[#141414] p-5 sm:p-6 shadow-sm ${className}`}>{children}</div>;
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

function BentoStat({ icon: Icon, label, value, color, iconBg }: { icon: any; label: string; value: React.ReactNode; color: string; iconBg: string }) {
  return (
    <div className="rounded-2xl border border-[#262626] bg-[#141414] p-4 sm:p-5 flex flex-col justify-between hover:border-[#3a3a3a] hover:-translate-y-0.5 transition-all duration-200">
      <div className={`h-8 w-8 rounded-lg ${iconBg} flex items-center justify-center`}>
        <Icon className={`h-4 w-4 ${color}`} aria-hidden />
      </div>
      <div>
        <div className="text-xs text-neutral-400 font-medium">{label}</div>
        <div className="text-xl sm:text-3xl font-bold text-white mt-0.5">{value}</div>
      </div>
    </div>
  );
}

function MiniInsight({ icon: Icon, color, title, desc }: { icon: any; color: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl bg-[#1c1c1c] border border-[#262626] p-4">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="h-6 w-6 rounded-md flex items-center justify-center" style={{ background: `${color}20` }}>
          <Icon className="h-3.5 w-3.5" style={{ color }} aria-hidden />
        </div>
        <span className="text-sm font-bold text-white">{title}</span>
      </div>
      <p className="text-xs text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}
