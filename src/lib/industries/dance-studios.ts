import type { Industry } from "./types";

const danceStudios: Industry = {
  slug: "dance-studios",
  name: "Dance Studios",
  who: "dance studios",
  one: "dance studio",
  category: "Kids & education",
  icon: "🩰",
  tagline: "Season registration, trial classes and recital-ready families.",
  meta: {
    title: "Marketing for Dance Studios | Truly Automation",
    description:
      "Marketing built for dance studios: fall registration pushes, free trial class booking, class finder by age and style, recital and tuition reminders, summer camps and review campaigns. One dance studio per area.",
  },
  hero: {
    line1: "Full classes",
    line2: "by fall registration.",
    sub: "The marketing team built for dance studios. Parents find the right class for their child's age, book a trial, and register for the season before the classes fill.",
    cards: {
      lead: {
        label: "Class Finder",
        title: "Ballet + tap, age 5",
        fields: [["Dancer", "New, first class"], ["Day", "Weekday afternoons"], ["Town", "Apex"], ["Booked", "Trial, Wed 4:30"]],
      },
      side: {
        label: "Fall Registration",
        title: "August",
        rows: [["Families reached", "520"], ["Trials booked", "64"], ["Registered", "47"]],
      },
      small: { label: "Recital Reminders", title: "Costume fees due", text: "Sent to 112 families" },
    },
  },
  problems: [
    { title: "Registration crunch", text: "Most families decide in a few weeks of August, and missed calls mean lost dancers for the whole year." },
    { title: "Which class is right?", text: "Parents don't know which class fits their child's age and level, so they call with questions." },
    { title: "Dancers don't come back", text: "Families finish the season and don't re-enroll in the fall." },
    { title: "Admin overload", text: "Tuition, costume fees and recital details eat your office hours." },
  ],
  systems: [
    { icon: "📞", title: "Studio Line", text: "Missed calls get a text back in seconds, help parents pick a class and book a trial.", tier: 1 },
    { icon: "🧮", title: "Tuition Price Check", text: "Parents pick the classes per week and see monthly tuition before they register.", tier: 1 },
    { icon: "🩰", title: "Class Finder", text: "Parents enter their child's age and favorite style and get the right class.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests to happy families, so you top Google for “dance classes near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for ballet, hip hop, tap and toddler dance.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one dance studio per area. Your competitors can't hire us.", tier: 1 },
    { icon: "📅", title: "Fall Registration Push", text: "Ads, texts and emails timed for August, when families pick their activities.", tier: 2 },
    { icon: "🔁", title: "Re-Enrollment Reminders", text: "Current families get early re-enrollment offers before the season ends.", tier: 2 },
    { icon: "🎭", title: "Recital & Tuition Reminders", text: "Costume fees, tuition and recital details sent automatically.", tier: 2 },
    { icon: "☀️", title: "Summer Camps", text: "Princess camps, intensives and summer classes that keep dancers busy.", tier: 2 },
    { icon: "🎂", title: "Dance Birthday Parties", text: "Birthday parties that bring new families into the studio.", tier: 2 },
    { icon: "🏆", title: "Competition Team Pages", text: "Pages for your competition team that attract serious dancers.", tier: 2 },
  ],
  packages: [
    { name: "First Position", tagline: "Everything a dance studio needs to help parents pick a class, book trials and get great reviews." },
    { name: "Center Stage", tagline: "First Position plus fall registration pushes, re-enrollment, recital reminders, camps and parties." },
  ],
  estimator: {
    name: "Tuition Price Check",
    question: "What will dance classes cost?",
    blurb: "Parents pick classes per week and see monthly tuition in seconds, then book a free trial.",
    bullets: ["Uses your real tuition", "Age and style with every lead", "Books trials to your calendar"],
    projectLabel: "Class",
    projects: [
      { key: "weekly", label: "Weekly classes", unit: "count", unitLabel: "Classes per week", perWord: "class", per: [65, 95], start: 1 },
      { key: "tots", label: "Toddler & me (ages 2-3)", unit: "none", fixed: [55, 75] },
      { key: "camp", label: "Summer camp (week)", unit: "none", fixed: [175, 275] },
    ],
    toggles: [
      { key: "registration", label: "Yearly registration fee", fixed: [35, 50], only: ["weekly"] },
    ],
    resultLabel: "Monthly tuition",
    cta: "Book my free trial",
    after: "Recital costumes billed separately.",
  },
  demo: {
    name: "Studio Line",
    business: "Pointe & Rhythm Dance Studio",
    greeting:
      "Hi, this is Emma with Pointe & Rhythm Dance Studio! Sorry we missed your call, we're teaching a class. I can help right here by text. How old is your dancer?",
    chips: ["Ballet for my 5 year old", "Hip hop for a teen", "Toddler classes"],
    busy: "You're teaching a class",
    steps: [
      { t: "The call comes in", d: "A parent wants ballet for their 5 year old before fall classes fill. You're teaching, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking about their dancer's age and favorite style." },
      { t: "The trial gets booked", d: "Emma finds the right class and books a free trial." },
    ],
    goal: "a free trial class",
    facts: `Business: Pointe & Rhythm Dance Studio (a demo studio on the Truly Automation website)
Location: Apex, serving Cary, Holly Springs, Fuquay-Varina and New Hill
Hours: classes Mon-Thu 3:30pm-8:30pm, Sat 9am-1pm. Experienced, background checked teachers.
Classes: toddler and me (2-3), combo ballet and tap (4-6), ballet, jazz, tap, hip hop, lyrical, contemporary (7-18), adult classes, competition team (by audition), summer camps, birthday parties.
Tuition: first class free; one class per week $65-$95 per month, each extra class adds about the same; toddler and me $55-$75 per month; sibling discount $10-$20 per month; yearly registration fee $35-$50; summer camp $175-$275 per week. Recital costumes about $75-$100 each, billed separately.
Open trial classes: Tomorrow 4:30 PM (ages 4-6 combo), 6:00 PM (teen hip hop); Wednesday 4:30 PM (ballet 7-9); Saturday 9:30 AM (toddler and me).
Rules: ask the dancer's age, experience, favorite style and which days work. For kids, talk with the parent or guardian. If a dancer has an injury, suggest checking with their doctor before class.`,
  },
  faqs: [
    { q: "How do I fill classes for the season?", a: "A fall registration push timed for August, plus the Class Finder and Studio Line, gets families to book trials and register before classes fill." },
    { q: "How do I get families to come back next year?", a: "Re-enrollment reminders give current families an early offer before the season ends." },
    { q: "Can it handle tuition and recital reminders?", a: "Yes. Tuition, costume fees and recital details go out automatically, so your office has more time." },
    { q: "How soon will I see more dancers?", a: "The Studio Line and free trial offers start working the week they go live. Start in July for the best fall registration." },
  ],
};

export default danceStudios;
