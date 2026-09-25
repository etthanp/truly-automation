import type { PackageName } from "./packages";

// ──────────────────────────────────────────────────────────────────────
// MARKETING CHECKUPS
//
// Each entry becomes a private report page at
//   trulyautomation.com/checkup/<slug>
// that you text or email to a prospect after a cold call. Pages are hidden
// from Google (noindex) and only exist for slugs listed here.
//
// HOW TO ADD ONE: do the 10-minute checks from the playbook, send the notes
// to Claude, and Claude adds an entry here and pushes. Keep every note
// factual: only write down what you actually saw.
// ──────────────────────────────────────────────────────────────────────

export type Status = "good" | "warn" | "bad";

export interface CheckItem {
  label: string;
  status: Status;
  note: string;
}

export interface Checkup {
  slug: string;
  business: string;
  trade: string;
  city: string;
  date: string;
  /** Shows a "sample report" banner. Only for the demo entry. */
  sample?: boolean;
  summary: string;
  snapshot: { label: string; value: string; status: Status; note?: string }[];
  sections: { title: string; items: CheckItem[] }[];
  competitors?: { name: string; rating: number; reviews: number; isYou?: boolean }[];
  priorities: { title: string; detail: string }[];
  recommended: PackageName;
  recommendedWhy: string;
}

export const checkups: Checkup[] = [
  {
    slug: "example-plumbing",
    business: "Example Plumbing Co.",
    trade: "Plumbing",
    city: "Fayetteville, NC",
    date: "September 25, 2026",
    sample: true,
    summary:
      "Customers who find you love you: your rating is excellent. The problem is that most people searching for a plumber in Fayetteville never find you, and calls you miss while on a job go to a full voicemail box.",
    snapshot: [
      {
        label: "Google Maps rank for “plumber Fayetteville NC”",
        value: "#11",
        status: "bad",
        note: "Most calls go to the top 3",
      },
      {
        label: "Google reviews",
        value: "23 · 4.8★",
        status: "warn",
        note: "Top competitor has 212",
      },
      {
        label: "Website on a phone",
        value: "Hard to use",
        status: "bad",
        note: "No tap-to-call button",
      },
      {
        label: "Missed-call test",
        value: "Voicemail full",
        status: "bad",
        note: "Called Tue 10:40am",
      },
    ],
    sections: [
      {
        title: "Google Business Profile",
        items: [
          { label: "Profile claimed and verified", status: "good", note: "Verified, with correct phone number and address." },
          { label: "Business hours", status: "good", note: "Listed and accurate." },
          { label: "Photos", status: "warn", note: "Only 4 photos, the newest from 2023. Profiles with recent job photos get more calls." },
          { label: "Weekly posts", status: "bad", note: "No posts in the last 12 months. Google treats active profiles as more relevant." },
          { label: "Services listed", status: "bad", note: "No services listed, so you won't show up for searches like “water heater install.”" },
        ],
      },
      {
        title: "Website",
        items: [
          { label: "Has a website", status: "good", note: "Yes, and the domain is in the company name." },
          { label: "Works on a phone", status: "bad", note: "Text is tiny and the menu covers the page on mobile. Most local searches happen on phones." },
          { label: "Tap-to-call button", status: "bad", note: "The phone number is an image, so customers can't tap it to call." },
          { label: "Lists service area & services", status: "warn", note: "Services are listed, but no cities or neighborhoods are mentioned." },
          { label: "Loads quickly", status: "warn", note: "About 6 seconds on a phone. Under 3 is the goal." },
        ],
      },
      {
        title: "Reviews & reputation",
        items: [
          { label: "Average rating", status: "good", note: "4.8 stars. Your customers are happy." },
          { label: "Number of reviews", status: "warn", note: "23 total. The top 3 competitors average 150+." },
          { label: "New reviews recently", status: "bad", note: "Only 1 new review in the last 6 months." },
          { label: "Replies to reviews", status: "bad", note: "No replies. A short thank-you shows future customers you care." },
        ],
      },
      {
        title: "Social media & calls",
        items: [
          { label: "Facebook page", status: "warn", note: "Exists, but the last post was 14 months ago." },
          { label: "Instagram", status: "bad", note: "None found." },
          { label: "Missed calls", status: "bad", note: "Our test call went to a full voicemail box. That caller would have called the next plumber." },
        ],
      },
    ],
    competitors: [
      { name: "Competitor A", rating: 4.7, reviews: 212 },
      { name: "Competitor B", rating: 4.5, reviews: 168 },
      { name: "Competitor C", rating: 4.9, reviews: 97 },
      { name: "Example Plumbing Co.", rating: 4.8, reviews: 23, isYou: true },
    ],
    priorities: [
      {
        title: "Stop losing missed calls",
        detail: "Turn on instant text-back and an AI receptionist so every caller gets a reply in seconds and can book, even while you're under a sink.",
      },
      {
        title: "Get more reviews, every week",
        detail: "Send an automatic review request after every job. At your current happiness level, you could pass 100 reviews within a few months.",
      },
      {
        title: "Fix your Google profile and website",
        detail: "List every service and city, post job photos weekly, and give the website a mobile-friendly rebuild with a big tap-to-call button.",
      },
    ],
    recommended: "Get Calls",
    recommendedWhy:
      "Your biggest leaks are missed calls and low visibility on Google. Get Calls fixes both: the AI receptionist catches every call, and the website, Google profile, reviews and Local Services Ads push you up the map.",
  },
];

export function getCheckup(slug: string) {
  return checkups.find((c) => c.slug === slug);
}
