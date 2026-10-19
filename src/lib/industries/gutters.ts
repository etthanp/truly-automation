import type { Industry } from "./types";

const gutters: Industry = {
  slug: "gutters",
  name: "Gutters",
  who: "gutter companies",
  one: "gutter company",
  category: "Home services",
  icon: "🌧️",
  tagline: "Gutter and guard quotes by the foot, plus cleaning routes.",
  meta: {
    title: "Marketing for Gutter Companies | Truly Automation",
    description:
      "Marketing built for gutter companies: an instant gutter and gutter guard estimator, fall cleaning campaigns, yearly cleaning plans, roofer partnerships and neighbor marketing. One gutter company per city.",
  },
  hero: {
    line1: "Every leaf that falls",
    line2: "is a lead.",
    sub: "The marketing team built only for gutter companies. Instant quotes by the foot, fall cleaning routes that fill themselves, and gutter guard upgrades for every customer who's tired of climbing a ladder.",
    cards: {
      lead: {
        label: "Gutter Line",
        title: "Seamless gutters + guards",
        fields: [["Length", "About 160 feet"], ["Home", "Two story"], ["Town", "Davidson"], ["Why", "Overflowing at the porch"]],
      },
      side: {
        label: "Fall Cleaning Push",
        title: "Leaves are dropping",
        rows: [["Past customers texted", "940"], ["Cleanings booked", "88"], ["Guard quotes", "21"]],
      },
      small: { label: "Guard Upgrade", title: "Offer sent after cleaning", text: "160 ft of guards, $1,900" },
    },
  },
  problems: [
    { title: "Seasonal swings", text: "Fall is chaos with cleanings, then the phone goes quiet for months." },
    { title: "Small tickets", text: "Cleanings keep crews busy but the money is in new seamless gutters and guards." },
    { title: "Roofers take the work", text: "Roofing companies sell gutters with every roof, and you never hear about the job." },
    { title: "Every quote is a ladder climb", text: "Measuring every house for jobs that never book eats your day." },
  ],
  systems: [
    { icon: "🧮", title: "Gutter Estimator", text: "Homeowners price seamless gutters, guards and cleaning by the foot on your website.", tier: 1 },
    { icon: "📸", title: "Gutter Line", text: "Missed calls get a text back in seconds asking for photos, home height and the problem, then books a quote.", tier: 1 },
    { icon: "🛡️", title: "Guard Upgrade Offer", text: "Every cleaning customer gets an offer to never climb a ladder again, which turns $150 cleanings into $2,000 guard installs.", tier: 1 },
    { icon: "🔄", title: "Yearly Cleaning Plans", text: "Spring and fall cleanings with autopay, booked automatically every year.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “gutter installation near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one gutter company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🍂", title: "Fall Cleaning Push", text: "When leaves start dropping, past customers get a text to book before the rush.", tier: 2 },
    { icon: "🏠", title: "Roofer Partnerships", text: "Outreach to roofers who don't do gutters, so their customers come to you.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every install: “Your neighbor just got new gutters.”", tier: 2 },
    { icon: "🏘️", title: "HOA & Property Manager Outreach", text: "Community and rental property cleaning contracts that repeat every year.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open quote.", tier: 2 },
    { icon: "🦺", title: "Crew Finder", text: "A hiring page and job ads, ready before fall.", tier: 2 },
  ],
  packages: [
    { name: "Downspout", tagline: "Everything a gutter company needs to quote by the foot and turn cleanings into installs." },
    { name: "Full Run", tagline: "Downspout plus fall campaigns, roofer partnerships and neighbor marketing." },
  ],
  estimator: {
    name: "Gutter Estimator",
    question: "What will my gutters cost?",
    blurb: "Homeowners price new gutters, guards or a cleaning by the foot in 30 seconds. You get the length and home height before you ever lean a ladder.",
    bullets: ["Uses your prices per foot", "Every lead texts straight to your phone", "Works all fall while you're on ladders"],
    projects: [
      { key: "seamless", label: "Seamless aluminum gutters", unit: "length", unitLabel: "Gutter length (feet)", per: [8, 15], start: 150 },
      { key: "guards", label: "Gutter guards", unit: "length", unitLabel: "Gutter length (feet)", per: [7, 15], start: 150 },
      { key: "copper", label: "Copper gutters", unit: "length", unitLabel: "Gutter length (feet)", per: [25, 40], start: 150 },
      { key: "cleaning", label: "Gutter cleaning", unit: "none", fixed: [125, 250] },
    ],
    toggles: [
      { key: "twostory", label: "Two-story home", per: [1, 3], only: ["seamless", "guards", "copper"] },
      { key: "twostoryclean", label: "Two-story home", fixed: [50, 150], only: ["cleaning"] },
      { key: "removal", label: "Remove old gutters", per: [1, 2], only: ["seamless", "copper"], on: true },
    ],
    minimum: 125,
  },
  demo: {
    name: "Gutter Line",
    business: "Clearflow Gutters",
    greeting:
      "Hi, this is Ava with Clearflow Gutters. Sorry we missed your call, our crew is up on a ladder right now! I can help right here by text. What do you need help with?",
    chips: ["My gutters are overflowing", "Price for gutter guards?", "I need a cleaning"],
    busy: "Your crew is up on a ladder",
    steps: [
      { t: "The call comes in", d: "A homeowner's gutters are overflowing over the front porch. Your crew is on a ladder, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call the next company." },
      { t: "A quote or cleaning gets booked", d: "Ava asks about the length, home height and problem, asks for photos, and books the visit." },
    ],
    goal: "a cleaning or a free quote for new gutters or guards",
    facts: `Business: Clearflow Gutters (a demo company on the Truly Automation website)
Service area: Charlotte, Davidson, Cornelius, Huntersville, Mooresville and nearby towns
Hours: Mon-Sat 8am-6pm. Insured.
Work: seamless aluminum gutters, copper gutters, gutter guards, downspouts, gutter repair, gutter cleaning, yearly cleaning plans.
Typical prices (exact price after measuring or photos): seamless aluminum gutters $8-$15 per foot; gutter guards $7-$15 per foot; copper $25-$40 per foot; cleaning $125-$250 for most one-story homes, more for two-story. Most homes have 120-200 feet of gutters.
Open slots: Tomorrow 9:00 AM, 1:00 PM; Thursday 10:00 AM, 3:00 PM; Saturday 9:00 AM.
Rules: ask whether the home is one or two stories and for photos of the problem area. If they're booking a cleaning, mention gutter guards once. Never give a firm price.`,
  },
  faqs: [
    { q: "How does the Guard Upgrade Offer work?", a: "After every cleaning, the customer gets an offer for gutter guards with photos and a quick quote. A lot of people would rather pay once than clean gutters every year." },
    { q: "Can you help me get work from roofers?", a: "Yes. Many roofers don't install gutters. We reach out to them so they send their customers to you instead of a competitor." },
    { q: "What happens in the slow months?", a: "Yearly cleaning plans and guard installs keep work coming, and we line up spring jobs with early-booking campaigns." },
    { q: "How soon will I see more calls?", a: "The Gutter Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default gutters;
