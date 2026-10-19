import type { Industry } from "./types";

const insuranceAgents: Industry = {
  slug: "insurance-agents",
  name: "Insurance Agents",
  who: "independent insurance agencies",
  one: "insurance agency",
  category: "Professional services",
  icon: "🛡️",
  tagline: "Quote requests answered fast, renewal reviews and cross-selling.",
  meta: {
    title: "Marketing for Insurance Agents and Agencies | Truly Automation",
    description:
      "Marketing built for independent insurance agencies: fast response to quote requests, a coverage price check, renewal review campaigns, bundle and cross-sell offers, life event outreach and realtor and lender partnerships. One insurance agency per area.",
  },
  hero: {
    line1: "More quotes.",
    line2: "More bundles.",
    sub: "The marketing team built for independent insurance agencies. Quote requests get answered in seconds, renewal reviews keep clients from shopping, and every auto client hears about home, life and umbrella.",
    cards: {
      lead: {
        label: "Quote Line",
        title: "Auto + home quote",
        fields: [["Drivers", "2 adults, 1 teen"], ["Vehicles", "3"], ["Town", "Concord"], ["Booked", "Review call, Tue 11 AM"]],
      },
      side: {
        label: "Cross-Sell",
        title: "Auto-only clients",
        rows: [["Texted about bundling", "640"], ["Quotes requested", "74"], ["Policies written", "31"]],
      },
      small: { label: "Renewal Review", title: "60 days before renewal", text: "Rate check scheduled" },
    },
  },
  problems: [
    { title: "Quote shoppers move fast", text: "People request quotes from several places at once and go with whoever responds first." },
    { title: "Clients leave at renewal", text: "When rates go up, clients shop online and leave without a conversation." },
    { title: "One-policy households", text: "Most clients only have one policy with you, and their home or life coverage is somewhere else." },
    { title: "Hard to stand out", text: "Big carriers spend billions on ads, and local agents need to win on service." },
  ],
  systems: [
    { icon: "📲", title: "Quote Line", text: "Missed calls and web requests get a text back in seconds that gathers the basics and books a quote call.", tier: 1 },
    { icon: "🧮", title: "Coverage Price Check", text: "Visitors see typical monthly ranges for auto, home and renters and how much bundling can save.", tier: 1 },
    { icon: "🔁", title: "Renewal Reviews", text: "Clients get a review offer 60 days before renewal, so they call you instead of shopping.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every policy and claim, so you stand out from the big brands.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “insurance agent near me” and every line you write.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one insurance agency per area. Competing agents can't hire us.", tier: 1 },
    { icon: "🧩", title: "Bundle & Cross-Sell", text: "Auto-only and home-only clients get bundle offers, plus life and umbrella checkups.", tier: 2 },
    { icon: "👶", title: "Life Event Outreach", text: "New drivers, new homes, new babies and new businesses each get a timely coverage check.", tier: 2 },
    { icon: "🏡", title: "Realtor & Lender Partners", text: "Every home purchase needs insurance. We build referral relationships with realtors and lenders.", tier: 2 },
    { icon: "🏢", title: "Small Business Outreach", text: "Outreach to local businesses for general liability, workers' comp and commercial auto.", tier: 2 },
    { icon: "🎂", title: "Birthday & Holiday Touches", text: "Personal texts and cards that make clients feel like more than a policy number.", tier: 2 },
    { icon: "👯", title: "Refer-a-Friend", text: "Clients are thanked for every referral, following your state's rules.", tier: 2 },
  ],
  packages: [
    { name: "Policy", tagline: "Everything an agency needs to answer quote requests first and keep clients at renewal." },
    { name: "Full Coverage", tagline: "Policy plus bundle offers, life event outreach, realtor and lender partners and small business outreach." },
  ],
  estimator: {
    name: "Coverage Price Check",
    question: "What might my coverage cost?",
    blurb: "Visitors see typical monthly ranges and bundle savings, then request a real quote from you.",
    bullets: ["Uses typical rates in your area", "Every request texts straight to your team", "Shows the value of bundling"],
    projectLabel: "Coverage",
    projects: [
      { key: "auto", label: "Auto", unit: "count", unitLabel: "Vehicles", perWord: "vehicle a month", per: [90, 180], start: 2 },
      { key: "home", label: "Homeowners", unit: "none", fixed: [110, 250], note: "Per month. Depends on the home and location." },
      { key: "renters", label: "Renters", unit: "none", fixed: [15, 30], note: "Per month." },
    ],
    toggles: [
      { key: "bundle", label: "Bundle auto + home", per: [-10, -25], only: ["auto"] },
      { key: "teen", label: "Teen driver in the house", fixed: [80, 200], only: ["auto"] },
    ],
    resultLabel: "Estimated monthly cost",
    cta: "Get my real quote",
    after: "Your real quote depends on your details.",
  },
  demo: {
    name: "Quote Line",
    business: "Carolina Shield Insurance",
    greeting:
      "Hi, this is Ava with Carolina Shield Insurance. Sorry we missed your call, our agents are with clients! I can help right here by text. What kind of coverage are you looking at?",
    chips: ["Quote for auto and home", "My rate just went up", "Adding a teen driver"],
    busy: "Your agent is with a client",
    steps: [
      { t: "The call comes in", d: "A family's auto rate went up and they want to shop. Your agents are with clients, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly reply before they fill out three online quote forms." },
      { t: "The quote call gets booked", d: "Ava gathers the basics, mentions bundle savings, and books a quote call with an agent." },
    ],
    goal: "a quote call with a licensed agent",
    facts: `Business: Carolina Shield Insurance (a demo independent agency on the Truly Automation website)
Location: Concord, serving Kannapolis, Harrisburg, Huntersville and all of North Carolina
Hours: Mon-Fri 8:30am-5:30pm, Sat by appointment.
Lines: auto, home, renters, umbrella, life, motorcycle, boat, small business (general liability, workers' comp, commercial auto). Quotes from 15+ carriers.
Typical monthly ranges (real quote depends on drivers, record, home and carrier): auto $90-$180 per vehicle; homeowners $110-$250; renters $15-$30; bundling usually saves $10-$25 per vehicle per month; teen drivers add $80-$200.
Open quote call times: Tomorrow 9:30 AM, 2:00 PM; Thursday 11:00 AM; Friday 10:00 AM.
Rules: you can't bind, change or cancel coverage by text; a licensed agent handles that. Never quote an exact premium or promise savings. Only ask basics by text (what coverage, how many drivers and vehicles, town, current renewal date); never ask for Social Security, driver's license or bank numbers. For claims, give them the carrier's claim line or say an agent will call.`,
  },
  faqs: [
    { q: "Can the Quote Line write policies?", a: "No. It gathers the basics and books a quote call with a licensed agent. It never binds coverage, quotes exact premiums or asks for sensitive numbers." },
    { q: "How do Renewal Reviews keep clients?", a: "Clients get a review offer before their renewal, so when rates rise they talk to you first instead of shopping online." },
    { q: "How do you increase policies per household?", a: "Bundle offers go to one-policy clients, and life event outreach catches new drivers, new homes and new babies at the right time." },
    { q: "How soon will I see more quotes?", a: "The Quote Line and renewal reviews start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default insuranceAgents;
