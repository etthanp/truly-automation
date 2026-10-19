import type { Industry } from "./types";

const tutoring: Industry = {
  slug: "tutoring",
  name: "Tutoring",
  who: "tutoring centers and tutors",
  one: "tutoring center",
  category: "Kids & education",
  icon: "📚",
  tagline: "Free assessments booked, progress updates and test prep seasons.",
  meta: {
    title: "Marketing for Tutoring Centers and Tutors | Truly Automation",
    description:
      "Marketing built for tutoring centers and independent tutors: a tutoring price check, free assessment booking by text, parent progress updates, report card and test prep season campaigns, school and counselor outreach and referrals. One tutoring center per area.",
  },
  hero: {
    line1: "Grades up.",
    line2: "Schedule full.",
    sub: "The marketing team built for tutoring centers. Worried parents book a free assessment by text, progress updates keep them enrolled, and report card and test prep seasons fill every slot.",
    cards: {
      lead: {
        label: "Parent Line",
        title: "Free assessment",
        fields: [["Student", "8th grade"], ["Subject", "Math, Algebra 1"], ["Town", "Ballantyne"], ["Booked", "Thursday 4:30 PM"]],
      },
      side: {
        label: "Report Card Push",
        title: "After Q1 grades",
        rows: [["Parents reached", "1,900"], ["Assessments booked", "33"], ["Enrolled", "19"]],
      },
      small: { label: "Progress Update", title: "Sent to parent", text: "Quiz grade up from 68 to 85" },
    },
  },
  problems: [
    { title: "Parents call when they're worried", text: "A bad report card sends parents looking that night. If you don't answer, they book a franchise." },
    { title: "Students quit too soon", text: "Grades improve, and families stop before habits stick." },
    { title: "Seasonal swings", text: "Busy around report cards and test dates, slow in summer." },
    { title: "Franchises have big budgets", text: "National tutoring brands outspend you on ads." },
  ],
  systems: [
    { icon: "📲", title: "Parent Line", text: "Missed calls get a text back in seconds that asks about the student and books a free assessment.", tier: 1 },
    { icon: "🧮", title: "Tutoring Price Check", text: "Parents see monthly pricing by subject and sessions, with no surprises.", tier: 1 },
    { icon: "📈", title: "Progress Updates", text: "Short parent updates after sessions that show progress and keep families enrolled.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests when parents see results.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “math tutor near me,” SAT prep and every subject.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one tutoring center per area. Competing centers can't hire us.", tier: 1 },
    { icon: "📝", title: "Report Card Season Push", text: "Campaigns right after report cards go home, when parents are most motivated.", tier: 2 },
    { icon: "🎯", title: "Test Prep Funnels", text: "SAT, ACT and end-of-grade test prep pages and campaigns timed to test dates.", tier: 2 },
    { icon: "🏫", title: "School & Counselor Outreach", text: "Relationships with teachers, counselors and PTAs who recommend tutors.", tier: 2 },
    { icon: "☀️", title: "Summer Programs", text: "Summer catch-up and get-ahead programs promoted to fill the slow months.", tier: 2 },
    { icon: "👯", title: "Refer-a-Family", text: "Families get a free session for every family they refer.", tier: 2 },
    { icon: "🔁", title: "Assessment Follow-Up", text: "Follow-up with families who did an assessment but didn't enroll.", tier: 2 },
  ],
  packages: [
    { name: "Homework", tagline: "Everything a tutoring center needs to book worried parents fast and keep students enrolled." },
    { name: "Honor Roll", tagline: "Homework plus report card and test prep campaigns, school outreach, summer programs and referrals." },
  ],
  estimator: {
    name: "Tutoring Price Check",
    question: "What will tutoring cost?",
    blurb: "Parents see monthly pricing for their child's subject and schedule, then book a free assessment.",
    bullets: ["Uses your real rates", "Every inquiry texts straight to your director", "Shows package savings"],
    projectLabel: "Program",
    projects: [
      { key: "k8", label: "Elementary / middle school", unit: "count", unitLabel: "Sessions per month", perWord: "session", per: [45, 65], start: 8 },
      { key: "hs", label: "High school (math, science)", unit: "count", unitLabel: "Sessions per month", perWord: "session", per: [60, 90], start: 8 },
      { key: "sat", label: "SAT / ACT prep course", unit: "none", fixed: [800, 1800], note: "Full course with practice tests." },
    ],
    toggles: [
      { key: "home", label: "In-home tutoring", per: [10, 20], only: ["k8", "hs"] },
    ],
    resultLabel: "Estimated cost",
    cta: "Book a free assessment",
    after: "Final plan after the free assessment.",
  },
  demo: {
    name: "Parent Line",
    business: "Bright Path Tutoring",
    greeting:
      "Hi, this is Ava with Bright Path Tutoring! Sorry we missed your call, our tutors are with students. I can help right here by text. What grade is your student in?",
    chips: ["My son is failing math", "SAT prep for my daughter", "How much is tutoring?"],
    busy: "Your tutors are with students",
    steps: [
      { t: "The call comes in", d: "A parent just saw a bad report card and wants help. Your tutors are with students, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a reassuring text before they sign up with a franchise." },
      { t: "The assessment gets booked", d: "Ava asks the grade and subject, shares pricing, and books a free assessment." },
    ],
    goal: "a free assessment",
    facts: `Business: Bright Path Tutoring (a demo center on the Truly Automation website)
Location: Ballantyne, serving south Charlotte, Fort Mill, Pineville and Waxhaw. In-center, in-home and online.
Hours: Mon-Thu 3pm-8pm, Sat 9am-1pm.
Programs: K-8 reading, writing and math; high school math and science; study skills and ADHD-friendly coaching; SAT, ACT and end-of-grade test prep; summer catch-up.
Pricing: K-8 $45-$65 per session; high school $60-$90 per session; most families do 8 sessions a month; in-home adds $10-$20 per session; SAT/ACT course $800-$1,800. Free 45-minute assessment. Month to month, no contracts.
Assessment times: Tomorrow 4:00 PM; Thursday 4:30 PM, 6:00 PM; Saturday 10:00 AM.
Rules: be reassuring, never judgmental about the student. Ask the grade, subject, what's going on and their schedule. Never promise specific grade or score improvements. Never share information about other students.`,
  },
  faqs: [
    { q: "How do Progress Updates help?", a: "Short updates after sessions show parents the progress they're paying for. Families who see progress stay longer and refer friends." },
    { q: "Can you fill summer?", a: "Yes. Summer catch-up and get-ahead programs are promoted in spring, and SAT and ACT prep is timed to test dates." },
    { q: "Does this work for independent tutors?", a: "Yes. The Parent Line, pricing and reviews work the same for one tutor as for a center." },
    { q: "How soon will I see more students?", a: "The Parent Line and follow-up start working the week they go live. Google rankings build over 60 to 90 days." },
  ],
};

export default tutoring;
