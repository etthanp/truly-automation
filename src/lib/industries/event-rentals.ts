import type { Industry } from "./types";

const eventRentals: Industry = {
  slug: "event-rentals",
  name: "Party & Event Rentals",
  who: "party rental companies",
  one: "party rental company",
  category: "Events & creative",
  icon: "🎪",
  tagline: "Bounce houses, tents and tables booked with a deposit.",
  meta: {
    title: "Marketing for Party & Event Rental Companies | Truly Automation",
    description:
      "Marketing built for party and event rental companies: bounce house, tent and table rental quotes, date checks and deposit booking by text, weather updates, school and church accounts, and review campaigns. One party rental company per area.",
  },
  hero: {
    line1: "Every weekend,",
    line2: "rented out.",
    sub: "The marketing team built for party rental companies. Parents and planners check your dates, see a price, and lock in their rental with a deposit before Saturday sells out.",
    cards: {
      lead: {
        label: "Rental Line",
        title: "Bounce house + 4 tables",
        fields: [["Event", "6th birthday"], ["Date", "Sat, June 7"], ["Town", "Kannapolis"], ["Deposit", "$75 paid"]],
      },
      side: {
        label: "Accounts",
        title: "This season",
        rows: [["Schools", "6"], ["Churches", "4"], ["Field days booked", "11"]],
      },
      small: { label: "Weather Watch", title: "Rain Saturday", text: "Rebook offer sent to 9 parties" },
    },
  },
  problems: [
    { title: "Everyone wants Saturday", text: "Your weekends sell out while you're still answering “is it available?” messages." },
    { title: "Quotes by message take forever", text: "Every inquiry needs the date, address, setup surface and items before you can quote." },
    { title: "Weather cancellations", text: "Rain wipes out a weekend and you scramble to rebook everyone." },
    { title: "Weekdays sit empty", text: "Your inventory sits in the warehouse Monday through Thursday." },
  ],
  systems: [
    { icon: "📞", title: "Rental Line", text: "Missed calls get a text back in seconds, check the date and book the rental with a deposit.", tier: 1 },
    { icon: "🧮", title: "Party Rental Price Check", text: "Customers pick bounce houses, tents and tables and see a total before they book.", tier: 1 },
    { icon: "📅", title: "Live Date Check", text: "Customers see which dates are open, so nobody asks about a sold-out Saturday.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every party, so you top Google for “bounce house rental near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for bounce houses, tents, tables and party rentals.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one party rental company per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🌧️", title: "Weather Watch", text: "Rain in the forecast? Customers get a rebook offer automatically.", tier: 2 },
    { icon: "🏫", title: "School & Church Accounts", text: "Field days, fall festivals and church events booked months ahead.", tier: 2 },
    { icon: "🏢", title: "Corporate Event Accounts", text: "Company picnics and employee events that rent big packages on weekdays.", tier: 2 },
    { icon: "🎂", title: "Birthday Rebooking", text: "Parents get a reminder before their kid's next birthday.", tier: 2 },
    { icon: "📦", title: "Party Packages", text: "Bundles that raise your average order, like bounce house plus tables and chairs.", tier: 2 },
    { icon: "🏘️", title: "HOA & Neighborhood Events", text: "Block parties and community events for neighborhoods in your area.", tier: 2 },
  ],
  packages: [
    { name: "Party Starter", tagline: "Everything a party rental company needs to book weekends fast, take deposits and get great reviews." },
    { name: "Full Party", tagline: "Party Starter plus weather watch, school, church and corporate accounts, birthday rebooking and packages." },
  ],
  estimator: {
    name: "Party Rental Price Check",
    question: "What will my party rentals cost?",
    blurb: "Customers pick their rentals and see a total in seconds, then lock in the date with a deposit.",
    bullets: ["Uses your real prices", "Date and address with every request", "Deposits lock in the date"],
    projectLabel: "Rental",
    projects: [
      { key: "bounce", label: "Bounce house", unit: "count", unitLabel: "Bounce houses", perWord: "unit", per: [150, 275], start: 1 },
      { key: "combo", label: "Water slide or combo", unit: "count", unitLabel: "Units", perWord: "unit", per: [250, 450], start: 1 },
      { key: "tent", label: "Party tent", unit: "count", unitLabel: "Guests", perWord: "guest", per: [5, 9], start: 50 },
      { key: "tables", label: "Tables & chairs", unit: "count", unitLabel: "Guests", perWord: "guest", per: [2, 4], start: 50 },
    ],
    toggles: [
      { key: "generator", label: "Generator (no outlet)", fixed: [75, 125] },
      { key: "delivery", label: "Delivery over 15 miles", fixed: [25, 75] },
      { key: "concession", label: "Snow cone or popcorn machine", fixed: [60, 100] },
    ],
    minimum: 150,
    cta: "Lock in my date",
    after: "Includes delivery, setup and pickup in our area.",
  },
  demo: {
    name: "Rental Line",
    business: "Bounce Around Party Rentals",
    greeting:
      "Hi, this is Mia with Bounce Around Party Rentals! Sorry we missed your call, we're out setting up a party. I can help right here by text. What date is your event?",
    chips: ["Bounce house for a birthday", "Tent and tables for 80", "Is next Saturday open?"],
    busy: "Your crew is setting up a party",
    steps: [
      { t: "The call comes in", d: "A parent needs a bounce house for a birthday next Saturday. Your crew is setting up a party, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply checking the date and asking about the yard." },
      { t: "The rental gets booked", d: "Mia shares the price and locks in the date with a deposit." },
    ],
    goal: "a booked rental with a deposit",
    facts: `Business: Bounce Around Party Rentals (a demo company on the Truly Automation website)
Service area: Concord, Kannapolis, Harrisburg, Salisbury, Mount Pleasant and northeast Charlotte
Hours: Mon-Sat 8am-7pm. Licensed and insured. Units cleaned and sanitized after every rental.
Rentals: bounce houses, combos, water slides, obstacle courses, party tents, tables and chairs, generators, snow cone and popcorn machines, yard games.
Prices (full day, delivery, setup and pickup within 15 miles): bounce house $150-$275; water slide or combo $250-$450; party tent $5-$9 per guest; tables and chairs $2-$4 per guest; generator $75-$125; concession machines $60-$100; delivery over 15 miles $25-$75. $150 minimum. $75 deposit holds the date. Free rebooking for rain or high winds.
Open dates: This Saturday 1 bounce house left; next Saturday open; Sundays mostly open.
Rules: ask the date, town, what they want, number of guests and the setup surface (grass, concrete, indoor). Bounce houses need a flat area and a power outlet within 50 feet, or a generator. For safety, inflatables can't be used in winds over 15 mph or during lightning.`,
  },
  faqs: [
    { q: "Can customers see which dates are open?", a: "Yes. The Live Date Check and Rental Line show open dates and book the rental with a deposit, so you stop answering “is it available?”" },
    { q: "What happens when it rains?", a: "Weather Watch sends rebook offers automatically when rain or wind is in the forecast." },
    { q: "How do I keep weekdays busy?", a: "School, church and corporate accounts book field days, festivals and company events during the week." },
    { q: "How soon will I see more bookings?", a: "The Rental Line and review requests start working the week they go live. Start in early spring for the best season." },
  ],
};

export default eventRentals;
