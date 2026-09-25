export type PackageName = "Growth" | "Full Marketing Team";

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
    name: "Growth",
    monthly: 1799,
    setup: 1500,
    tagline: "Get found, get calls, and never miss a job. Your marketing, fully handled.",
    popular: true,
    features: [
      "Professional website: built, hosted & kept updated",
      "Google Business Profile optimized + weekly posts",
      "Automatic review requests after every job",
      "24/7 AI receptionist + missed-call text-back",
      "Facebook & Instagram managed (8–12 posts/mo)",
      "Google Local Services Ads setup & management",
      "Monthly results report",
    ],
  },
  {
    name: "Full Marketing Team",
    monthly: 2999,
    setup: 1500,
    tagline: "Everything in Growth plus paid ads and campaigns. Your whole marketing department.",
    features: [
      "Everything in Growth",
      "Google & Facebook ads management",
      "Past-customer email campaigns",
      "Seasonal promotions (tune-ups, spring cleanups…)",
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
