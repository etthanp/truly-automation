import type { Industry } from "./types";

const remodeling: Industry = {
  slug: "remodeling",
  name: "Remodelers & ADU Builders",
  who: "remodelers & ADU builders",
  one: "remodeler",
  category: "Construction & outdoor",
  icon: "🔨",
  tagline: "Project budget quotes, pre-qualified consults and client updates.",
  meta: {
    title: "Marketing for Remodelers & ADU Builders | Truly Automation",
    description:
      "Marketing built for remodelers and ADU builders: a project budget estimator, pre-qualified design consults, client build updates, project pages, realtor and investor outreach. One remodeler per city.",
  },
  hero: {
    line1: "Bigger projects.",
    line2: "Better clients.",
    sub: "The marketing team built only for remodelers and ADU builders. Homeowners who know their budget before they call, clients who stay in the loop during the build, and referrals that keep coming.",
    cards: {
      lead: {
        label: "Project Line",
        title: "Kitchen remodel",
        fields: [["Size", "About 200 sq ft"], ["Budget", "$50k to $75k"], ["Town", "Myers Park"], ["Start", "After the holidays"]],
      },
      side: {
        label: "Build Updates",
        title: "The Morgan kitchen, week 3",
        rows: [["Demo", "Done"], ["Electrical rough-in", "Done"], ["Cabinets", "Monday"]],
      },
      small: { label: "Estimate Chaser", title: "Day 14 follow-up sent", text: "Primary bath remodel, $34,500" },
    },
  },
  problems: [
    { title: "Tiny budgets, big dreams", text: "You spend hours on walkthroughs and designs for people who wanted a $60k kitchen for $15k." },
    { title: "Long sales cycles", text: "Remodel and ADU buyers take months to decide. Without follow-up, they hire whoever stayed in touch." },
    { title: "Clients get nervous mid-project", text: "Without updates, clients call constantly, worry about delays and leave anxious reviews." },
    { title: "Your best work stays hidden", text: "Gorgeous finished projects live on your phone instead of in front of your next client." },
  ],
  systems: [
    { icon: "🧮", title: "Project Budget Estimator", text: "Homeowners price kitchens, baths, additions and ADUs on your website and see a realistic budget before they call.", tier: 1 },
    { icon: "🗓️", title: "Pre-Qualified Consults", text: "Consults booked online only after budget, timeline and scope questions, so you meet with real buyers.", tier: 1 },
    { icon: "📸", title: "Project Line", text: "Missed calls get a text back in seconds that collects photos, scope, budget and timeline, then books a consult.", tier: 1 },
    { icon: "🚧", title: "Build Updates", text: "Clients get automatic progress updates and photos at each stage, which means calmer clients and better reviews.", tier: 1 },
    { icon: "🖼️", title: "Project Pages", text: "Every finished project becomes a before-and-after page that ranks in that neighborhood.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one remodeler per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🏡", title: "ADU Feasibility Check", text: "A simple page where homeowners check if their lot might fit an ADU and book a site visit. Great for investors and family housing.", tier: 2 },
    { icon: "🤝", title: "Realtor & Investor Outreach", text: "Agents need pre-sale updates and investors want rentable ADUs. We build those relationships for you.", tier: 2 },
    { icon: "📐", title: "Architect & Designer Partnerships", text: "Outreach to architects and interior designers who need a builder they can trust.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every project: “We're remodeling a home on your street.”", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Long-cycle follow-up on every proposal, for months, not days.", tier: 2 },
    { icon: "🦺", title: "Crew & Sub Finder", text: "Hiring pages and job ads for carpenters, plus outreach to reliable subcontractors.", tier: 2 },
  ],
  packages: [
    { name: "Blueprint", tagline: "Everything a remodeler needs to meet with real buyers and keep clients happy through the build." },
    { name: "Full Build", tagline: "Blueprint plus ADU lead generation, realtor, investor and architect outreach, and neighbor marketing." },
  ],
  estimator: {
    name: "Project Budget Estimator",
    question: "What will my project cost?",
    blurb: "Homeowners see a realistic budget in 30 seconds. The ones who book a consult already know the range, so your evenings go to real projects.",
    bullets: ["Uses your prices per sq ft and finish levels", "Every lead texts straight to your phone", "Filters out tiny budgets before the walkthrough"],
    projects: [
      { key: "kitchen", label: "Kitchen remodel", unit: "count", unitLabel: "Kitchen size (sq ft)", perWord: "sq ft", per: [150, 350], start: 200 },
      { key: "bath", label: "Bathroom remodel", unit: "count", unitLabel: "Bathroom size (sq ft)", perWord: "sq ft", per: [250, 500], start: 80 },
      { key: "addition", label: "Home addition", unit: "count", unitLabel: "Addition size (sq ft)", perWord: "sq ft", per: [200, 400], start: 400 },
      { key: "adu", label: "ADU / backyard cottage", unit: "count", unitLabel: "ADU size (sq ft)", perWord: "sq ft", per: [250, 450], start: 600 },
    ],
    choiceLabel: "Finish level",
    choices: [
      { key: "standard", label: "Standard" },
      { key: "premium", label: "Premium", per: [50, 120] },
    ],
    toggles: [{ key: "design", label: "Include design & permits", fixed: [3000, 9000], on: true }],
    minimum: 10000,
  },
  demo: {
    name: "Project Line",
    business: "Oak & Iron Builders",
    greeting:
      "Hi, this is Ava with Oak & Iron Builders. Sorry we missed your call, our team is on a job site right now! I can help right here by text. What project are you thinking about?",
    chips: ["Kitchen remodel", "Can I build an ADU?", "How long does a bathroom take?"],
    busy: "Your team is on a job site",
    steps: [
      { t: "The call comes in", d: "A homeowner wants to remodel their kitchen. You're on a job site, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call the next contractor on Houzz." },
      { t: "A consult gets booked", d: "Ava asks about scope, budget and timeline, asks for photos, and books a consult with real buyers only." },
    ],
    goal: "an in-home design consultation",
    facts: `Business: Oak & Iron Builders (a demo company on the Truly Automation website)
Service area: Charlotte, Myers Park, Dilworth, Matthews, Fort Mill and nearby towns
Hours: Mon-Fri 8am-5pm. Licensed general contractor, insured.
Work: kitchen remodels, bathroom remodels, home additions, ADUs and backyard cottages, basement finishing, whole-home renovations.
Typical budgets (final price after a consult and design): kitchen $150-$350 per sq ft (most $40k-$90k); bathroom $250-$500 per sq ft (most $20k-$45k); additions $200-$400 per sq ft; ADUs $250-$450 per sq ft (most $150k-$300k); design and permits $3,000-$9,000. Kitchens take 6-10 weeks, baths 4-6 weeks, ADUs 6-10 months including permits.
Consult times this week: Tomorrow 10:00 AM, 3:00 PM; Thursday 9:00 AM; Friday 1:00 PM.
Rules: ask about budget and timeline gently. For ADUs, say zoning depends on the lot and city rules and the team will check during a site visit; never promise an ADU is allowed. Never give a firm price.`,
  },
  faqs: [
    { q: "Won't showing budgets scare people off?", a: "It scares off people who were never going to hire you at your price, which saves you evenings of walkthroughs. Real buyers like knowing the range up front." },
    { q: "How do Build Updates work?", a: "At each stage of the project, your client gets a short update and photos. They feel informed, call less, and leave better reviews." },
    { q: "Is the ADU Feasibility Check legal advice?", a: "No. It gives homeowners general info and books a site visit. Your team confirms zoning and permit rules for their lot." },
    { q: "How soon will I see more leads?", a: "The Project Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default remodeling;
