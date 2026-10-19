import type { Industry } from "./types";

const veterinarians: Industry = {
  slug: "veterinarians",
  name: "Veterinarians",
  who: "veterinary clinics",
  one: "vet clinic",
  category: "Pets",
  icon: "🐾",
  tagline: "New pet booking, visit pricing and vaccine reminders.",
  meta: {
    title: "Marketing for Veterinary Clinics | Truly Automation",
    description:
      "Marketing built for veterinary clinics: new client booking by text, a visit price checker, vaccine and checkup reminders, new puppy and kitten programs, wellness plan pages and dental month campaigns. One vet clinic per area.",
  },
  hero: {
    line1: "New pets booked.",
    line2: "Vaccines on time.",
    sub: "The marketing team built for veterinary clinics. New pet owners book by text, every vaccine and checkup reminder goes out on time, and wellness plans keep pets coming back.",
    cards: {
      lead: {
        label: "Pet Line",
        title: "New puppy visit",
        fields: [["Pet", "Golden retriever, 9 weeks"], ["Needs", "Shots + checkup"], ["Town", "Fort Mill"], ["Booked", "Thursday 10:00 AM"]],
      },
      side: {
        label: "Vaccine Reminders",
        title: "This month",
        rows: [["Pets due", "610"], ["Booked", "382"], ["Wellness plans started", "27"]],
      },
      small: { label: "Dental Month", title: "February promo", text: "Dental cleanings booked: 48" },
    },
  },
  problems: [
    { title: "Phones ring all day", text: "Your front desk is checking in pets and answering refill calls, and new clients get voicemail." },
    { title: "Pets fall behind", text: "Owners forget annual vaccines and checkups, and pets go years without a visit." },
    { title: "Price anxiety", text: "Pet owners worry about surprise bills, so they put off visits until it's an emergency." },
    { title: "Corporate clinics are everywhere", text: "Big chains spend a lot on ads, and independent clinics need to stand out on care and trust." },
  ],
  systems: [
    { icon: "📲", title: "Pet Line", text: "Missed calls get a text back in seconds that books new pets, answers common questions and flags urgent cases.", tier: 1 },
    { icon: "🧮", title: "Visit Price Checker", text: "Owners see typical price ranges for exams, vaccines and dental cleanings, so there's no surprise.", tier: 1 },
    { icon: "💉", title: "Vaccine & Checkup Reminders", text: "Every pet gets a reminder when vaccines and checkups are due, with a booking link.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every visit, so you rank at the top for “vet near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “vet near me,” spay and neuter and every service.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one vet clinic per area. The clinic down the road can't hire us.", tier: 1 },
    { icon: "🐶", title: "New Puppy & Kitten Program", text: "A first-year program promoted to new pet owners, with outreach to local breeders and shelters.", tier: 2 },
    { icon: "💳", title: "Wellness Plan Pages", text: "Monthly wellness plans explained simply, for steady visits and fewer surprise bills.", tier: 2 },
    { icon: "🦷", title: "Pet Dental Month", text: "February dental campaigns that fill your surgery schedule.", tier: 2 },
    { icon: "🏡", title: "New Mover Outreach", text: "Families who just moved to your area get a welcome offer before they pick a vet.", tier: 2 },
    { icon: "🐕", title: "Groomer & Boarder Partners", text: "Referral partnerships with local groomers, trainers and boarding kennels.", tier: 2 },
    { icon: "🎥", title: "Social Content", text: "Patient photos, staff intros and pet care tips posted every week.", tier: 2 },
  ],
  packages: [
    { name: "Checkup", tagline: "Everything a vet clinic needs to book new pets and keep every vaccine and checkup on time." },
    { name: "Full Care", tagline: "Checkup plus a puppy and kitten program, wellness plans, dental month, new mover outreach and partners." },
  ],
  estimator: {
    name: "Visit Price Checker",
    question: "What will my pet's visit cost?",
    blurb: "Pet owners see honest price ranges before they come in, so cost doesn't keep them away.",
    bullets: ["Uses your real fees", "Shows wellness plan savings", "Books straight to your schedule"],
    projectLabel: "Visit",
    projects: [
      { key: "exam", label: "Wellness exam", unit: "none", fixed: [60, 90] },
      { key: "vaccines", label: "Annual vaccines", unit: "none", fixed: [80, 160] },
      { key: "puppy", label: "Puppy or kitten first visit", unit: "none", fixed: [100, 180], note: "Exam, first shots and deworming." },
      { key: "dental", label: "Dental cleaning", unit: "none", fixed: [400, 800], note: "Under anesthesia. Extractions extra." },
      { key: "spay", label: "Spay or neuter", unit: "none", fixed: [300, 600] },
    ],
    choiceLabel: "Pet",
    choices: [
      { key: "cat", label: "Cat", fixed: [0, 0], only: ["dental", "spay"] },
      { key: "small", label: "Dog under 50 lbs", fixed: [50, 100], only: ["dental", "spay"] },
      { key: "large", label: "Dog over 50 lbs", fixed: [150, 250], only: ["dental", "spay"] },
    ],
    toggles: [
      { key: "blood", label: "Add bloodwork", fixed: [120, 200] },
    ],
    cta: "Book my visit",
    after: "The vet confirms at the exam.",
  },
  demo: {
    name: "Pet Line",
    business: "Riverbend Animal Hospital",
    greeting:
      "Hi, this is Ava with Riverbend Animal Hospital. Sorry we missed your call, our team is with a patient! I can help right here by text. Who are we seeing, a dog or a cat?",
    chips: ["New puppy needs shots", "My dog is due for vaccines", "Price for a dental cleaning?"],
    busy: "Your team is with a patient",
    steps: [
      { t: "The call comes in", d: "A family just brought home a puppy and needs a vet. Your front desk is checking in a patient, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a warm text before they call the corporate clinic down the road." },
      { t: "The visit gets booked", d: "Ava asks about the pet, answers price questions, and books the first visit." },
    ],
    goal: "a vet appointment",
    facts: `Business: Riverbend Animal Hospital (a demo clinic on the Truly Automation website)
Location: Fort Mill, serving Tega Cay, Rock Hill, Indian Land and Pineville
Hours: Mon-Fri 7:30am-6pm, Sat 8am-12pm. Dogs and cats.
Services: wellness exams, vaccines, puppy and kitten care, dental cleanings, spay and neuter, surgery, bloodwork, x-rays, microchips, sick visits.
Typical prices (the vet confirms at the exam): wellness exam $60-$90; annual vaccines $80-$160; puppy or kitten first visit $100-$180; dental cleaning $400-$800 plus $50-$250 for larger dogs; spay or neuter $300-$600 plus size; bloodwork $120-$200. Wellness plans from $35/month.
Open times: Tomorrow 9:00 AM, 3:30 PM; Thursday 10:00 AM; Friday 8:30 AM. Same-day sick visits when available.
Rules: never diagnose or give medical advice. If a pet has trouble breathing, collapsed, ate something toxic (chocolate, xylitol, grapes, antifreeze, medication), was hit by a car, has a swollen belly, or is bleeding heavily, tell them to go to the nearest emergency vet right away. Never give a firm price.`,
  },
  faqs: [
    { q: "How do Vaccine & Checkup Reminders work?", a: "Every pet gets a text when vaccines or checkups are due, with a booking link. It keeps pets current and fills your schedule." },
    { q: "Does the Pet Line handle emergencies?", a: "It flags urgent symptoms right away and tells the owner to go to an emergency vet or call your clinic directly. It never gives medical advice." },
    { q: "Can you help us grow our wellness plans?", a: "Yes. In Full Care we explain your plans simply on your site and promote them to every new pet owner." },
    { q: "How soon will I see more new clients?", a: "The Pet Line and reminders start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default veterinarians;
