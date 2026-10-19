import type { Industry } from "./types";

const excavation: Industry = {
  slug: "excavation",
  name: "Excavation & Grading",
  who: "excavation & grading contractors",
  one: "excavation company",
  category: "Construction & outdoor",
  icon: "🚜",
  tagline: "Land clearing quotes, builder work and permit leads.",
  meta: {
    title: "Marketing for Excavation & Grading Contractors | Truly Automation",
    description:
      "Marketing built for excavation, grading and land clearing contractors: a site work estimator, photo and acreage quotes by text, permit and new lot leads, builder and developer outreach, and public bid alerts. One excavation company per city.",
  },
  hero: {
    line1: "Move the dirt.",
    line2: "We'll find the next site.",
    sub: "The marketing team built only for excavation, grading and land clearing contractors. Landowners price their job online, and builders, developers and public bids keep the machines running.",
    cards: {
      lead: {
        label: "Site Line",
        title: "Clear 2 acres for a house",
        fields: [["Land", "Wooded, gentle slope"], ["Needs", "Clearing + driveway"], ["Town", "Clover"], ["Timeline", "Build starts in spring"]],
      },
      side: {
        label: "Permit Radar",
        title: "New lots this week",
        rows: [["New home permits", "19"], ["Land clearing permits", "6"], ["Septic permits", "11"]],
      },
      small: { label: "Bid Board", title: "County road bid posted", text: "Culvert + grading, due Nov 14" },
    },
  },
  problems: [
    { title: "Feast or famine", text: "Big jobs come in waves. Between them, equipment sits and payments keep coming." },
    { title: "Hard to quote from a phone call", text: "“How much to clear my land?” means nothing without acreage, trees and access." },
    { title: "Builders already have a guy", text: "Steady builder and developer work goes to whoever they already know." },
    { title: "Public bids are hard to track", text: "City, county and state site work bids are scattered across a dozen websites." },
  ],
  systems: [
    { icon: "🧮", title: "Site Work Estimator", text: "Landowners price clearing, grading, driveways and pads by acre or size on your website.", tier: 1 },
    { icon: "📸", title: "Site Line", text: "Missed calls get a text back in seconds asking for acreage, photos, a map pin and timeline, then books a site visit.", tier: 1 },
    { icon: "🗺️", title: "Map Pin Quotes", text: "Landowners drop a pin on their property so you can look at the lot on satellite before you drive out.", tier: 1 },
    { icon: "📍", title: "Job Site Pages", text: "Every finished job becomes a page with before-and-after photos that ranks in that county.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “land clearing near me” in every county you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one excavation company per county. Your competitors can't hire us.", tier: 1 },
    { icon: "📡", title: "Permit Radar", text: "New home, land clearing and septic permits in your county every week. Each new lot needs site work.", tier: 2 },
    { icon: "🏗️", title: "Builder & Developer Outreach", text: "We call and email home builders, developers and general contractors to line up repeat site work.", tier: 2 },
    { icon: "📋", title: "Bid Board", text: "Public site work, grading and drainage bids in your area, collected every week.", tier: 2 },
    { icon: "🌲", title: "Landowner Campaigns", text: "Campaigns to people who just bought land, who will need clearing, driveways and pads.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Follow-up on every open quote.", tier: 2 },
    { icon: "🦺", title: "Operator Finder", text: "A hiring page and job ads for equipment operators and laborers.", tier: 2 },
  ],
  packages: [
    { name: "Groundbreak", tagline: "Everything an excavation company needs to quote landowners faster and get found in every county." },
    { name: "Full Site", tagline: "Groundbreak plus permit leads, builder outreach, public bids and landowner campaigns." },
  ],
  estimator: {
    name: "Site Work Estimator",
    question: "What will my site work cost?",
    blurb: "Landowners price clearing, grading and driveways in 30 seconds and send a map pin. You see the lot before you ever load the trailer.",
    bullets: ["Uses your prices per acre and per foot", "Every lead texts straight to your phone", "Map pins let you scout the lot from satellite"],
    projects: [
      { key: "clearing", label: "Land clearing", unit: "count", unitLabel: "Acres", perWord: "acre", per: [3000, 7000], start: 2 },
      { key: "grading", label: "Grading", unit: "area", per: [1, 3], start: [100, 80] },
      { key: "driveway", label: "Gravel driveway", unit: "length", unitLabel: "Driveway length (feet)", per: [15, 35], start: 300 },
      { key: "pad", label: "House pad", unit: "none", fixed: [3000, 9000] },
    ],
    toggles: [
      { key: "stumps", label: "Remove stumps and haul debris", per: [1000, 3000], only: ["clearing"], on: true },
      { key: "culvert", label: "Add a culvert at the road", fixed: [1500, 4000], only: ["driveway"] },
    ],
    minimum: 1500,
  },
  demo: {
    name: "Site Line",
    business: "Ironclad Site Works",
    greeting:
      "Hi, this is Ava with Ironclad Site Works. Sorry we missed your call, the crew is on a machine right now! I can help right here by text. What kind of land work do you need?",
    chips: ["Clear land for a house", "Gravel driveway", "Price to grade my yard?"],
    busy: "Your operator is on the excavator",
    steps: [
      { t: "The call comes in", d: "A landowner needs 2 acres cleared to build. Your operator is on the excavator, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call the next contractor." },
      { t: "A site visit gets booked", d: "Ava asks about acreage, trees, access and timeline, asks for a map pin and photos, and books a site visit." },
    ],
    goal: "a free site visit",
    facts: `Business: Ironclad Site Works (a demo company on the Truly Automation website)
Service area: York County, Gaston County and Mecklenburg County, including Clover, Rock Hill, Gastonia and Charlotte
Hours: Mon-Fri 7am-6pm, Sat 8am-12pm. Licensed and insured.
Work: land clearing, forestry mulching, grading, house pads, gravel driveways, culverts, drainage, ponds, demolition, footing and utility trenching.
Typical prices (exact price after a site visit): land clearing $3,000-$7,000 per acre depending on trees (stump removal and hauling add $1,000-$3,000 per acre); grading $1-$3 per sq ft; gravel driveway $15-$35 per foot; culvert $1,500-$4,000; house pad $3,000-$9,000.
Site visit times this week: Tomorrow 7:30 AM, 3:00 PM; Thursday 8:00 AM, 4:00 PM; Saturday 9:00 AM.
Rules: ask for acreage, how wooded it is, slope, access for equipment, timeline and the address or a map pin. Never give a firm price.`,
  },
  faqs: [
    { q: "How do Map Pin Quotes work?", a: "Landowners drop a pin on their property when they request a quote. You can check the lot on satellite, see the trees and access, and often give a range before you drive out." },
    { q: "Where does Permit Radar data come from?", a: "Public permit records from your county. Every week you get the new home, land clearing and septic permits, which are lots that will need site work." },
    { q: "Can you help us land builder work?", a: "Yes. In Full Site we reach out to home builders, developers and general contractors in your area and set up meetings so you become their go-to site work company." },
    { q: "How soon will I see more calls?", a: "The Site Line and review requests start working the week they go live. Google rankings, permit leads and builder outreach build over the first 60 to 90 days." },
  ],
};

export default excavation;
