import type { Industry } from "./types";

const foundationRepair: Industry = {
  slug: "foundation-repair",
  name: "Foundation Repair",
  who: "foundation repair companies",
  one: "foundation repair company",
  category: "Construction & outdoor",
  icon: "🏚️",
  tagline: "Crack photo checks, free inspections and realtor repairs.",
  meta: {
    title: "Marketing for Foundation Repair Companies | Truly Automation",
    description:
      "Marketing built for foundation repair and waterproofing companies: a repair estimator, crack photo checks by text, inspection booking, realtor and inspector outreach, and financing pages. One foundation company per city.",
  },
  hero: {
    line1: "Cracks in the wall?",
    line2: "They call you first.",
    sub: "The marketing team built only for foundation repair and waterproofing companies. Worried homeowners send photos, book an inspection fast, and realtors send you the repairs from every home sale.",
    cards: {
      lead: {
        label: "Crack Check",
        title: "Stair-step crack in brick",
        fields: [["Where", "Back corner, outside"], ["Also", "Doors sticking"], ["Town", "Matthews"], ["Photos", "4 sent"]],
      },
      side: {
        label: "Realtor Repairs",
        title: "From home inspections",
        rows: [["Inspection referrals", "8"], ["Repairs quoted", "6"], ["Closed before sale", "4"]],
      },
      small: { label: "Estimate Chaser", title: "Day 7 follow-up sent", text: "6 piers + crawl space, $11,200" },
    },
  },
  problems: [
    { title: "Scared homeowners shop around", text: "A crack makes people panic and call three companies. Whoever gets there first and explains it clearly wins." },
    { title: "Big, scary price tags", text: "Foundation work costs thousands, and without financing or clear options homeowners freeze up and do nothing." },
    { title: "Home sales come with deadlines", text: "Inspection repairs need fast answers before closing, and slow replies lose the job." },
    { title: "Hard to find the right customers", text: "Most homeowners don't know they need you until it's urgent, so steady lead flow is hard to build." },
  ],
  systems: [
    { icon: "🧮", title: "Repair Estimator", text: "Homeowners price piers, crack repair, crawl space and waterproofing on your website and see a realistic range.", tier: 1 },
    { icon: "📸", title: "Crack Check", text: "Missed calls get a text back in seconds asking for photos of cracks, doors and floors, then books a free inspection.", tier: 1 },
    { icon: "📅", title: "Inspection Booker", text: "Free inspections booked online with reminders, so worried homeowners get on your calendar fast.", tier: 1 },
    { icon: "📚", title: "Warning Signs Pages", text: "Pages explaining which cracks matter and which don't, which builds trust and ranks on Google and ChatGPT.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “foundation repair near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one foundation company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🏡", title: "Realtor & Inspector Program", text: "Home inspections flag foundation issues on every sale. We build relationships with inspectors and agents who need fast repairs.", tier: 2 },
    { icon: "💳", title: "Financing Pages", text: "Clear monthly payment options so a $12,000 repair doesn't scare people into doing nothing.", tier: 2 },
    { icon: "🌧️", title: "Heavy Rain Campaigns", text: "After big storms, homeowners in your area get offers for basement waterproofing and drainage checks.", tier: 2 },
    { icon: "🏢", title: "Property Manager Outreach", text: "Rental owners and HOAs need crawl space, drainage and repair work. We reach out for steady contracts.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Neighbors often have the same soil and the same problem. Postcards go to the homes around every job.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Follow-up on every open repair proposal.", tier: 2 },
  ],
  packages: [
    { name: "Footing", tagline: "Everything a foundation company needs to reach worried homeowners first and book inspections fast." },
    { name: "Full Support", tagline: "Footing plus realtor and inspector referrals, financing, storm campaigns and property manager work." },
  ],
  estimator: {
    name: "Repair Estimator",
    question: "What will my foundation repair cost?",
    blurb: "Worried homeowners see a realistic range in 30 seconds and send photos, so you show up to inspections with context.",
    bullets: ["Uses your prices and repair methods", "Every lead texts straight to your phone with photos", "Calms people down with real information"],
    projects: [
      { key: "piers", label: "Foundation piers", unit: "count", unitLabel: "Number of piers", perWord: "pier", per: [1200, 2200], start: 6 },
      { key: "crack", label: "Crack repair", unit: "count", unitLabel: "Number of cracks", perWord: "crack", per: [400, 900], start: 2 },
      { key: "crawl", label: "Crawl space encapsulation", unit: "count", unitLabel: "Crawl space size (sq ft)", perWord: "sq ft", per: [4, 8], start: 1500 },
      { key: "waterproof", label: "Basement waterproofing", unit: "length", unitLabel: "Wall length (feet)", per: [60, 120], start: 80 },
    ],
    toggles: [
      { key: "sump", label: "Add a sump pump", fixed: [1200, 2500], only: ["crawl", "waterproof"] },
      { key: "dehu", label: "Add a dehumidifier", fixed: [1200, 2500], only: ["crawl"] },
    ],
    minimum: 500,
  },
  demo: {
    name: "Crack Check",
    business: "Bedrock Foundation Repair",
    greeting:
      "Hi, this is Ava with Bedrock Foundation Repair. Sorry we missed your call, our team is on a job! I can help right here by text. What are you noticing at your home?",
    chips: ["Cracks in my walls", "Water in my basement", "My doors are sticking"],
    busy: "Your crew is under a house",
    steps: [
      { t: "The call comes in", d: "A homeowner just found a stair-step crack in their brick. Your crew is under a house, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get calm, clear help before they panic and call three other companies." },
      { t: "An inspection gets booked", d: "Ava asks where the cracks are, how big, and for photos, then books a free inspection." },
    ],
    goal: "a free foundation inspection",
    facts: `Business: Bedrock Foundation Repair (a demo company on the Truly Automation website)
Service area: Charlotte, Matthews, Concord, Gastonia, Fort Mill and nearby towns
Hours: Mon-Fri 7am-6pm, Sat 8am-12pm. Licensed and insured. Transferable warranty on pier work.
Work: foundation piers, crack repair, crawl space encapsulation and repair, basement waterproofing, sump pumps, drainage, real estate inspection repairs.
Typical prices (exact price after a free inspection): piers $1,200-$2,200 each (most jobs need 4-10); crack repair $400-$900 per crack; crawl space encapsulation $4-$8 per sq ft; basement waterproofing $60-$120 per foot of wall; sump pump $1,200-$2,500. Financing available.
Free inspection times this week: Tomorrow 9:00 AM, 2:00 PM; Thursday 10:00 AM, 3:30 PM; Saturday 9:00 AM.
Rules: be calm and reassuring; many cracks are cosmetic, and the inspection will tell. Ask where the cracks are, how wide (hairline or wider than a coin), and for photos. If they're selling the home, ask the closing date and treat it as priority. Never diagnose or give a firm price.`,
  },
  faqs: [
    { q: "Won't the estimator scare people?", a: "Most homeowners imagine something worse. A realistic range and a calm explanation actually gets them to book the inspection instead of putting it off." },
    { q: "How does the realtor and inspector program work?", a: "Home inspectors flag foundation issues on many sales, and agents need fast repairs before closing. We build those relationships so you're the company they call." },
    { q: "Can you help with financing?", a: "Yes. Financing pages show clear monthly options, which helps homeowners say yes to repairs they need." },
    { q: "How soon will I see more calls?", a: "Crack Check and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default foundationRepair;
