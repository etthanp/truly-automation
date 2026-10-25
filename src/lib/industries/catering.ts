import type { Industry } from "./types";

const catering: Industry = {
  slug: "catering",
  name: "Catering",
  who: "caterers",
  one: "caterer",
  category: "Food & hospitality",
  icon: "🥂",
  tagline: "Per-guest quotes, tastings and corporate lunch accounts.",
  meta: {
    title: "Marketing for Caterers & Catering Companies | Truly Automation",
    description:
      "Marketing built for caterers: a per-guest catering price calculator, event inquiry intake, tasting booking, quote follow-up, corporate lunch and venue partner accounts, and review campaigns. One caterer per area.",
  },
  hero: {
    line1: "Every inquiry,",
    line2: "a booked event.",
    sub: "The marketing team built for caterers. Hosts price their event per guest, send the details you need, and book a tasting before they ask anyone else.",
    cards: {
      lead: {
        label: "Event Inquiry",
        title: "Wedding reception, buffet",
        fields: [["Guests", "140"], ["Date", "May 17"], ["Venue", "Barn, Lexington"], ["Booked", "Tasting, Sat"]],
      },
      side: {
        label: "Corporate Lunches",
        title: "This month",
        rows: [["Offices ordering", "12"], ["Lunches served", "38"], ["Repeat orders", "29"]],
      },
      small: { label: "Quote Follow-Up", title: "Quote viewed", text: "Deposit paid after follow-up" },
    },
  },
  problems: [
    { title: "Inquiries missing details", text: "Every inquiry is “how much for a party?” and you spend days getting guest counts and dates." },
    { title: "Quotes go quiet", text: "Hosts get three quotes and you never hear back." },
    { title: "Seasonal swings", text: "Wedding season is packed and January is dead." },
    { title: "Venues pick for you", text: "Couples book from the venue's preferred list, and you're not on it." },
  ],
  systems: [
    { icon: "📞", title: "Event Line", text: "Missed calls get a text back in seconds, gather the date, guest count and style, and book a tasting.", tier: 1 },
    { icon: "🧮", title: "Catering Price Calculator", text: "Hosts pick a menu style and guest count and see a per-guest price range.", tier: 1 },
    { icon: "💬", title: "Quote Follow-Up", text: "Every quote gets friendly follow-ups, so hosts who went quiet come back and book.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every event, so you top Google for “caterer near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for weddings, corporate catering and parties.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one caterer per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🏢", title: "Corporate Lunch Accounts", text: "Outreach to local offices for weekly lunches, meetings and holiday parties.", tier: 2 },
    { icon: "💒", title: "Venue & Planner Partners", text: "Get on preferred vendor lists at local venues and with wedding planners.", tier: 2 },
    { icon: "🍰", title: "Tasting Booking", text: "Tastings booked by text, with a deposit to hold the date.", tier: 2 },
    { icon: "🎉", title: "Holiday Party Push", text: "Office and family holiday party offers sent in the fall.", tier: 2 },
    { icon: "📦", title: "Drop-Off Catering", text: "Simple trays and boxed lunches for smaller orders that fill slow weeks.", tier: 2 },
    { icon: "📷", title: "Event Gallery", text: "Photos of your spreads and setups, sorted by event type.", tier: 2 },
  ],
  packages: [
    { name: "Appetizer", tagline: "Everything a caterer needs to turn inquiries into quotes, follow up and get great reviews." },
    { name: "Full Course", tagline: "Appetizer plus corporate lunch accounts, venue and planner partners, tastings and holiday pushes." },
  ],
  estimator: {
    name: "Catering Price Calculator",
    question: "What will catering my event cost?",
    blurb: "Hosts pick a menu style and guest count and see a per-guest range in seconds, so inquiries come in ready to book.",
    bullets: ["Uses your real menu prices", "Date and guest count with every lead", "Books tastings to your calendar"],
    projectLabel: "Menu style",
    projects: [
      { key: "dropoff", label: "Drop-off trays", unit: "count", unitLabel: "Guests", perWord: "guest", per: [15, 25], start: 30 },
      { key: "buffet", label: "Buffet", unit: "count", unitLabel: "Guests", perWord: "guest", per: [28, 45], start: 100 },
      { key: "plated", label: "Plated dinner", unit: "count", unitLabel: "Guests", perWord: "guest", per: [50, 85], start: 100 },
    ],
    toggles: [
      { key: "staff", label: "Servers and cleanup", per: [8, 15], only: ["buffet", "plated"] },
      { key: "bar", label: "Bar service", per: [15, 30], only: ["buffet", "plated"] },
      { key: "rentals", label: "Plates, linens and rentals", per: [6, 12], only: ["buffet", "plated"] },
    ],
    minimum: 400,
    cta: "Book my tasting",
    after: "Final quote after we plan your menu.",
  },
  demo: {
    name: "Event Line",
    business: "Copper Pot Catering",
    greeting:
      "Hi, this is Olivia with Copper Pot Catering! Sorry we missed your call, we're out at an event. I can help right here by text. What are you celebrating?",
    chips: ["Wedding reception", "Office lunch", "How much per person?"],
    busy: "Your team is serving an event",
    steps: [
      { t: "The call comes in", d: "A couple needs a caterer for 140 guests in May. Your team is serving an event, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking for the date, guest count and style." },
      { t: "The tasting gets booked", d: "Olivia shares a per-guest range and books a tasting." },
    ],
    goal: "a tasting or quote call",
    facts: `Business: Copper Pot Catering (a demo company on the Truly Automation website)
Service area: Winston-Salem, Greensboro, High Point, Lexington, Clemmons and Mocksville
Hours: office Mon-Fri 9am-5pm, events 7 days. Licensed kitchen, health department inspected, insured.
Events: weddings, rehearsal dinners, corporate lunches and meetings, holiday parties, graduations, birthdays, funerals. Southern, BBQ, Italian and custom menus. Vegetarian, vegan and gluten-free options.
Prices per guest (confirmed after menu planning): drop-off trays $15-$25; buffet $28-$45; plated dinner $50-$85. Servers and cleanup add $8-$15; bar service $15-$30; plates, linens and rentals $6-$12. $400 minimum. 25% deposit holds the date. Tastings for weddings and events over 75 guests.
Open tasting times: Thursday 5:00 PM; Saturday 11:00 AM, 1:00 PM. Spring Saturdays book up fast.
Rules: ask the event type, date, guest count, location and style (drop-off, buffet, plated). Always ask about food allergies and dietary needs, and never promise a dish is allergen-free; say the chef will confirm. Never give a firm price before menu planning.`,
  },
  faqs: [
    { q: "How do I get inquiries with real details?", a: "The Event Line and price calculator ask for the date, guest count and style up front, so every inquiry is ready to quote." },
    { q: "How do I get quotes to close?", a: "Quote Follow-Up sends friendly texts and emails after every quote, and tastings hold the date with a deposit." },
    { q: "How do I fill the slow months?", a: "Corporate lunch accounts and holiday party pushes keep work coming outside wedding season." },
    { q: "How soon will I see more events?", a: "The Event Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default catering;
