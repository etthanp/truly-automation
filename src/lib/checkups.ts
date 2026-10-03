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
  /** Optional plan bullets tailored to this business (e.g. non-trades
   *  clients). Falls back to the package's standard feature list. */
  planFeatures?: string[];
}

export const checkups: Checkup[] = [
  {
    slug: "julian-t-pierce-health-center",
    business: "Julian T. Pierce Health Center",
    trade: "Community health center (Robeson Health Care Corporation)",
    city: "Pembroke, NC",
    date: "October 1, 2026",
    summary:
      "Julian T. Pierce offers exactly what Pembroke needs: primary care, women's health, behavioral health, a pharmacy, walk-ins, and discounted care for those who qualify. A new $11 million building is on the way. Online, that story is hard to find. The website doesn't mention the new center or the UNCP eye-care partnership, the only reviews we could find are 1-star, and when you move to Union Chapel Road every listing will need to be updated.",
    snapshot: [
      { label: "Online reviews found (Yelp + WebMD)", value: "2 \u00b7 1\u2605", status: "bad", note: "One complains about records requests" },
      { label: "New building on your website", value: "Not mentioned", status: "bad", note: "$11M center opening 2026" },
      { label: "Facebook & Instagram", value: "Facebook only", status: "warn", note: "Shared RHCC page, no Instagram" },
      { label: "Patient portal", value: "MyChart", status: "good", note: "Linked from your page" },
    ],
    sections: [
      {
        title: "Website (rhcchealth.org/jtp)",
        items: [
          { label: "Hours, address and providers listed", status: "good", note: "Office hours, phone, and all four providers are on the page." },
          { label: "Patient portal", status: "good", note: "MyChart is linked, which patients expect from a modern practice." },
          { label: "New building and eye care", status: "bad", note: "Nothing on the page about the new 30,000 sq ft center at 700 Union Chapel Rd or optometry with UNCP's College of Optometric Medicine." },
          { label: "Page content", status: "warn", note: "About 380 words and no search description, so Google has little to show people searching for care in Pembroke." },
          { label: "Leftover duplicate pages", status: "warn", note: "Several old 'copy-of-' pages are still live, including a second Julian T. Pierce page. Duplicates can split your Google ranking." },
          { label: "Image names", status: "warn", note: "Images are named things like 'Screen Shot 2021-06-28 at 9.17.21 PM.png' with no descriptions. Google and screen readers can't tell what they are." },
          { label: "Spanish-language information", status: "warn", note: "No Spanish content on the page." },
        ],
      },
      {
        title: "Google & directory listings",
        items: [
          { label: "Consistent phone number", status: "warn", note: "Your page lists (910) 521-2816, but some directories show (910) 668-1173. Mismatched info hurts how Google ranks you." },
          { label: "Ready for the move", status: "bad", note: "When the new building opens, Google, Yelp, WebMD, insurance directories and dozens of health listings all need the new address on day one, or patients go to the old building." },
        ],
      },
      {
        title: "Reviews & reputation",
        items: [
          { label: "Online reviews", status: "bad", note: "We found only two, on Yelp and WebMD, both 1 star. One says records requests and faxes never go through." },
          { label: "Asking happy patients", status: "warn", note: "There's no system for satisfied patients to leave a review. The one kind comment we found ('very nice and respectful staff') is on a small clinic directory." },
        ],
      },
      {
        title: "Social media & community",
        items: [
          { label: "Social media", status: "warn", note: "Facebook only, through the shared RHCC page. No Instagram, and nothing aimed at Pembroke or UNCP students and staff." },
          { label: "Selling points", status: "good", note: "Walk-ins welcome, Monday hours until 7pm, a pharmacy, and discounted care for those who qualify. These are strong reasons to choose you, and they're barely promoted." },
        ],
      },
    ],
    priorities: [
      {
        title: "Launch the new building the right way",
        detail: "A grand-opening campaign, a dedicated page for the new center and UNCP eye care, and every listing moved to 700 Union Chapel Rd on opening day.",
      },
      {
        title: "Build a reputation that matches your care",
        detail: "Automatic review requests after visits and a reply to every review, so two old 1-star reviews stop being the first thing people see.",
      },
      {
        title: "Reach the patients right next door",
        detail: "Facebook and Instagram posts about walk-ins, the pharmacy and new services, outreach to UNCP, employers and churches, and Spanish-language information.",
      },
    ],
    recommended: "Full Marketing Team",
    recommendedWhy:
      "A new building is a once-in-a-generation chance to introduce Julian T. Pierce to Pembroke. Full Marketing Team covers the whole launch: every listing moved, a grand-opening campaign, reviews, and outreach to UNCP and the community. The same plan can extend to every RHCC location.",
    planFeatures: [
      "New-center page + grand-opening landing page",
      "Google profile & every directory moved to 700 Union Chapel Rd",
      "Review requests after visits + replies to every review",
      "Facebook & Instagram managed: services, walk-ins, health tips",
      "Grand-opening & new-patient ads on Google and Facebook",
      "Outreach to UNCP, local employers, churches & community groups",
      "Spanish-language pages and posts",
      "Monthly results report + strategy call",
    ],
  },
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
    recommended: "Growth",
    recommendedWhy:
      "Your biggest leaks are missed calls and low visibility on Google. Growth fixes both: the AI receptionist catches every call, and the website, Google profile, reviews and Local Services Ads push you up the map.",
  },
];

export function getCheckup(slug: string) {
  return checkups.find((c) => c.slug === slug);
}
