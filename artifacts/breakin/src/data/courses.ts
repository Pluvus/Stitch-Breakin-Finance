export type CourseCategory = "Finance" | "Consulting" | "Career skills" | "Early access";

export type Course = {
  slug: string;
  title: string;
  category: CourseCategory;
  duration: string;
  level: string;
  summary: string;
  outcome: string;
  modules: [string, string, string];
};

export const courseCategories: Array<"All courses" | CourseCategory> = [
  "All courses",
  "Finance",
  "Consulting",
  "Career skills",
  "Early access",
];

export const courses: Course[] = [
  {
    slug: "investment-banking-recruiting",
    title: "Investment Banking Recruiting",
    category: "Finance",
    duration: "6 weeks",
    level: "Career launch",
    summary: "Build a recruiting plan, learn the deal language, and prepare for the conversations that lead to interviews.",
    outcome: "A bank target list, outreach plan, and interview preparation brief.",
    modules: ["The banking landscape", "Networking and applications", "Interview practice"],
  },
  {
    slug: "financial-modeling",
    title: "Financial Modeling Foundations",
    category: "Finance",
    duration: "5 weeks",
    level: "Foundations",
    summary: "Learn to connect the three financial statements and turn business assumptions into a working model.",
    outcome: "A linked three-statement model with a concise investment view.",
    modules: ["Accounting links", "Forecast drivers", "Model review"],
  },
  {
    slug: "valuation-and-deals",
    title: "Valuation & Deal Analysis",
    category: "Finance",
    duration: "5 weeks",
    level: "Intermediate",
    summary: "Use comparable companies, precedent transactions, and DCF thinking to frame a defensible valuation.",
    outcome: "A short valuation memo with assumptions you can explain.",
    modules: ["Trading and transaction comps", "DCF mechanics", "Deal discussion"],
  },
  {
    slug: "private-equity-readiness",
    title: "Private Equity Readiness",
    category: "Finance",
    duration: "4 weeks",
    level: "Advanced",
    summary: "Practice investment judgment, LBO fundamentals, and the concise communication expected in PE interviews.",
    outcome: "An investment thesis and a practice case discussion.",
    modules: ["Investment screening", "LBO fundamentals", "Case presentation"],
  },
  {
    slug: "consulting-case-lab",
    title: "Consulting Case Lab",
    category: "Consulting",
    duration: "6 weeks",
    level: "Career launch",
    summary: "Work through live case structures, quantitative drills, and recommendation delivery with feedback.",
    outcome: "A repeatable case approach and a personal practice plan.",
    modules: ["Case structuring", "Math and charts", "Synthesis and delivery"],
  },
  {
    slug: "market-sizing",
    title: "Market Sizing & Business Judgment",
    category: "Consulting",
    duration: "3 weeks",
    level: "Foundations",
    summary: "Turn ambiguous questions into useful assumptions, clean estimates, and an answer with a point of view.",
    outcome: "A set of worked sizing cases and a personal assumptions toolkit.",
    modules: ["Problem framing", "Estimation methods", "Communicating a range"],
  },
  {
    slug: "strategy-interviews",
    title: "Strategy Interview Studio",
    category: "Consulting",
    duration: "4 weeks",
    level: "Intermediate",
    summary: "Connect customer, competition, and economics into practical answers for strategy interviews.",
    outcome: "A strategy case presentation and a structured feedback review.",
    modules: ["Market context", "Options and tradeoffs", "Executive recommendation"],
  },
  {
    slug: "networking-sprint",
    title: "Networking Sprint",
    category: "Career skills",
    duration: "3 weeks",
    level: "All levels",
    summary: "Find relevant people, write thoughtful outreach, and turn conversations into lasting professional relationships.",
    outcome: "A targeted contact map, message set, and follow-up rhythm.",
    modules: ["Relationship mapping", "Outreach writing", "Conversation follow-up"],
  },
  {
    slug: "resume-and-story",
    title: "Resume & Story Studio",
    category: "Career skills",
    duration: "3 weeks",
    level: "All levels",
    summary: "Translate your experience into a stronger resume and a clear, believable interview story.",
    outcome: "A revised resume and a bank of evidence-backed stories.",
    modules: ["Experience inventory", "Resume editing", "Story rehearsal"],
  },
  {
    slug: "offer-decisions",
    title: "Offer Decisions & Negotiation",
    category: "Career skills",
    duration: "2 weeks",
    level: "Offer stage",
    summary: "Compare opportunities, understand compensation, and prepare a professional negotiation conversation.",
    outcome: "A decision matrix and a negotiation talking plan.",
    modules: ["Offer comparison", "Compensation basics", "Negotiation practice"],
  },
  {
    slug: "finance-discovery",
    title: "Finance Discovery",
    category: "Early access",
    duration: "4 weeks",
    level: "High school",
    summary: "Explore what finance professionals do and learn to discuss markets, companies, and career paths with confidence.",
    outcome: "A company research brief and a map of possible paths.",
    modules: ["How markets work", "Company research", "Exploring careers"],
  },
  {
    slug: "college-to-career",
    title: "College to Career Blueprint",
    category: "Early access",
    duration: "4 weeks",
    level: "High school",
    summary: "Connect college choices, early experiences, and personal interests into a practical first-year plan.",
    outcome: "A college and career exploration roadmap.",
    modules: ["College pathways", "Experiences that build skills", "Your first-year roadmap"],
  },
];
