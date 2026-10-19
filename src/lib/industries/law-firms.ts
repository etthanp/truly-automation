import type { Industry } from "./types";

const lawFirms: Industry = {
  slug: "law-firms",
  name: "Law Firms",
  who: "law firms",
  one: "law firm per practice area",
  category: "Professional services",
  icon: "⚖️",
  tagline: "24/7 intake, flat-fee pricing pages and referral partners.",
  meta: {
    title: "Marketing for Law Firms and Attorneys | Truly Automation",
    description:
      "Marketing built for small law firms: 24/7 intake by text, flat-fee pricing pages, practice area pages that rank on Google and ChatGPT, consult follow-up, referral partner outreach and review campaigns. One firm per practice area per city.",
  },
  hero: {
    line1: "Every new case",
    line2: "answered first.",
    sub: "The marketing team built for small law firms. Potential clients get answered in seconds at any hour, flat-fee services are priced clearly, and referral partners send you cases every month.",
    cards: {
      lead: {
        label: "Intake Line",
        title: "Estate plan, new client",
        fields: [["Matter", "Will + living trust"], ["Situation", "Married, 2 kids"], ["Town", "Huntersville"], ["Booked", "Free consult, Thursday 2 PM"]],
      },
      side: {
        label: "Referral Partners",
        title: "This quarter",
        rows: [["Financial advisors", "7"], ["CPAs", "4"], ["Cases referred", "23"]],
      },
      small: { label: "Consult Follow-Up", title: "Day 5 check-in sent", text: "Uncontested divorce, signed" },
    },
  },
  problems: [
    { title: "The first firm to answer wins", text: "People with a legal problem call several firms. If you're in court or with a client, they hire whoever called back first." },
    { title: "After-hours calls go to voicemail", text: "Most people look for a lawyer at night and on weekends, when nobody answers." },
    { title: "Fees scare people off", text: "People assume a lawyer costs too much, so they put it off or go online for a template." },
    { title: "Consults that don't sign", text: "Prospective clients have a great consult, say they'll think about it, and never call back." },
  ],
  systems: [
    { icon: "📲", title: "Intake Line", text: "Missed calls and web inquiries get a text back in seconds, 24/7, with intake questions and a consult booked.", tier: 1 },
    { icon: "🧮", title: "Flat-Fee Price Pages", text: "Clear prices for wills, estate plans, uncontested divorces, LLCs and other flat-fee services.", tier: 1 },
    { icon: "📚", title: "Practice Area Pages", text: "Plain-English pages for every service and question, written to rank on Google and get cited by ChatGPT.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests at the end of every matter, following your bar's rules.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “estate planning attorney near me” and every practice area.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one firm per practice area per city. Competing firms can't hire us.", tier: 1 },
    { icon: "🔁", title: "Consult Follow-Up", text: "A gentle follow-up series after every consult, so “I'll think about it” turns into a signed engagement.", tier: 2 },
    { icon: "🤝", title: "Referral Partner Outreach", text: "Relationships with financial advisors, CPAs, realtors and other attorneys who send cases.", tier: 2 },
    { icon: "🎤", title: "Workshops & Webinars", text: "Estate planning, small business and family law seminars promoted and booked.", tier: 2 },
    { icon: "📰", title: "Local Authority Content", text: "Articles, local news quotes and video answers that make you the go-to attorney in town.", tier: 2 },
    { icon: "📅", title: "Client Check-Ins", text: "Reminders to update estate plans after life events, which brings repeat work.", tier: 2 },
    { icon: "📈", title: "Google & Local Services Ads", text: "Ads for the cases you want, with tracking on which cases they bring in.", tier: 2 },
  ],
  packages: [
    { name: "Retainer", tagline: "Everything a small firm needs to answer every potential client and earn trust before the consult." },
    { name: "Full Counsel", tagline: "Retainer plus consult follow-up, referral partners, workshops, local authority content and ads." },
  ],
  estimator: {
    name: "Flat-Fee Price Check",
    question: "What will my legal help cost?",
    blurb: "Potential clients see clear flat fees for common services, which removes the biggest reason they wait.",
    bullets: ["Uses your real flat fees", "Every inquiry texts straight to your intake team", "Builds trust before the consult"],
    projectLabel: "Service",
    projects: [
      { key: "will", label: "Simple will", unit: "none", fixed: [300, 800] },
      { key: "estate", label: "Estate plan with trust", unit: "none", fixed: [1500, 3500], note: "Will, living trust, power of attorney and health care directive." },
      { key: "divorce", label: "Uncontested divorce", unit: "none", fixed: [1000, 3000], note: "Court filing fees extra." },
      { key: "llc", label: "LLC formation + operating agreement", unit: "none", fixed: [500, 1500], note: "State filing fees extra." },
    ],
    toggles: [
      { key: "couple", label: "For a married couple", fixed: [200, 800], only: ["will", "estate"] },
    ],
    cta: "Book my free consult",
    after: "Flat fee confirmed at your consult.",
  },
  demo: {
    name: "Intake Line",
    business: "Harper Law Group",
    greeting:
      "Hi, this is Ava with Harper Law Group. Sorry we missed your call, our attorneys are with clients! I can help right here by text. What kind of legal help are you looking for?",
    chips: ["I need a will", "Getting a divorce", "Starting an LLC"],
    busy: "Your attorney is in court",
    steps: [
      { t: "The call comes in", d: "A couple with two kids finally wants a will. Your attorney is in court, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text with flat-fee pricing before they call the next firm." },
      { t: "The consult gets booked", d: "Ava asks a few intake questions, shares the fee range, and books a free consult." },
    ],
    goal: "a free consultation",
    facts: `Business: Harper Law Group (a demo firm on the Truly Automation website)
Location: Huntersville, serving Charlotte, Cornelius, Davidson, Mooresville and Concord. Licensed in North Carolina.
Hours: Mon-Fri 8:30am-5:30pm. Evening and virtual consults available.
Practice areas: wills and estate planning, trusts, probate, uncontested divorce and separation agreements, small business formation and contracts.
Flat fees (confirmed at the consult): simple will $300-$800; estate plan with trust $1,500-$3,500; couples add $200-$800; uncontested divorce $1,000-$3,000 plus court fees; LLC formation $500-$1,500 plus state fees. Probate quoted after review. First consult free, 30 minutes.
Open consult times: Tomorrow 10:00 AM, 4:00 PM (virtual); Thursday 2:00 PM; Friday 9:00 AM.
Rules: never give legal advice or predict an outcome. Say an attorney will review their situation at the consult, and that texting doesn't create an attorney-client relationship. Only ask for basics (name, matter type, town, timing), not sensitive details. If they mention a court date or deadline within a few days, flag it as urgent. If anyone is in danger, tell them to call 911. For practice areas the firm doesn't handle (criminal, injury), say they'll be pointed to a trusted referral.`,
  },
  faqs: [
    { q: "Is the Intake Line allowed under bar rules?", a: "It only handles scheduling and basic intake. It never gives legal advice, says texting doesn't create an attorney-client relationship, and follows your state's advertising rules. Your firm reviews everything we publish." },
    { q: "How does Territory Lock work for law firms?", a: "We work with one firm per practice area per city. If you do estate planning in Charlotte, we won't market another estate planning firm there." },
    { q: "Do flat-fee pages really help?", a: "Yes. Fear of cost is the biggest reason people wait. Clear flat fees bring in people who would otherwise use an online template." },
    { q: "How soon will I see more consults?", a: "The Intake Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default lawFirms;
