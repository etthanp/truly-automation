import type { Industry } from "./types";

const pressureWashing: Industry = {
  slug: "pressure-washing",
  name: "Pressure Washing",
  who: "pressure washing companies",
  one: "pressure washing company",
  category: "Home services",
  icon: "💦",
  tagline: "Instant wash quotes, bundles and recurring cleaning plans.",
  meta: {
    title: "Marketing for Pressure Washing Companies | Truly Automation",
    description:
      "Marketing built for pressure washing and exterior cleaning companies: an instant wash quote, bundle upsells, recurring cleaning plans, before-and-after pages, neighbor marketing and commercial outreach. One company per city.",
  },
  hero: {
    line1: "Clean houses.",
    line2: "Full routes.",
    sub: "The marketing team built only for pressure washing companies. Instant quotes on your website, bigger tickets with bundles, and customers who come back every year without you chasing them.",
    cards: {
      lead: {
        label: "Wash Line",
        title: "House + driveway + roof",
        fields: [["Home", "2,400 sq ft, 2 story"], ["Driveway", "About 900 sq ft"], ["Town", "Mooresville"], ["When", "Before a graduation party"]],
      },
      side: {
        label: "Yearly Clean Plan",
        title: "Renewals this month",
        rows: [["Plans renewing", "48"], ["Auto-booked", "41"], ["Add-on gutter cleans", "12"]],
      },
      small: { label: "Neighbor Drop", title: "38 postcards sent", text: "Around the Wilson house wash" },
    },
  },
  problems: [
    { title: "Race to the bottom", text: "A new guy with a rental machine undercuts you on every Facebook post asking for quotes." },
    { title: "One-and-done jobs", text: "You clean a house once and never hear from them again, even though it needs it every year." },
    { title: "Quoting eats your evenings", text: "Driving out or texting back and forth to price a driveway takes more time than washing it." },
    { title: "Commercial work is hard to crack", text: "Storefronts, HOAs and property managers pay well and repeat, but you don't know who to talk to." },
  ],
  systems: [
    { icon: "🧮", title: "Instant Wash Quote", text: "Customers enter their home and driveway size and get a price on your website. No more driving out to quote a driveway.", tier: 1 },
    { icon: "📸", title: "Wash Line", text: "Missed calls get a text back in seconds with a quote form and photo upload, then a booked date.", tier: 1 },
    { icon: "🧺", title: "Bundle Builder", text: "Every quote offers add-ons like roof soft wash, gutters, windows and decks, which raises your average ticket.", tier: 1 },
    { icon: "🔄", title: "Yearly Clean Plans", text: "Customers sign up for yearly or twice-a-year cleaning with autopay. Next year's work is booked before you finish this year's.", tier: 1 },
    { icon: "🖼️", title: "Before & After Pages", text: "Every job becomes a before-and-after page that ranks in that neighborhood.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one pressure washing company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every job. A clean house makes the neighbors notice theirs.", tier: 2 },
    { icon: "🏢", title: "Commercial & HOA Outreach", text: "We reach out to storefronts, restaurants, gas stations, HOAs and property managers for recurring contracts.", tier: 2 },
    { icon: "🏡", title: "Realtor Listing Prep", text: "Partnerships with agents who need homes cleaned before photos and showings.", tier: 2 },
    { icon: "🎄", title: "Holiday Lights Add-On", text: "Fall campaigns for holiday light installation, which keeps your crews busy through the slow season.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every quote that didn't book.", tier: 2 },
    { icon: "🦺", title: "Crew Finder", text: "A hiring page and job ads for crew members.", tier: 2 },
  ],
  packages: [
    { name: "Clean Start", tagline: "Everything a pressure washing company needs to quote instantly, raise ticket size and lock in repeat customers." },
    { name: "Full Route", tagline: "Clean Start plus neighbor marketing, commercial contracts and the off-season holiday light push." },
  ],
  estimator: {
    name: "Instant Wash Quote",
    question: "What will my cleaning cost?",
    blurb: "Customers get a price for their house, driveway or roof in 30 seconds and can book right away. No site visit needed for most jobs.",
    bullets: ["Uses your prices and your minimums", "Every booking texts straight to your phone", "Bundles raise every ticket automatically"],
    projects: [
      { key: "house", label: "House wash", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [0.15, 0.3], start: 2200 },
      { key: "driveway", label: "Driveway & walkways", unit: "area", per: [0.15, 0.35], start: [40, 20] },
      { key: "roof", label: "Roof soft wash", unit: "count", unitLabel: "Roof size (sq ft)", perWord: "sq ft of roof", per: [0.3, 0.6], start: 2000 },
      { key: "deck", label: "Deck or fence", unit: "area", per: [0.4, 0.8], start: [20, 14] },
    ],
    toggles: [
      { key: "gutters", label: "Add gutter cleaning", fixed: [150, 300] },
      { key: "windows", label: "Add exterior windows", fixed: [150, 350] },
    ],
    minimum: 199,
  },
  demo: {
    name: "Wash Line",
    business: "Fresh Coat Pressure Washing",
    greeting:
      "Hi, this is Ava with Fresh Coat Pressure Washing. Sorry we missed your call, we're out washing a house right now! I can help right here by text. What would you like cleaned?",
    chips: ["House and driveway", "My roof has black streaks", "Do you do commercial?"],
    busy: "You're on a ladder with the wand",
    steps: [
      { t: "The call comes in", d: "A homeowner wants their house and driveway cleaned before a party. You're mid-wash, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they post on Facebook asking for quotes." },
      { t: "The job gets booked", d: "Ava gets the home size, surfaces and photos, gives a price range, suggests add-ons and books a date." },
    ],
    goal: "a booked cleaning date",
    facts: `Business: Fresh Coat Pressure Washing (a demo company on the Truly Automation website)
Service area: Charlotte, Mooresville, Cornelius, Huntersville, Concord and nearby towns
Hours: Mon-Sat 8am-6pm. Insured.
Work: house soft washing, driveways and walkways, roof soft washing, decks and fences, gutter cleaning, exterior windows, commercial storefronts, yearly cleaning plans, holiday light installation.
Typical prices (exact price after seeing photos): house wash $0.15-$0.30 per sq ft of home (most homes $300-$600); driveway $0.15-$0.35 per sq ft; roof soft wash $0.30-$0.60 per sq ft of roof; deck or fence $0.40-$0.80 per sq ft; gutter cleaning add-on $150-$300; $199 minimum. Bundles of 2+ services get 10% off. Yearly plan saves 15%.
Open dates: Tomorrow (afternoon), Thursday (morning or afternoon), Saturday (morning).
Rules: ask for photos and the home's square footage to firm up the price. Always mention one relevant add-on.`,
  },
  faqs: [
    { q: "Can customers really get a price without a visit?", a: "For most homes, yes. They enter the size and surfaces and add photos, and the price range is based on your own rates. You confirm or adjust before the job." },
    { q: "How do yearly plans work?", a: "Customers sign up for yearly or twice-a-year cleaning with autopay and a small discount. They get a reminder and a booked date automatically each year." },
    { q: "Do you help with commercial accounts?", a: "Yes. In the Full Route package we reach out to storefronts, restaurants, HOAs and property managers in your area for recurring contracts." },
    { q: "How soon will I see more bookings?", a: "The Wash Line, instant quote and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default pressureWashing;
