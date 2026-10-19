import type { Industry } from "./types";

const siding: Industry = {
  slug: "siding",
  name: "Siding",
  who: "siding contractors",
  one: "siding company",
  category: "Home services",
  icon: "🏘️",
  tagline: "Siding quotes by home size, color visualizer and storm work.",
  meta: {
    title: "Marketing for Siding Contractors | Truly Automation",
    description:
      "Marketing built for siding contractors: a siding estimator by home size and material, a color and style picker, storm damage campaigns, financing pages, neighbor marketing and roofer partnerships. One siding company per city.",
  },
  hero: {
    line1: "A new look outside.",
    line2: "A full calendar inside.",
    sub: "The marketing team built only for siding contractors. Homeowners price their siding and pick colors online, storm damage gets answered first, and every finished house sells the next one on the street.",
    cards: {
      lead: {
        label: "Siding Line",
        title: "Full siding replacement",
        fields: [["Home", "2,200 sq ft, two story"], ["Material", "Fiber cement"], ["Town", "Concord"], ["Color", "Iron Gray"]],
      },
      side: {
        label: "Storm Damage Push",
        title: "Hail last Tuesday",
        rows: [["Homes in the zone", "1,300"], ["Inspection requests", "16"], ["Booked", "9"]],
      },
      small: { label: "Estimate Chaser", title: "Day 14 follow-up sent", text: "Vinyl siding + trim, $17,400" },
    },
  },
  problems: [
    { title: "Long decisions", text: "Siding is a $15,000 to $40,000 decision, and homeowners take months, choosing whoever stayed in touch." },
    { title: "Picking colors stalls everything", text: "People can't picture the finished house, so they keep putting off the decision." },
    { title: "Roofers sell siding too", text: "Storm-chasing roofers bundle siding into insurance jobs, and you never hear about the work." },
    { title: "Hard to stand out", text: "Every siding company's website looks the same, and homeowners compare on price alone." },
  ],
  systems: [
    { icon: "🧮", title: "Siding Estimator", text: "Homeowners enter their home size and material and see a price range on your website.", tier: 1 },
    { icon: "🎨", title: "Color & Style Picker", text: "Homeowners browse colors and styles and send their favorites with the quote request, so decisions move faster.", tier: 1 },
    { icon: "📸", title: "Siding Line", text: "Missed calls get a text back in seconds asking for photos of the house and the problem, then books an estimate.", tier: 1 },
    { icon: "🖼️", title: "Before & After Pages", text: "Every house becomes a before-and-after page that ranks in that neighborhood.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “siding replacement near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one siding company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "⛈️", title: "Storm Damage Push", text: "After hail or high winds, homes in the affected area get an offer for a free siding inspection.", tier: 2 },
    { icon: "💳", title: "Financing Pages", text: "Clear monthly payment options so a whole-house project feels doable.", tier: 2 },
    { icon: "🏠", title: "Roofer Partnerships", text: "Outreach to roofers who don't do siding, so their customers come to you.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards and yard signs around every job. A new house exterior makes the whole street look again.", tier: 2 },
    { icon: "🏡", title: "Realtor Program", text: "Curb appeal sells homes. We connect you with listing agents.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Long-cycle follow-up on every quote, for months, not days.", tier: 2 },
  ],
  packages: [
    { name: "Clapboard", tagline: "Everything a siding company needs to quote online, move color decisions faster and win more jobs." },
    { name: "Full Wrap", tagline: "Clapboard plus storm damage campaigns, financing, roofer partnerships and neighbor marketing." },
  ],
  estimator: {
    name: "Siding Estimator",
    question: "What will new siding cost?",
    blurb: "Homeowners price their siding by home size and material in 30 seconds, and pick colors while they're excited.",
    bullets: ["Uses your prices per square foot", "Every lead texts straight to your phone", "Color picks come with the lead"],
    projects: [
      { key: "vinyl", label: "Vinyl siding", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [5, 9], start: 2000 },
      { key: "fiber", label: "Fiber cement (Hardie)", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [8, 14], start: 2000 },
      { key: "repair", label: "Siding repair", unit: "none", fixed: [400, 2000] },
    ],
    toggles: [
      { key: "twostory", label: "Two-story home", per: [1, 2], only: ["vinyl", "fiber"] },
      { key: "trim", label: "New trim, soffit and fascia", per: [1, 3], only: ["vinyl", "fiber"], on: true },
      { key: "wrap", label: "Add insulated house wrap", per: [0.5, 1.5], only: ["vinyl", "fiber"] },
    ],
    minimum: 400,
  },
  demo: {
    name: "Siding Line",
    business: "Summit Exteriors",
    greeting:
      "Hi, this is Ava with Summit Exteriors. Sorry we missed your call, our crew is on a house right now! I can help right here by text. What's going on with your siding?",
    chips: ["Price for new siding?", "Hail damaged my siding", "Vinyl or Hardie?"],
    busy: "Your crew is on a house",
    steps: [
      { t: "The call comes in", d: "A homeowner wants new siding before selling. Your crew is on a house, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call the storm chaser who knocked last week." },
      { t: "An estimate gets booked", d: "Ava asks about the home size, material and problem, asks for photos, and books an estimate." },
    ],
    goal: "a free estimate",
    facts: `Business: Summit Exteriors (a demo company on the Truly Automation website)
Service area: Charlotte, Concord, Kannapolis, Huntersville, Mooresville and nearby towns
Hours: Mon-Sat 8am-6pm. Licensed and insured.
Work: vinyl siding, fiber cement (James Hardie) siding, siding repair, trim, soffit and fascia, insulated house wrap, storm damage documentation for insurance.
Typical prices (exact price after an estimate): vinyl siding $5-$9 per sq ft of home (most homes $12,000-$22,000); fiber cement $8-$14 per sq ft (most homes $18,000-$35,000); trim, soffit and fascia adds $1-$3 per sq ft; siding repair $400-$2,000. Financing available.
Estimate times this week: Tomorrow 9:00 AM, 4:30 PM; Thursday 10:00 AM; Saturday 9:00 AM.
Rules: ask about the home's size and stories, the current siding, and the problem. For storm damage, say the crew documents it with photos for their insurance, but never promise insurance will pay. Never give a firm price.`,
  },
  faqs: [
    { q: "How does the color picker help close jobs?", a: "Homeowners choose colors and styles while they're excited and send them with the quote request. That removes the biggest reason siding sales stall." },
    { q: "How do Storm Damage Pushes work?", a: "After hail or high winds in your area, homes in the affected zip codes get an offer for a free siding inspection from you, before the storm chasers arrive." },
    { q: "Do you help with financing?", a: "Yes. Financing pages show clear monthly options, and quotes include them, which helps homeowners say yes to bigger projects." },
    { q: "How soon will I see more calls?", a: "The Siding Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default siding;
