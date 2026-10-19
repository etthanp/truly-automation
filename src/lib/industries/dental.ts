import type { Industry } from "./types";

const dental: Industry = {
  slug: "dental",
  name: "Dentists",
  who: "dental practices",
  one: "dental practice",
  category: "Health & wellness",
  icon: "🦷",
  tagline: "New patient booking, treatment pricing and recall reminders.",
  meta: {
    title: "Marketing for Dentists and Dental Practices | Truly Automation",
    description:
      "Marketing built for dental practices: 24/7 new patient booking by text, a treatment cost checker, recall and reactivation campaigns, implant and Invisalign funnels, membership plan pages and review campaigns. One dental practice per area.",
  },
  hero: {
    line1: "More new patients.",
    line2: "Fewer empty chairs.",
    sub: "The marketing team built for dental practices. New patients book by text at 9pm, overdue patients come back for their cleanings, and big cases like implants and Invisalign find you first.",
    cards: {
      lead: {
        label: "New Patient Line",
        title: "New patient, cleaning + exam",
        fields: [["Insurance", "Delta Dental PPO"], ["Family", "2 adults, 2 kids"], ["Town", "Huntersville"], ["Booked", "Thursday 8:00 AM"]],
      },
      side: {
        label: "Recall Reactivation",
        title: "Overdue patients",
        rows: [["Texted this month", "380"], ["Cleanings booked", "64"], ["Treatment found", "$41,000"]],
      },
      small: { label: "Implant Funnel", title: "Consult booked", text: "Missing molar, financing questions" },
    },
  },
  problems: [
    { title: "The phone rings during procedures", text: "Your front desk is checking someone out while a new patient calls, and the call goes to voicemail. New patients don't leave messages." },
    { title: "Overdue patients disappear", text: "Hundreds of patients haven't been in for over a year, and nobody has time to call them all." },
    { title: "Big cases go elsewhere", text: "Implant and Invisalign patients research online for weeks, and the practice with the best answers wins." },
    { title: "Patients without insurance hesitate", text: "People without dental insurance assume they can't afford it and put off care." },
  ],
  systems: [
    { icon: "📲", title: "New Patient Line", text: "Missed calls get a text back in seconds that answers insurance questions and books the first visit, even after hours.", tier: 1 },
    { icon: "🧮", title: "Treatment Cost Checker", text: "Patients see typical price ranges for cleanings, crowns, implants and Invisalign before they call.", tier: 1 },
    { icon: "🔁", title: "Recall Reactivation", text: "Patients overdue for a cleaning get friendly texts with open times, filling hygiene chairs automatically.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every visit, so you rank at the top of Google for “dentist near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “dentist near me,” “emergency dentist” and every service you offer.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one dental practice per area. The practice down the road can't hire us.", tier: 1 },
    { icon: "😁", title: "Implant & Invisalign Funnels", text: "Dedicated pages, ads and follow-up for high-value cases, with financing front and center.", tier: 2 },
    { icon: "💳", title: "Membership Plan Pages", text: "Your in-house savings plan explained simply, so patients without insurance book instead of waiting.", tier: 2 },
    { icon: "🚨", title: "Emergency Dentist Ads", text: "Ads that show up when someone searches with a toothache, routed to your open emergency slots.", tier: 2 },
    { icon: "📅", title: "Cancellation Filler", text: "When someone cancels, patients on the waitlist get a text offering the open time.", tier: 2 },
    { icon: "🏢", title: "Local Employer Outreach", text: "Outreach to local businesses so their employees and families become your patients.", tier: 2 },
    { icon: "📋", title: "Treatment Plan Chaser", text: "Gentle follow-up on treatment patients haven't scheduled yet.", tier: 2 },
  ],
  packages: [
    { name: "Cleaning", tagline: "Everything a practice needs to answer every new patient and bring overdue patients back." },
    { name: "Full Smile", tagline: "Cleaning plus implant and Invisalign funnels, membership plans, emergency ads and cancellation filling." },
  ],
  estimator: {
    name: "Treatment Cost Checker",
    question: "What will my treatment cost?",
    blurb: "Patients see honest price ranges before they call, so cost isn't a mystery and more of them book.",
    bullets: ["Uses your real fees", "Shows your membership plan savings", "Every request goes straight to your front desk"],
    projectLabel: "Treatment",
    projects: [
      { key: "newpt", label: "New patient exam + cleaning", unit: "none", fixed: [150, 300], note: "Before insurance. Most PPO plans cover this." },
      { key: "whitening", label: "Professional whitening", unit: "none", fixed: [400, 800], note: "Usually not covered by insurance." },
      { key: "crown", label: "Crown", unit: "count", unitLabel: "Number of teeth", perWord: "tooth", per: [1000, 1800], start: 1, note: "Before insurance." },
      { key: "implant", label: "Dental implant", unit: "count", unitLabel: "Number of teeth", perWord: "tooth", per: [3500, 5500], start: 1, note: "Implant, abutment and crown. Financing available." },
      { key: "aligners", label: "Clear aligners (Invisalign)", unit: "none", fixed: [3500, 6500], note: "Financing available." },
    ],
    toggles: [
      { key: "xrays", label: "Include x-rays", fixed: [50, 150], only: ["newpt"], on: true },
    ],
    cta: "Book my visit",
    after: "Final price after your exam.",
  },
  demo: {
    name: "New Patient Line",
    business: "Lakeside Family Dental",
    greeting:
      "Hi, this is Ava with Lakeside Family Dental. Sorry we missed your call, we're with a patient! I can help right here by text. Are you looking to schedule a visit?",
    chips: ["I'm a new patient", "I have a toothache", "Do you take my insurance?"],
    busy: "Your front desk is with a patient",
    steps: [
      { t: "The call comes in", d: "A family of four just moved to town and needs a dentist. Your front desk is checking someone out, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call the next dentist on Google." },
      { t: "The visit gets booked", d: "Ava answers the insurance question, gets their names and best times, and books the first visit." },
    ],
    goal: "a new patient visit",
    facts: `Business: Lakeside Family Dental (a demo practice on the Truly Automation website)
Location: Huntersville, serving Cornelius, Davidson, Mooresville and north Charlotte
Hours: Mon-Thu 7:30am-5pm, Fri 7:30am-1pm. Same-day emergency visits when available.
Services: cleanings and exams, kids' dentistry, fillings, crowns, implants, clear aligners (Invisalign), whitening, emergency visits.
Insurance: in network with most PPO plans (Delta Dental, Cigna, MetLife, Aetna, Guardian). In-house membership plan for patients without insurance: $29/month covers two cleanings, exams and x-rays a year plus 20% off treatment.
Typical fees before insurance (exact cost after the exam): new patient exam and cleaning $150-$300; whitening $400-$800; crown $1,000-$1,800; implant $3,500-$5,500; clear aligners $3,500-$6,500. Financing available.
Open times this week: Tomorrow 8:00 AM, 2:30 PM; Thursday 8:00 AM, 11:00 AM; Friday 9:00 AM. Emergency slot today at 3:30 PM.
Rules: never give medical or dental advice or a diagnosis. For severe swelling, trouble breathing or swallowing, or heavy bleeding, tell them to call 911 or go to the ER right away. Don't ask for detailed medical history by text; the office collects it at the visit. Say the office will confirm insurance benefits before treatment. Never promise coverage or a final price.`,
  },
  faqs: [
    { q: "Is texting with patients HIPAA-friendly?", a: "The New Patient Line only handles scheduling basics like names, times and insurance carriers. It never asks for medical history, which your office collects securely at the visit." },
    { q: "How does Recall Reactivation work?", a: "Patients who are overdue for a cleaning get friendly texts with open times. Most practices have hundreds of overdue patients, and many book again with one text." },
    { q: "Can you help with implant and Invisalign cases?", a: "Yes. In Full Smile we build dedicated pages, ads and follow-up for high-value cases, with financing explained clearly." },
    { q: "How soon will I see more new patients?", a: "The New Patient Line and Recall Reactivation start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default dental;
