export type PackageName = "Foundation" | "Reinforced";

export interface Package {
  name: PackageName;
  monthly: number;
  setup: number;
  tagline: string;
  features: string[];
  popular?: boolean;
}

// Standard monthly pricing for concrete contractors. Ad spend is always paid
// by the client directly to Google / Meta, and Neighbor Drop postage is billed
// at cost; neither is part of these numbers.
export const packages: Package[] = [
  {
    name: "Foundation",
    monthly: 1999,
    setup: 1500,
    tagline:
      "Everything a concrete company needs to get found, get calls, and win more of the jobs you quote.",
    popular: true,
    features: [
      "Website with your own Pour Price Calculator",
      "Job Site Pages: every pour becomes a page that ranks in that town",
      "Local SEO: show up on Google, Google Maps & ChatGPT",
      "Google Business Profile optimized + weekly posts",
      "Photo Quote Line: missed calls texted back, photos & details collected",
      "Estimate Chaser: automatic follow-up on every open quote",
      "Automatic review requests after every pour",
      "Facebook & Instagram managed with your job photos",
      "Google Local Services Ads setup & management",
      "Territory Lock: one concrete company per city",
      "Monthly results report",
    ],
  },
  {
    name: "Reinforced",
    monthly: 3499,
    setup: 1500,
    tagline:
      "Foundation plus the systems that bring in builder work, commercial bids, and a full schedule all year.",
    features: [
      "Everything in Foundation",
      "Permit Radar: new home, pool & shop permits in your county every week",
      "Bid Board: public concrete bids + outreach to builders, GCs & pool companies",
      "Neighbor Drop: postcards to the homes around every job",
      "Google & Facebook ads management",
      "Off-Season Engine: spring pre-booking, reseal reminders, rainy-season work",
      "Crew Finder: hiring page & job ads for finishers and laborers",
      "Ongoing SEO content: new service & town pages every month",
      "Monthly strategy call",
      "Priority support",
    ],
  },
];

export const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
