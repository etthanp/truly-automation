import type { Industry } from "./types";

const pools: Industry = {
  slug: "pools",
  name: "Pool Builders",
  who: "pool builders",
  one: "pool builder",
  category: "Construction & outdoor",
  icon: "🏊",
  tagline: "Pool budget quotes, build trackers and backyard partner work.",
  meta: {
    title: "Marketing for Pool Builders | Truly Automation",
    description:
      "Marketing built for pool builders: a pool budget estimator, design consult booking, build tracker updates for customers, backyard project pages, neighbor marketing and service-route sign-ups. One pool builder per city.",
  },
  hero: {
    line1: "Backyard dreams.",
    line2: "Booked a year out.",
    sub: "The marketing team built only for pool builders. Buyers who know their budget before they call, customers who stay calm through the build, and neighbors who want what they see over the fence.",
    cards: {
      lead: {
        label: "Pool Line",
        title: "Gunite pool + spa",
        fields: [["Budget", "$90k to $120k"], ["Yard", "Fenced, flat"], ["Town", "Ballantyne"], ["Swim by", "Next Memorial Day"]],
      },
      side: {
        label: "Build Tracker",
        title: "The Patel pool, week 6",
        rows: [["Dig", "Done"], ["Steel & plumbing", "Done"], ["Gunite", "Friday"]],
      },
      small: { label: "Neighbor Drop", title: "52 postcards sent", text: "Around the Patel build" },
    },
  },
  problems: [
    { title: "Dreamers, not buyers", text: "Lots of people want a pool. Few know what it costs, and you spend nights on design meetings that go nowhere." },
    { title: "The build-phase phone calls", text: "Customers get anxious during a months-long build and call constantly asking what's next." },
    { title: "Long, expensive sales cycle", text: "A pool is a $60k to $150k decision. Without follow-up, buyers drift to whoever stayed in touch." },
    { title: "Every customer is a one-time sale", text: "Once the pool is done, the service, repair and remodel work goes to someone else." },
  ],
  systems: [
    { icon: "🧮", title: "Pool Budget Estimator", text: "Buyers pick a pool type and add-ons and see a realistic budget on your website before they ever book a design meeting.", tier: 1 },
    { icon: "📸", title: "Pool Line", text: "Missed calls get a text back in seconds that collects budget, yard photos and timeline, then books a consult.", tier: 1 },
    { icon: "🗓️", title: "Design Consult Booker", text: "Design meetings booked online with budget and timeline questions, so you only sit down with real buyers.", tier: 1 },
    { icon: "🚧", title: "Build Tracker", text: "Customers get automatic updates at every stage (dig, steel, gunite, tile, plaster, startup), which means far fewer “what's happening?” calls.", tier: 1 },
    { icon: "🖼️", title: "Backyard Pages", text: "Every finished pool becomes a page with photos that ranks in that town and sells the next one.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one pool builder per city. Your competitors can't hire us.", tier: 1 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every build: “We're building a pool on your street.”", tier: 2 },
    { icon: "🤝", title: "Landscaper & Builder Partnerships", text: "Outreach to landscapers, fence companies and home builders who send pool buyers your way.", tier: 2 },
    { icon: "🧽", title: "Service Route Sign-Ups", text: "Every new pool owner gets offered weekly service with autopay, which builds steady monthly income.", tier: 2 },
    { icon: "☀️", title: "Opening & Closing Campaigns", text: "Seasonal pushes for openings, closings, renovations and equipment upgrades to past customers.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Long-cycle follow-up on every design that didn't sign yet, for months, not days.", tier: 2 },
    { icon: "🦺", title: "Crew Finder", text: "A hiring page and job ads for builders and service techs.", tier: 2 },
  ],
  packages: [
    { name: "Shallow End", tagline: "Everything a pool builder needs to find real buyers and keep customers calm through the build." },
    { name: "Deep End", tagline: "Shallow End plus neighbor marketing, partner outreach and service routes that pay every month." },
  ],
  estimator: {
    name: "Pool Budget Estimator",
    question: "What will my pool cost?",
    blurb: "Buyers see a realistic budget in 30 seconds. The people who book a design meeting already know the range, so your time goes to real projects.",
    bullets: ["Uses your prices and the pools you build", "Every lead texts straight to your phone", "Filters out dreamers before the meeting"],
    projects: [
      { key: "fiberglass", label: "Fiberglass", unit: "none", fixed: [50000, 90000] },
      { key: "gunite", label: "Gunite (custom concrete)", unit: "none", fixed: [65000, 120000] },
      { key: "vinyl", label: "Vinyl liner", unit: "none", fixed: [40000, 70000] },
    ],
    toggles: [
      { key: "spa", label: "Add a spa", fixed: [12000, 25000] },
      { key: "heater", label: "Add a heater", fixed: [3500, 7000] },
      { key: "auto", label: "Add automation (control from your phone)", fixed: [2500, 6000] },
      { key: "deck", label: "Add a large patio deck", fixed: [8000, 25000] },
    ],
  },
  demo: {
    name: "Pool Line",
    business: "Blue Haven Pools",
    greeting:
      "Hi, this is Ava with Blue Haven Pools. Sorry we missed your call, our team is out on builds right now! I can help right here by text. Are you thinking about a new pool?",
    chips: ["What does a pool cost?", "How long does a build take?", "Fiberglass or gunite?"],
    busy: "Your team is out on builds",
    steps: [
      { t: "The call comes in", d: "A family wants a pool by next summer. Your team is on a build, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they fill out three other builders' forms." },
      { t: "A design meeting gets booked", d: "Ava asks about budget, yard and timeline, asks for photos of the backyard, and books a design consult." },
    ],
    goal: "a design consultation",
    facts: `Business: Blue Haven Pools (a demo company on the Truly Automation website)
Service area: Charlotte, Ballantyne, Waxhaw, Fort Mill, Lake Norman and nearby towns
Hours: Mon-Fri 8am-6pm, Sat 9am-2pm. Licensed and insured.
Work: custom gunite pools, fiberglass pools, vinyl liner pools, spas, pool decks and patios, heaters and automation, renovations, weekly pool service.
Typical budgets (final price after a design consult): fiberglass $50,000-$90,000; gunite $65,000-$120,000; vinyl $40,000-$70,000; spa add-on $12,000-$25,000; heater $3,500-$7,000; automation $2,500-$6,000. Most builds take 8 to 14 weeks after permits. Financing available on approved credit.
Design consult times this week: Tomorrow 10:00 AM, 4:00 PM; Thursday 11:00 AM; Saturday 10:00 AM.
Rules: ask about budget gently and whether the yard has access for equipment (gate width). Never promise a finish date; say permits and weather affect timing.`,
  },
  faqs: [
    { q: "Won't showing a budget scare buyers away?", a: "It scares away the people who were never going to buy, which saves you nights of design meetings. Real buyers appreciate knowing the range up front." },
    { q: "How does the Build Tracker work?", a: "At each stage of the build, the customer gets a short update and a photo. They know what's happening and what's next, so they call you a lot less." },
    { q: "Can you help us grow pool service?", a: "Yes. Every new pool owner gets offered weekly service with autopay, and past customers get seasonal opening, closing and upgrade campaigns." },
    { q: "How soon will I see more leads?", a: "The Pool Line, estimator and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days, and starting in fall or winter sets up a strong spring." },
  ],
};

export default pools;
