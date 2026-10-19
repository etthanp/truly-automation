import type { Industry } from "./types";

const garageDoors: Industry = {
  slug: "garage-doors",
  name: "Garage Doors",
  who: "garage door companies",
  one: "garage door company",
  category: "Home services",
  icon: "🚪",
  tagline: "Same-day repair text-back, new door quotes and tune-up plans.",
  meta: {
    title: "Marketing for Garage Door Companies | Truly Automation",
    description:
      "Marketing built for garage door companies: a new door and repair estimator, 24/7 stuck-door text-back, a door style picker, tune-up plans, builder and realtor outreach. One garage door company per city.",
  },
  hero: {
    line1: "Door stuck shut?",
    line2: "They find you first.",
    sub: "The marketing team built only for garage door companies. Every stuck-door call answered, more repairs turned into new doors, and tune-up plans that bring customers back.",
    cards: {
      lead: {
        label: "Stuck Door Line",
        title: "Broken spring, car stuck inside",
        fields: [["Door", "16 ft double, 2009"], ["Opener", "Chain drive"], ["Town", "Ballantyne"], ["Needs", "Today if possible"]],
      },
      side: {
        label: "Repair to Replace",
        title: "Old doors from repairs",
        rows: [["Doors over 15 years", "37"], ["New door quotes sent", "37"], ["Booked installs", "6"]],
      },
      small: { label: "Tune-Up Club", title: "12 tune-ups booked", text: "Yearly reminders went out Monday" },
    },
  },
  problems: [
    { title: "Emergency calls go to whoever answers", text: "A car stuck in the garage won't wait. If you don't pick up, they call the next company on Google." },
    { title: "Fake listings and price gougers", text: "Lead-gen companies with fake addresses crowd Google, and homeowners don't know who to trust." },
    { title: "Repairs, not replacements", text: "You fix springs all day, but the money is in new doors and openers." },
    { title: "No reason to come back", text: "After the repair, customers forget your name until the next emergency." },
  ],
  systems: [
    { icon: "🧮", title: "Door & Repair Estimator", text: "Homeowners price new doors, openers and common repairs on your website and book the visit.", tier: 1 },
    { icon: "🆘", title: "Stuck Door Line", text: "Missed calls get a text back in seconds, 24/7. It finds out what's wrong, flags emergencies, and books the visit.", tier: 1 },
    { icon: "🎨", title: "Door Style Picker", text: "Homeowners browse door styles and colors on your website and request a quote for the one they like.", tier: 1 },
    { icon: "⭐", title: "Real Local Trust Pages", text: "Your real address, real team photos and steady reviews, so homeowners know you're not one of the fake listings.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “garage door repair near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one garage door company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "♻️", title: "Repair to Replace Follow-Up", text: "Every old door your techs repair gets a new-door offer with photos and options over the next few months.", tier: 2 },
    { icon: "🛠️", title: "Tune-Up Club", text: "Yearly tune-up plans with reminders and autopay, which bring steady income and repair work.", tier: 2 },
    { icon: "🏗️", title: "Builder Outreach", text: "We reach out to home builders for new-construction door and opener installs.", tier: 2 },
    { icon: "🏡", title: "Realtor Curb Appeal Program", text: "A new garage door is one of the best-return upgrades before a sale. We connect you with listing agents.", tier: 2 },
    { icon: "🏢", title: "Commercial Door Contracts", text: "Outreach to warehouses, storage facilities and property managers for service contracts.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open new-door quote.", tier: 2 },
  ],
  packages: [
    { name: "Tune-Up", tagline: "Everything a garage door company needs to answer every emergency and sell more new doors." },
    { name: "Full Lift", tagline: "Tune-Up plus repair-to-replace follow-up, yearly plans, and builder, realtor and commercial work." },
  ],
  estimator: {
    name: "Door & Repair Estimator",
    question: "What will my garage door cost?",
    blurb: "Homeowners price a new door, an opener or a common repair in 30 seconds and book you right away.",
    bullets: ["Uses your prices and the doors you install", "Every lead texts straight to your phone", "Works at 6am when the door won't open"],
    projects: [
      { key: "single", label: "New single door (9 ft)", unit: "none", fixed: [1200, 2500] },
      { key: "double", label: "New double door (16 ft)", unit: "none", fixed: [1800, 4500] },
      { key: "opener", label: "New opener", unit: "none", fixed: [450, 900] },
      { key: "spring", label: "Spring repair", unit: "none", fixed: [200, 450] },
    ],
    choiceLabel: "Door style",
    choices: [
      { key: "steel", label: "Steel", only: ["single", "double"] },
      { key: "insulated", label: "Insulated steel", fixed: [300, 800], only: ["single", "double"] },
      { key: "carriage", label: "Carriage house look", fixed: [800, 2500], only: ["single", "double"] },
    ],
    toggles: [
      { key: "smart", label: "Add a smart opener (open from your phone)", fixed: [150, 350], only: ["single", "double", "opener"] },
      { key: "haul", label: "Haul away the old door", fixed: [75, 150], only: ["single", "double"], on: true },
    ],
  },
  demo: {
    name: "Stuck Door Line",
    business: "Liftline Garage Doors",
    greeting:
      "Hi, this is Ava with Liftline Garage Doors. Sorry we missed your call, our techs are on jobs! I can help right here by text. What's going on with your garage door?",
    chips: ["My door won't open", "I heard a loud bang", "Price for a new door?"],
    busy: "Your techs are all on calls",
    steps: [
      { t: "The call comes in", d: "A spring snaps and the car is stuck inside. Your techs are all on calls, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get help before they call a fake listing that charges triple." },
      { t: "The visit gets booked", d: "Ava finds out what happened, tells them not to force the door, and books the next open slot." },
    ],
    goal: "a repair visit (or a free quote for a new door)",
    facts: `Business: Liftline Garage Doors (a demo company on the Truly Automation website)
Service area: Charlotte, Ballantyne, Matthews, Pineville, Fort Mill and nearby towns
Hours: Mon-Sat 7am-7pm, emergency service available. Licensed and insured, locally owned.
Work: broken spring repair, cable and roller repair, opener repair and installation, new garage doors (steel, insulated, carriage house style), smart openers, yearly tune-ups, commercial doors.
Typical prices (exact price after the tech looks at it): service call $79 (waived with repair); spring repair $200-$450; opener install $450-$900; new single door $1,200-$2,500; new double door $1,800-$4,500 (insulated or carriage styles cost more); yearly tune-up $99.
Open slots: Today 2:00 PM, 5:00 PM; Tomorrow 8:00 AM, 10:30 AM, 3:00 PM. Emergencies (car stuck, door stuck open): try same day.
Rules: if a spring is broken, tell them not to try to lift or force the door because it's dangerous. Never give a firm price.`,
  },
  faqs: [
    { q: "How do I stand out from the fake listings?", a: "We make your real address, real team and steady stream of real reviews easy to see everywhere you show up, and keep your Google profile complete. Homeowners trust the company that looks local and real." },
    { q: "What's Repair to Replace Follow-Up?", a: "When your techs repair an older door, the homeowner gets a few messages over the next months with new door options and photos. Many buy the new door the next time something breaks." },
    { q: "Will the AI handle emergencies?", a: "Yes. It flags emergencies like a car stuck inside, gives safety basics (don't force a door with a broken spring), and books the fastest slot based on your rules." },
    { q: "How soon will I see more calls?", a: "The Stuck Door Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default garageDoors;
