import type { Industry } from "./types";

const restaurants: Industry = {
  slug: "restaurants",
  name: "Restaurants & Catering",
  who: "restaurants and caterers",
  one: "restaurant",
  category: "Food & hospitality",
  icon: "🍽️",
  tagline: "Catering quotes, large party booking and regulars who return.",
  meta: {
    title: "Marketing for Restaurants and Caterers | Truly Automation",
    description:
      "Marketing built for local restaurants and caterers: an instant catering quote, large party and private event booking, a text club for regulars, Google and review growth, slow-night promos and office catering outreach. One restaurant per area.",
  },
  hero: {
    line1: "Catering booked.",
    line2: "Slow nights filled.",
    sub: "The marketing team built for local restaurants. Catering and party inquiries get answered and quoted instantly, regulars hear about specials by text, and Tuesday nights stop being empty.",
    cards: {
      lead: {
        label: "Catering Line",
        title: "Office lunch, 60 people",
        fields: [["Date", "Friday, Nov 14"], ["Style", "Buffet, drop-off"], ["Town", "Uptown"], ["Quote", "Sent in 2 minutes"]],
      },
      side: {
        label: "Text Club",
        title: "Taco Tuesday blast",
        rows: [["Members texted", "2,100"], ["Redeemed", "236"], ["Tuesday sales", "Up 31%"]],
      },
      small: { label: "Private Events", title: "Rehearsal dinner", text: "40 guests, back room, deposit paid" },
    },
  },
  problems: [
    { title: "The phone rings during the rush", text: "Catering and party calls come in at 6:30 on a Friday, when nobody can talk." },
    { title: "Catering quotes take days", text: "Office managers need a quote today. If you're slow, they order from the chain." },
    { title: "Third-party apps take 30%", text: "Delivery apps own your customers and take a big cut of every order." },
    { title: "Slow nights", text: "Weekends are packed, but Monday through Wednesday the dining room is half empty." },
  ],
  systems: [
    { icon: "📲", title: "Catering Line", text: "Missed calls and web inquiries get a text back in seconds with an instant catering quote and open dates.", tier: 1 },
    { icon: "🧮", title: "Catering Quote", text: "Customers enter guests and style and see the price range on your website.", tier: 1 },
    { icon: "💬", title: "Text Club", text: "Regulars join your text list for specials and events. A text gets read; an email doesn't.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after visits and orders, so you top Google for “restaurants near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for your cuisine, catering and “best ___ near me.”", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one restaurant per cuisine per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🥂", title: "Private Event Booking", text: "Pages and inquiry handling for rehearsal dinners, birthdays and work parties, with deposits.", tier: 2 },
    { icon: "🏢", title: "Office Catering Outreach", text: "Outreach to local offices, schools and churches for recurring catering orders.", tier: 2 },
    { icon: "📉", title: "Slow Night Promos", text: "Targeted offers that fill your slowest nights without discounting the busy ones.", tier: 2 },
    { icon: "🛍️", title: "Direct Online Ordering", text: "Commission-free online ordering from your own site, promoted to your Text Club.", tier: 2 },
    { icon: "🎥", title: "Social Content", text: "Food shots, specials and behind-the-scenes clips posted every week.", tier: 2 },
    { icon: "🎂", title: "Birthday Club", text: "Customers get a birthday offer that brings the whole table in.", tier: 2 },
  ],
  packages: [
    { name: "Appetizer", tagline: "Everything a restaurant needs to answer catering fast, grow reviews and build a text list of regulars." },
    { name: "Full Course", tagline: "Appetizer plus private events, office catering outreach, slow night promos, direct ordering and content." },
  ],
  estimator: {
    name: "Catering Quote",
    question: "What will my catering cost?",
    blurb: "Office managers and party planners get a quote in 30 seconds instead of waiting days for a callback.",
    bullets: ["Uses your real per-guest prices", "Inquiries text straight to your manager", "Works during the dinner rush"],
    projectLabel: "Catering style",
    projects: [
      { key: "dropoff", label: "Drop-off buffet", unit: "count", unitLabel: "Guests", perWord: "guest", per: [14, 22], start: 40 },
      { key: "staffed", label: "Staffed buffet", unit: "count", unitLabel: "Guests", perWord: "guest", per: [24, 36], start: 75 },
      { key: "plated", label: "Plated dinner", unit: "count", unitLabel: "Guests", perWord: "guest", per: [38, 60], start: 75 },
      { key: "boxed", label: "Boxed lunches", unit: "count", unitLabel: "Guests", perWord: "guest", per: [12, 18], start: 25 },
    ],
    toggles: [
      { key: "dessert", label: "Add dessert", per: [3, 6] },
      { key: "drinks", label: "Add drinks", per: [2, 4] },
      { key: "setup", label: "Plates, utensils and setup", per: [1, 3], only: ["dropoff"], on: true },
    ],
    minimum: 250,
    cta: "Request my quote",
    after: "Final menu and price confirmed by our catering team.",
  },
  demo: {
    name: "Catering Line",
    business: "Fire & Oak Kitchen",
    greeting:
      "Hi, this is Ava with Fire & Oak Kitchen! Sorry we missed your call, we're in the middle of the dinner rush. I can help right here by text. Are you asking about catering, a party, or a reservation?",
    chips: ["Catering for 50 people", "Private room for a party", "Are you open Monday?"],
    busy: "Your kitchen is in the dinner rush",
    steps: [
      { t: "The call comes in", d: "An office manager needs lunch for 60 people next Friday. It's the dinner rush, so nobody can grab it." },
      { t: "It texts back in seconds", d: "She gets a friendly text and a quote before she orders from a chain." },
      { t: "The order gets booked", d: "Ava gets the date, guest count and style, gives a range, and books it with a deposit." },
    ],
    goal: "a catering order or event booking",
    facts: `Business: Fire & Oak Kitchen (a demo restaurant on the Truly Automation website)
Location: Uptown Charlotte. Catering delivered across Charlotte, Matthews, Ballantyne and University City.
Hours: Tue-Thu 11am-9pm, Fri-Sat 11am-10pm, Sun 11am-8pm. Closed Monday.
Food: wood-fired American, brisket, smoked chicken, flatbreads, salads, seasonal sides.
Catering prices (final menu confirmed by the catering team): drop-off buffet $14-$22 per guest; staffed buffet $24-$36; plated dinner $38-$60; boxed lunches $12-$18; dessert adds $3-$6 and drinks $2-$4 per guest. $250 minimum. 50% deposit holds the date. Vegetarian and gluten-free options available.
Private room: seats up to 45. Food and drink minimum $800 on weeknights, $1,500 Friday and Saturday.
Catering dates open: this Friday lunch, next Tuesday-Thursday, next Saturday evening (private room).
Rules: ask the date, guest count, style, location and any allergies. For severe allergies, say the chef will follow up directly. Reservations for parties under 8 can be made online. Never give a firm final price.`,
  },
  faqs: [
    { q: "Does Territory Lock work for restaurants?", a: "Yes, by cuisine. We work with one restaurant per cuisine in an area, so we'll never market a competing barbecue or Mexican spot down the street." },
    { q: "How does the Text Club work?", a: "Customers join your text list at the table, online or with an order. You send specials and events, and text messages get read far more than emails." },
    { q: "Can you help us get off delivery apps?", a: "In Full Course we set up commission-free ordering on your own site and promote it to your Text Club, so more orders skip the 30% fee." },
    { q: "How soon will I see results?", a: "The Catering Line and Text Club start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default restaurants;
