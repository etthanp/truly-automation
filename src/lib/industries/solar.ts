import type { Industry } from "./types";

const solar: Industry = {
  slug: "solar",
  name: "Solar",
  who: "solar installers",
  one: "solar installer",
  category: "Home services",
  icon: "☀️",
  tagline: "Savings estimates, honest consults and battery upgrades.",
  meta: {
    title: "Marketing for Solar Installers | Truly Automation",
    description:
      "Marketing built for local solar installers: a solar and battery estimator from the power bill, no-pressure consult booking, incentive pages, install tracker updates, roofer and electrician partnerships. One solar installer per city.",
  },
  hero: {
    line1: "Local solar.",
    line2: "Without the door knockers.",
    sub: "The marketing team built only for local solar installers. Homeowners see real numbers from their own power bill, book an honest consult, and pick the local company over the pushy national sales teams.",
    cards: {
      lead: {
        label: "Solar Line",
        title: "Solar + battery",
        fields: [["Power bill", "About $240 a month"], ["Roof", "South-facing, 6 years old"], ["Town", "Mooresville"], ["Why", "Outages + high bills"]],
      },
      side: {
        label: "Install Tracker",
        title: "The Reyes system",
        rows: [["Permit", "Approved"], ["Install", "Done"], ["Utility approval", "Pending"]],
      },
      small: { label: "Battery Upgrade", title: "Offer sent to past customers", text: "Storm season backup, 41 opened" },
    },
  },
  problems: [
    { title: "Solar has a trust problem", text: "Door-to-door sales teams and robocalls make homeowners suspicious of every solar company, including the honest local ones." },
    { title: "Expensive leads", text: "Bought leads are shared with five other installers and most of them were never serious." },
    { title: "Long, confusing decisions", text: "Incentives, financing and payback math confuse homeowners, so they put it off for months." },
    { title: "Months of waiting after signing", text: "Permits and utility approval take time, and anxious customers cancel or leave bad reviews." },
  ],
  systems: [
    { icon: "🧮", title: "Solar Savings Estimator", text: "Homeowners enter their monthly power bill and see an estimated system size and cost range on your website.", tier: 1 },
    { icon: "📸", title: "Solar Line", text: "Missed calls get a text back in seconds that collects their bill, roof photos and goals, then books a consult.", tier: 1 },
    { icon: "🤝", title: "No-Pressure Consult Booker", text: "Consults booked online with a clear promise of no high-pressure pitch, which wins homeowners burned by door knockers.", tier: 1 },
    { icon: "💡", title: "Incentive Pages", text: "Plain-English pages on current tax credits, utility programs and net metering in your area, kept up to date.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “local solar installer” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one solar installer per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🚧", title: "Install Tracker", text: "Customers get automatic updates through permits, install and utility approval, which means fewer cancellations and calmer customers.", tier: 2 },
    { icon: "🔋", title: "Battery Upgrade Campaigns", text: "Past solar customers get battery backup offers before storm season.", tier: 2 },
    { icon: "🏠", title: "Roofer & Electrician Partnerships", text: "Outreach to roofers and electricians who send solar-ready customers your way.", tier: 2 },
    { icon: "🏢", title: "Commercial Solar Outreach", text: "Farms, warehouses and small businesses with big power bills, reached directly.", tier: 2 },
    { icon: "⭐", title: "Referral Program", text: "Happy customers get an easy way to refer neighbors, which is the best lead source in solar.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Long-cycle follow-up on every proposal, for months, not days.", tier: 2 },
  ],
  packages: [
    { name: "Sunrise", tagline: "Everything a local solar installer needs to earn trust and book real consults without buying shared leads." },
    { name: "Full Sun", tagline: "Sunrise plus install tracking, battery campaigns, partnerships and referrals." },
  ],
  estimator: {
    name: "Solar Savings Estimator",
    question: "What would solar cost for my home?",
    blurb: "Homeowners enter their power bill and see a system size and cost range in 30 seconds. Real interest, no door knocking.",
    bullets: ["Uses your prices per watt and your equipment", "Every lead texts straight to your phone", "Shows the cost before incentives, so nothing is overpromised"],
    projects: [
      { key: "solar", label: "Solar panels", unit: "count", unitLabel: "Average monthly power bill ($)", note: "Before tax credits and incentives.", per: [100, 140], start: 200 },
      { key: "solarbattery", label: "Solar + battery", unit: "count", unitLabel: "Average monthly power bill ($)", note: "Before tax credits and incentives.", per: [100, 140], fixed: [10000, 16000], start: 200 },
      { key: "battery", label: "Battery only (add to existing solar)", unit: "none", fixed: [10000, 16000], note: "Before tax credits and incentives." },
    ],
    toggles: [{ key: "panel", label: "Main panel upgrade needed", fixed: [2000, 4000], only: ["solar", "solarbattery"] }],
    minimum: 8000,
  },
  demo: {
    name: "Solar Line",
    business: "Bright Sky Solar",
    greeting:
      "Hi, this is Ava with Bright Sky Solar. Sorry we missed your call, our team is out on an install! I can help right here by text. Are you thinking about solar for your home?",
    chips: ["How much would solar cost?", "Do I qualify for the tax credit?", "I want battery backup"],
    busy: "Your crew is up on a roof",
    steps: [
      { t: "The call comes in", d: "A homeowner tired of $240 power bills calls. Your team is on an install, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly, no-pressure text instead of another robocall." },
      { t: "A consult gets booked", d: "Ava asks about their bill, roof and goals, asks for photos, and books an honest consult." },
    ],
    goal: "a free no-pressure solar consultation",
    facts: `Business: Bright Sky Solar (a demo company on the Truly Automation website)
Service area: Charlotte, Mooresville, Concord, Gastonia, Rock Hill and nearby towns
Hours: Mon-Fri 8am-6pm, Sat 9am-1pm. Licensed electrical contractor, locally owned. No door-to-door sales.
Work: residential solar, battery backup, solar for small businesses and farms, panel upgrades, system monitoring and service.
Typical prices (exact numbers after a free consult and roof check): most homes need a 7-12 kW system, about $2.50-$3.50 per watt before incentives (roughly $18,000-$38,000); battery backup $10,000-$16,000. A federal tax credit may apply; the homeowner should confirm eligibility with their tax professional. Financing available.
Consult times this week: Tomorrow 10:00 AM, 5:30 PM; Thursday 11:00 AM; Saturday 10:00 AM.
Rules: ask about their average power bill, roof age and direction, and shade. Never promise specific savings or that they qualify for any credit; say the consult covers that. Emphasize no pressure.`,
  },
  faqs: [
    { q: "How do you compete with the door-to-door companies?", a: "By being the opposite: honest numbers on your website, a no-pressure consult, real local reviews, and fast replies. A lot of homeowners are looking for exactly that." },
    { q: "Do you overpromise savings?", a: "No. The estimator shows system size and cost before incentives, and the Incentive Pages explain programs in plain English. Your consult covers the exact savings." },
    { q: "Why stop buying leads?", a: "Shared leads go to several installers at once. Leads from your own website, Google profile and referrals are yours alone and close at a much higher rate." },
    { q: "How soon will I see more consults?", a: "The Solar Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default solar;
