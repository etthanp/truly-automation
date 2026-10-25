import type { Industry } from "./types";

const yogaPilates: Industry = {
  slug: "yoga-pilates",
  name: "Yoga & Pilates Studios",
  who: "yoga and pilates studios",
  one: "yoga or pilates studio",
  category: "Health & wellness",
  icon: "🧘",
  tagline: "Intro offers, full classes and members who stay.",
  meta: {
    title: "Marketing for Yoga & Pilates Studios | Truly Automation",
    description:
      "Marketing built for yoga, pilates and barre studios: intro offers that convert, class booking by text, new member onboarding, win-back for lapsed members, corporate wellness and review campaigns. One yoga or pilates studio per area.",
  },
  hero: {
    line1: "Full classes,",
    line2: "loyal members.",
    sub: "The marketing team built for yoga and pilates studios. New students grab an intro offer, get welcomed into their first class, and turn into members who stay.",
    cards: {
      lead: {
        label: "Intro Offer",
        title: "3 classes for $39",
        fields: [["Student", "New, beginner"], ["Interest", "Reformer pilates"], ["Town", "Wilmington"], ["Booked", "Tues 6 PM class"]],
      },
      side: {
        label: "Member Journey",
        title: "This month",
        rows: [["Intro offers sold", "42"], ["Became members", "19"], ["Lapsed members back", "11"]],
      },
      small: { label: "Win-Back", title: "Missed you!", text: "Lapsed member rebooked" },
    },
  },
  problems: [
    { title: "Intro offers that go nowhere", text: "People buy the intro deal, come once and never come back." },
    { title: "Members quietly drift away", text: "Nobody notices a member stopped coming until they cancel." },
    { title: "Empty midday classes", text: "Prime time is packed while 11 AM and 1 PM classes sit half empty." },
    { title: "Big chains and apps", text: "Franchises and booking apps take students and a cut of every class." },
  ],
  systems: [
    { icon: "📞", title: "Studio Line", text: "Missed calls get a text back in seconds, answer beginner questions and book a first class.", tier: 1 },
    { icon: "🧮", title: "Class Pass Price Check", text: "Students compare drop-ins, class packs and memberships and pick the right one.", tier: 1 },
    { icon: "🌱", title: "New Student Welcome", text: "A friendly welcome series after the first class that turns intro offers into memberships.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after a student's third class, so you top Google for “pilates near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for yoga, pilates, barre and beginner classes.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one yoga or pilates studio per area. Your competitors can't hire us.", tier: 1 },
    { icon: "💛", title: "Member Win-Back", text: "Members who stop coming get a friendly check-in before they cancel.", tier: 2 },
    { icon: "🕚", title: "Empty Class Filler", text: "Last-minute open spots sent to students who like that time.", tier: 2 },
    { icon: "🏢", title: "Corporate Wellness", text: "Outreach to local employers for on-site classes and company memberships.", tier: 2 },
    { icon: "🧑‍🏫", title: "Teacher Training & Workshops", text: "Workshops, retreats and teacher trainings promoted to your community.", tier: 2 },
    { icon: "🤰", title: "Specialty Class Pages", text: "Prenatal, seniors, beginners and recovery classes that bring in new groups.", tier: 2 },
    { icon: "🎁", title: "Bring-a-Friend Offers", text: "Members get a free guest pass to share, and their friends get an intro offer.", tier: 2 },
  ],
  packages: [
    { name: "Flow", tagline: "Everything a studio needs to fill first classes, turn intro offers into members and get great reviews." },
    { name: "Full Practice", tagline: "Flow plus member win-back, class filling, corporate wellness, workshops and bring-a-friend offers." },
  ],
  estimator: {
    name: "Class Pass Price Check",
    question: "Which class option is right for me?",
    blurb: "Students compare drop-ins, class packs and memberships in seconds, so they buy instead of browsing.",
    bullets: ["Uses your real prices", "Books the first class", "Turns intro offers into members"],
    projectLabel: "Option",
    projects: [
      { key: "intro", label: "New student intro offer", unit: "none", fixed: [39, 59] },
      { key: "dropin", label: "Drop-in classes", unit: "count", unitLabel: "Classes", perWord: "class", per: [22, 35], start: 4 },
      { key: "pack", label: "10-class pack", unit: "none", fixed: [180, 260] },
      { key: "unlimited", label: "Unlimited monthly", unit: "none", fixed: [139, 199] },
    ],
    toggles: [{ key: "reformer", label: "Reformer pilates", fixed: [40, 80], only: ["pack", "unlimited"] }],
    resultLabel: "Your price",
    cta: "Book my first class",
    after: "Mats and props included.",
  },
  demo: {
    name: "Studio Line",
    business: "Saltwater Yoga & Pilates",
    greeting:
      "Hi, this is Lily with Saltwater Yoga & Pilates! Sorry we missed your call, we're teaching a class. I can help right here by text. Are you new to the studio?",
    chips: ["I'm a total beginner", "Do you have reformer pilates?", "How much is a membership?"],
    busy: "You're teaching a class",
    steps: [
      { t: "The call comes in", d: "Someone has wanted to try pilates for months. You're teaching, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply that answers their beginner questions." },
      { t: "The first class gets booked", d: "Lily shares the intro offer and books their first class." },
    ],
    goal: "a first class",
    facts: `Business: Saltwater Yoga & Pilates (a demo studio on the Truly Automation website)
Location: Wilmington, serving Wrightsville Beach, Leland, Hampstead and Carolina Beach
Hours: classes Mon-Fri 6am-8pm, Sat-Sun 8am-12pm. Certified teachers.
Classes: vinyasa yoga, gentle and beginner yoga, hot yoga, reformer pilates, mat pilates, barre, prenatal yoga, workshops.
Prices: new student intro offer 3 classes for $39 (reformer intro $59); drop-in $22-$35; 10-class pack $180-$260; unlimited monthly $139-$199 (reformer unlimited adds $40-$80). Mats and props included. No contracts.
Open classes: Tomorrow 6:00 PM beginner yoga, 7:15 PM reformer; Thursday 9:30 AM mat pilates, 12:00 PM gentle yoga; Saturday 9:00 AM vinyasa.
Rules: be welcoming to beginners. Ask what they're interested in, their experience level and what times work. If they're pregnant, injured or have a health condition, suggest they check with their doctor and mention prenatal or gentle classes. Never give medical advice.`,
  },
  faqs: [
    { q: "How do I turn intro offers into members?", a: "The New Student Welcome follows up after the first class with friendly texts, the right class suggestions and a member offer before the intro runs out." },
    { q: "How do I keep members from canceling?", a: "Member Win-Back notices when someone stops coming and checks in before they cancel." },
    { q: "Can you help fill slow classes?", a: "Yes. The Empty Class Filler sends last-minute open spots to students who like that time of day." },
    { q: "How soon will I see more students?", a: "The Studio Line and intro offers start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default yogaPilates;
