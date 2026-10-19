import type { Industry } from "./types";

const pestControl: Industry = {
  slug: "pest-control",
  name: "Pest Control",
  who: "pest control companies",
  one: "pest control company",
  category: "Home services",
  icon: "🐜",
  tagline: "Recurring plans, seasonal pest alerts and termite leads.",
  meta: {
    title: "Marketing for Pest Control Companies | Truly Automation",
    description:
      "Marketing built for pest control companies: an instant pest plan quote, recurring plan sign-ups with autopay, seasonal pest alerts, termite inspection leads, realtor and property manager outreach. One pest control company per city.",
  },
  hero: {
    line1: "One-time calls",
    line2: "become yearly plans.",
    sub: "The marketing team built only for pest control companies. Instant plan quotes, sign-ups with autopay, and seasonal campaigns that bring the calls in before the bugs do.",
    cards: {
      lead: {
        label: "Bug Line",
        title: "Ants in the kitchen",
        fields: [["Home", "2,200 sq ft"], ["Also seeing", "Spiders in garage"], ["Town", "Concord"], ["Wants", "Quarterly plan"]],
      },
      side: {
        label: "Seasonal Alert",
        title: "Mosquito season starts",
        rows: [["Past customers texted", "1,820"], ["Mosquito add-ons", "64"], ["New plans", "18"]],
      },
      small: { label: "Termite Inspection", title: "Realtor referral booked", text: "Home closing in 3 weeks" },
    },
  },
  problems: [
    { title: "One-and-done treatments", text: "People call when they see bugs, pay for one treatment, and never sign up for a plan." },
    { title: "Cancellations", text: "Customers drop their plan in winter when they stop seeing bugs, and you lose that steady income." },
    { title: "Big companies everywhere", text: "National brands spend millions on ads. Local companies get lost on Google." },
    { title: "Termite work is hard to find", text: "Termite jobs are your biggest tickets, but those homeowners don't know they need you until it's too late." },
  ],
  systems: [
    { icon: "🧮", title: "Instant Plan Quote", text: "Homeowners enter their home size and pests and see your plan prices, then sign up online with autopay.", tier: 1 },
    { icon: "📸", title: "Bug Line", text: "Missed calls get a text back in seconds asking what they're seeing (photos help), then books a treatment.", tier: 1 },
    { icon: "🔄", title: "Plan Saver", text: "Customers who try to cancel or stop paying get a friendly offer to pause or switch plans instead.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “pest control near me” and every pest you treat.", tier: 1 },
    { icon: "📍", title: "Local Pest Pages", text: "Pages for each pest and town (“Termite treatment in Concord”) that beat the national brands in local search.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one pest control company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🦟", title: "Seasonal Pest Alerts", text: "Before mosquito, termite swarm and rodent season, customers get timely offers for the add-ons they'll need.", tier: 2 },
    { icon: "🏡", title: "Realtor & Inspector Program", text: "Termite inspections are needed on many home sales. We build relationships with agents and inspectors who send them.", tier: 2 },
    { icon: "🏢", title: "Commercial & Property Manager Outreach", text: "Restaurants, apartments and offices need recurring service. We reach out for those contracts.", tier: 2 },
    { icon: "🐀", title: "Termite & Rodent Funnel", text: "Pages and ads aimed at your biggest tickets, with free inspection booking.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every quote and inspection that didn't sign up.", tier: 2 },
    { icon: "🦺", title: "Tech Finder", text: "A hiring page and job ads for technicians.", tier: 2 },
  ],
  packages: [
    { name: "Perimeter", tagline: "Everything a pest control company needs to turn one-time calls into recurring plans." },
    { name: "Full Shield", tagline: "Perimeter plus seasonal campaigns, termite and rodent leads, and commercial contracts." },
  ],
  estimator: {
    name: "Instant Plan Quote",
    question: "What will pest control cost?",
    blurb: "Homeowners see your plan prices in 30 seconds and can sign up on the spot. The one-time callers become recurring customers.",
    bullets: ["Uses your plan prices", "Sign-ups go straight to your schedule", "Works the night they spot a roach"],
    projects: [
      { key: "quarterly", label: "Quarterly pest plan (per year)", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [0.18, 0.3], start: 2000 },
      { key: "onetime", label: "One-time treatment", unit: "none", fixed: [150, 350] },
      { key: "termite", label: "Termite treatment", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [0.8, 1.6], start: 2000 },
      { key: "rodent", label: "Rodent exclusion", unit: "none", fixed: [400, 1500] },
    ],
    toggles: [
      { key: "mosquito", label: "Add mosquito season (May to Sept)", fixed: [350, 650], only: ["quarterly"] },
      { key: "termitebond", label: "Add a yearly termite bond", fixed: [250, 450], only: ["termite"] },
    ],
    minimum: 150,
  },
  demo: {
    name: "Bug Line",
    business: "Shield Pest Solutions",
    greeting:
      "Hi, this is Ava with Shield Pest Solutions. Sorry we missed your call, our techs are out on routes! I can help right here by text. What kind of pests are you seeing?",
    chips: ["Ants in my kitchen", "I think I have termites", "How much is a pest plan?"],
    busy: "Your techs are out on routes",
    steps: [
      { t: "The call comes in", d: "A homeowner just found ants all over the kitchen. Your techs are on routes, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call the national brand from the TV ad." },
      { t: "A treatment gets booked", d: "Ava asks what they're seeing, the home size and photos, suggests the right plan, and books a visit." },
    ],
    goal: "a first treatment (ideally on a recurring plan) or a free termite inspection",
    facts: `Business: Shield Pest Solutions (a demo company on the Truly Automation website)
Service area: Charlotte, Concord, Kannapolis, Huntersville, Mooresville and nearby towns
Hours: Mon-Fri 7am-6pm, Sat 8am-12pm. Licensed and insured.
Work: general pest control (ants, roaches, spiders), quarterly pest plans, termite inspections and treatment, termite bonds, rodent control and exclusion, mosquito treatment, wood-destroying insect reports for home sales.
Typical prices (exact price after inspection): quarterly pest plan $35-$50 per month for most homes ($400-$600 per year); one-time treatment $150-$350; termite treatment $1,200-$3,000 for most homes; termite bond $250-$450 per year; rodent exclusion $400-$1,500; mosquito season add-on $350-$650. Free termite inspections.
Open slots: Tomorrow 8:00 AM, 11:00 AM, 3:00 PM; Thursday 9:00 AM, 1:30 PM.
Rules: ask what pests and where, and for a photo if they can. Suggest the quarterly plan when it fits (first treatment is the initial visit). Never give a firm price.`,
  },
  faqs: [
    { q: "How do you turn one-time calls into plans?", a: "Every quote shows your plan prices next to the one-time price, and people can sign up online with autopay. Most homeowners choose the plan when they see the value side by side." },
    { q: "What's the Plan Saver?", a: "When a customer tries to cancel or a payment fails, they get a friendly offer to pause or switch plans instead. Keeping a customer is cheaper than finding a new one." },
    { q: "Can a local company beat the national brands online?", a: "In local search, yes. Pages for each pest and town, steady reviews and a well-run Google profile help you outrank big brands for searches in your area." },
    { q: "How soon will I see more calls?", a: "The Bug Line, online sign-ups and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default pestControl;
