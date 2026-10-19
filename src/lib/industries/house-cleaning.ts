import type { Industry } from "./types";

const houseCleaning: Industry = {
  slug: "house-cleaning",
  name: "House Cleaning",
  who: "cleaning companies",
  one: "cleaning company",
  category: "Home services",
  icon: "🧽",
  tagline: "Instant cleaning quotes, online booking and recurring clients.",
  meta: {
    title: "Marketing for House Cleaning Companies | Truly Automation",
    description:
      "Marketing built for residential cleaning companies: an instant cleaning quote, online booking, recurring plan sign-ups, move-out and realtor partnerships, Airbnb turnover outreach and cleaner hiring. One cleaning company per city.",
  },
  hero: {
    line1: "One deep clean.",
    line2: "Then every two weeks.",
    sub: "The marketing team built only for cleaning companies. Customers get an instant price and book online, first cleans turn into recurring clients, and you always have cleaners to send.",
    cards: {
      lead: {
        label: "Booking Line",
        title: "Deep clean, then biweekly",
        fields: [["Home", "3 bed, 2 bath"], ["Size", "About 1,900 sq ft"], ["Town", "Fort Mill"], ["Pets", "One dog"]],
      },
      side: {
        label: "Recurring Clients",
        title: "This month",
        rows: [["First cleans", "24"], ["Switched to recurring", "15"], ["Monthly recurring", "$9,400"]],
      },
      small: { label: "Move-Out Partner", title: "Realtor sent 3 move-outs", text: "Closing dates this week" },
    },
  },
  problems: [
    { title: "Quoting by phone", text: "Every new customer wants a price, and you spend your day on the phone instead of running the business." },
    { title: "One-time cleans", text: "People book a deep clean and disappear, when the real business is recurring clients." },
    { title: "Always short on cleaners", text: "You can't take more clients because you can't find and keep good cleaners." },
    { title: "Cheap competition", text: "Independent cleaners and apps undercut your prices every day." },
  ],
  systems: [
    { icon: "🧮", title: "Instant Cleaning Quote", text: "Customers enter bedrooms, bathrooms and size and see a price on your website, then book online.", tier: 1 },
    { icon: "📅", title: "Online Booking", text: "Customers pick a date and time from your real schedule and pay a deposit. No phone tag.", tier: 1 },
    { icon: "🔄", title: "First Clean to Recurring", text: "After every first or deep clean, customers get an offer to switch to weekly, biweekly or monthly service.", tier: 1 },
    { icon: "📸", title: "Booking Line", text: "Missed calls get a text back in seconds with a quote and a booking link.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “house cleaning near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one cleaning company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🏡", title: "Realtor & Move-Out Partnerships", text: "Agents and property managers need move-in and move-out cleans every week. We build those relationships.", tier: 2 },
    { icon: "🛏️", title: "Airbnb Turnover Outreach", text: "Short-term rental hosts need fast, reliable turnovers. We reach out to hosts and managers in your area.", tier: 2 },
    { icon: "🏢", title: "Office Cleaning Contracts", text: "Outreach to small offices and businesses for recurring after-hours cleaning.", tier: 2 },
    { icon: "🎁", title: "Referral Rewards", text: "Happy clients get an easy way to refer friends, with a thank-you credit you control.", tier: 2 },
    { icon: "⭐", title: "Review After Every Clean", text: "Review requests timed right after a great clean, which builds the stars that beat the apps.", tier: 2 },
    { icon: "🧑‍🔧", title: "Cleaner Finder", text: "A hiring page and job ads that keep a steady stream of cleaner applicants coming in.", tier: 2 },
  ],
  packages: [
    { name: "Tidy", tagline: "Everything a cleaning company needs to quote instantly, book online and turn first cleans into recurring clients." },
    { name: "Spotless", tagline: "Tidy plus realtor, Airbnb and office contracts, referrals, and a steady stream of cleaner applicants." },
  ],
  estimator: {
    name: "Instant Cleaning Quote",
    question: "What will my cleaning cost?",
    blurb: "Customers see a price in 30 seconds and can book online. No more quoting every home over the phone.",
    bullets: ["Uses your prices and your minimums", "Bookings go straight to your schedule", "Works at 10pm when people decide to book"],
    projects: [
      { key: "standard", label: "Standard clean", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft", per: [0.07, 0.12], start: 2000 },
      { key: "deep", label: "Deep clean", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft", per: [0.14, 0.24], start: 2000 },
      { key: "move", label: "Move-in / move-out", unit: "count", unitLabel: "Home size (sq ft)", perWord: "sq ft", per: [0.18, 0.3], start: 2000 },
    ],
    toggles: [
      { key: "fridge", label: "Inside fridge & oven", fixed: [50, 100] },
      { key: "windows", label: "Inside windows", fixed: [60, 150] },
      { key: "pets", label: "Pets in the home", fixed: [15, 30] },
    ],
    minimum: 120,
  },
  demo: {
    name: "Booking Line",
    business: "Sparkle & Co. Cleaning",
    greeting:
      "Hi, this is Ava with Sparkle & Co. Cleaning. Sorry we missed your call, we're out cleaning homes right now! I can help right here by text. What kind of cleaning do you need?",
    chips: ["Deep clean for my house", "Move-out cleaning", "How much every two weeks?"],
    busy: "Your team is cleaning a home",
    steps: [
      { t: "The call comes in", d: "A homeowner wants a deep clean before guests arrive. Your team is cleaning a home, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a price right away, before they download a cleaning app." },
      { t: "The clean gets booked", d: "Ava gets the size, rooms and pets, gives a price, books the date, and offers recurring service." },
    ],
    goal: "a booked cleaning (ideally recurring)",
    facts: `Business: Sparkle & Co. Cleaning (a demo company on the Truly Automation website)
Service area: Charlotte, Fort Mill, Rock Hill, Ballantyne, Pineville and nearby towns
Hours: Mon-Sat 8am-6pm. Insured and bonded, background-checked cleaners.
Work: standard cleaning, deep cleaning, move-in and move-out cleaning, recurring weekly, biweekly or monthly service, Airbnb turnovers, small offices.
Typical prices (exact price confirmed after booking details): standard clean $140-$240 for a 2,000 sq ft home; deep clean $280-$480; move-in or move-out $360-$600; add-ons: inside fridge and oven $50-$100, inside windows $60-$150. Recurring clients save 10-15%. $120 minimum.
Open dates: Tomorrow (morning), Thursday (morning or afternoon), Friday (afternoon), Saturday (morning).
Rules: ask bedrooms, bathrooms, square footage, pets, and when it was last professionally cleaned. After booking a first or deep clean, offer recurring service once. Never give a firm price.`,
  },
  faqs: [
    { q: "Can customers really book without a call?", a: "Yes. They get an instant price from your own rates, pick an open time on your schedule and pay a deposit. You confirm anything unusual before the clean." },
    { q: "How do you turn first cleans into recurring clients?", a: "After every first or deep clean, the customer gets a well-timed offer to switch to recurring service with a small discount. That's where a cleaning business's steady income comes from." },
    { q: "Can you help me hire cleaners?", a: "Yes. Cleaner Finder runs a hiring page and job ads so you have applicants when you need them, and can say yes to more clients." },
    { q: "How soon will I see more bookings?", a: "The instant quote, online booking and Booking Line start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default houseCleaning;
