import type { Industry } from "./types";

const physicalTherapy: Industry = {
  slug: "physical-therapy",
  name: "Physical Therapy",
  who: "physical therapy clinics",
  one: "physical therapy clinic",
  category: "Health & wellness",
  icon: "🦵",
  tagline: "Direct-access booking, visit pricing and plan-of-care follow-through.",
  meta: {
    title: "Marketing for Physical Therapy Clinics | Truly Automation",
    description:
      "Marketing built for physical therapy clinics: evaluation booking by text, visit pricing with and without insurance, missed-visit follow-up, direct access education, physician and coach referral outreach, sports and post-surgery funnels. One PT clinic per area.",
  },
  hero: {
    line1: "Evaluations booked.",
    line2: "Plans completed.",
    sub: "The marketing team built for physical therapy clinics. People in pain book an evaluation by text without waiting for a referral, patients finish their plan of care, and doctors and coaches send you patients.",
    cards: {
      lead: {
        label: "Recovery Line",
        title: "New evaluation",
        fields: [["Issue", "Knee pain, runner"], ["Referral", "Not needed"], ["Town", "Cornelius"], ["Booked", "Tomorrow 7:00 AM"]],
      },
      side: {
        label: "Plan Follow-Through",
        title: "This month",
        rows: [["Missed visits", "64"], ["Rescheduled by text", "49"], ["Plans completed", "Up 22%"]],
      },
      small: { label: "Physician Partner", title: "Referral received", text: "Post-op ACL, starts Monday" },
    },
  },
  problems: [
    { title: "People don't know they can come straight to you", text: "Most patients think they need a doctor's referral first, so they wait weeks or never come." },
    { title: "Patients drop off", text: "Patients feel a little better, miss a visit, and never finish their plan of care." },
    { title: "Referral relationships take time", text: "Orthopedic offices already send patients to the same few clinics." },
    { title: "Cost confusion", text: "Patients don't know what insurance covers or what a visit costs." },
  ],
  systems: [
    { icon: "📲", title: "Recovery Line", text: "Missed calls get a text back in seconds that answers referral and insurance questions and books an evaluation.", tier: 1 },
    { icon: "🧮", title: "Visit Pricing", text: "Clear evaluation and visit pricing with insurance and cash-pay options.", tier: 1 },
    { icon: "📅", title: "Missed Visit Rescheduler", text: "Patients who miss a visit get a text to reschedule before they fall off their plan.", tier: 1 },
    { icon: "🚪", title: "Direct Access Pages", text: "Plain-English pages explaining that patients can see you without a referral, which rank on Google and ChatGPT.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “physical therapy near me,” back pain, knee pain and sports injuries.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one PT clinic per area. Competing clinics can't hire us.", tier: 1 },
    { icon: "🩺", title: "Physician Referral Outreach", text: "Relationships with orthopedic, primary care and chiropractic offices that send patients.", tier: 2 },
    { icon: "🏃", title: "Sports & Running Funnels", text: "Outreach to coaches, run clubs, gyms and youth leagues, with injury screens and talks.", tier: 2 },
    { icon: "🦿", title: "Post-Surgery Pages", text: "Pages for knee, hip and shoulder replacement and ACL recovery that patients find before surgery.", tier: 2 },
    { icon: "⭐", title: "Review Engine", text: "Review requests at discharge, when patients feel their best.", tier: 2 },
    { icon: "🔁", title: "Alumni Check-Ins", text: "Past patients get check-ins and wellness offers, which brings them back when something new hurts.", tier: 2 },
    { icon: "🎤", title: "Community Workshops", text: "Back pain, fall prevention and running workshops promoted and booked.", tier: 2 },
  ],
  packages: [
    { name: "Evaluation", tagline: "Everything a PT clinic needs to book people in pain directly and keep them on their plan." },
    { name: "Full Recovery", tagline: "Evaluation plus physician outreach, sports and post-surgery funnels, alumni check-ins and workshops." },
  ],
  estimator: {
    name: "Visit Pricing",
    question: "What will my therapy cost?",
    blurb: "Patients see clear pricing with and without insurance, so cost isn't the reason they wait.",
    bullets: ["Uses your real rates", "Shows insurance and cash-pay options", "Books straight to your schedule"],
    projectLabel: "Visit",
    projects: [
      { key: "eval", label: "Evaluation", unit: "none", fixed: [120, 220], note: "Cash-pay. Insurance copays are usually lower." },
      { key: "plan", label: "Plan of care", unit: "count", unitLabel: "Number of visits", perWord: "visit", per: [85, 140], start: 8 },
    ],
    toggles: [
      { key: "dry", label: "Add dry needling", per: [25, 45], only: ["plan"] },
    ],
    cta: "Book my evaluation",
    after: "Insurance may lower your cost.",
  },
  demo: {
    name: "Recovery Line",
    business: "Lakeview Physical Therapy",
    greeting:
      "Hi, this is Ava with Lakeview Physical Therapy. Sorry we missed your call, our therapists are with patients! I can help right here by text. What's bothering you?",
    chips: ["Do I need a referral?", "My knee hurts when I run", "Rehab after surgery"],
    busy: "Your therapist is with a patient",
    steps: [
      { t: "The call comes in", d: "A runner's knee has hurt for weeks. Your therapists are with patients, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They learn they don't need a referral before they book a doctor's visit just to get one." },
      { t: "The evaluation gets booked", d: "Ava asks what's going on, answers the insurance question, and books an evaluation." },
    ],
    goal: "an evaluation",
    facts: `Business: Lakeview Physical Therapy (a demo clinic on the Truly Automation website)
Location: Cornelius, serving Davidson, Huntersville and Mooresville
Hours: Mon-Thu 7am-7pm, Fri 7am-3pm.
Services: orthopedic and sports PT, back and neck pain, post-surgery rehab (knee, hip, shoulder, ACL), running injuries, balance and fall prevention, dry needling. One-on-one, hour-long visits.
Direct access: in North Carolina, patients can start PT without a doctor's referral (some insurance plans still require one; the office checks).
Pricing: in network with BCBS, Aetna, Cigna, UnitedHealthcare and Medicare. Cash-pay evaluation $120-$220; follow-up visits $85-$140; dry needling adds $25-$45. Most plans of care are 6-12 visits.
Open evaluation times: Tomorrow 7:00 AM, 12:30 PM; Thursday 4:00 PM; Friday 8:00 AM.
Rules: never diagnose or give medical advice. If they mention chest pain, sudden weakness or numbness on one side, a fresh serious injury, or loss of bladder or bowel control, tell them to call 911 or go to the ER. Don't ask for detailed medical history by text. Never promise insurance coverage.`,
  },
  faqs: [
    { q: "Why focus on direct access?", a: "Most people don't know they can start physical therapy without a referral. Explaining it clearly brings in patients who would otherwise wait weeks or go elsewhere." },
    { q: "How do you keep patients on their plan?", a: "The Missed Visit Rescheduler texts patients who miss a visit so they reschedule before falling off, which means better outcomes and more completed plans." },
    { q: "Can you help with physician referrals?", a: "Yes. In Full Recovery we build relationships with orthopedic, primary care and chiropractic offices." },
    { q: "How soon will I see more evaluations?", a: "The Recovery Line and rescheduling start working the week they go live. Google rankings build over 60 to 90 days." },
  ],
};

export default physicalTherapy;
