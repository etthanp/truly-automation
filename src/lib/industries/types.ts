export type Range = [number, number];

/** One project a homeowner can price in the estimator. */
export interface EstProject {
  key: string;
  label: string;
  /** How the size is entered: length × width, a single length, a count, or no size (fixed price). */
  unit: "area" | "length" | "count" | "none";
  /** Label for the size box, e.g. "Roof size (sq ft)" or "Bathrooms". */
  unitLabel?: string;
  /** Price per unit (sq ft, foot, item). */
  per?: Range;
  /** Fixed price added once. */
  fixed?: Range;
  /** Replaces the "About $X per unit" line under the price, e.g. "Before tax credits." */
  note?: string;
  /** Word shown after "per" in the price line, e.g. "sq ft" (defaults from the unit). */
  perWord?: string;
  /** Starting size: [length, width] for area, a number otherwise. */
  start?: number | [number, number];
}

/** A priced add-on: a choice (material/finish) or a yes/no toggle. */
export interface EstOption {
  key: string;
  label: string;
  per?: Range;
  fixed?: Range;
  /** Only show and count this option for these project keys. */
  only?: string[];
}

export interface EstimatorConfig {
  /** Branded tool name, e.g. "Pour Price Calculator". */
  name: string;
  /** Question at the top of the tool card. */
  question: string;
  blurb: string;
  bullets: [string, string, string];
  /** Label above the project pills (defaults to "Project"), e.g. "Service". */
  projectLabel?: string;
  projects: EstProject[];
  /** Single-choice group (material / finish / efficiency). */
  choiceLabel?: string;
  choices?: EstOption[];
  /** Yes/no add-ons. */
  toggles?: (EstOption & { on?: boolean })[];
  minimum?: number;
  /** Button text, e.g. "Book my appointment" (defaults to "Get my exact quote"). */
  cta?: string;
  /** Line under the price when there is no per-unit line (defaults to "Final price after a free visit."). */
  after?: string;
}

export interface DemoConfig {
  /** Branded name of the missed-call system, e.g. "Photo Quote Line". */
  name: string;
  business: string;
  greeting: string;
  chips: [string, string, string];
  /** What the crew is doing when the call is missed, e.g. "Your crew is out on a pour". */
  busy: string;
  steps: [{ t: string; d: string }, { t: string; d: string }, { t: string; d: string }];
  /** Company facts, prices, open slots and rules for the AI receptionist. */
  facts: string;
  /** What the receptionist is trying to book, e.g. "a free roof inspection". */
  goal: string;
}

export interface System {
  icon: string;
  title: string;
  text: string;
  /** 1 = starter package, 2 = full package. */
  tier: 1 | 2;
}

export interface Industry {
  slug: string;
  /** Short name for the directory, e.g. "Roofing". */
  name: string;
  /** Who we serve, plural, e.g. "roofing contractors". */
  who: string;
  /** Singular for "one ___ per city". */
  one: string;
  category: string;
  icon: string;
  /** One line for the directory card. */
  tagline: string;
  meta: { title: string; description: string };
  hero: {
    line1: string;
    line2: string;
    sub: string;
    cards: {
      lead: { label: string; title: string; fields: [string, string][] };
      side: { label: string; title: string; rows: [string, string][] };
      small: { label: string; title: string; text: string };
    };
  };
  problems: { title: string; text: string }[];
  systems: System[];
  packages: [{ name: string; tagline: string }, { name: string; tagline: string }];
  estimator: EstimatorConfig;
  demo: DemoConfig;
  faqs: { q: string; a: string }[];
  /** Show the concrete Pour Packet samples band. */
  samples?: boolean;
}
