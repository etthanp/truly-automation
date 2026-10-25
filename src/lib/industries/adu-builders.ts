import type { Industry } from "./types";

const aduBuilders: Industry = {
  slug: "adu-builders",
  name: "ADU & Casita Builders",
  who: "ADU builders",
  one: "ADU builder",
  category: "Construction & outdoor",
  icon: "🏗️",
  tagline: "Backyard home budgets, zoning questions and long-cycle follow-up.",
  meta: {
    title: "Marketing for ADU & Casita Builders | Truly Automation",
    description:
      "Marketing built for ADU, casita and backyard cottage builders: a backyard home budget calculator, lot and zoning questions answered up front, long-cycle follow-up, realtor and lender partners, and review campaigns. One ADU builder per area.",
  },
  hero: {
    line1: "Backyard homes,",
    line2: "from first click.",
    sub: "The marketing team built for ADU and casita builders. Homeowners price their backyard home, answer the lot questions you need, and get followed up for the months it takes them to decide.",
    cards: {
      lead: {
        label: "Backyard Budget",
        title: "1-bed casita, 600 sq ft",
        fields: [["Use", "Mom moving in"], ["Lot", "Alley access"], ["Budget", "$150k-$200k"], ["Booked", "Site visit, Tue"]],
      },
      side: {
        label: "Follow-Up",
        title: "Planning stage",
        rows: [["Leads warming up", "34"], ["Site visits", "8"], ["Designs signed", "3"]],
      },
      small: { label: "Lender Partners", title: "HELOC pre-approval", text: "Lender sent a ready buyer" },
    },
  },
  problems: [
    { title: "Long decisions", text: "Homeowners think about an ADU for six months or more, and most builders stop following up." },
    { title: "Lots of dreamers", text: "Half the calls are curious, not ready, and you can't tell which half before a site visit." },
    { title: "Zoning questions", text: "Every homeowner asks if it's allowed on their lot, and answering takes hours." },
    { title: "Financing scares people off", text: "A $150,000 project feels impossible until someone explains how to pay for it." },
  ],
  systems: [
    { icon: "📞", title: "Backyard Line", text: "Missed calls get a text back in seconds, ask what the ADU is for and book a site visit.", tier: 1 },
    { icon: "🧮", title: "Backyard Budget Calculator", text: "Homeowners pick size and finishes and see a real budget range, so you only meet serious buyers.", tier: 1 },
    { icon: "📐", title: "Lot Check Form", text: "Lot size, setbacks, alley access and utilities gathered before the first call.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every build, so you top Google for “ADU builder near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for ADUs, casitas, guest houses and garage conversions.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one ADU builder per area. Your competitors can't hire us.", tier: 1 },
    { icon: "⏳", title: "Long-Cycle Follow-Up", text: "Months of helpful texts and emails, so you're the builder they call when they're finally ready.", tier: 2 },
    { icon: "🏦", title: "Lender Partners", text: "Local lenders who explain HELOCs and construction loans, and send you buyers who are ready.", tier: 2 },
    { icon: "🏡", title: "Realtor Partners", text: "Agents send buyers who want a lot with room for an ADU or a rental unit.", tier: 2 },
    { icon: "👵", title: "Family Suite Pages", text: "Pages for aging parents, adult kids and caregivers, the top reasons people build.", tier: 2 },
    { icon: "💵", title: "Rental Income Pages", text: "Show what an ADU could rent for in their area, for investors and house hackers.", tier: 2 },
    { icon: "🎥", title: "Build Tours", text: "Video tours of finished ADUs that sell the next one.", tier: 2 },
  ],
  packages: [
    { name: "Foundation", tagline: "Everything an ADU builder needs to price backyard homes, screen out dreamers and get great reviews." },
    { name: "Full Build", tagline: "Foundation plus long-cycle follow-up, lender and realtor partners, family suite and rental income pages." },
  ],
  estimator: {
    name: "Backyard Budget Calculator",
    question: "What will a backyard home cost?",
    blurb: "Homeowners pick the size and finish level and see a realistic budget range, so only serious buyers book a site visit.",
    bullets: ["Uses your real build costs", "Lot details come with every lead", "Books site visits to your calendar"],
    projectLabel: "Build",
    projects: [
      { key: "detached", label: "Detached ADU / casita", unit: "count", unitLabel: "Square feet", perWord: "sq ft", per: [250, 400], start: 600 },
      { key: "garage", label: "Garage conversion", unit: "count", unitLabel: "Square feet", perWord: "sq ft", per: [150, 250], start: 400 },
      { key: "attached", label: "Attached addition", unit: "count", unitLabel: "Square feet", perWord: "sq ft", per: [225, 350], start: 500 },
    ],
    choiceLabel: "Finish level",
    choices: [
      { key: "standard", label: "Standard", per: [0, 0] },
      { key: "upgraded", label: "Upgraded", per: [25, 50] },
      { key: "luxury", label: "Luxury", per: [60, 100] },
    ],
    toggles: [
      { key: "kitchen", label: "Full kitchen", fixed: [15000, 30000] },
      { key: "design", label: "Design & permits handled", fixed: [8000, 15000] },
    ],
    minimum: 50000,
    cta: "Book my site visit",
    after: "Final budget after a site visit.",
  },
  demo: {
    name: "Backyard Line",
    business: "Sonoran Backyard Homes",
    greeting:
      "Hi, this is Sofia with Sonoran Backyard Homes! Sorry we missed your call, our team is on a job site. I can help right here by text. What are you thinking about building?",
    chips: ["A casita for my mom", "How much does an ADU cost?", "Is it allowed on my lot?"],
    busy: "Your team is on a job site",
    steps: [
      { t: "The call comes in", d: "A homeowner wants a casita for their mom. Your team is on a job site, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking what the ADU is for and about their lot." },
      { t: "The site visit gets booked", d: "Sofia shares a budget range, gathers lot details and books a site visit." },
    ],
    goal: "a site visit",
    facts: `Business: Sonoran Backyard Homes (a demo company on the Truly Automation website)
Service area: Phoenix, Glendale, Peoria, Scottsdale, Tempe, Mesa and Chandler
Hours: Mon-Fri 7am-5pm, Sat by appointment. Licensed (ROC), bonded and insured.
Builds: detached ADUs and casitas (studio to 2 bedroom, 300-1,200 sq ft), garage conversions, attached additions, guest houses. We handle design and permits.
Prices (confirmed after a site visit): detached ADU $250-$400 per sq ft (most 600 sq ft casitas $150,000-$240,000); garage conversion $150-$250 per sq ft; attached addition $225-$350 per sq ft. Full kitchen adds $15,000-$30,000; design and permits $8,000-$15,000. Typical timeline 6-9 months including permits. Free site visit.
Open times: Tomorrow 10:00 AM; Thursday 3:00 PM; Saturday 9:00 AM.
Rules: ask what it's for, the approximate size, their city, lot details (backyard size, alley access, pool) and timeline. Don't promise it's allowed on their lot; say we check zoning and setbacks with the city at the site visit. Don't give financing advice; say we can connect them with a local lender. Never give a firm price before the site visit.`,
  },
  faqs: [
    { q: "How do I screen out people who aren't serious?", a: "The budget calculator shows a realistic range up front, and the lot check form gathers details before you spend time on a visit." },
    { q: "What about homeowners who take months to decide?", a: "Long-cycle follow-up keeps you in touch for months with helpful texts and emails, so they call you when they're ready." },
    { q: "Where do ready buyers come from?", a: "Lenders who handle HELOCs and construction loans, and realtors whose buyers want room for an ADU. In Full Build we set up those partners." },
    { q: "How soon will I see more leads?", a: "The Backyard Line and budget calculator start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default aduBuilders;
