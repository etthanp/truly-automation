import type { Industry } from "./types";

const chiropractors: Industry = {
  slug: "chiropractors",
  name: "Chiropractors",
  who: "chiropractors",
  one: "chiropractic office",
  category: "Health & wellness",
  icon: "🦴",
  tagline: "New patient offers, care plan pricing and missed-visit follow-up.",
  meta: {
    title: "Marketing for Chiropractors | Truly Automation",
    description:
      "Marketing built for chiropractors: a new patient booking line, care plan pricing, missed-visit and reactivation texts, auto accident and sports funnels, employer workshops and review campaigns. One chiropractic office per area.",
  },
  hero: {
    line1: "Back pain today.",
    line2: "Booked tomorrow.",
    sub: "The marketing team built for chiropractors. People in pain book their first visit by text the same day, care plans are easy to understand, and patients who drift off come back.",
    cards: {
      lead: {
        label: "Relief Line",
        title: "New patient, lower back pain",
        fields: [["Started", "3 days ago, lifting"], ["Insurance", "BCBS"], ["Town", "Matthews"], ["Booked", "Tomorrow 7:30 AM"]],
      },
      side: {
        label: "Reactivation",
        title: "Past patients",
        rows: [["Texted this month", "290"], ["Came back", "41"], ["Care plans restarted", "18"]],
      },
      small: { label: "Missed Visit", title: "Rescheduled by text", text: "Thursday adjustment moved to Friday" },
    },
  },
  problems: [
    { title: "People in pain call once", text: "Someone with a stiff neck calls the first office on Google. If you don't answer, they call the next one." },
    { title: "Patients drop off", text: "Patients feel better after three visits and stop coming before the care plan is done." },
    { title: "Cost confusion", text: "People don't know if insurance covers chiropractic or what a care plan costs, so they don't book." },
    { title: "Hard to stand out", text: "Every chiropractor's website says the same thing, and new patients pick on reviews and convenience." },
  ],
  systems: [
    { icon: "📲", title: "Relief Line", text: "Missed calls get a text back in seconds with your new patient offer and open times, even before you open.", tier: 1 },
    { icon: "🧮", title: "Care Plan Pricing", text: "Patients see first visit and care plan prices up front, with and without insurance.", tier: 1 },
    { icon: "📅", title: "Missed Visit Rescheduler", text: "When a patient misses an adjustment, they get a text to reschedule before they drift away.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests when patients feel their best, so you rank at the top for “chiropractor near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “chiropractor near me,” back pain, neck pain and sciatica.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one chiropractic office per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🚗", title: "Auto Accident Funnel", text: "Pages and ads for car accident injuries, with outreach to local personal injury attorneys.", tier: 2 },
    { icon: "🏃", title: "Sports & Active Funnel", text: "Outreach to gyms, run clubs and youth sports for athletes who need care.", tier: 2 },
    { icon: "🏢", title: "Employer Workshops", text: "Lunch-and-learn talks at local offices and warehouses that bring in new patients.", tier: 2 },
    { icon: "🔁", title: "Reactivation Campaigns", text: "Past patients get friendly check-ins and offers to come back.", tier: 2 },
    { icon: "💳", title: "Wellness Membership Pages", text: "Monthly maintenance plans explained simply, for steady visits and revenue.", tier: 2 },
    { icon: "👨‍👩‍👧", title: "Refer-a-Friend", text: "Patients get a reward for every friend and family member who books.", tier: 2 },
  ],
  packages: [
    { name: "Adjustment", tagline: "Everything a chiropractor needs to book people in pain the same day and keep them on their care plan." },
    { name: "Full Alignment", tagline: "Adjustment plus auto accident and sports funnels, employer workshops, reactivation and memberships." },
  ],
  estimator: {
    name: "Care Plan Pricing",
    question: "What will my care cost?",
    blurb: "New patients see first visit and care plan prices up front, so cost isn't the reason they wait.",
    bullets: ["Uses your real prices", "Shows insurance and cash options", "Books straight to your schedule"],
    projectLabel: "Service",
    projects: [
      { key: "first", label: "First visit (exam + adjustment)", unit: "none", fixed: [60, 150], note: "Ask about our new patient special." },
      { key: "plan", label: "Care plan", unit: "count", unitLabel: "Number of visits", perWord: "visit", per: [40, 65], start: 12 },
      { key: "single", label: "Single adjustment", unit: "none", fixed: [45, 75] },
    ],
    toggles: [
      { key: "xray", label: "Include x-rays", fixed: [50, 150], only: ["first"] },
      { key: "massage", label: "Add massage therapy", per: [20, 35], only: ["plan"] },
    ],
    cta: "Book my first visit",
    after: "Insurance may lower your cost.",
  },
  demo: {
    name: "Relief Line",
    business: "Peak Spine & Wellness",
    greeting:
      "Hi, this is Ava with Peak Spine & Wellness. Sorry we missed your call, the doctor is with a patient! I can help right here by text. What's bothering you?",
    chips: ["My lower back is killing me", "I was in a car accident", "Do you take insurance?"],
    busy: "The doctor is with a patient",
    steps: [
      { t: "The call comes in", d: "Someone hurt their back lifting boxes and wants help today. The doctor is with a patient, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a caring text before they call the next chiropractor on Google." },
      { t: "The first visit gets booked", d: "Ava asks what's going on, answers the insurance question, and books the soonest opening." },
    ],
    goal: "a first visit",
    facts: `Business: Peak Spine & Wellness (a demo practice on the Truly Automation website)
Location: Matthews, serving Mint Hill, Indian Trail, Stallings and south Charlotte
Hours: Mon, Wed, Thu 7am-6pm; Tue 2pm-6pm; Fri 7am-12pm.
Services: chiropractic adjustments, spinal decompression, sports chiropractic, auto accident injury care, massage therapy, wellness memberships.
Insurance: in network with BCBS, Aetna, Cigna and UnitedHealthcare; auto accident cases accepted. New patient special: $49 first visit with exam and adjustment for cash patients.
Typical prices (exact plan after the exam): first visit $60-$150; adjustments $40-$65 per visit; x-rays $50-$150; massage add-on $20-$35. Wellness membership $79/month for 4 adjustments.
Open times: Tomorrow 7:30 AM, 4:00 PM; Thursday 9:00 AM, 5:00 PM; Friday 8:00 AM.
Rules: never diagnose or give medical advice. If they mention numbness spreading, loss of bladder or bowel control, chest pain, or a fresh serious injury, tell them to go to the ER or call 911 right away. Don't ask for detailed medical history by text. Never promise insurance coverage or a firm price.`,
  },
  faqs: [
    { q: "How fast does the Relief Line respond?", a: "In seconds. People in pain want help today, so it shares your new patient offer and soonest openings right away." },
    { q: "How do you keep patients on their care plans?", a: "The Missed Visit Rescheduler texts patients who miss an appointment so they reschedule before they drift away, and reactivation campaigns bring back past patients." },
    { q: "Can you help with auto accident cases?", a: "Yes. In Full Alignment we build auto accident pages and ads and reach out to local personal injury attorneys." },
    { q: "How soon will I see more new patients?", a: "The Relief Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default chiropractors;
