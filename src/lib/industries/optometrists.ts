import type { Industry } from "./types";

const optometrists: Industry = {
  slug: "optometrists",
  name: "Optometrists",
  who: "optometrists",
  one: "eye care practice",
  category: "Health & wellness",
  icon: "👓",
  tagline: "Yearly exam recalls, contact reorders and frame sales.",
  meta: {
    title: "Marketing for Optometrists & Eye Care Practices | Truly Automation",
    description:
      "Marketing built for optometrists and eye care practices: online exam booking, yearly recall reminders, insurance questions answered up front, contact lens reorders, frame promotions and review campaigns. One eye care practice per area.",
  },
  hero: {
    line1: "Full exam books,",
    line2: "every month.",
    sub: "The marketing team built for optometrists. New patients book exams online, past patients get their yearly recall, and contact lens reorders come back to you instead of an online store.",
    cards: {
      lead: {
        label: "Exam Line",
        title: "Comprehensive eye exam",
        fields: [["Patient", "New, family of 3"], ["Insurance", "VSP"], ["Town", "Cary"], ["Booked", "Thursday, 4:30 PM"]],
      },
      side: {
        label: "Yearly Recall",
        title: "This month",
        rows: [["Patients due", "318"], ["Exams booked", "121"], ["Contacts reordered", "64"]],
      },
      small: { label: "Frame Promo", title: "New designer frames", text: "22 patients came in to try" },
    },
  },
  problems: [
    { title: "Patients skip their yearly exam", text: "Most people forget until their glasses stop working, and then they book wherever is open." },
    { title: "Online stores take the sale", text: "Patients get the prescription from you, then buy contacts and frames online." },
    { title: "Insurance questions", text: "Your front desk spends hours answering “do you take my insurance?” on the phone." },
    { title: "Retail chains", text: "Big chains with huge ad budgets show up first for “eye exam near me.”" },
  ],
  systems: [
    { icon: "📞", title: "Exam Line", text: "Missed calls get a text back in seconds, answer insurance questions and book the exam.", tier: 1 },
    { icon: "🧮", title: "Exam & Glasses Price Check", text: "Patients see your exam and glasses prices with or without insurance before they book.", tier: 1 },
    { icon: "📅", title: "Yearly Recall", text: "Every patient gets a reminder when their exam is due, so the schedule fills itself.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every visit, so you top Google for “eye doctor near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for eye exams, contacts and kids' eye care.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one eye care practice per area. Your competitors can't hire us.", tier: 1 },
    { icon: "👁️", title: "Contact Lens Reorders", text: "Patients get a text when their supply is running low, with a one-tap reorder through you.", tier: 2 },
    { icon: "🕶️", title: "Frame Promotions", text: "New frame arrivals and sunglasses deals sent to patients, so they shop your optical.", tier: 2 },
    { icon: "🎒", title: "Back-to-School Exams", text: "Kids' eye exam pushes every summer to parents in your area.", tier: 2 },
    { icon: "💳", title: "Use-It-or-Lose-It Reminders", text: "Year-end reminders to use their vision benefits and FSA dollars before they expire.", tier: 2 },
    { icon: "🩺", title: "Medical Eye Care Pages", text: "Dry eye, pink eye and diabetic eye exam pages that bring in medical visits.", tier: 2 },
    { icon: "🤝", title: "Doctor Referrals", text: "Outreach to local doctors and pediatricians who refer patients for eye exams.", tier: 2 },
  ],
  packages: [
    { name: "Clear View", tagline: "Everything an eye care practice needs to book new patients, run yearly recalls and get great reviews." },
    { name: "Full Focus", tagline: "Clear View plus contact reorders, frame promotions, back-to-school pushes and benefit reminders." },
  ],
  estimator: {
    name: "Exam & Glasses Price Check",
    question: "What will my eye exam cost?",
    blurb: "Patients see your exam and glasses prices in seconds, so they book with you instead of a chain.",
    bullets: ["Uses your real prices", "Insurance answered up front", "Books straight to your schedule"],
    projectLabel: "Visit",
    projects: [
      { key: "exam", label: "Eye exam", unit: "count", unitLabel: "People", perWord: "person", per: [100, 200], start: 1 },
      { key: "contacts", label: "Exam + contact lens fitting", unit: "count", unitLabel: "People", perWord: "person", per: [150, 275], start: 1 },
      { key: "glasses", label: "New glasses", unit: "count", unitLabel: "Pairs", perWord: "pair", per: [150, 400], start: 1 },
    ],
    toggles: [
      { key: "retinal", label: "Retinal imaging (no dilation)", per: [30, 45], only: ["exam", "contacts"] },
      { key: "blue", label: "Blue light + anti-glare lenses", per: [60, 120], only: ["glasses"] },
    ],
    resultLabel: "Price without insurance",
    cta: "Book my exam",
    after: "Most vision plans lower this. We check your coverage.",
  },
  demo: {
    name: "Exam Line",
    business: "Clearview Family Eye Care",
    greeting:
      "Hi, this is Grace with Clearview Family Eye Care! Sorry we missed your call, we're with patients. I can help right here by text. Are you looking to book an eye exam?",
    chips: ["Do you take my insurance?", "Eye exam for my kids", "I need new contacts"],
    busy: "Your front desk is checking in patients",
    steps: [
      { t: "The call comes in", d: "A parent needs eye exams for the whole family before school starts. Your front desk is busy, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply that answers their insurance question right away." },
      { t: "The exam gets booked", d: "Grace finds a time for the family and books their exams." },
    ],
    goal: "an eye exam",
    facts: `Business: Clearview Family Eye Care (a demo practice on the Truly Automation website)
Location: Cary, serving Apex, Morrisville, Holly Springs, Raleigh and Durham
Hours: Mon-Fri 9am-6pm, Sat 9am-1pm. Licensed optometrists. Kids and adults.
Services: comprehensive eye exams, contact lens exams and fittings, kids' eye exams, dry eye care, pink eye and eye infections, diabetic eye exams, glasses and sunglasses, contact lens orders.
Insurance: VSP, EyeMed, Davis Vision, Spectera and most medical plans for medical visits. We check coverage before the visit.
Prices without insurance: eye exam $100-$200; exam plus contact lens fitting $150-$275; retinal imaging $30-$45; glasses $150-$400 per pair (frames and lenses). Year supply of contacts quoted by brand.
Open times: Tomorrow 10:30 AM, 4:30 PM; Thursday 9:00 AM, 4:30 PM; Saturday 9:30 AM.
Rules: never diagnose or give medical advice. If they have sudden vision loss, flashes of light with new floaters, a curtain over their vision, a chemical splash or an eye injury, tell them to go to the ER or call 911 right away. For red, painful eyes, offer the soonest open time. Ask whether it's for adults or kids, their insurance and their town.`,
  },
  faqs: [
    { q: "How do I get patients back every year?", a: "Yearly Recall texts and emails every patient when their exam is due, with a link to book, so the schedule fills itself." },
    { q: "How do I keep contact and glasses sales?", a: "Contact Lens Reorders and Frame Promotions bring patients back to your optical instead of an online store." },
    { q: "Does the AI answer insurance questions?", a: "Yes. It tells patients which plans you take and books them, and your team confirms coverage before the visit." },
    { q: "How soon will I see more bookings?", a: "The Exam Line and recall reminders start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default optometrists;
