import type { Industry } from "./types";

const flooring: Industry = {
  slug: "flooring",
  name: "Flooring",
  who: "flooring companies",
  one: "flooring company",
  category: "Construction & outdoor",
  icon: "🛋️",
  tagline: "Floor quotes by the room, sample visits and realtor work.",
  meta: {
    title: "Marketing for Flooring Companies | Truly Automation",
    description:
      "Marketing built for flooring installers and stores: a flooring estimator by room size and material, in-home sample visit booking, before-and-after pages, realtor and property manager outreach. One flooring company per city.",
  },
  hero: {
    line1: "New floors.",
    line2: "No guesswork.",
    sub: "The marketing team built only for flooring companies. Homeowners price their floors by the room before they call, book a sample visit, and pick you over the big-box store.",
    cards: {
      lead: {
        label: "Floor Line",
        title: "LVP for the main floor",
        fields: [["Size", "About 900 sq ft"], ["Removing", "Old carpet + tile"], ["Town", "Matthews"], ["When", "Before family visits"]],
      },
      side: {
        label: "Sample Visits",
        title: "This week",
        rows: [["Visits booked", "11"], ["Quotes sent", "9"], ["Signed", "5"]],
      },
      small: { label: "Estimate Chaser", title: "Day 7 follow-up sent", text: "Hardwood for 3 bedrooms, $9,600" },
    },
  },
  problems: [
    { title: "Big-box stores", text: "Homeowners walk into the big-box store first, and assume the cheapest per-square-foot price is the real price." },
    { title: "Lots of measuring, little closing", text: "You measure houses all week for quotes that sit unanswered." },
    { title: "Hard to picture the result", text: "People can't decide on a floor they've only seen as a small sample in a store." },
    { title: "Uneven work", text: "Some weeks are packed, some are empty, and you're always chasing the next job." },
  ],
  systems: [
    { icon: "🧮", title: "Floor Estimator", text: "Homeowners enter room sizes and a material and see an installed price range on your website, removal and all.", tier: 1 },
    { icon: "🏠", title: "In-Home Sample Visits", text: "Homeowners book a visit where samples come to them, which beats a trip to the store and wins the job.", tier: 1 },
    { icon: "📸", title: "Floor Line", text: "Missed calls get a text back in seconds that collects room sizes, photos and timeline, then books a visit.", tier: 1 },
    { icon: "🖼️", title: "Before & After Pages", text: "Every install becomes a before-and-after page that ranks in that town and helps the next customer picture it.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “flooring installers near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one flooring company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🏡", title: "Realtor Listing Program", text: "New floors are a top pre-sale upgrade. We connect you with listing agents who need fast turnarounds.", tier: 2 },
    { icon: "🏢", title: "Property Manager Outreach", text: "Apartment turnovers need floors fast and often. We build those repeat contracts.", tier: 2 },
    { icon: "🏗️", title: "Builder & Remodeler Partnerships", text: "Outreach to builders and remodelers who need a reliable flooring sub.", tier: 2 },
    { icon: "💳", title: "Financing Pages", text: "Clear monthly payment options that make whole-house projects an easy yes.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards around every install, timed with your job site visits.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open quote at day 2, 7 and 14.", tier: 2 },
  ],
  packages: [
    { name: "Underlayment", tagline: "Everything a flooring company needs to win homeowners before they walk into the big-box store." },
    { name: "Wall to Wall", tagline: "Underlayment plus realtor, property manager and builder work, and financing that closes bigger jobs." },
  ],
  estimator: {
    name: "Floor Estimator",
    question: "What will my new floors cost?",
    blurb: "Homeowners see an installed price, removal and all, in 30 seconds. No more surprise when the real quote comes in higher than the store tag.",
    bullets: ["Uses your installed prices and materials", "Every lead texts straight to your phone", "Works on weekends when people shop for floors"],
    projects: [
      { key: "lvp", label: "Luxury vinyl plank", unit: "area", per: [5, 9], start: [30, 25] },
      { key: "hardwood", label: "Hardwood", unit: "area", per: [9, 16], start: [30, 25] },
      { key: "tile", label: "Tile", unit: "area", per: [10, 20], start: [12, 10] },
      { key: "carpet", label: "Carpet", unit: "area", per: [3.5, 7], start: [14, 12] },
    ],
    toggles: [
      { key: "removal", label: "Remove old flooring", per: [1, 3], on: true },
      { key: "stairs", label: "Add stairs (about 13 steps)", fixed: [1200, 2800] },
    ],
    minimum: 800,
  },
  demo: {
    name: "Floor Line",
    business: "Hearth & Plank Flooring",
    greeting:
      "Hi, this is Ava with Hearth & Plank Flooring. Sorry we missed your call, our team is out on installs! I can help right here by text. What floors are you thinking about?",
    chips: ["Vinyl plank for my house", "Price for hardwood?", "Can you bring samples?"],
    busy: "Your installers are on a job",
    steps: [
      { t: "The call comes in", d: "A homeowner wants new floors before family visits. Your installers are on a job, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they drive to the big-box store." },
      { t: "A sample visit gets booked", d: "Ava gets room sizes, current floors and photos, and books an in-home sample visit." },
    ],
    goal: "a free in-home sample and measure visit",
    facts: `Business: Hearth & Plank Flooring (a demo company on the Truly Automation website)
Service area: Charlotte, Matthews, Mint Hill, Indian Trail, Huntersville and nearby towns
Hours: Mon-Fri 8am-6pm, Sat 9am-3pm. Licensed and insured.
Work: luxury vinyl plank, hardwood (install and refinishing), tile, carpet, stairs, old floor removal, subfloor repair.
Typical installed prices (exact price after measuring): luxury vinyl plank $5-$9 per sq ft; hardwood $9-$16 per sq ft; tile $10-$20 per sq ft; carpet $3.50-$7 per sq ft; old floor removal $1-$3 per sq ft; stairs $1,200-$2,800. Free in-home sample and measure visits. Financing available.
Visit times this week: Tomorrow 10:00 AM, 5:00 PM; Thursday 11:00 AM; Saturday 10:00 AM, 1:00 PM.
Rules: ask which rooms, rough square footage, what floors are there now, and pets or kids (affects material choice). Never give a firm price.`,
  },
  faqs: [
    { q: "Why show installed prices?", a: "Store tags show material only, so homeowners get sticker shock later. An installed price range up front builds trust and makes your quote feel fair." },
    { q: "How do sample visits win jobs?", a: "Seeing samples in their own light, next to their walls and cabinets, makes the decision easy, and the person who brought the samples usually gets the job." },
    { q: "Can you help with apartment turnover work?", a: "Yes. In Wall to Wall we reach out to property managers for repeat turnover flooring, which keeps crews busy between homeowner jobs." },
    { q: "How soon will I see more leads?", a: "The Floor Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default flooring;
