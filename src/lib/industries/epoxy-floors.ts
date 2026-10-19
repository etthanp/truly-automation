import type { Industry } from "./types";

const epoxyFloors: Industry = {
  slug: "epoxy-floors",
  name: "Epoxy & Garage Floors",
  who: "epoxy & garage floor companies",
  one: "garage floor company",
  category: "Construction & outdoor",
  icon: "✨",
  tagline: "Garage floor quotes, color picker and commercial floors.",
  meta: {
    title: "Marketing for Epoxy & Garage Floor Coating Companies | Truly Automation",
    description:
      "Marketing built for epoxy and polyaspartic floor coating companies: a garage floor estimator, flake color picker, before-and-after pages, neighbor marketing, and commercial and builder outreach. One floor coating company per city.",
  },
  hero: {
    line1: "One garage floor",
    line2: "sells the whole street.",
    sub: "The marketing team built only for epoxy and garage floor companies. Homeowners price their garage and pick a color online, and every finished floor gets the neighbors asking for one.",
    cards: {
      lead: {
        label: "Floor Line",
        title: "2-car garage, flake finish",
        fields: [["Size", "About 480 sq ft"], ["Color", "Tidal Wave flake"], ["Town", "Waxhaw"], ["Condition", "A few cracks"]],
      },
      side: {
        label: "Neighbor Drop",
        title: "Around the Lee garage",
        rows: [["Postcards sent", "45"], ["Quote requests", "6"], ["Booked", "3"]],
      },
      small: { label: "Commercial Outreach", title: "Shop floor walkthrough", text: "Auto repair shop, 2,400 sq ft" },
    },
  },
  problems: [
    { title: "DIY kits and cheap coatings", text: "Homeowners compare your polyaspartic system to a $150 kit from the hardware store that peels in a year." },
    { title: "Picking a color stalls the sale", text: "People love the idea but can't decide on a flake color, and the quote sits." },
    { title: "Hard to show the difference", text: "A great floor looks great in person, but most people only see it in a small photo." },
    { title: "Residential only", text: "Garages keep you busy, but commercial floors (shops, gyms, warehouses) are bigger and repeat." },
  ],
  systems: [
    { icon: "🧮", title: "Garage Floor Estimator", text: "Homeowners enter their garage size and finish and see a price range on your website.", tier: 1 },
    { icon: "🎨", title: "Flake Color Picker", text: "Homeowners browse your color blends and send their favorite with the quote request, so the sale doesn't stall.", tier: 1 },
    { icon: "📸", title: "Floor Line", text: "Missed calls get a text back in seconds asking for garage photos and size, then books an estimate.", tier: 1 },
    { icon: "🖼️", title: "Before & After Pages", text: "Every floor becomes a before-and-after page that ranks in that neighborhood.", tier: 1 },
    { icon: "🛡️", title: "Why Not DIY Pages", text: "Pages that show why kits peel and what your warranty covers, which wins customers who care about quality.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one floor coating company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every job: “Your neighbor's garage just got a new floor.”", tier: 2 },
    { icon: "🏢", title: "Commercial Outreach", text: "Auto shops, gyms, warehouses, breweries and vet clinics, reached directly for bigger floor jobs.", tier: 2 },
    { icon: "🏗️", title: "Builder Upgrade Program", text: "Outreach to home builders to offer coated garage floors as an upgrade on new homes.", tier: 2 },
    { icon: "🏡", title: "Realtor Program", text: "A finished garage floor helps homes sell. We connect you with listing agents.", tier: 2 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “garage floor coating near me” in every town you serve.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Follow-up on every open quote.", tier: 2 },
  ],
  packages: [
    { name: "Base Coat", tagline: "Everything a floor coating company needs to quote online and beat the DIY kits." },
    { name: "Top Coat", tagline: "Base Coat plus neighbor marketing, commercial and builder outreach, and realtor work." },
  ],
  estimator: {
    name: "Garage Floor Estimator",
    question: "What will my garage floor cost?",
    blurb: "Homeowners price their garage floor in 30 seconds and pick a color. You get the size, finish and photos before the estimate.",
    bullets: ["Uses your prices per square foot", "Every lead texts straight to your phone", "Color picks come with the lead"],
    projects: [
      { key: "one", label: "1-car garage", unit: "area", per: [5, 9], start: [12, 22] },
      { key: "two", label: "2-car garage", unit: "area", per: [5, 9], start: [22, 22] },
      { key: "three", label: "3-car garage", unit: "area", per: [5, 9], start: [32, 22] },
      { key: "commercial", label: "Shop or commercial floor", unit: "area", per: [4, 8], start: [40, 50] },
    ],
    choiceLabel: "Finish",
    choices: [
      { key: "flake", label: "Full flake" },
      { key: "metallic", label: "Metallic", per: [2, 4] },
      { key: "solid", label: "Solid color", per: [-1, -1] },
    ],
    toggles: [
      { key: "cracks", label: "Crack and pit repair", fixed: [200, 600] },
      { key: "stem", label: "Coat the stem walls", fixed: [150, 400] },
    ],
    minimum: 1500,
  },
  demo: {
    name: "Floor Line",
    business: "Diamond Coat Floors",
    greeting:
      "Hi, this is Ava with Diamond Coat Floors. Sorry we missed your call, we're out coating a garage right now! I can help right here by text. What floor are you thinking about?",
    chips: ["2-car garage floor", "How long does it take?", "Do you do shop floors?"],
    busy: "Your crew is grinding a floor",
    steps: [
      { t: "The call comes in", d: "A homeowner saw their neighbor's new garage floor and wants one. Your crew is grinding a floor, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they buy a kit at the hardware store." },
      { t: "An estimate gets booked", d: "Ava gets the garage size, condition and color ideas, asks for photos, and books an estimate." },
    ],
    goal: "a free estimate",
    facts: `Business: Diamond Coat Floors (a demo company on the Truly Automation website)
Service area: Charlotte, Waxhaw, Ballantyne, Fort Mill, Matthews and nearby towns
Hours: Mon-Sat 7am-6pm. Insured. 15-year residential warranty.
Work: polyaspartic garage floor coatings with flake, metallic epoxy, solid colors, crack repair, stem walls, basements, patios, commercial and shop floors.
Typical prices (exact price after an estimate): garage floors $5-$9 per sq ft for full flake (most 2-car garages $2,500-$4,500); metallic adds $2-$4 per sq ft; commercial floors $4-$8 per sq ft; crack repair $200-$600. Most garages are done in one day and can be driven on in 24-48 hours.
Estimate times this week: Tomorrow 9:00 AM, 4:00 PM; Thursday 10:00 AM; Saturday 9:00 AM.
Rules: ask for the garage size, condition (cracks, oil stains, old coating) and photos. Never give a firm price.`,
  },
  faqs: [
    { q: "How does the color picker help?", a: "Homeowners choose their flake color while they're excited and send it with their quote request. That takes away the biggest reason sales stall." },
    { q: "How do I compete with DIY kits?", a: "Why Not DIY pages show why kits peel, how your grinding and coatings are different, and what your warranty covers. Customers who care about quality pick you." },
    { q: "Can you help us get commercial floors?", a: "Yes. In Top Coat we reach out to auto shops, gyms, warehouses and breweries for bigger floor jobs that often repeat." },
    { q: "How soon will I see more calls?", a: "The Floor Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default epoxyFloors;
