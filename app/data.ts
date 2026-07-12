// 20VC Decoded — compiled from RSS-feed metadata (all 1,481 episodes, Jan 2015–Jul 2026)
// and 9 real yt-dlp transcript reads spanning 2022–2026. See methodology section on page.

export const SHOW = {
  totalEpisodes: 1481,
  yearsSpan: 11,
  firstEpisode: "Guy Kawasaki · Jan 13, 2015",
  latestPull: "Jul 11, 2026",
};

// Avg episode length (minutes) and title "clause density" (topics stacked per title) by year
export const YEARLY = [
  { year: "2015", episodes: 128, avgMin: 25.0, clauses: 1.0 },
  { year: "2016", episodes: 156, avgMin: 27.7, clauses: 1.0 },
  { year: "2017", episodes: 151, avgMin: 27.1, clauses: 1.0 },
  { year: "2018", episodes: 98, avgMin: 31.1, clauses: 1.04 },
  { year: "2019", episodes: 96, avgMin: 35.2, clauses: 1.0 },
  { year: "2020", episodes: 100, avgMin: 37.6, clauses: 1.02 },
  { year: "2021", episodes: 93, avgMin: 39.5, clauses: 1.0 },
  { year: "2022", episodes: 138, avgMin: 44.0, clauses: 1.53 },
  { year: "2023", episodes: 146, avgMin: 51.9, clauses: 1.42 },
  { year: "2024", episodes: 145, avgMin: 60.8, clauses: 2.5 },
  { year: "2025", episodes: 148, avgMin: 71.0, clauses: 3.75 },
  { year: "2026*", episodes: 82, avgMin: 72.6, clauses: 3.89 },
];

export const ERAS = [
  {
    key: "early",
    label: "2015–17",
    name: "Scrappy VC-101",
    years: "2015–2017",
    episodes: 435,
    color: "#f59e0b",
    keywords: [
      { word: "not", count: 61 },
      { word: "vcs", count: 51 },
      { word: "founder", count: 45 },
      { word: "venture", count: 40 },
      { word: "founders", count: 40 },
      { word: "investing", count: 38 },
      { word: "should", count: 36 },
      { word: "startups", count: 34 },
    ],
  },
  {
    key: "growth",
    label: "2018–21",
    name: "Operator Playbook",
    years: "2018–2021",
    episodes: 387,
    color: "#3b82f6",
    keywords: [
      { word: "founder", count: 73 },
      { word: "not", count: 67 },
      { word: "venture", count: 67 },
      { word: "founders", count: 65 },
      { word: "when", count: 65 },
      { word: "biggest", count: 55 },
      { word: "lessons", count: 51 },
      { word: "growth", count: 45 },
    ],
  },
  {
    key: "rebrand",
    label: "2022–23",
    name: "Tactical Rebrand",
    years: "2022–2023",
    episodes: 284,
    color: "#10b981",
    keywords: [
      { word: "product", count: 90 },
      { word: "sales", count: 86 },
      { word: "not", count: 78 },
      { word: "should", count: 71 },
      { word: "growth", count: 65 },
      { word: "lessons", count: 58 },
      { word: "scaling", count: 43 },
      { word: "hiring", count: 34 },
    ],
  },
  {
    key: "current",
    label: "2024–26",
    name: "AI Economics Show",
    years: "2024–2026",
    episodes: 375,
    color: "#06b6d4",
    keywords: [
      { word: "not", count: 90 },
      { word: "sales", count: 87 },
      { word: "product", count: 86 },
      { word: "lessons", count: 69 },
      { word: "growth", count: 65 },
      { word: "openai", count: 50 },
      { word: "anthropic", count: 42 },
      { word: "arr", count: 42 },
    ],
  },
];

export type CaseStudy = {
  guest: string;
  role: string;
  date: string;
  era: string;
  color: string;
  style: string;
  tone: string;
  depth: string;
  assertiveness: number; // 1-10 qualitative editorial score, see methodology
  quote: string;
  learnings: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    guest: "Frank Slootman",
    role: "CEO, Snowflake",
    date: "Jan 2022",
    era: "2022",
    color: "#10b981",
    style: "Mostly receives — lets 300+ word answers run, circles back to lines from the guest's own book rather than contesting them.",
    tone: "Casual, admiring, high energy — visible fandom for the guest.",
    depth: "Stays largely at the leadership-philosophy level rather than probing mechanics.",
    assertiveness: 3,
    quote: "Narrow the focus, increase the quality — what did you mean by this?",
    learnings: [
      "Career trajectory is shaped by \"which elevator you get into\" — momentum can matter more than talent.",
      "Skip annual reviews; use quarterly forced-distribution calibration to reward top performers.",
      "Boards must be led, not polled — CEOs underuse the power they actually have.",
    ],
  },
  {
    guest: "Chris Sacca",
    role: "Founder, Lowercarbon Capital",
    date: "Jan 2022",
    era: "2022",
    color: "#10b981",
    style: "Open-ended, hands over the floor for long monologues, but inserts a genuinely blunt challenge at key moments.",
    tone: "Very casual — first names, uncorrected profanity, personal banter.",
    depth: "Follow-ups build logically on prior answers; not deeply technical on climate specifics.",
    assertiveness: 4,
    quote: "Can I be blunt? Why raise external money?",
    learnings: [
      "Climate unit economics have flipped the way software economics did — gigaton-scale startups now viable with far less capital.",
      "Strategy: sell climate solutions on cost/performance, not guilt, to win adversarial buyers.",
      "Zero tolerance for \"B-teamers\" — ownership and effort matter more than raw talent.",
    ],
  },
  {
    guest: "Keith Rabois",
    role: "GP, Founders Fund",
    date: "May 2022",
    era: "2022",
    color: "#10b981",
    style: "Opens with a provocative hook (his own tweet vs. the guest's rebuttal), interjects sharp data-backed challenges.",
    tone: "Casual, self-deprecating, inserts his own vulnerabilities and opinions freely.",
    depth: "Pushes on fund mechanics and information asymmetry, though depth comes more from setup than aggressive cross-exam.",
    assertiveness: 5,
    quote: "Why does buy low, sell high not work in venture?",
    learnings: [
      "Buy-low/sell-high logic only holds at seed/Series A, where real informational asymmetry exists.",
      "2020-21 was a \"steroid era\" — inflated markups, not real returns.",
      "Only 5-10 VCs add genuinely differentiated value, in his view.",
    ],
  },
  {
    guest: "Sarah Guo",
    role: "Founder, Conviction Capital",
    date: "Apr 2023",
    era: "2023",
    color: "#06b6d4",
    style: "States his own thesis first, then asks the guest to confirm or rebut it — leading rather than open.",
    tone: "Fast-paced, matey, injects opinions constantly rather than staying neutral.",
    depth: "Probes fund construction mechanics and defensibility theory with real pushback.",
    assertiveness: 6,
    quote: "Do you agree, and am I right to be worried?",
    learnings: [
      "Vertical AI funds work early because domain expertise matters now; horizontal is the long-term end-state.",
      "Startup defensibility at seed is largely a myth — bet on founder trajectory, not moats.",
      "Large multi-stage funds face structural incentive problems smaller funds avoid.",
    ],
  },
  {
    guest: "Nikesh Arora",
    role: "CEO, Palo Alto Networks",
    date: "May 2024",
    era: "2024",
    color: "#06b6d4",
    style: "Open-ended but directly contests claims (\"I'll push back on both of those statements\"), cross-references other guests.",
    tone: "Warm, first-name, welcomes personal topics — but unapologetically opinionated.",
    depth: "Digs into contribution margins, M&A philosophy, and competitive-moat duration.",
    assertiveness: 6,
    quote: "How do you feel about competition?",
    learnings: [
      "Enterprise competitive advantage now lasts only 2-3 years before being matched.",
      "M&A strategy: buy innovation early and cheap, never pay revenue multiples for maturity.",
      "Adoption ≠ transformation — most enterprises adopt AI, few restructure around it.",
    ],
  },
  {
    guest: "Aravind Srinivas",
    role: "CEO, Perplexity",
    date: "Jun 2024",
    era: "2024",
    color: "#06b6d4",
    style: "Plants a specific claim or prediction and asks the guest to react — \"steelman and test\" rather than pure discovery.",
    tone: "Warm, effusive (\"my friend\"), enthusiastic rather than adversarial.",
    depth: "Follows scaling laws, MoE efficiency, and RLHF closely enough to ask informed follow-ups.",
    assertiveness: 6,
    quote: "Do you think we've gotten into a stage now where we're starting to see diminishing returns?",
    learnings: [
      "Only frontier-tier labs stay differentiated as models commoditize.",
      "Real \"reasoning\" requires self-critique/bootstrapping only capital-rich labs can afford.",
      "Value in AI labs is \"the machine that builds the machine\" — talent and compute, not the model itself.",
    ],
  },
  {
    guest: "David George",
    role: "GP, Andreessen Horowitz",
    date: "Dec 2025",
    era: "2025",
    color: "#0ea5e9",
    style: "Pushes back hard and directly contradicts the guest, citing outside data to pressure-test claims.",
    tone: "High energy, \"matey\" (heavy \"dude\"), volunteers his own portfolio positions.",
    depth: "Drills into fund mechanics, DPI multiples, and asset-allocation implications for LPs.",
    assertiveness: 8,
    quote: "Can you help me understand Flow? Why did it make sense to you when it didn't make sense to anyone else?",
    learnings: [
      "Fund size doesn't cap returns — a16z's best-performing fund historically is its $1B vehicle.",
      "The \"TAM trap\": public small-cap quality has structurally declined, pushing value into private markets.",
      "Fear of theoretical future competition is the most common reason for costly missed deals.",
    ],
  },
  {
    guest: "Nikesh Arora",
    role: "CEO, Palo Alto Networks (2nd appearance)",
    date: "Jun 2026",
    era: "2026",
    color: "#0284c7",
    style: "Explicitly references their prior conversation, builds on the guest's own framework, synthesizes across many past guests.",
    tone: "Very casual, personal banter about the last taping, high-energy conversational register.",
    depth: "Pushes real tensions — SaaS seats vs. AI-reimagined workflows, platformization vs. venture-scale returns.",
    assertiveness: 7,
    quote: "Does platformization remove the ability for venture-scale returns?",
    learnings: [
      "Consumer AI tolerates false positives; enterprise/agentic AI cannot — this shapes where value accrues.",
      "Token prices are currently inflated; expect roughly a 90% long-term decline.",
      "Memory/context retention is becoming the real moat for frontier models.",
    ],
  },
  {
    guest: "Aravind Srinivas",
    role: "CEO, Perplexity (2nd/3rd appearance)",
    date: "Jun 2026",
    era: "2026",
    color: "#0284c7",
    style: "References prior appearances by name, cites specific outside figures to directly pressure-test the guest's claims.",
    tone: "Casual and matey, but consistently opinion-forward — self-identifies as an investor with a stake in the answers.",
    depth: "Genuinely technical — HBM pricing dynamics, agent-harness economics, token-value-per-watt.",
    assertiveness: 8,
    quote: "Can I push back on you on that?",
    learnings: [
      "Models are commoditizing; value shifts to the orchestration layer.",
      "Power, not chips, is the real infrastructure bottleneck — ~40% of planned data centers stalled.",
      "Predicts Micron could surpass Meta's valuation within 6-12 months on HBM demand.",
    ],
  },
];

export const REPEAT_GUESTS = [
  {
    guest: "Nikesh Arora",
    role: "CEO, Palo Alto Networks",
    first: { date: "May 2024", note: "First appearance — competitive advantage & M&A philosophy" },
    second: { date: "Jun 2026", note: "Second appearance — frontier model economics" },
    callback: "\"Nikesh, last time we did a show, I was 22 hours into a 24-hour fast. And I listen back now, and I just think, my word, you had the audacity to be with one of the OGs of this business and be hangry. I was hangry with you and short-tempered.\"",
  },
  {
    guest: "Aravind Srinivas",
    role: "CEO, Perplexity",
    first: { date: "Jun 2024", note: "First appearance — foundation model commoditization" },
    second: { date: "Jun 2026", note: "Second/third appearance — power as the AI bottleneck" },
    callback: "\"Aravind, dude, I am so excited that we got to see this. We've done one remote and then we did one at Founders Forum last year. So thank you so much for joining me in person.\"",
  },
];

export const LEARNINGS_GROUPS = [
  {
    title: "Leadership & Operating",
    color: "#f59e0b",
    items: [
      "Focus means picking one priority, not five — most leaders are intellectually lazy about trade-offs.",
      "Skip annual reviews; use quarterly forced-distribution calibration to reward top performers and build a defensible record before termination.",
      "Boards must be led, not polled — CEOs underuse the power they actually have.",
      "Zero tolerance for \"B-teamers\" — ownership and effort matter more than raw talent.",
    ],
  },
  {
    title: "Venture Mechanics",
    color: "#3b82f6",
    items: [
      "Seed-stage defensibility is largely a myth — bet on founder trajectory and execution speed, not moats.",
      "Fund size doesn't cap returns — a16z's best fund historically is a mid-sized ($1B) vehicle.",
      "The most expensive investing mistake is fear of theoretical future competition, not underwriting risk incorrectly.",
      "The \"TAM trap\": public small-cap quality has structurally declined, pushing value creation into private markets.",
    ],
  },
  {
    title: "AI Economics",
    color: "#06b6d4",
    items: [
      "Foundation models are commoditizing; value is migrating to the orchestration/application layer.",
      "Power and energy infrastructure — not chips — is becoming the real AI bottleneck.",
      "Token prices are currently subsidized; expect a large long-term decline as competition compounds.",
      "Enterprise competitive advantage now lasts only 2-3 years before being matched and must be actively rebuilt.",
    ],
  },
];
