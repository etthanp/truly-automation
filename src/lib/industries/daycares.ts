import type { Industry } from "./types";

const daycares: Industry = {
  slug: "daycares",
  name: "Daycares & Preschools",
  who: "daycares and preschools",
  one: "daycare",
  category: "Kids & education",
  icon: "🧸",
  tagline: "Tour booking, tuition clarity and a full waitlist.",
  meta: {
    title: "Marketing for Daycares and Preschools | Truly Automation",
    description:
      "Marketing built for child care centers and preschools: tour booking by text, a tuition check, tour follow-up, waitlist management, enrollment season campaigns, parent reviews and employer partnerships. One daycare per area.",
  },
  hero: {
    line1: "Tours booked.",
    line2: "Classrooms full.",
    sub: "The marketing team built for daycares and preschools. Parents book a tour by text in seconds, tuition is clear up front, and open spots fill from a waitlist instead of sitting empty.",
    cards: {
      lead: {
        label: "Tour Line",
        title: "Infant spot",
        fields: [["Child", "4 months old"], ["Start", "January"], ["Schedule", "Full time"], ["Booked", "Tour, Tuesday 9:30 AM"]],
      },
      side: {
        label: "Enrollment Push",
        title: "Fall pre-K",
        rows: [["Families reached", "2,800"], ["Tours booked", "46"], ["Enrolled", "21"]],
      },
      small: { label: "Waitlist", title: "Spot opened in toddlers", text: "Filled in 1 day" },
    },
  },
  problems: [
    { title: "Directors are in classrooms", text: "Parents call while you're covering a room or handling pickup, and they call the next center." },
    { title: "Tours that don't enroll", text: "Families tour several centers and decide weeks later. Without follow-up, they forget you." },
    { title: "Empty spots cost money", text: "Every open spot is lost tuition, and filling it can take weeks." },
    { title: "Trust is everything", text: "Parents choose based on safety, reviews and how they feel about the staff." },
  ],
  systems: [
    { icon: "📲", title: "Tour Line", text: "Missed calls get a text back in seconds that answers the basics and books a tour.", tier: 1 },
    { icon: "🧮", title: "Tuition Check", text: "Parents see weekly tuition by age and schedule up front, so tours are with families who fit.", tier: 1 },
    { icon: "🔁", title: "Tour Follow-Up", text: "A warm series after every tour, with a day-in-the-life, parent reviews and an enrollment link.", tier: 1 },
    { icon: "📋", title: "Waitlist Manager", text: "When a spot opens, waitlisted families get a text right away, and the spot fills fast.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “daycare near me,” infant care and preschool.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one daycare per area. Competing centers can't hire us.", tier: 1 },
    { icon: "🎒", title: "Enrollment Season Campaigns", text: "Fall and summer camp enrollment campaigns that fill classrooms before the year starts.", tier: 2 },
    { icon: "⭐", title: "Parent Review Program", text: "Happy parents asked for reviews at the right moments, which is the biggest trust builder.", tier: 2 },
    { icon: "🏢", title: "Employer Partnerships", text: "Child care partnerships with local hospitals, employers and schools.", tier: 2 },
    { icon: "👩‍🏫", title: "Teacher Spotlights", text: "Staff intros and classroom moments posted every week, with parent permission.", tier: 2 },
    { icon: "☀️", title: "Summer Camp Funnel", text: "Pages and ads for school-age summer camp, filled months ahead.", tier: 2 },
    { icon: "👯", title: "Refer-a-Family", text: "Families get a tuition credit for every family they refer.", tier: 2 },
  ],
  packages: [
    { name: "Nap Time", tagline: "Everything a center needs to book every tour, follow up and fill open spots fast." },
    { name: "Full Day", tagline: "Nap Time plus enrollment campaigns, parent reviews, employer partnerships, teacher spotlights and summer camp." },
  ],
  estimator: {
    name: "Tuition Check",
    question: "What will tuition cost?",
    blurb: "Parents see weekly tuition by age and schedule before they call, so every tour is with a family who fits.",
    bullets: ["Uses your real tuition", "Every inquiry texts straight to your director", "Shows sibling and part-time options"],
    projectLabel: "Age",
    projects: [
      { key: "infant", label: "Infant (6 wks-12 mo)", unit: "none", fixed: [300, 380] },
      { key: "toddler", label: "Toddler (1-2 years)", unit: "none", fixed: [270, 340] },
      { key: "preschool", label: "Preschool / Pre-K (3-5)", unit: "none", fixed: [230, 300] },
      { key: "school", label: "After school (5-12)", unit: "none", fixed: [100, 160] },
    ],
    choiceLabel: "Schedule",
    choices: [
      { key: "full", label: "Full time", fixed: [0, 0], only: ["infant", "toddler", "preschool"] },
      { key: "part", label: "Part time (3 days)", fixed: [-70, -90], only: ["infant", "toddler", "preschool"] },
    ],
    toggles: [
      { key: "sibling", label: "Sibling discount", fixed: [-20, -30] },
    ],
    resultLabel: "Estimated weekly tuition",
    cta: "Book a tour",
    after: "Per week. Meals and snacks included.",
  },
  demo: {
    name: "Tour Line",
    business: "Little Acorns Learning Center",
    greeting:
      "Hi, this is Ava with Little Acorns Learning Center! Sorry we missed your call, our director is in a classroom. I can help right here by text. How old is your little one?",
    chips: ["Do you have infant spots?", "How much is tuition?", "Can we come for a tour?"],
    busy: "Your director is in a classroom",
    steps: [
      { t: "The call comes in", d: "A new mom needs infant care starting in January. Your director is covering a classroom, so nobody can grab it." },
      { t: "It texts back in seconds", d: "She gets a warm reply with tuition and openings before she calls the next center." },
      { t: "The tour gets booked", d: "Ava asks the child's age and start date, shares tuition, and books a tour." },
    ],
    goal: "a tour",
    facts: `Business: Little Acorns Learning Center (a demo center on the Truly Automation website)
Location: Huntersville, serving Cornelius, Davidson and north Charlotte. NC 5-star licensed.
Hours: Mon-Fri 6:30am-6:30pm.
Programs: infants (6 weeks-12 months), toddlers, twos, preschool, NC Pre-K, after school pickup from 4 local elementary schools, summer camp. Secure keypad entry, cameras for parents, CPR-certified teachers. Meals and snacks included.
Weekly tuition (full time): infants $300-$380; toddlers $270-$340; preschool/pre-K $230-$300; after school $100-$160. Part time (3 days) is about $70-$90 less. Sibling discount $20-$30/week. $100 registration fee.
Openings: infant room has 1 spot for January (waitlist after that); toddlers 2 spots now; preschool waitlist for fall.
Tour times: Tuesday 9:30 AM, Wednesday 3:00 PM, Thursday 10:00 AM, Friday 9:00 AM.
Rules: be warm. Ask the child's age, start date and schedule. Never share any information about other children or families. For questions about a specific child's health or special needs, say the director will talk with them at the tour. Never promise a spot until registration is complete.`,
  },
  faqs: [
    { q: "How does the Waitlist Manager work?", a: "When a spot opens, families on the waitlist get a text right away, and the first family to confirm gets it. Spots fill in days instead of weeks." },
    { q: "Should we show tuition on our website?", a: "Usually yes. Parents who see tuition up front and still book a tour are serious, and your director spends less time on tours that were never a fit." },
    { q: "What do parents see on social media?", a: "In Full Day, teacher spotlights and classroom moments, always with parent permission and never showing children whose parents haven't agreed." },
    { q: "How soon will I see more tours?", a: "The Tour Line and follow-up start working the week they go live. Google rankings build over 60 to 90 days." },
  ],
};

export default daycares;
