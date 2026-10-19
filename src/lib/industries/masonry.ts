import type { Industry } from "./types";

const masonry: Industry = {
  slug: "masonry",
  name: "Masonry",
  who: "masonry contractors",
  one: "masonry company",
  category: "Construction & outdoor",
  icon: "🪨",
  tagline: "Chimney, stone and brick quotes plus builder work.",
  meta: {
    title: "Marketing for Masonry Contractors | Truly Automation",
    description:
      "Marketing built for masonry contractors: a stone, brick and chimney estimator, photo quotes by text, project pages, chimney inspection campaigns, builder and realtor outreach. One masonry company per city.",
  },
  hero: {
    line1: "Built to last.",
    line2: "Booked all year.",
    sub: "The marketing team built only for masonry contractors. Homeowners price stone, brick and chimney work online, and builders and realtors keep your crew busy between big projects.",
    cards: {
      lead: {
        label: "Mason Line",
        title: "Chimney rebuild",
        fields: [["Issue", "Loose bricks at the top"], ["Height", "Two-story home"], ["Town", "Belmont"], ["Before", "Fireplace season"]],
      },
      side: {
        label: "Chimney Season",
        title: "Fall inspection push",
        rows: [["Past customers texted", "460"], ["Inspections booked", "27"], ["Repairs found", "12"]],
      },
      small: { label: "Estimate Chaser", title: "Day 7 follow-up sent", text: "Stone veneer front, $14,900" },
    },
  },
  problems: [
    { title: "Hard to find the right customers", text: "People who need a chimney rebuild or stone veneer don't know what to search for or who to call." },
    { title: "Handymen undercut repairs", text: "A handyman offers to “patch” mortar for cheap, and the homeowner doesn't know it'll fail." },
    { title: "Builders already have a mason", text: "Steady new-construction work goes to whoever builders already trust." },
    { title: "Weather and seasons", text: "Cold weather slows outdoor masonry, and the schedule gets thin." },
  ],
  systems: [
    { icon: "🧮", title: "Masonry Estimator", text: "Homeowners price stone veneer, brick repair, chimneys and walls on your website before they call.", tier: 1 },
    { icon: "📸", title: "Mason Line", text: "Missed calls get a text back in seconds asking for photos of the brick, stone or chimney, then books an estimate.", tier: 1 },
    { icon: "🖼️", title: "Craftsmanship Pages", text: "Before-and-after project pages that show the detail work handymen can't match.", tier: 1 },
    { icon: "📚", title: "Repair Guide Pages", text: "Pages on tuckpointing, efflorescence and chimney damage that answer homeowners' questions and rank on Google and ChatGPT.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “mason near me” and “chimney repair” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one masonry company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🔥", title: "Chimney Season Push", text: "Before fireplace season, past customers and older homes get chimney inspection offers.", tier: 2 },
    { icon: "🏗️", title: "Builder & Architect Outreach", text: "We reach out to custom home builders and architects for veneer, fireplaces and outdoor living work.", tier: 2 },
    { icon: "🏡", title: "Realtor & Inspector Program", text: "Chimney and brick issues come up on inspections. We connect you with the agents and inspectors who send those repairs.", tier: 2 },
    { icon: "🏛️", title: "Commercial & Historic Outreach", text: "Churches, schools, HOAs and historic buildings need restoration work. We reach out for those jobs.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards around every project. Homes on the same street were often built the same way.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Follow-up on every open quote.", tier: 2 },
  ],
  packages: [
    { name: "Mortar", tagline: "Everything a masonry company needs to reach the right homeowners and show off the craftsmanship." },
    { name: "Keystone", tagline: "Mortar plus chimney season campaigns, builder and architect work, and realtor and commercial referrals." },
  ],
  estimator: {
    name: "Masonry Estimator",
    question: "What will my masonry project cost?",
    blurb: "Homeowners price stone, brick and chimney work in 30 seconds and send photos, so you show up knowing the job.",
    bullets: ["Uses your prices", "Every lead texts straight to your phone with photos", "Shows the real cost of doing it right"],
    projects: [
      { key: "veneer", label: "Stone veneer", unit: "area", per: [25, 50], start: [30, 10] },
      { key: "tuckpoint", label: "Brick repair / tuckpointing", unit: "area", per: [8, 20], start: [20, 10] },
      { key: "chimney", label: "Chimney rebuild (top section)", unit: "none", fixed: [3000, 8000] },
      { key: "wall", label: "Brick or stone wall", unit: "length", unitLabel: "Wall length (feet)", per: [100, 250], start: 30 },
    ],
    toggles: [
      { key: "cap", label: "New chimney cap and crown", fixed: [500, 1500], only: ["chimney"], on: true },
      { key: "waterproof", label: "Add waterproof sealing", per: [1, 3], only: ["veneer", "tuckpoint"] },
    ],
    minimum: 800,
  },
  demo: {
    name: "Mason Line",
    business: "Cornerstone Masonry",
    greeting:
      "Hi, this is Ava with Cornerstone Masonry. Sorry we missed your call, our masons are on a job! I can help right here by text. What kind of masonry work do you need?",
    chips: ["My chimney is falling apart", "Stone on the front of my house", "Cracked brick steps"],
    busy: "Your masons are laying stone",
    steps: [
      { t: "The call comes in", d: "A homeowner noticed loose bricks at the top of their chimney. Your masons are on a job, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call a handyman to “patch it.”" },
      { t: "An estimate gets booked", d: "Ava asks what's damaged and for photos, explains it'll be inspected, and books an estimate." },
    ],
    goal: "a free estimate",
    facts: `Business: Cornerstone Masonry (a demo company on the Truly Automation website)
Service area: Charlotte, Gastonia, Belmont, Mount Holly, Huntersville and nearby towns
Hours: Mon-Fri 7am-5pm, Sat 8am-12pm. Licensed and insured.
Work: chimney repair and rebuilds, chimney caps and crowns, brick repair and tuckpointing, stone veneer, brick and stone walls, steps and porches, outdoor fireplaces, historic restoration.
Typical prices (exact price after an estimate): stone veneer $25-$50 per sq ft; tuckpointing $8-$20 per sq ft; chimney top rebuild $3,000-$8,000; cap and crown $500-$1,500; brick or stone walls $100-$250 per foot; brick steps $1,500-$5,000.
Estimate times this week: Tomorrow 8:00 AM, 2:00 PM; Thursday 9:00 AM; Saturday 8:30 AM.
Rules: ask what's damaged and for photos. If bricks are falling or a chimney is leaning, tell them to keep people away from the area and treat it as urgent. Never give a firm price.`,
  },
  faqs: [
    { q: "How do I compete with handymen?", a: "Repair guide pages explain why a patch fails and what a proper repair looks like, and project pages show your craftsmanship. Homeowners who understand the difference pay for it." },
    { q: "What's the Chimney Season Push?", a: "Before fireplace season, past customers and older homes in your area get chimney inspection offers. Inspections turn into repair work." },
    { q: "Can you help us get builder work?", a: "Yes. In Keystone we reach out to custom home builders and architects for veneer, fireplace and outdoor living work." },
    { q: "How soon will I see more calls?", a: "The Mason Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default masonry;
