import type { Industry } from "./types";

const decks: Industry = {
  slug: "decks",
  name: "Deck Builders",
  who: "deck builders",
  one: "deck builder",
  category: "Construction & outdoor",
  icon: "🪚",
  tagline: "Deck quotes by size and material, plus design consults.",
  meta: {
    title: "Marketing for Deck Builders | Truly Automation",
    description:
      "Marketing built for deck builders: a deck estimator by size and material, design consult booking, project pages, composite upgrade follow-up, builder and realtor outreach. One deck builder per city.",
  },
  hero: {
    line1: "Bigger decks.",
    line2: "Better weekends.",
    sub: "The marketing team built only for deck builders. Homeowners price their deck by size and material before they call, and every finished deck sells the next one on the street.",
    cards: {
      lead: {
        label: "Deck Line",
        title: "Composite deck + stairs",
        fields: [["Size", "About 16 x 20 ft"], ["Material", "Composite, gray"], ["Town", "Lake Wylie"], ["Use", "Grill + hot tub later"]],
      },
      side: {
        label: "Spring Pre-Book",
        title: "Build slots for April",
        rows: [["Consults booked", "17"], ["Deposits paid", "8"], ["Open weeks left", "3"]],
      },
      small: { label: "Estimate Chaser", title: "Day 7 follow-up sent", text: "Covered composite deck, $28,400" },
    },
  },
  problems: [
    { title: "Sticker shock", text: "Homeowners imagine a $5,000 deck and are surprised when composite with a roof comes in at $30,000." },
    { title: "The handyman lowball", text: "A handyman offers to build it for half, and the homeowner doesn't know what they're giving up." },
    { title: "Short building season", text: "Everyone wants a deck by summer, and the winter schedule is empty unless you line up work early." },
    { title: "Design takes your evenings", text: "Drawings and revisions for people who never sign eat up your nights." },
  ],
  systems: [
    { icon: "🧮", title: "Deck Estimator", text: "Homeowners enter their deck size and material and see a price range on your website before they call.", tier: 1 },
    { icon: "📸", title: "Deck Line", text: "Missed calls get a text back in seconds that collects photos of the yard, size, material and budget, then books a consult.", tier: 1 },
    { icon: "🗓️", title: "Design Consult Booker", text: "Consults booked online after budget and timeline questions, so your design time goes to real buyers.", tier: 1 },
    { icon: "🖼️", title: "Deck Project Pages", text: "Every build becomes a page with photos that ranks in that neighborhood.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “deck builder near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one deck builder per city. Your competitors can't hire us.", tier: 1 },
    { icon: "♻️", title: "Wood to Composite Upgrade", text: "Homeowners with aging wood decks get campaigns showing composite options and low-maintenance benefits.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes that can see every new deck.", tier: 2 },
    { icon: "🏗️", title: "Builder & Pool Partnerships", text: "Outreach to home builders and pool companies who need decks for their customers.", tier: 2 },
    { icon: "🏡", title: "Realtor Program", text: "Deck repairs and rebuilds come up on inspections. We connect you with agents and inspectors.", tier: 2 },
    { icon: "🌸", title: "Spring Pre-Book", text: "Winter campaigns that fill spring build slots with deposits.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Follow-up on every open design and quote.", tier: 2 },
  ],
  packages: [
    { name: "Railing", tagline: "Everything a deck builder needs to set budgets early and win jobs over the handyman lowball." },
    { name: "Full Deck", tagline: "Railing plus composite upgrade campaigns, partner outreach and a booked spring." },
  ],
  estimator: {
    name: "Deck Estimator",
    question: "What will my deck cost?",
    blurb: "Homeowners price their deck by size and material in 30 seconds. Sticker shock happens before the consult, not after you've drawn it.",
    bullets: ["Uses your prices per square foot", "Every lead texts straight to your phone", "Filters out tiny budgets before the consult"],
    projects: [
      { key: "wood", label: "Pressure-treated wood", unit: "area", per: [30, 50], start: [16, 14] },
      { key: "composite", label: "Composite", unit: "area", per: [45, 80], start: [16, 14] },
      { key: "refinish", label: "Repair & refinish", unit: "area", per: [4, 10], start: [16, 14] },
    ],
    toggles: [
      { key: "stairs", label: "Add stairs", fixed: [800, 2500], only: ["wood", "composite"], on: true },
      { key: "rail", label: "Upgrade to aluminum or cable railing", fixed: [2000, 6000], only: ["wood", "composite"] },
      { key: "cover", label: "Add a roof or pergola", per: [30, 70], only: ["wood", "composite"] },
      { key: "removal", label: "Remove the old deck", fixed: [800, 2000], only: ["wood", "composite"] },
    ],
    minimum: 2000,
  },
  demo: {
    name: "Deck Line",
    business: "Summit Deck & Patio",
    greeting:
      "Hi, this is Ava with Summit Deck & Patio. Sorry we missed your call, our crew is out building right now! I can help right here by text. What kind of deck are you thinking about?",
    chips: ["New composite deck", "Can you repair my old deck?", "How much for a 16x20 deck?"],
    busy: "Your crew is framing a deck",
    steps: [
      { t: "The call comes in", d: "A homeowner wants a composite deck before summer. Your crew is framing a deck, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they ask a handyman for a cheaper price." },
      { t: "A consult gets booked", d: "Ava asks about size, material, budget and timeline, asks for yard photos, and books a design consult." },
    ],
    goal: "a design consultation",
    facts: `Business: Summit Deck & Patio (a demo company on the Truly Automation website)
Service area: Charlotte, Lake Wylie, Fort Mill, Tega Cay, Steele Creek and nearby towns
Hours: Mon-Fri 7am-6pm, Sat 8am-12pm. Licensed and insured.
Work: pressure-treated wood decks, composite decks, covered decks and pergolas, railings (wood, aluminum, cable), stairs, deck repair and refinishing, screened porches.
Typical prices (final price after a design consult): pressure-treated deck $30-$50 per sq ft; composite $45-$80 per sq ft; roof or pergola adds $30-$70 per sq ft; stairs $800-$2,500; railing upgrades $2,000-$6,000; repair and refinish $4-$10 per sq ft. A 16x20 composite deck is usually $15,000-$26,000.
Consult times this week: Tomorrow 9:00 AM, 4:00 PM; Thursday 10:00 AM; Saturday 9:00 AM.
Rules: ask about size, height off the ground, material and budget gently. Permits are usually needed; the team handles them. Never give a firm price.`,
  },
  faqs: [
    { q: "Won't the estimator scare people off?", a: "It stops sticker shock from happening at the end of a long consult. The people who book already know the range, so your design time goes to buyers." },
    { q: "How do I compete with handymen?", a: "Clear pricing, real project pages, permits and insurance front and center, and steady reviews show homeowners why a pro deck builder is worth it." },
    { q: "What about winter?", a: "Spring Pre-Book campaigns run through the winter to fill your spring build slots with deposits, and repair and refinish work fills gaps." },
    { q: "How soon will I see more leads?", a: "The Deck Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days, so starting in winter sets up a strong spring." },
  ],
};

export default decks;
