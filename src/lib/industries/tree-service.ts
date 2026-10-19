import type { Industry } from "./types";

const treeService: Industry = {
  slug: "tree-service",
  name: "Tree Service",
  who: "tree service companies",
  one: "tree service",
  category: "Home services",
  icon: "🌳",
  tagline: "Photo quotes, storm response and utility-line work.",
  meta: {
    title: "Marketing for Tree Service Companies | Truly Automation",
    description:
      "Marketing built for tree service companies: a tree removal estimator, photo quotes by text, storm response campaigns, job pages, HOA and property manager outreach. One tree service per city.",
  },
  hero: {
    line1: "Tree down on the house?",
    line2: "They call you first.",
    sub: "The marketing team built only for tree service companies. Photo quotes by text, storm response campaigns that put you first in line, and steady trimming work between the big removals.",
    cards: {
      lead: {
        label: "Tree Line",
        title: "Oak leaning toward the house",
        fields: [["Height", "About 60 feet"], ["Near", "Roof + power line"], ["Town", "Mint Hill"], ["Photos", "3 sent"]],
      },
      side: {
        label: "Storm Response",
        title: "High winds last night",
        rows: [["Past customers texted", "390"], ["Emergency calls", "22"], ["Jobs booked", "11"]],
      },
      small: { label: "Estimate Chaser", title: "Day 2 follow-up sent", text: "Two pine removals, $3,200" },
    },
  },
  problems: [
    { title: "Every quote is a drive", text: "You drive out to look at a tree for a homeowner who was just curious, and half those quotes go nowhere." },
    { title: "Storms bring chaos", text: "After a storm, calls flood in faster than you can answer, and the jobs go to whoever calls back first." },
    { title: "Uninsured guys undercut you", text: "Homeowners compare your insured crew to a guy with a chainsaw and a pickup, and pick the cheaper one." },
    { title: "Feast or famine", text: "Big removals come in waves. Without steady trimming and maintenance work, some weeks are slow." },
  ],
  systems: [
    { icon: "🧮", title: "Tree Job Estimator", text: "Homeowners price removals, trimming and stump grinding on your website and send you the job with photos.", tier: 1 },
    { icon: "📸", title: "Tree Line", text: "Missed calls get a text back in seconds asking for photos, tree height and what's nearby, so you can quote from the truck.", tier: 1 },
    { icon: "🛡️", title: "Insured & Certified Pages", text: "Pages that show your insurance, certifications and safety record, so homeowners understand why the cheap guy is a risk.", tier: 1 },
    { icon: "📍", title: "Job Site Pages", text: "Every big removal becomes a page with photos that ranks in that town on Google and ChatGPT.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “tree removal near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one tree service per city. Your competitors can't hire us.", tier: 1 },
    { icon: "⛈️", title: "Storm Response", text: "When high winds or ice hit, past customers and affected neighborhoods get a text and ads offering emergency service.", tier: 2 },
    { icon: "🌿", title: "Yearly Trim Plans", text: "Homeowners sign up for yearly trimming and inspections with autopay, which keeps crews busy between removals.", tier: 2 },
    { icon: "🏘️", title: "HOA & Property Manager Outreach", text: "We reach out to HOAs, apartment communities and commercial properties for maintenance contracts.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every job: “We just took down the tree next door. Worried about yours?”", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open quote at day 2, 7 and 14.", tier: 2 },
    { icon: "🦺", title: "Crew Finder", text: "A hiring page and job ads for climbers and ground crew.", tier: 2 },
  ],
  packages: [
    { name: "Trim", tagline: "Everything a tree service needs to quote from photos and win the jobs the cheap guys chase." },
    { name: "Full Canopy", tagline: "Trim plus storm response, yearly trim plans and HOA contracts for steady work." },
  ],
  estimator: {
    name: "Tree Job Estimator",
    question: "What will my tree work cost?",
    blurb: "Homeowners price removals, trimming and stumps in 30 seconds and send photos. You quote from the truck instead of driving out for every lead.",
    bullets: ["Uses your prices by tree size", "Every lead texts straight to your phone with photos", "Works the night after a storm"],
    projects: [
      { key: "small", label: "Small tree removal (under 30 ft)", unit: "count", unitLabel: "Number of trees", perWord: "tree", per: [300, 800], start: 1 },
      { key: "medium", label: "Medium tree removal (30 to 60 ft)", unit: "count", unitLabel: "Number of trees", perWord: "tree", per: [800, 1800], start: 1 },
      { key: "large", label: "Large tree removal (over 60 ft)", unit: "count", unitLabel: "Number of trees", perWord: "tree", per: [1800, 4000], start: 1 },
      { key: "trim", label: "Tree trimming", unit: "count", unitLabel: "Number of trees", perWord: "tree", per: [250, 800], start: 2 },
      { key: "stump", label: "Stump grinding", unit: "count", unitLabel: "Number of stumps", perWord: "stump", per: [100, 300], start: 2 },
    ],
    toggles: [
      { key: "hazard", label: "Near the house or power lines", per: [300, 1000], only: ["small", "medium", "large"] },
      { key: "stumps", label: "Grind the stumps too", per: [100, 300], only: ["small", "medium", "large"] },
      { key: "haul", label: "Haul away all the wood", per: [100, 300], only: ["small", "medium", "large"], on: true },
    ],
    minimum: 250,
  },
  demo: {
    name: "Tree Line",
    business: "Tall Timber Tree Service",
    greeting:
      "Hi, this is Ava with Tall Timber Tree Service. Sorry we missed your call, our crew is up in a tree right now! I can help right here by text. What's going on with your tree?",
    chips: ["A tree is leaning on my house", "I need a tree removed", "Price for stump grinding?"],
    busy: "Your climber is up a tree",
    steps: [
      { t: "The call comes in", d: "A homeowner has an oak leaning toward their roof. Your climber is up a tree, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get help right away, before they call the guy with the pickup truck." },
      { t: "You can quote from photos", d: "Ava asks for photos, the tree's height and what's nearby, flags emergencies, and books an estimate." },
    ],
    goal: "a free estimate (or emergency service)",
    facts: `Business: Tall Timber Tree Service (a demo company on the Truly Automation website)
Service area: Charlotte, Mint Hill, Matthews, Gastonia, Huntersville and nearby towns
Hours: Mon-Sat 7am-6pm, with 24/7 emergency storm response. Fully insured, ISA certified arborist on staff.
Work: tree removal, trimming and pruning, stump grinding, storm cleanup and emergency removal, lot clearing, tree health checks.
Typical prices (final price after seeing the tree or photos): small tree removal (under 30 ft) $300-$800; medium (30-60 ft) $800-$1,800; large (over 60 ft) $1,800-$4,000+; trimming $250-$800 per tree; stump grinding $100-$300 per stump. Trees near the house or power lines cost more.
Free estimate times this week: Tomorrow 8:00 AM, 1:00 PM; Thursday 9:00 AM, 3:30 PM; Saturday 8:30 AM.
Rules: if a tree is on the house or touching power lines, tell them to stay away from it, call the power company for downed lines, and treat it as an emergency. Ask for photos of the tree. Never give a firm price.`,
  },
  faqs: [
    { q: "Can I really quote from photos?", a: "For a lot of jobs, yes. The Tree Line asks for photos, the height and what's nearby before you ever drive out, so you can give a range from the truck and only visit the serious leads." },
    { q: "How does Storm Response work?", a: "When high winds or ice hit your area, past customers and homes in the affected neighborhoods get a text and see ads for emergency tree service from you, so you're first in line." },
    { q: "How do I compete with uninsured crews?", a: "We make your insurance, certifications and safety record easy to see on every page, and explain why it matters, so homeowners understand the risk of hiring the cheapest guy." },
    { q: "How soon will I see more calls?", a: "The Tree Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default treeService;
