import type { Industry } from "./types";

const accountants: Industry = {
  slug: "accountants",
  name: "Accountants & CPAs",
  who: "accounting and CPA firms",
  one: "accounting firm",
  category: "Professional services",
  icon: "🧾",
  tagline: "Tax prep pricing, year-round bookkeeping clients and referrals.",
  meta: {
    title: "Marketing for Accountants, CPAs and Bookkeepers | Truly Automation",
    description:
      "Marketing built for accounting firms, CPAs and bookkeepers: a tax prep price check, new client intake by text, document reminders, year-round bookkeeping and advisory offers, small business outreach and referral partners. One accounting firm per area.",
  },
  hero: {
    line1: "Better clients.",
    line2: "All year long.",
    sub: "The marketing team built for accounting firms. New clients price their return and book by text, documents come in on time, and monthly bookkeeping clients keep you busy after April.",
    cards: {
      lead: {
        label: "Client Line",
        title: "Small business return",
        fields: [["Entity", "S-corp, 2 owners"], ["Needs", "Taxes + bookkeeping"], ["Town", "Matthews"], ["Booked", "Intro call, Wed 10 AM"]],
      },
      side: {
        label: "Document Reminders",
        title: "Tax season",
        rows: [["Clients reminded", "420"], ["Docs uploaded on time", "88%"], ["Extensions avoided", "37"]],
      },
      small: { label: "Bookkeeping Offer", title: "Monthly client added", text: "Landscaping company, $450/mo" },
    },
  },
  problems: [
    { title: "Feast or famine", text: "January to April is overwhelming, and the rest of the year is slow." },
    { title: "Price shoppers", text: "People compare you to software and storefront tax chains on price alone." },
    { title: "Chasing documents", text: "Your team spends hours chasing clients for W-2s, 1099s and receipts." },
    { title: "Wrong-fit clients", text: "You'd rather have steady business clients than one-time simple returns." },
  ],
  systems: [
    { icon: "📲", title: "Client Line", text: "Missed calls and web inquiries get a text back in seconds that asks a few fit questions and books an intro call.", tier: 1 },
    { icon: "🧮", title: "Tax Prep Price Check", text: "Clients see your price ranges by return type, which filters out bargain shoppers.", tier: 1 },
    { icon: "📂", title: "Document Reminders", text: "Automatic texts and emails that get documents uploaded on time, without your staff chasing.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every return and engagement.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “CPA near me,” small business accountant and bookkeeping.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one accounting firm per area. Competing firms can't hire us.", tier: 1 },
    { icon: "📊", title: "Bookkeeping & Advisory Offers", text: "Monthly bookkeeping, payroll and advisory packages promoted to every tax client.", tier: 2 },
    { icon: "🏢", title: "Small Business Outreach", text: "Outreach to new LLCs, contractors and local businesses in your target industries.", tier: 2 },
    { icon: "🤝", title: "Referral Partners", text: "Relationships with attorneys, financial advisors, bankers and realtors who send clients.", tier: 2 },
    { icon: "📅", title: "Year-End Planning Push", text: "Fall tax planning campaigns that fill the slow season with paid work.", tier: 2 },
    { icon: "🎤", title: "Workshops & Webinars", text: "Small business tax and planning seminars promoted and booked.", tier: 2 },
    { icon: "🔁", title: "Engagement Follow-Up", text: "Follow-up on proposals and engagement letters that haven't been signed.", tier: 2 },
  ],
  packages: [
    { name: "Ledger", tagline: "Everything an accounting firm needs to attract the right clients and get documents on time." },
    { name: "Full Books", tagline: "Ledger plus bookkeeping and advisory offers, small business outreach, referral partners and year-end planning." },
  ],
  estimator: {
    name: "Tax Prep Price Check",
    question: "What will my tax prep cost?",
    blurb: "Clients see honest price ranges by return type, which brings in better-fit clients and fewer bargain shoppers.",
    bullets: ["Uses your real fees", "Every inquiry texts straight to your team", "Shows bookkeeping options too"],
    projectLabel: "Service",
    projects: [
      { key: "personal", label: "Personal return", unit: "none", fixed: [250, 450] },
      { key: "business", label: "Business return (S-corp, partnership)", unit: "none", fixed: [1200, 2500] },
      { key: "books", label: "Monthly bookkeeping", unit: "none", fixed: [300, 800], note: "Per month. Depends on transactions." },
    ],
    toggles: [
      { key: "self", label: "Self-employed or rental income", fixed: [150, 400], only: ["personal"] },
      { key: "state", label: "Extra state return", fixed: [75, 150], only: ["personal", "business"] },
      { key: "payroll", label: "Add payroll", fixed: [100, 250], only: ["books"] },
    ],
    cta: "Book my intro call",
    after: "Final fee after we see your documents.",
  },
  demo: {
    name: "Client Line",
    business: "Summit Tax & Advisory",
    greeting:
      "Hi, this is Ava with Summit Tax & Advisory. Sorry we missed your call, our CPAs are with clients! I can help right here by text. Are you looking for help with taxes, bookkeeping, or both?",
    chips: ["Need my taxes done", "Small business bookkeeping", "Behind on my taxes"],
    busy: "Your CPA is with a client",
    steps: [
      { t: "The call comes in", d: "A business owner needs taxes and monthly bookkeeping. Your CPAs are with clients, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text with price ranges before they call a storefront tax chain." },
      { t: "The intro call gets booked", d: "Ava asks about their return and business, shares fee ranges, and books an intro call." },
    ],
    goal: "an intro call",
    facts: `Business: Summit Tax & Advisory (a demo CPA firm on the Truly Automation website)
Location: Matthews, serving Charlotte, Mint Hill, Indian Trail and clients virtually across the US
Hours: Mon-Fri 9am-5pm; tax season (Feb-Apr) also Sat 9am-1pm.
Services: individual and business tax returns, monthly bookkeeping, payroll, tax planning, IRS notices and back taxes, new business setup.
Typical fees (final after reviewing documents): personal return $250-$450; self-employed or rental adds $150-$400; business return $1,200-$2,500; extra state $75-$150; monthly bookkeeping $300-$800; payroll $100-$250/month. Secure upload portal for documents.
Open intro call times: Tomorrow 10:00 AM, 3:00 PM; Thursday 11:00 AM; Friday 9:30 AM.
Rules: never give tax advice or say what they'll owe or get back. Never ask for Social Security numbers, bank details or tax documents by text; say the secure portal is used after the intro call. If they got an IRS notice with a deadline, flag it as urgent. Ask whether it's personal or business, the type of income, and how many years.`,
  },
  faqs: [
    { q: "How do you fix feast or famine?", a: "We promote monthly bookkeeping, payroll and advisory to every tax client, and fall planning campaigns fill the slow season." },
    { q: "Is texting with clients secure?", a: "The Client Line only handles scheduling and basic fit questions. It never asks for Social Security numbers or documents; those go through your secure portal." },
    { q: "Can you help us get better clients?", a: "Yes. Clear price ranges filter out bargain shoppers, and small business outreach targets the industries you want to serve." },
    { q: "How soon will I see more clients?", a: "The Client Line and document reminders start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default accountants;
