import type { Industry } from "./types";

const windowsDoors: Industry = {
  slug: "windows-doors",
  name: "Windows & Doors",
  who: "window & door companies",
  one: "window and door company",
  category: "Construction & outdoor",
  icon: "🪟",
  tagline: "Window quotes by count, energy savings pages and in-home consults.",
  meta: {
    title: "Marketing for Window & Door Companies | Truly Automation",
    description:
      "Marketing built for window and door replacement companies: a window and door estimator, energy savings pages, in-home consult booking, financing pages, realtor and builder outreach. One window company per city.",
  },
  hero: {
    line1: "More window jobs.",
    line2: "No pushy sales pitch.",
    sub: "The marketing team built only for window and door companies. Homeowners see honest price ranges before they call, book an in-home consult, and pick you over the high-pressure national brands.",
    cards: {
      lead: {
        label: "Window Line",
        title: "Replace 14 windows",
        fields: [["Home", "1995, original windows"], ["Material", "Vinyl"], ["Town", "Cornelius"], ["Why", "Drafty + high power bill"]],
      },
      side: {
        label: "Energy Savings Push",
        title: "First cold week",
        rows: [["Past quotes re-sent", "120"], ["Consults booked", "15"], ["Patio door add-ons", "4"]],
      },
      small: { label: "Estimate Chaser", title: "Day 14 follow-up sent", text: "14 windows + entry door, $16,300" },
    },
  },
  problems: [
    { title: "National brands everywhere", text: "Big companies run TV ads and send pushy salespeople, and homeowners assume that's how every window company works." },
    { title: "Long decisions", text: "Windows are a $10k to $30k decision. Homeowners take months, and they go with whoever stayed in touch." },
    { title: "People don't know the price", text: "Homeowners have no idea what windows cost, so they're afraid to call." },
    { title: "Hard to show the value", text: "Energy savings and comfort are hard to see in a quote, so customers compare on price alone." },
  ],
  systems: [
    { icon: "🧮", title: "Window & Door Estimator", text: "Homeowners count their windows, pick a material and see a price range on your website. No salesperson needed to start.", tier: 1 },
    { icon: "📸", title: "Window Line", text: "Missed calls get a text back in seconds that collects window count, home age and photos, then books a consult.", tier: 1 },
    { icon: "🗓️", title: "No-Pressure Consult Booker", text: "In-home consults booked online, with a clear promise: no high-pressure pitch. That alone wins homeowners from the national brands.", tier: 1 },
    { icon: "💡", title: "Energy Savings Pages", text: "Simple pages that explain comfort, noise and energy savings, plus local utility rebates, so customers see the value beyond price.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “window replacement near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one window company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🌡️", title: "Energy Savings Push", text: "When the first cold or hot week hits, past quotes and homeowners get reminded what drafty windows are costing them.", tier: 2 },
    { icon: "💳", title: "Financing Pages", text: "Clear monthly-payment options on your website, so big projects feel affordable.", tier: 2 },
    { icon: "🏗️", title: "Builder & Remodeler Outreach", text: "We reach out to builders and remodelers who need a reliable window and door installer.", tier: 2 },
    { icon: "🏡", title: "Realtor Program", text: "New windows sell homes. We connect you with agents for pre-listing upgrades.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every install.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Long-cycle follow-up on every quote, for months, not days.", tier: 2 },
  ],
  packages: [
    { name: "Clear View", tagline: "Everything a window and door company needs to win homeowners away from the high-pressure brands." },
    { name: "Full Install", tagline: "Clear View plus seasonal campaigns, financing pages, and builder and realtor outreach." },
  ],
  estimator: {
    name: "Window & Door Estimator",
    question: "What will new windows cost?",
    blurb: "Homeowners see an honest price range in 30 seconds. The ones who book a consult already know what to expect, so there's no awkward price shock.",
    bullets: ["Uses your prices and the brands you install", "Every lead texts straight to your phone", "No salesperson needed to start the conversation"],
    projects: [
      { key: "windows", label: "Replacement windows", unit: "count", unitLabel: "Number of windows", perWord: "window", per: [500, 1000], start: 10 },
      { key: "patio", label: "Sliding patio door", unit: "none", fixed: [2000, 5000] },
      { key: "entry", label: "Front entry door", unit: "none", fixed: [1500, 4500] },
    ],
    choiceLabel: "Window material",
    choices: [
      { key: "vinyl", label: "Vinyl", only: ["windows"] },
      { key: "fiberglass", label: "Fiberglass", per: [250, 500], only: ["windows"] },
      { key: "wood", label: "Wood or wood-clad", per: [500, 900], only: ["windows"] },
    ],
    toggles: [{ key: "trim", label: "New exterior trim wrap", per: [75, 150], only: ["windows"] }],
    minimum: 1000,
  },
  demo: {
    name: "Window Line",
    business: "Clearview Windows & Doors",
    greeting:
      "Hi, this is Ava with Clearview Windows & Doors. Sorry we missed your call, our team is out on installs! I can help right here by text. Are you thinking about new windows or doors?",
    chips: ["How much are new windows?", "My windows are drafty", "I need a new front door"],
    busy: "Your installers are on a job",
    steps: [
      { t: "The call comes in", d: "A homeowner with drafty 1995 windows calls during their first cold week. Your team is on installs, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly, no-pressure text before they call the national brand from TV." },
      { t: "A consult gets booked", d: "Ava gets the window count, home age and photos, and books a no-pressure in-home consult." },
    ],
    goal: "a free in-home consultation",
    facts: `Business: Clearview Windows & Doors (a demo company on the Truly Automation website)
Service area: Charlotte, Cornelius, Davidson, Mooresville, Huntersville and nearby towns
Hours: Mon-Fri 8am-6pm, Sat 9am-1pm. Licensed and insured, locally owned.
Work: replacement windows (vinyl, fiberglass, wood-clad), sliding and French patio doors, front entry doors, storm doors, trim wrap.
Typical prices (exact price after a free in-home consult): vinyl replacement windows $500-$1,000 each installed; fiberglass $750-$1,500; wood-clad $1,000-$1,900; patio door $2,000-$5,000; entry door $1,500-$4,500. Financing available on approved credit. Consults take about an hour and there's no high-pressure pitch.
Consult times this week: Tomorrow 10:00 AM, 5:30 PM; Thursday 11:00 AM, 6:00 PM; Saturday 10:00 AM.
Rules: ask how many windows, the age of the home and what's bothering them (drafts, condensation, noise, looks). Emphasize no pressure. Never give a firm price.`,
  },
  faqs: [
    { q: "Why show prices when the big brands don't?", a: "Because homeowners hate surprise pricing. An honest range up front builds trust and sets you apart from the companies that won't give a number until a salesperson is in the living room." },
    { q: "How long is the follow-up?", a: "Months. Window buyers take their time, so the Estimate Chaser keeps in touch with useful info and seasonal reminders until they're ready." },
    { q: "Do you help with utility rebates?", a: "The Energy Savings Pages explain the local utility rebates and tax credits that apply, so customers see the full value. You confirm the details for each job." },
    { q: "How soon will I see more leads?", a: "The Window Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default windowsDoors;
