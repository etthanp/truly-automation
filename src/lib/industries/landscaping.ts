import type { Industry } from "./types";

const landscaping: Industry = {
  slug: "landscaping",
  name: "Landscaping & Hardscape",
  who: "landscaping & hardscape companies",
  one: "landscaping company",
  category: "Construction & outdoor",
  icon: "🌿",
  tagline: "Backyard project quotes, design consults and maintenance routes.",
  meta: {
    title: "Marketing for Landscaping & Hardscape Companies | Truly Automation",
    description:
      "Marketing built for landscapers and hardscapers: a backyard project estimator, design consult booking, before-and-after project pages, maintenance plan sign-ups, HOA and builder outreach. One landscaping company per city.",
  },
  hero: {
    line1: "Big backyard projects.",
    line2: "Booked all season.",
    sub: "The marketing team built only for landscaping and hardscape companies. More patios, walls and outdoor kitchens, and maintenance routes that fill themselves.",
    cards: {
      lead: {
        label: "Project Line",
        title: "Paver patio + fire pit",
        fields: [["Size", "About 400 sq ft"], ["Budget", "$12k to $18k"], ["Town", "Waxhaw"], ["Timeline", "Before summer"]],
      },
      side: {
        label: "Spring Pre-Book",
        title: "Early-bird list this month",
        rows: [["Past clients emailed", "530"], ["Consults booked", "19"], ["Maintenance sign-ups", "27"]],
      },
      small: { label: "Estimate Chaser", title: "Day 14 follow-up sent", text: "Retaining wall + steps, $14,600" },
    },
  },
  problems: [
    { title: "Mowing pays the bills, barely", text: "Weekly maintenance keeps crews busy at thin margins. The real profit is in patios, walls and outdoor living, and those leads are hard to find." },
    { title: "Everyone wants it cheap", text: "Homeowners compare your design-build quote to a guy with a truck and a trailer." },
    { title: "Your best work stays hidden", text: "Beautiful projects end up on your phone's camera roll instead of in front of the next customer." },
    { title: "Seasons swing hard", text: "Spring is chaos, winter is dead, and next year's projects don't get lined up early." },
  ],
  systems: [
    { icon: "🧮", title: "Backyard Estimator", text: "Homeowners price patios, retaining walls, turf and sod on your website and send you their project with a budget.", tier: 1 },
    { icon: "📸", title: "Project Line", text: "Missed calls get a text back in seconds that collects photos of the yard, the project idea, budget and timeline.", tier: 1 },
    { icon: "🗓️", title: "Design Consult Booker", text: "Paid or free design consults booked online, with questions that screen out tiny budgets before you drive out.", tier: 1 },
    { icon: "🖼️", title: "Before & After Pages", text: "Every finished project becomes a page with before-and-after photos that ranks in that town and sells the next job.", tier: 1 },
    { icon: "🌱", title: "Maintenance Plans", text: "Customers sign up for weekly or seasonal maintenance online with autopay, so routes fill without phone tag.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one landscaping company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every project: “Like your neighbor's new patio?”", tier: 2 },
    { icon: "🏘️", title: "HOA & Commercial Outreach", text: "We reach out to HOAs, property managers and businesses for maintenance contracts and bid opportunities.", tier: 2 },
    { icon: "🏗️", title: "Builder Partnerships", text: "Outreach to home builders for new-home landscaping packages and model home work.", tier: 2 },
    { icon: "🌸", title: "Spring Pre-Book", text: "Winter campaigns that fill your spring calendar with deposits before the season starts.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open project quote at day 2, 7 and 14.", tier: 2 },
    { icon: "🦺", title: "Crew Finder", text: "A hiring page and job ads for crew members, ready before the spring rush.", tier: 2 },
  ],
  packages: [
    { name: "Curb Appeal", tagline: "Everything a landscaping company needs to win bigger projects and fill maintenance routes." },
    { name: "Estate", tagline: "Curb Appeal plus neighbor marketing, HOA and builder outreach, and a booked spring before it starts." },
  ],
  estimator: {
    name: "Backyard Estimator",
    question: "What will my backyard project cost?",
    blurb: "Homeowners price their patio, wall or turf in 30 seconds. You get real budgets and projects instead of “what would something like this cost?”",
    bullets: ["Uses your prices and the materials you install", "Every lead texts straight to your phone", "Works on weekends when people dream about their yard"],
    projects: [
      { key: "patio", label: "Paver patio", unit: "area", per: [16, 30], start: [20, 16] },
      { key: "wall", label: "Retaining wall", unit: "length", unitLabel: "Wall length (feet)", per: [90, 200], start: 40 },
      { key: "turf", label: "Artificial turf", unit: "area", per: [9, 16], start: [30, 20] },
      { key: "sod", label: "New sod", unit: "area", per: [1.5, 3], start: [50, 40] },
    ],
    toggles: [
      { key: "firepit", label: "Add a fire pit", fixed: [1500, 4000] },
      { key: "lights", label: "Add landscape lighting", fixed: [1500, 4500] },
    ],
    minimum: 1500,
  },
  demo: {
    name: "Project Line",
    business: "Green Valley Landscaping",
    greeting:
      "Hi, this is Jake with Green Valley Landscaping. Sorry we missed your call, the crew is out on a job! I can help right here by text. What are you thinking about doing with your yard?",
    chips: ["I want a paver patio", "Do you do weekly mowing?", "Price for a retaining wall?"],
    busy: "Your crew is out on a job",
    steps: [
      { t: "The call comes in", d: "A homeowner wants a patio and fire pit. Your crews are on two jobs, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call the next landscaper." },
      { t: "A consult gets booked", d: "Jake asks about the project, size, budget and timeline, asks for yard photos, and books a design consult." },
    ],
    goal: "an on-site design consult (or a maintenance start date)",
    facts: `Business: Green Valley Landscaping (a demo company on the Truly Automation website)
Service area: Charlotte, Waxhaw, Matthews, Fort Mill, Indian Land and nearby towns
Hours: Mon-Fri 7am-6pm, Sat 8am-12pm. Licensed and insured.
Work: paver patios and walkways, retaining walls, fire pits and outdoor kitchens, artificial turf, sod, planting and design, landscape lighting, weekly and seasonal maintenance.
Typical prices (final price after an on-site consult): paver patio $16-$30 per sq ft; retaining wall $90-$200 per foot; artificial turf $9-$16 per sq ft; new sod $1.50-$3 per sq ft; fire pit $1,500-$4,000; landscape lighting $1,500-$4,500; weekly mowing usually $45-$75 per visit for a typical yard.
Design consult times this week: Tomorrow 9:00 AM, 2:00 PM; Thursday 10:00 AM, 4:00 PM; Saturday 9:00 AM.
Rules: ask about budget gently ("so we can design something that fits"). Never give a firm price.`,
  },
  faqs: [
    { q: "How does the Backyard Estimator help?", a: "Homeowners see a realistic price range for their project before they call. The leads you get come with a size, a budget and photos, and the people who wanted a $500 patio filter themselves out." },
    { q: "Can you help us sell more maintenance?", a: "Yes. Maintenance plans can be signed up for online with autopay, and we follow up with every project customer to add ongoing care." },
    { q: "Do you work with hardscape-only companies?", a: "Yes. The page, estimator and outreach can focus only on patios, walls and outdoor living if that's your business." },
    { q: "How soon will I see more calls?", a: "The Project Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days, so starting in winter sets up a strong spring." },
  ],
};

export default landscaping;
