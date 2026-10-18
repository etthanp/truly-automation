import type { Industry } from "./types";

const fencing: Industry = {
  slug: "fencing",
  name: "Fencing",
  who: "fence companies",
  one: "fence company",
  category: "Construction & outdoor",
  icon: "🪵",
  tagline: "Price-by-the-foot quotes, HOA approval kits and builder work.",
  meta: {
    title: "Marketing for Fence Companies | Truly Automation",
    description:
      "Marketing built for fence contractors: an instant fence estimator, HOA approval kits, missed-call text-back, job site pages, neighbor marketing and pool and builder outreach. One fence company per city.",
  },
  hero: {
    line1: "Every fence you build",
    line2: "is a billboard.",
    sub: "The marketing team built only for fence companies. Instant price-by-the-foot quotes, HOA paperwork that closes jobs faster, and neighbors who see your work and call you next.",
    cards: {
      lead: {
        label: "Fence Line",
        title: "Privacy fence, backyard",
        fields: [["Length", "About 180 feet"], ["Material", "6 ft wood"], ["Town", "Indian Trail"], ["Why", "New puppy"]],
      },
      side: {
        label: "Neighbor Drop",
        title: "Around the Garcia job",
        rows: [["Postcards sent", "40"], ["Quote requests", "4"], ["Booked", "2"]],
      },
      small: { label: "HOA Approval Kit", title: "Packet sent to customer", text: "Drawing + material spec for the HOA" },
    },
  },
  problems: [
    { title: "Priced by the foot, shopped by the foot", text: "Homeowners get five quotes and pick the cheapest per foot, no matter the quality." },
    { title: "HOAs slow everything down", text: "Jobs sit for weeks waiting on HOA approval, and some customers give up or go with whoever got approved first." },
    { title: "Quoting takes forever", text: "Driving out to measure every yard eats your days, and half those quotes go nowhere." },
    { title: "Spring rush, winter lull", text: "Everyone wants a fence in April. Nobody's calling in December." },
  ],
  systems: [
    { icon: "🧮", title: "Fence Estimator", text: "Homeowners enter their fence length and material and get a price range on your website. Real leads, already measured.", tier: 1 },
    { icon: "📸", title: "Fence Line", text: "Missed calls get a text back in seconds. It asks for the length, material, a photo of the yard and their plat or survey, then books an estimate.", tier: 1 },
    { icon: "📄", title: "HOA Approval Kit", text: "A ready-made packet (drawing, material specs, photos) customers send to their HOA, so approval comes faster and the job is yours.", tier: 1 },
    { icon: "📍", title: "Job Site Pages", text: "Every fence becomes a page like “Vinyl privacy fence in Weddington” that ranks in that town.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “fence company near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one fence company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards and yard signs around every job: “Like your neighbor's new fence?”", tier: 2 },
    { icon: "🏊", title: "Pool & Builder Outreach", text: "Every new pool needs a code-compliant fence. We build relationships with pool builders and home builders who send that work.", tier: 2 },
    { icon: "🏘️", title: "HOA & Property Manager Bids", text: "Outreach for community fencing, repairs and commercial contracts.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open quote at day 2, 7 and 14.", tier: 2 },
    { icon: "❄️", title: "Off-Season Engine", text: "Winter campaigns that pre-book spring installs with deposits.", tier: 2 },
    { icon: "🦺", title: "Crew Finder", text: "A hiring page and job ads for installers.", tier: 2 },
  ],
  packages: [
    { name: "Post", tagline: "Everything a fence company needs to quote faster, get through HOAs and win more jobs." },
    { name: "Full Perimeter", tagline: "Post plus neighbor marketing, pool and builder outreach, and a booked spring before it starts." },
  ],
  estimator: {
    name: "Fence Estimator",
    question: "What will my fence cost?",
    blurb: "Homeowners price their fence by the foot in 30 seconds. You get the length, material and gate count before you ever measure.",
    bullets: ["Uses your prices per foot and your materials", "Every lead texts straight to your phone", "Works on weekends, when people plan yard projects"],
    projects: [
      { key: "wood", label: "Wood privacy", unit: "length", unitLabel: "Fence length (feet)", per: [25, 45], start: 150 },
      { key: "vinyl", label: "Vinyl", unit: "length", unitLabel: "Fence length (feet)", per: [35, 60], start: 150 },
      { key: "aluminum", label: "Aluminum", unit: "length", unitLabel: "Fence length (feet)", per: [35, 65], start: 150 },
      { key: "chain", label: "Chain link", unit: "length", unitLabel: "Fence length (feet)", per: [15, 30], start: 150 },
    ],
    toggles: [
      { key: "gate", label: "Add a walk gate", fixed: [300, 700], on: true },
      { key: "drive", label: "Add a double drive gate", fixed: [800, 2000] },
      { key: "removal", label: "Remove old fence first", per: [3, 6] },
    ],
    minimum: 1500,
  },
  demo: {
    name: "Fence Line",
    business: "Straight Line Fence Co.",
    greeting:
      "Hi, this is Ava with Straight Line Fence Co. Sorry we missed your call, the crew is setting posts right now! I can help right here by text. What kind of fence are you thinking about?",
    chips: ["Privacy fence for my backyard", "Price for vinyl per foot?", "I need a pool fence"],
    busy: "Your crew is setting posts",
    steps: [
      { t: "The call comes in", d: "A homeowner wants a privacy fence for their new puppy. Your crew is setting posts, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call the next fence company." },
      { t: "An estimate gets booked", d: "Ava gets the length, material, gates and HOA details, asks for a yard photo, and books an estimate." },
    ],
    goal: "a free on-site estimate",
    facts: `Business: Straight Line Fence Co. (a demo company on the Truly Automation website)
Service area: Charlotte, Indian Trail, Matthews, Monroe, Weddington, Waxhaw and nearby towns
Hours: Mon-Fri 7am-6pm, Sat 8am-12pm. Licensed and insured.
Work: wood privacy, vinyl, aluminum, chain link, pool code fencing, gates, fence repair and removal.
Typical prices (final price after a free measure): wood privacy $25-$45 per foot; vinyl $35-$60 per foot; aluminum $35-$65 per foot; chain link $15-$30 per foot; walk gate $300-$700; double drive gate $800-$2,000; old fence removal $3-$6 per foot. $1,500 minimum.
Free estimate times this week: Tomorrow 8:00 AM, 1:00 PM; Thursday 9:30 AM, 4:00 PM; Saturday 9:00 AM.
Rules: ask if they have an HOA (mention we provide an HOA approval packet) and whether they have a survey or plat of their property. Pool fences must meet local code; say the crew will make sure it does. Never give a firm price.`,
  },
  faqs: [
    { q: "What's in the HOA Approval Kit?", a: "A clean drawing of the fence layout, the material and color specs, product photos and your company info, ready for the homeowner to submit. Faster approval means fewer jobs lost while waiting." },
    { q: "Is the estimator accurate?", a: "It gives a realistic range from your own per-foot prices. The exact price still comes after you measure. Leads arrive with the length, material and gate count already filled in." },
    { q: "How does pool outreach work?", a: "New pools need code-compliant fencing before final inspection. We build relationships with pool builders in your area so they send their customers to you." },
    { q: "How soon will I see more calls?", a: "The Fence Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days, so starting in winter sets up a strong spring." },
  ],
};

export default fencing;
