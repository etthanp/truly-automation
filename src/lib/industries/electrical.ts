import type { Industry } from "./types";

const electrical: Industry = {
  slug: "electrical",
  name: "Electrical",
  who: "electricians",
  one: "electrical contractor",
  category: "Home services",
  icon: "⚡",
  tagline: "Panel upgrades, EV chargers and generator leads.",
  meta: {
    title: "Marketing for Electricians | Truly Automation",
    description:
      "Marketing built for electrical contractors: an upgrade estimator for panels, EV chargers and generators, 24/7 text-back with safety triage, EV owner campaigns, storm generator pushes and builder outreach. One electrician per city.",
  },
  hero: {
    line1: "More panel upgrades.",
    line2: "Fewer tire-kickers.",
    sub: "The marketing team built only for electricians. Homeowners price panels, EV chargers and generators on your website, and every call you miss gets answered before they call someone else.",
    cards: {
      lead: {
        label: "Spark Line",
        title: "EV charger install",
        fields: [["Car", "Just bought a Model Y"], ["Panel", "150 amp, 1998 home"], ["Town", "Fort Mill"], ["Timeline", "This month"]],
      },
      side: {
        label: "Storm Generator Push",
        title: "Outages forecast this weekend",
        rows: [["Past customers texted", "860"], ["Generator quotes requested", "14"], ["Booked walkthroughs", "6"]],
      },
      small: { label: "Estimate Chaser", title: "Day 7 follow-up sent", text: "200 amp panel upgrade, $3,900" },
    },
  },
  problems: [
    { title: "Too many small calls", text: "Swapping outlets and resetting breakers keeps the phone ringing but doesn't grow the business. The money is in panels, generators and EV chargers." },
    { title: "Big jobs need trust", text: "Homeowners nervous about a $4,000 panel upgrade get three quotes and pick the company that looks most professional online." },
    { title: "Missed calls, lost jobs", text: "You're in an attic with your hands full. The call goes to voicemail and the homeowner calls the next electrician." },
    { title: "Hard to land builder work", text: "Steady new-construction and commercial work goes to whoever builders already know." },
  ],
  systems: [
    { icon: "🧮", title: "Upgrade Estimator", text: "Price ranges for panel upgrades, EV chargers, generators and lighting on your website. Serious buyers call you ready.", tier: 1 },
    { icon: "⚡", title: "Spark Line", text: "Missed calls get a text back in seconds. It flags safety issues, gets the details and photos, and books the visit.", tier: 1 },
    { icon: "🚗", title: "EV Charger Funnel", text: "Pages and ads aimed at new EV owners in your area, with charger options and utility rebate info, which turns into steady installs.", tier: 1 },
    { icon: "🏠", title: "Home Safety Check", text: "A bookable safety inspection offer for older homes that finds the panel, wiring and GFCI work they actually need.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “electrician near me” and “panel upgrade” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one electrician per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🔋", title: "Storm Generator Push", text: "Before storm season and big outage forecasts, past customers and nearby homes get a whole-home generator offer.", tier: 2 },
    { icon: "🏗️", title: "Builder & GC Outreach", text: "We reach out to home builders and general contractors for new-construction and remodel wiring work.", tier: 2 },
    { icon: "🤝", title: "Realtor & Inspector Outreach", text: "Inspection reports flag electrical issues on every sale. We connect you with the agents and inspectors who send those repairs.", tier: 2 },
    { icon: "🏢", title: "Commercial Maintenance Contracts", text: "Outreach to property managers and businesses for lighting, maintenance and service contracts.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open quote at day 2, 7 and 14.", tier: 2 },
    { icon: "🦺", title: "Apprentice Finder", text: "A hiring page and job ads for electricians and apprentices.", tier: 2 },
  ],
  packages: [
    { name: "Circuit", tagline: "Everything an electrician needs to answer every call and sell more panels, chargers and upgrades." },
    { name: "Full Panel", tagline: "Circuit plus generator campaigns, builder and realtor outreach, and commercial contracts." },
  ],
  estimator: {
    name: "Upgrade Estimator",
    question: "What will my electrical project cost?",
    blurb: "Homeowners price panel upgrades, EV chargers and generators in 30 seconds. The ones who call are ready to book, not shopping around.",
    bullets: ["Uses your prices and the equipment you install", "Every lead texts straight to your phone", "Works while you're in an attic"],
    projects: [
      { key: "ev", label: "EV charger", unit: "none", fixed: [800, 2200] },
      { key: "panel", label: "Panel upgrade (200 amp)", unit: "none", fixed: [2200, 4500] },
      { key: "generator", label: "Whole-home generator", unit: "none", fixed: [9000, 16000] },
      { key: "lights", label: "Recessed lights", unit: "count", unitLabel: "Number of lights", perWord: "light", per: [150, 300], start: 8 },
    ],
    toggles: [{ key: "permit", label: "Include permit & inspection", fixed: [150, 450], on: true }],
  },
  demo: {
    name: "Spark Line",
    business: "Bright Wire Electric",
    greeting:
      "Hi, this is Ava with Bright Wire Electric. Sorry we missed your call, our electricians are on jobs right now! I can help right here by text. What do you need help with?",
    chips: ["I need an EV charger", "Half my house lost power", "Quote for a panel upgrade?"],
    busy: "Your electricians are on jobs",
    steps: [
      { t: "The call comes in", d: "A homeowner just bought an electric car and needs a charger. You're in an attic, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text right away, before they call the next electrician." },
      { t: "The visit gets booked", d: "Ava asks about the car, the panel and the home, flags any safety issues, and books a visit." },
    ],
    goal: "a visit from an electrician (or a free estimate for bigger jobs)",
    facts: `Business: Bright Wire Electric (a demo company on the Truly Automation website)
Service area: Charlotte, Fort Mill, Rock Hill, Gastonia, Matthews and nearby towns
Hours: Mon-Fri 7am-6pm, Sat 8am-12pm, emergency service available. Licensed and insured.
Work: EV charger installs, panel upgrades, whole-home generators, lighting and recessed lights, outlets and GFCIs, ceiling fans, troubleshooting, home safety inspections.
Typical prices (final price after an electrician looks at it): service call $99; EV charger installed $800-$2,200 depending on distance from the panel; 200 amp panel upgrade $2,200-$4,500; whole-home generator $9,000-$16,000 installed; recessed lights $150-$300 each.
Open slots: Tomorrow 8:00 AM, 12:30 PM, 3:30 PM; Thursday 9:00 AM, 2:00 PM.
Rules: if they smell burning, see sparks or smoke, or a panel is hot, tell them to turn off the main breaker if it's safe and call 911 if there's any fire risk, then treat it as an emergency. Never give a binding price.`,
  },
  faqs: [
    { q: "How does the EV Charger Funnel find customers?", a: "We run pages and ads aimed at people who just bought an electric car in your area, with charger options and current utility rebate info. They request a quote from you instead of the dealer's referral." },
    { q: "Is the estimator accurate?", a: "It gives a realistic range based on your prices. The exact price still comes after you see the panel and the run. Its job is to start the conversation with buyers who are ready." },
    { q: "Will the AI give electrical advice?", a: "No. It handles safety basics (turn off the main, call 911 if there's fire risk), gets the details and books the visit. It never diagnoses or quotes a firm price." },
    { q: "How soon will I see more calls?", a: "The Spark Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default electrical;
