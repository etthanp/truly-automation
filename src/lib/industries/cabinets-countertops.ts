import type { Industry } from "./types";

const cabinetsCountertops: Industry = {
  slug: "cabinets-countertops",
  name: "Cabinets & Countertops",
  who: "cabinet and countertop companies",
  one: "cabinet and countertop company",
  category: "Construction & outdoor",
  icon: "🗄️",
  tagline: "Kitchen budgets, showroom visits and builder accounts.",
  meta: {
    title: "Marketing for Cabinet & Countertop Companies | Truly Automation",
    description:
      "Marketing built for cabinet and countertop companies: a kitchen budget calculator, showroom and measure booking, quote follow-up, builder and remodeler accounts, and review campaigns. One cabinet and countertop company per area.",
  },
  hero: {
    line1: "Dream kitchens,",
    line2: "measured fast.",
    sub: "The marketing team built for cabinet and countertop companies. Homeowners price their kitchen, book a showroom visit or measure, and get followed up until they pick their stone.",
    cards: {
      lead: {
        label: "Kitchen Budget",
        title: "Quartz + new cabinets",
        fields: [["Kitchen", "About 30 sq ft of counters"], ["Style", "White shaker"], ["Town", "Greensboro"], ["Booked", "Showroom, Sat"]],
      },
      side: {
        label: "Builder Accounts",
        title: "This quarter",
        rows: [["Builders ordering", "5"], ["Homes in progress", "18"], ["Remodelers", "7"]],
      },
      small: { label: "Quote Follow-Up", title: "Quote opened 3x", text: "Measure booked after follow-up" },
    },
  },
  problems: [
    { title: "Lots of quotes, few yeses", text: "Homeowners collect quotes from three shops and go quiet for weeks." },
    { title: "Big box stores", text: "Home Depot and Lowe's spend millions telling people they're the cheap option." },
    { title: "Showroom traffic is slow", text: "People browse online and never come in to see and touch the materials." },
    { title: "Feast or famine", text: "Builder work comes and goes, and retail homeowners are hard to reach." },
  ],
  systems: [
    { icon: "📞", title: "Kitchen Line", text: "Missed calls get a text back in seconds, ask about their kitchen and book a showroom visit or measure.", tier: 1 },
    { icon: "🧮", title: "Kitchen Budget Calculator", text: "Homeowners pick counters and cabinets and see a real price range before they visit.", tier: 1 },
    { icon: "💬", title: "Quote Follow-Up", text: "Every quote gets friendly follow-ups by text and email, so the ones that go quiet come back.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every install, so you top Google for “countertops near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for quartz, granite, cabinets and kitchen remodels.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one cabinet and countertop company per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🏗️", title: "Builder Accounts", text: "Outreach to local home builders for steady new-construction orders.", tier: 2 },
    { icon: "🔨", title: "Remodeler & Designer Partners", text: "Kitchen remodelers and interior designers who send you their clients.", tier: 2 },
    { icon: "🪨", title: "Slab Arrival Alerts", text: "New slabs posted and sent to past visitors, so they come in to see them.", tier: 2 },
    { icon: "🛁", title: "Bath Vanity Pages", text: "Vanity tops and bathroom cabinets that bring in smaller, faster jobs.", tier: 2 },
    { icon: "♻️", title: "Remnant Sales", text: "Leftover pieces sold for vanities and bars, turning scrap into cash.", tier: 2 },
    { icon: "📷", title: "Kitchen Gallery", text: "Before-and-after photos of your best kitchens, sorted by style and stone.", tier: 2 },
  ],
  packages: [
    { name: "Countertop", tagline: "Everything a cabinet and countertop company needs to price kitchens, follow up on quotes and get great reviews." },
    { name: "Full Kitchen", tagline: "Countertop plus builder accounts, remodeler and designer partners, slab alerts and remnant sales." },
  ],
  estimator: {
    name: "Kitchen Budget Calculator",
    question: "What will my new kitchen cost?",
    blurb: "Homeowners pick their counters and cabinets and see a price range in seconds, so they come in ready to buy.",
    bullets: ["Uses your real prices", "Style and size with every lead", "Books measures and showroom visits"],
    projects: [
      { key: "counters", label: "Countertops", unit: "count", unitLabel: "Counter space (sq ft)", perWord: "sq ft", per: [50, 90], start: 30 },
      { key: "cabinets", label: "New cabinets", unit: "count", unitLabel: "Cabinet run (linear ft)", perWord: "linear ft", per: [250, 600], start: 20 },
      { key: "vanity", label: "Bath vanity top", unit: "count", unitLabel: "Vanities", perWord: "vanity", per: [400, 900], start: 1 },
    ],
    choiceLabel: "Material",
    choices: [
      { key: "quartz", label: "Quartz", only: ["counters"] },
      { key: "granite", label: "Granite", only: ["counters"] },
      { key: "marble", label: "Marble or quartzite", per: [30, 60], only: ["counters"] },
    ],
    toggles: [
      { key: "tearout", label: "Remove old counters", fixed: [200, 500], only: ["counters", "vanity"] },
      { key: "backsplash", label: "Matching backsplash", fixed: [400, 1200], only: ["counters"] },
    ],
    minimum: 400,
    cta: "Book my measure",
  },
  demo: {
    name: "Kitchen Line",
    business: "Stone & Grain Kitchens",
    greeting:
      "Hi, this is Ava with Stone & Grain Kitchens! Sorry we missed your call, we're helping someone in the showroom. I can help right here by text. What are you looking to update?",
    chips: ["New countertops", "Cabinets and counters", "How much is quartz?"],
    busy: "You're on a countertop install",
    steps: [
      { t: "The call comes in", d: "A homeowner wants quartz counters before the holidays. You're on an install, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking about their kitchen and the look they want." },
      { t: "The measure gets booked", d: "Ava shares a price range and books a showroom visit and in-home measure." },
    ],
    goal: "a showroom visit or in-home measure",
    facts: `Business: Stone & Grain Kitchens (a demo company on the Truly Automation website)
Location: showroom in Greensboro, serving High Point, Winston-Salem, Burlington, Kernersville and Oak Ridge
Hours: Mon-Fri 9am-6pm, Sat 10am-3pm. Licensed and insured. Slab yard on site.
Products: quartz, granite, marble and quartzite countertops; semi-custom and custom cabinets; bath vanities and tops; backsplashes; remnants for small projects.
Prices (confirmed after the measure): countertops installed $50-$90 per sq ft (quartz and granite), marble or quartzite $80-$150 per sq ft; tear-out $200-$500; backsplash $400-$1,200. Cabinets $250-$600 per linear foot. Vanity tops $400-$900. Most kitchens: counters $2,500-$6,000, full cabinets and counters $15,000-$40,000. Install 1-2 weeks after the template.
Open times: Tomorrow 11:00 AM (showroom); Thursday 4:00 PM (in-home measure); Saturday 10:00 AM, 1:00 PM (showroom).
Rules: ask what they're updating, the rough kitchen size, the look they want and their town. Invite them to the showroom to see slabs. Never give a firm price before the measure.`,
  },
  faqs: [
    { q: "How do I get quotes to close?", a: "Quote Follow-Up sends friendly texts and emails after every quote, so homeowners who went quiet come back and book." },
    { q: "How do I compete with big box stores?", a: "Show your real prices up front, your slab yard and your installs. Homeowners pick the local shop that feels trustworthy and easy." },
    { q: "Where does steady work come from?", a: "Home builders, remodelers and designers. In Full Kitchen we set up those accounts for you." },
    { q: "How soon will I see more leads?", a: "The Kitchen Line and budget calculator start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default cabinetsCountertops;
