import type { Industry } from "./types";

const painting: Industry = {
  slug: "painting",
  name: "Painting",
  who: "painting contractors",
  one: "painting company",
  category: "Home services",
  icon: "🎨",
  tagline: "Instant paint quotes, color consults and repaint reminders.",
  meta: {
    title: "Marketing for Painting Contractors | Truly Automation",
    description:
      "Marketing built for painting contractors: an instant interior and exterior paint estimator, color consult booking, before-and-after pages, repaint reminders, realtor and property manager outreach. One painting company per city.",
  },
  hero: {
    line1: "Fresh paint.",
    line2: "Full calendar.",
    sub: "The marketing team built only for painting contractors. Homeowners price their rooms or exterior on your website, every quote gets followed up, and past customers come back when it's time to repaint.",
    cards: {
      lead: {
        label: "Paint Line",
        title: "Interior repaint, 5 rooms",
        fields: [["Rooms", "Living, kitchen, 3 bedrooms"], ["Extras", "Ceilings + trim"], ["Town", "Huntersville"], ["When", "Before Thanksgiving"]],
      },
      side: {
        label: "Repaint Reminders",
        title: "Exteriors from 2019",
        rows: [["Past customers texted", "84"], ["Quotes requested", "9"], ["Booked", "4"]],
      },
      small: { label: "Estimate Chaser", title: "Day 7 follow-up sent", text: "Exterior repaint, $7,900" },
    },
  },
  problems: [
    { title: "Lowball competition", text: "A guy with a brush and a Facebook page undercuts every quote, and homeowners can't tell the difference until it peels." },
    { title: "Quotes take forever", text: "Driving out to measure every room for jobs that never book eats your evenings and weekends." },
    { title: "Weather kills exterior season", text: "Rain and cold shut down exterior work, and the schedule has big gaps in winter." },
    { title: "Customers forget you", text: "A house needs repainting every 5 to 10 years, and by then nobody remembers who did the last one." },
  ],
  systems: [
    { icon: "🧮", title: "Paint Price Estimator", text: "Homeowners price rooms, exteriors and cabinets on your website and send you a lead with the details filled in.", tier: 1 },
    { icon: "📸", title: "Paint Line", text: "Missed calls get a text back in seconds that asks for room photos, sizes and timeline, then books an estimate.", tier: 1 },
    { icon: "🎨", title: "Color Consult Booker", text: "Free or paid color consults booked online, which turns browsers into customers who already trust you.", tier: 1 },
    { icon: "🖼️", title: "Before & After Pages", text: "Every job becomes a before-and-after page that ranks in that neighborhood on Google and ChatGPT.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “house painters near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one painting company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "⏰", title: "Repaint Reminders", text: "Past customers get a reminder when it's time to repaint (5 years for exteriors), with a quick quote link.", tier: 2 },
    { icon: "🏡", title: "Realtor Listing Prep", text: "Partnerships with agents who need homes painted fast before listing photos.", tier: 2 },
    { icon: "🏢", title: "Property Manager Outreach", text: "Turnover painting for apartments and rentals means steady repeat work. We build those contracts for you.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards and yard signs around every exterior job.", tier: 2 },
    { icon: "❄️", title: "Interior Season Push", text: "Winter campaigns for interiors and cabinets that fill the months when exteriors stop.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open quote at day 2, 7 and 14.", tier: 2 },
  ],
  packages: [
    { name: "Primer", tagline: "Everything a painting company needs to quote faster, beat the lowballers and book more jobs." },
    { name: "Full Coat", tagline: "Primer plus repaint reminders, realtor and property manager work, and a busy winter." },
  ],
  estimator: {
    name: "Paint Price Estimator",
    question: "What will my painting project cost?",
    blurb: "Homeowners price their rooms, exterior or cabinets in 30 seconds. You get real leads with the scope filled in, not “how much to paint a room?”",
    bullets: ["Uses your prices per room and per square foot", "Every lead texts straight to your phone", "Works evenings, when people plan projects"],
    projects: [
      { key: "interior", label: "Interior rooms", unit: "count", unitLabel: "Number of rooms", perWord: "room", per: [400, 900], start: 4 },
      { key: "exterior", label: "Exterior", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [1.5, 4], start: 2000 },
      { key: "cabinets", label: "Kitchen cabinets", unit: "none", fixed: [3500, 8000] },
      { key: "stain", label: "Deck or fence stain", unit: "area", per: [1, 3], start: [20, 14] },
    ],
    toggles: [
      { key: "ceilings", label: "Include ceilings", per: [100, 250], only: ["interior"] },
      { key: "trim", label: "Include trim & doors", per: [100, 300], only: ["interior"] },
      { key: "repairs", label: "Wood rot or siding repairs", fixed: [300, 1500], only: ["exterior"] },
    ],
    minimum: 500,
  },
  demo: {
    name: "Paint Line",
    business: "True Color Painting",
    greeting:
      "Hi, this is Ava with True Color Painting. Sorry we missed your call, our crews are on jobs right now! I can help right here by text. What are you looking to get painted?",
    chips: ["Interior rooms", "Exterior of my house", "Kitchen cabinets"],
    busy: "Your crew is mid-coat",
    steps: [
      { t: "The call comes in", d: "A homeowner wants five rooms painted before the holidays. Your crews are on jobs, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they post on Nextdoor asking for painters." },
      { t: "An estimate gets booked", d: "Ava asks which rooms, sizes, ceilings and trim, asks for photos, and books an estimate." },
    ],
    goal: "a free estimate (or a color consult)",
    facts: `Business: True Color Painting (a demo company on the Truly Automation website)
Service area: Charlotte, Huntersville, Cornelius, Concord, Matthews and nearby towns
Hours: Mon-Sat 7am-6pm. Licensed and insured.
Work: interior painting, exterior painting, cabinet painting, deck and fence staining, drywall and wood rot repair, color consultations.
Typical prices (exact price after a free estimate): interior room $400-$900 per room depending on size (ceilings add $100-$250, trim and doors add $100-$300 per room); exterior $1.50-$4 per sq ft of home (most homes $4,000-$9,000); kitchen cabinets $3,500-$8,000; deck or fence stain $1-$3 per sq ft. $500 minimum.
Free estimate times this week: Tomorrow 9:00 AM, 4:00 PM; Thursday 10:00 AM, 2:00 PM; Saturday 9:30 AM.
Rules: ask for photos of the rooms or house. Never give a firm price.`,
  },
  faqs: [
    { q: "How do I beat the lowballers?", a: "By looking more professional the moment someone finds you: instant pricing, fast replies, real before-and-after pages and steady reviews. Customers who want quality pick the company that looks like it." },
    { q: "What are Repaint Reminders?", a: "Every past customer gets a reminder when it's time to repaint (about 5 years for exteriors), with a link to get a quick quote. It's work you already earned, coming back on its own." },
    { q: "Can it help in the slow season?", a: "Yes. The Interior Season Push runs winter campaigns for interiors and cabinets to fill the months when exterior work stops." },
    { q: "How soon will I see more calls?", a: "The Paint Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default painting;
