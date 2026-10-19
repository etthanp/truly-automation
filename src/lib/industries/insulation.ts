import type { Industry } from "./types";

const insulation: Industry = {
  slug: "insulation",
  name: "Insulation",
  who: "insulation contractors",
  one: "insulation company",
  category: "Home services",
  icon: "🧤",
  tagline: "Comfort and energy quotes, rebate pages and HVAC partners.",
  meta: {
    title: "Marketing for Insulation Contractors | Truly Automation",
    description:
      "Marketing built for insulation and spray foam contractors: an attic and spray foam estimator, comfort checkups, rebate and tax credit pages, seasonal energy campaigns, HVAC and builder partnerships. One insulation company per city.",
  },
  hero: {
    line1: "Hot upstairs?",
    line2: "High power bill?",
    sub: "The marketing team built only for insulation contractors. Homeowners price attic and spray foam work online, learn about the rebates that apply, and book you when the first hot or cold week hits.",
    cards: {
      lead: {
        label: "Comfort Line",
        title: "Attic insulation",
        fields: [["Attic", "About 1,600 sq ft"], ["Problem", "Upstairs 8° hotter"], ["Town", "Huntersville"], ["Home", "Built 1998"]],
      },
      side: {
        label: "Heat Wave Push",
        title: "95° forecast this week",
        rows: [["Homeowners reached", "2,400"], ["Comfort checkups", "22"], ["Rebate questions", "14"]],
      },
      small: { label: "HVAC Partner", title: "Referral from a tech", text: "New AC, attic needs insulation" },
    },
  },
  problems: [
    { title: "Homeowners don't know they need you", text: "People blame the AC for hot rooms and high bills, and call the HVAC company instead of you." },
    { title: "Rebates are confusing", text: "Tax credits and utility rebates could close the sale, but homeowners don't understand them." },
    { title: "Seasonal demand", text: "Calls spike in the first heat wave and cold snap, then disappear." },
    { title: "New construction is locked up", text: "Builders already have an insulation sub, and getting in takes relationships." },
  ],
  systems: [
    { icon: "🧮", title: "Insulation Estimator", text: "Homeowners price attic blown-in, spray foam and crawl space work on your website.", tier: 1 },
    { icon: "🌡️", title: "Comfort Checkup Booker", text: "A bookable home comfort and energy check that finds the insulation and air sealing work homes actually need.", tier: 1 },
    { icon: "📸", title: "Comfort Line", text: "Missed calls get a text back in seconds asking about hot or cold rooms, attic photos and the power bill, then books a checkup.", tier: 1 },
    { icon: "💡", title: "Rebate & Tax Credit Pages", text: "Plain-English pages on the current federal credits and local utility rebates, kept up to date.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “attic insulation near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one insulation company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "☀️", title: "Heat Wave & Cold Snap Push", text: "When extreme weather hits, homeowners in your area get comfort checkup offers.", tier: 2 },
    { icon: "❄️", title: "HVAC Partnerships", text: "HVAC techs see bad attics every day. We build referral relationships so they send you the work.", tier: 2 },
    { icon: "🏗️", title: "Builder Outreach", text: "We reach out to home builders and remodelers for new-construction and addition insulation.", tier: 2 },
    { icon: "🏡", title: "Realtor & Inspector Program", text: "Home inspectors flag thin insulation on sales. We connect you with them.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every job. Homes on the same street were built the same way.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Follow-up on every open quote.", tier: 2 },
  ],
  packages: [
    { name: "R-30", tagline: "Everything an insulation company needs to reach homeowners who think it's their AC's fault." },
    { name: "R-60", tagline: "R-30 plus weather campaigns, HVAC and builder partnerships, and realtor referrals." },
  ],
  estimator: {
    name: "Insulation Estimator",
    question: "What will my insulation cost?",
    blurb: "Homeowners price attic, spray foam and crawl space work in 30 seconds and learn which rebates may apply.",
    bullets: ["Uses your prices per square foot", "Every lead texts straight to your phone", "Works the first hot week of summer"],
    projects: [
      { key: "blown", label: "Attic blown-in insulation", unit: "count", unitLabel: "Attic size (sq ft)", perWord: "sq ft", per: [1.5, 3], start: 1600 },
      { key: "foam", label: "Spray foam (attic or roofline)", unit: "count", unitLabel: "Area (sq ft)", perWord: "sq ft", per: [3, 7], start: 1600 },
      { key: "crawl", label: "Crawl space insulation", unit: "count", unitLabel: "Crawl space size (sq ft)", perWord: "sq ft", per: [2, 4], start: 1500 },
    ],
    toggles: [
      { key: "seal", label: "Air sealing", fixed: [500, 1500], on: true },
      { key: "remove", label: "Remove old insulation", per: [1, 2], only: ["blown", "foam"] },
    ],
    minimum: 800,
  },
  demo: {
    name: "Comfort Line",
    business: "Cozy Home Insulation",
    greeting:
      "Hi, this is Ava with Cozy Home Insulation. Sorry we missed your call, our crew is up in an attic! I can help right here by text. What's going on with your home?",
    chips: ["Upstairs is way too hot", "My power bill is crazy", "Price for spray foam?"],
    busy: "Your crew is up in an attic",
    steps: [
      { t: "The call comes in", d: "A homeowner's upstairs is 8 degrees hotter than downstairs. Your crew is in an attic, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a helpful text before they call the HVAC company and buy a bigger AC." },
      { t: "A comfort checkup gets booked", d: "Ava asks about the problem, the home's age and attic, asks for photos, and books a checkup." },
    ],
    goal: "a free home comfort checkup",
    facts: `Business: Cozy Home Insulation (a demo company on the Truly Automation website)
Service area: Charlotte, Huntersville, Cornelius, Concord, Matthews and nearby towns
Hours: Mon-Fri 7am-6pm, Sat 8am-12pm. Licensed and insured.
Work: attic blown-in insulation, spray foam, crawl space insulation, air sealing, old insulation removal, new construction insulation.
Typical prices (exact price after a free comfort checkup): attic blown-in $1.50-$3 per sq ft (most attics $2,000-$4,500); spray foam $3-$7 per sq ft; crawl space $2-$4 per sq ft; air sealing $500-$1,500; removal $1-$2 per sq ft. Federal tax credits and utility rebates may apply; the homeowner should confirm eligibility.
Checkup times this week: Tomorrow 9:00 AM, 3:00 PM; Thursday 10:00 AM; Saturday 9:00 AM.
Rules: ask which rooms are uncomfortable, the home's age, attic access and their typical power bill. Never promise specific savings or rebate amounts. Never give a firm price.`,
  },
  faqs: [
    { q: "How do you reach people who think it's their AC?", a: "Pages and ads aimed at hot rooms and high bills, plus partnerships with HVAC techs who see bad attics every day, put you in front of homeowners before they buy a bigger AC." },
    { q: "Do you promise rebates?", a: "No. The Rebate & Tax Credit Pages explain what programs exist in plain English. Homeowners confirm their own eligibility, and your checkup covers the details." },
    { q: "What about the slow months?", a: "Heat wave and cold snap campaigns catch homeowners at the moment they're uncomfortable, and builder work keeps crews busy between seasons." },
    { q: "How soon will I see more calls?", a: "The Comfort Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default insulation;
