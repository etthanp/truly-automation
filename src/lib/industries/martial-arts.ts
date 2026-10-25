import type { Industry } from "./types";

const martialArts: Industry = {
  slug: "martial-arts",
  name: "Martial Arts Schools",
  who: "martial arts schools",
  one: "martial arts school",
  category: "Kids & education",
  icon: "🥋",
  tagline: "Free trial classes, kids programs and students who stay.",
  meta: {
    title: "Marketing for Martial Arts Schools & Dojos | Truly Automation",
    description:
      "Marketing built for martial arts schools, karate dojos and BJJ academies: free trial class booking, kids and adult program pages, new student follow-up, attendance win-back, birthday parties and review campaigns. One martial arts school per area.",
  },
  hero: {
    line1: "Free trials,",
    line2: "full mats.",
    sub: "The marketing team built for martial arts schools. Parents and adults book a free trial class by text, get followed up after, and enroll before they forget.",
    cards: {
      lead: {
        label: "Trial Class",
        title: "Kids karate, age 7",
        fields: [["Parent", "Wants confidence + focus"], ["Experience", "None"], ["Town", "Matthews"], ["Booked", "Trial, Tue 5 PM"]],
      },
      side: {
        label: "Enrollment",
        title: "This month",
        rows: [["Trial classes", "37"], ["Enrolled", "21"], ["Students back", "8"]],
      },
      small: { label: "Birthday Parties", title: "Ninja party, Sat", text: "12 kids, 3 trials booked after" },
    },
  },
  problems: [
    { title: "Trials that don't enroll", text: "Families try one class and you never hear from them again." },
    { title: "Quiet dropouts", text: "Students stop showing up and quit before anyone notices." },
    { title: "Parents call during class", text: "Your instructors are on the mat when parents call, so nobody answers." },
    { title: "Summer slumps", text: "Enrollment drops every summer when families travel." },
  ],
  systems: [
    { icon: "📞", title: "Dojo Line", text: "Missed calls get a text back in seconds, answer parent questions and book a free trial class.", tier: 1 },
    { icon: "🧮", title: "Program Price Check", text: "Families see your program prices up front, so trials come in ready to enroll.", tier: 1 },
    { icon: "🥇", title: "Trial-to-Enroll Follow-Up", text: "A friendly follow-up after every trial class, so families enroll instead of forgetting.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests to happy families, so you top Google for “karate near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for kids karate, BJJ, kickboxing and self-defense.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one martial arts school per area. Your competitors can't hire us.", tier: 1 },
    { icon: "💛", title: "Attendance Win-Back", text: "Students who miss a week get a check-in before they quit.", tier: 2 },
    { icon: "🎉", title: "Birthday Parties", text: "Martial arts birthday parties that bring a dozen new families through your door.", tier: 2 },
    { icon: "☀️", title: "Summer Camps", text: "Summer and school-break camps that keep enrollment up when families travel.", tier: 2 },
    { icon: "🚌", title: "After-School Pickup", text: "After-school programs promoted to working parents near local schools.", tier: 2 },
    { icon: "👊", title: "Adult Program Pages", text: "Adult BJJ, kickboxing and self-defense pages that bring in a second group.", tier: 2 },
    { icon: "🎁", title: "Buddy Week", text: "Students bring a friend free for a week, and their families get a trial offer.", tier: 2 },
  ],
  packages: [
    { name: "White Belt", tagline: "Everything a martial arts school needs to book trial classes, enroll families and get great reviews." },
    { name: "Black Belt", tagline: "White Belt plus attendance win-back, birthday parties, summer camps, after-school and buddy weeks." },
  ],
  estimator: {
    name: "Program Price Check",
    question: "What do classes cost?",
    blurb: "Families see your program prices in seconds and book a free trial class ready to enroll.",
    bullets: ["Uses your real prices", "First class is free", "Books trials to your calendar"],
    projectLabel: "Program",
    projects: [
      { key: "kids", label: "Kids program (monthly)", unit: "count", unitLabel: "Students", perWord: "student", per: [129, 179], start: 1 },
      { key: "adult", label: "Adult program (monthly)", unit: "count", unitLabel: "Students", perWord: "student", per: [139, 199], start: 1 },
      { key: "camp", label: "Summer camp (week)", unit: "count", unitLabel: "Kids", perWord: "kid", per: [199, 299], start: 1 },
      { key: "party", label: "Birthday party", unit: "none", fixed: [250, 400] },
    ],
    toggles: [{ key: "uniform", label: "Uniform and gear", fixed: [60, 120], only: ["kids", "adult"] }],
    resultLabel: "Your price",
    cta: "Book my free trial",
    after: "Family discounts for siblings.",
  },
  demo: {
    name: "Dojo Line",
    business: "Iron Crane Martial Arts",
    greeting:
      "Hi, this is Kayla with Iron Crane Martial Arts! Sorry we missed your call, we're teaching a class. I can help right here by text. Is this for a child or an adult?",
    chips: ["Classes for my 7 year old", "Adult BJJ", "Book a birthday party"],
    busy: "Your instructors are on the mat",
    steps: [
      { t: "The call comes in", d: "A parent wants their shy 7 year old to build confidence. Your instructors are on the mat, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking about their child and what they're hoping for." },
      { t: "The trial gets booked", d: "Kayla shares the program and books a free trial class." },
    ],
    goal: "a free trial class",
    facts: `Business: Iron Crane Martial Arts (a demo school on the Truly Automation website)
Location: Matthews, serving Mint Hill, Stallings, Indian Trail and south Charlotte
Hours: classes Mon-Thu 4pm-8:30pm, Sat 9am-12pm. Certified black belt instructors, background checked.
Programs: little dragons (ages 4-6), kids karate (7-12), teens, adult BJJ, adult kickboxing, self-defense, summer camps, after-school pickup from nearby schools, birthday parties.
Prices: first class free; kids program $129-$179 per month; adult program $139-$199 per month; siblings get 15% off; uniform and gear $60-$120; summer camp $199-$299 per week; birthday party $250-$400 for up to 15 kids. No long-term contracts.
Open trial classes: Tomorrow 4:30 PM (ages 4-6), 5:15 PM (ages 7-12); Thursday 6:30 PM (adult BJJ); Saturday 10:00 AM (kids).
Rules: ask if it's for a child or adult, their age, experience and what they hope to get out of it (confidence, focus, fitness, self-defense). For kids, always talk with the parent or guardian. If someone mentions an injury or health condition, suggest they check with their doctor first.`,
  },
  faqs: [
    { q: "How do I get trial classes to enroll?", a: "Trial-to-Enroll Follow-Up checks in after every trial class with a friendly text and an offer, so families sign up instead of forgetting." },
    { q: "How do I keep students from quitting?", a: "Attendance Win-Back notices when a student misses classes and checks in with the family before they quit." },
    { q: "How do I handle summer slumps?", a: "Summer camps, buddy weeks and birthday parties keep new families coming in when regular enrollment drops." },
    { q: "How soon will I see more students?", a: "The Dojo Line and free trial offers start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default martialArts;
