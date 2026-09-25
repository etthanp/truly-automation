export type PackageName = "Get Found" | "Get Calls" | "Full Marketing Team";

export interface Package {
  name: PackageName;
  monthly: number;
  setup: number;
  tagline: string;
  features: string[];
  popular?: boolean;
}

// Standard monthly pricing. Ad spend is always paid by the client directly
// to Google / Meta and is never part of these numbers.
export const packages: Package[] = [
  {
    name: "Get Found",
    monthly: 497,
    setup: 500,
    tagline: "Show up on Google and look like the obvious choice.",
    features: [
      "Professional website — built, hosted & kept updated",
      "Google Business Profile optimized + weekly posts",
      "Automatic review requests after every job",
      "Missed-call text-back",
      "Monthly check-in",
    ],
  },
  {
    name: "Get Calls",
    monthly: 997,
    setup: 750,
    tagline: "Turn that visibility into a steady stream of booked jobs.",
    popular: true,
    features: [
      "Everything in Get Found",
      "24/7 AI receptionist that answers & books jobs",
      "Facebook & Instagram managed (8–12 posts/mo)",
      "Google Local Services Ads setup & management",
      "Monthly results report",
    ],
  },
  {
    name: "Full Marketing Team",
    monthly: 1997,
    setup: 1000,
    tagline: "Everything, including paid ads — your whole marketing department.",
    features: [
      "Everything in Get Calls",
      "Google & Facebook ads management",
      "Past-customer email campaigns",
      "Seasonal promotions (tune-ups, spring cleanups…)",
      "Monthly strategy call",
    ],
  },
];

export const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
