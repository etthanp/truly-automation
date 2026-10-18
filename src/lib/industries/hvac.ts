import type { Industry } from "./types";

const hvac: Industry = {
  slug: "hvac",
  name: "HVAC",
  who: "heating & air companies",
  one: "HVAC company",
  category: "Home services",
  icon: "❄️",
  tagline: "No-cool emergencies, replacement quotes and tune-up plans.",
  meta: {
    title: "Marketing for HVAC Companies | Truly Automation",
    description:
      "Marketing built for heating and air companies: a system replacement estimator, 24/7 no-cool text-back, maintenance plan sign-ups, heat wave campaigns and repair-vs-replace follow-up. One HVAC company per city.",
  },
  hero: {
    line1: "When the AC dies,",
    line2: "they call you first.",
    sub: "The marketing team built only for heating & air companies. Every emergency answered, every old system followed up, and a maintenance list that keeps the trucks busy in the slow months.",
    cards: {
      lead: {
        label: "No-Cool Line",
        title: "AC blowing warm air",
        fields: [["System", "About 14 years old"], ["Home", "2,100 sq ft"], ["Town", "Concord"], ["Urgency", "Baby in the house"]],
      },
      side: {
        label: "Heat Wave Alert",
        title: "98° forecast Thursday",
        rows: [["Tune-up texts sent", "640"], ["Visits booked", "23"], ["Old systems flagged", "11"]],
      },
      small: { label: "Repair or Replace", title: "Replacement quote sent", text: "16-year-old heat pump, $11,800" },
    },
  },
  problems: [
    { title: "Emergencies go to whoever answers", text: "When the AC quits in July, people call down the list. If you're on another job, the call goes to the next company." },
    { title: "Slammed, then dead", text: "Summer and winter are chaos; spring and fall are quiet. Without a plan, techs sit idle for months." },
    { title: "Old systems slip away", text: "Your tech fixes a 16-year-old unit, mentions replacement once, and the homeowner buys a new system from someone else next year." },
    { title: "Maintenance plans don't stick", text: "Members forget to renew and nobody reminds them, so the steady income you counted on keeps shrinking." },
  ],
  systems: [
    { icon: "🧮", title: "System Replacement Estimator", text: "Homeowners enter their home size and system type and get a price range on your website. You get a warm lead for a replacement.", tier: 1 },
    { icon: "🆘", title: "No-Cool Line", text: "Every missed call gets a text back in seconds, 24/7. It asks what's wrong, flags emergencies, and books the visit.", tier: 1 },
    { icon: "🛠️", title: "Tune-Up Club", text: "Online sign-up for maintenance plans with autopay and automatic renewal reminders, so members stay members.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Google Maps and ChatGPT for “AC repair near me” in every town you serve.", tier: 1 },
    { icon: "📍", title: "Job Site Pages", text: "Every install becomes a page like “Heat pump install in Huntersville” that helps you rank in that town.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one HVAC company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🌡️", title: "Heat Wave & Cold Snap Alerts", text: "Before extreme weather hits, past customers get a tune-up offer, so you fill the schedule before the rush.", tier: 2 },
    { icon: "♻️", title: "Repair or Replace Follow-Up", text: "Every old system your techs touch gets a replacement offer with options and financing, sent automatically over the next few months.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open replacement quote at day 2, 7 and 14.", tier: 2 },
    { icon: "🤝", title: "Builder & Property Manager Outreach", text: "We reach out to builders and property managers for new-construction installs and service contracts on rental units.", tier: 2 },
    { icon: "🍂", title: "Shoulder-Season Engine", text: "Spring and fall campaigns for tune-ups, duct cleaning and indoor air quality that keep techs busy in the slow months.", tier: 2 },
    { icon: "🦺", title: "Tech Finder", text: "A hiring page and job ads for technicians and installers.", tier: 2 },
  ],
  packages: [
    { name: "Comfort", tagline: "Everything an HVAC company needs to answer every call, sell more replacements and grow a maintenance list." },
    { name: "Peak Season", tagline: "Comfort plus weather-triggered campaigns, replacement follow-up and outreach for steady work all year." },
  ],
  estimator: {
    name: "System Replacement Estimator",
    question: "What will a new system cost?",
    blurb: "Homeowners get a realistic price range for a new system in 30 seconds, so the ones who call you are ready to talk replacement.",
    bullets: ["Uses your prices and the equipment you sell", "Every lead texts straight to your phone", "Works at 2am when their system dies"],
    projects: [
      { key: "ac", label: "Central AC", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [3, 5], start: 2000 },
      { key: "heatpump", label: "Heat pump", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [3.5, 6], start: 2000 },
      { key: "furnace", label: "Gas furnace", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [2, 3.5], start: 2000 },
      { key: "full", label: "Full system (AC + furnace)", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft of home", per: [5, 8], start: 2000 },
    ],
    choiceLabel: "Efficiency",
    choices: [
      { key: "standard", label: "Standard" },
      { key: "high", label: "High efficiency", per: [1, 2] },
    ],
    toggles: [{ key: "ducts", label: "Replace ductwork too", per: [2, 4] }],
    minimum: 4000,
  },
  demo: {
    name: "No-Cool Line",
    business: "Summit Comfort Heating & Air",
    greeting:
      "Hi, this is Ava with Summit Comfort Heating & Air. So sorry we missed your call, our techs are all out on jobs! I can help right here by text. What's going on with your system?",
    chips: ["My AC stopped cooling", "No heat and it's freezing", "What does a new system cost?"],
    busy: "Your techs are all on calls",
    steps: [
      { t: "The call comes in", d: "A homeowner's AC dies on a 97-degree day. Every tech is on a call, so nobody can grab it." },
      { t: "It texts back in seconds", d: "Instead of voicemail, they get a friendly text before they dial the next company on Google." },
      { t: "The visit gets booked", d: "Ava finds out what's wrong, flags emergencies, gets the address and books a time, then sends you the details." },
    ],
    goal: "a service visit (or a free in-home estimate for a new system)",
    facts: "(HVAC uses the dedicated 'hvac' prompt in the chat route.)",
  },
  faqs: [
    { q: "How does the Tune-Up Club work?", a: "Customers sign up for your maintenance plan on your website and pay automatically. They get reminders before each visit and before renewal, so you keep members instead of losing them every year." },
    { q: "What's Repair or Replace Follow-Up?", a: "When your techs service an older system, the customer gets a series of messages over the next few months with replacement options and financing. Many homeowners aren't ready the day of the repair, but they are when the next breakdown comes." },
    { q: "Will the AI handle emergencies correctly?", a: "It's trained on your rules: what counts as an emergency, which slots to offer, and when to alert you right away. It never diagnoses or gives a binding price; it gets the details and gets the visit on your schedule." },
    { q: "How soon will I see more calls?", a: "The No-Cool Line, Tune-Up Club and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default hvac;
