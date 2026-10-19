import type { Industry } from "./types";

const septic: Industry = {
  slug: "septic",
  name: "Septic",
  who: "septic companies",
  one: "septic company",
  category: "Home services",
  icon: "🚽",
  tagline: "Pumping reminders, emergency text-back and real estate inspections.",
  meta: {
    title: "Marketing for Septic Companies | Truly Automation",
    description:
      "Marketing built for septic companies: a pumping and repair estimator, emergency text-back, automatic pumping reminders, real estate septic inspections, builder and perc test partnerships. One septic company per city.",
  },
  hero: {
    line1: "Every tank needs pumping.",
    line2: "Make sure it's you.",
    sub: "The marketing team built only for septic companies. Customers get reminded before their tank backs up, emergencies get answered fast, and realtors send you every septic inspection.",
    cards: {
      lead: {
        label: "Septic Line",
        title: "Slow drains, gurgling",
        fields: [["Last pumped", "About 6 years ago"], ["Tank", "1,000 gallon"], ["Town", "Stanley"], ["Urgency", "Getting worse"]],
      },
      side: {
        label: "Pumping Reminders",
        title: "Due this month",
        rows: [["Customers reminded", "212"], ["Pumpings booked", "64"], ["Riser add-ons", "9"]],
      },
      small: { label: "Real Estate Inspection", title: "Booked for a closing", text: "Agent referral, closing in 12 days" },
    },
  },
  problems: [
    { title: "Customers forget about their tank", text: "Most homeowners never think about the septic until it backs up, and then they call whoever answers first." },
    { title: "Emergencies after hours", text: "Backups happen on weekends and holidays, and a missed call means the job goes elsewhere." },
    { title: "Real estate inspections are time-sensitive", text: "Agents need fast inspections before closing and go with whoever responds first." },
    { title: "Big jobs are rare", text: "Pumping keeps trucks moving, but drain field and system replacements are where the money is." },
  ],
  systems: [
    { icon: "🧮", title: "Septic Estimator", text: "Homeowners price pumping, inspections, repairs and drain field work on your website.", tier: 1 },
    { icon: "🆘", title: "Septic Line", text: "Missed calls get a text back in seconds, 24/7. It asks about symptoms, flags backups, and books the visit.", tier: 1 },
    { icon: "⏰", title: "Pumping Reminders", text: "Every customer gets an automatic reminder when they're due (usually every 3 to 5 years), with a booking link.", tier: 1 },
    { icon: "📚", title: "Septic Care Pages", text: "Simple pages on warning signs and what not to flush that rank on Google and ChatGPT and bring in local homeowners.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “septic pumping near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one septic company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🏡", title: "Real Estate Inspection Program", text: "We build relationships with agents and lenders so you're the go-to for septic inspections before closing.", tier: 2 },
    { icon: "🏗️", title: "Builder & Perc Test Partnerships", text: "Outreach to home builders and soil scientists for new system installs on new lots.", tier: 2 },
    { icon: "♻️", title: "Repair to Replace Follow-Up", text: "Failing systems your techs flag get replacement and drain field offers with financing over the following months.", tier: 2 },
    { icon: "🛡️", title: "Maintenance Plans", text: "Yearly plans with inspections and scheduled pumping, paid monthly.", tier: 2 },
    { icon: "🏢", title: "Commercial & Property Manager Outreach", text: "Restaurants, churches and rental properties with septic or grease traps, reached directly.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Follow-up on every open repair and replacement quote.", tier: 2 },
  ],
  packages: [
    { name: "Pump Out", tagline: "Everything a septic company needs to answer every emergency and bring customers back on schedule." },
    { name: "Full System", tagline: "Pump Out plus real estate inspections, builder partnerships and big-job follow-up." },
  ],
  estimator: {
    name: "Septic Estimator",
    question: "What will my septic work cost?",
    blurb: "Homeowners price pumping, inspections and repairs in 30 seconds, then book. You get the tank size and symptoms before you roll the truck.",
    bullets: ["Uses your prices", "Every lead texts straight to your phone", "Works at night when the drains back up"],
    projects: [
      { key: "pump", label: "Tank pumping", unit: "none", fixed: [325, 600] },
      { key: "inspection", label: "Inspection (real estate)", unit: "none", fixed: [300, 600] },
      { key: "repair", label: "Pump or baffle repair", unit: "none", fixed: [400, 1500] },
      { key: "drainfield", label: "Drain field replacement", unit: "none", fixed: [6000, 15000] },
      { key: "system", label: "New septic system", unit: "none", fixed: [9000, 25000] },
    ],
    toggles: [
      { key: "riser", label: "Add a riser (easier future access)", fixed: [300, 800], only: ["pump", "inspection", "repair"] },
      { key: "dig", label: "Lid needs digging up", fixed: [75, 200], only: ["pump", "inspection"] },
    ],
  },
  demo: {
    name: "Septic Line",
    business: "Clearwater Septic",
    greeting:
      "Hi, this is Ava with Clearwater Septic. Sorry we missed your call, our truck is out on a job! I can help right here by text. What's going on with your septic?",
    chips: ["My drains are backing up", "I need my tank pumped", "Inspection for a home sale"],
    busy: "Your truck is out pumping a tank",
    steps: [
      { t: "The call comes in", d: "A homeowner's drains are gurgling and slow. Your truck is out on a job, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get help before they call the next septic company." },
      { t: "The visit gets booked", d: "Ava asks about symptoms and when it was last pumped, flags backups, and books the visit." },
    ],
    goal: "a pumping, inspection or service visit",
    facts: `Business: Clearwater Septic (a demo company on the Truly Automation website)
Service area: Gastonia, Stanley, Dallas, Lincolnton, Mount Holly, Belmont and nearby rural towns
Hours: Mon-Fri 7am-6pm, Sat 8am-12pm, emergency service 24/7. Licensed and insured.
Work: septic tank pumping, real estate septic inspections, pump and baffle repair, risers, drain field repair and replacement, new septic system installs, maintenance plans.
Typical prices (exact price after the visit): pumping $325-$600 for most residential tanks; real estate inspection $300-$600; pump or baffle repair $400-$1,500; riser $300-$800; drain field replacement $6,000-$15,000; new system $9,000-$25,000.
Open slots: Tomorrow 8:00 AM, 1:00 PM; Thursday 9:00 AM, 2:00 PM. Backups: try same day.
Rules: if sewage is backing up into the house, tell them to stop using water (no laundry, dishwasher or flushing) and treat it as urgent. Ask when it was last pumped and the tank size if they know. For home sales, ask the closing date. Never give a firm price.`,
  },
  faqs: [
    { q: "How do Pumping Reminders work?", a: "We keep track of when each customer was last pumped and send a friendly reminder with a booking link when they're due. It's steady work you already earned." },
    { q: "Can you get us real estate inspections?", a: "Yes. In Full System we build relationships with agents and lenders who need septic inspections before closing, so you're the company they call." },
    { q: "What about emergencies?", a: "The Septic Line answers in seconds, 24/7, tells them to stop using water if sewage is backing up, and books or alerts you based on your rules." },
    { q: "How soon will I see more calls?", a: "The Septic Line, reminders and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default septic;
