import type { Industry } from "./types";

const tattooShops: Industry = {
  slug: "tattoo-shops",
  name: "Tattoo Shops",
  who: "tattoo shops",
  one: "tattoo shop",
  category: "Beauty & personal care",
  icon: "🖋️",
  tagline: "Design requests, deposits and artists' books kept full.",
  meta: {
    title: "Marketing for Tattoo Shops | Truly Automation",
    description:
      "Marketing built for tattoo shops and artists: design requests with reference photos by text, size and placement price ranges, deposits, flash day promotions, artist portfolios and review campaigns. One tattoo shop per area.",
  },
  hero: {
    line1: "Books full,",
    line2: "deposits in.",
    sub: "The marketing team built for tattoo shops. Clients send their idea, placement and reference photos by text, get a price range, and lock in their session with a deposit.",
    cards: {
      lead: {
        label: "Design Line",
        title: "Fine line floral, forearm",
        fields: [["Size", "About 5 inches"], ["References", "3 photos sent"], ["Artist", "Any available"], ["Booked", "Consult, Thu"]],
      },
      side: {
        label: "Flash Day",
        title: "Friday the 13th",
        rows: [["Texts sent", "640"], ["Walk-ins", "58"], ["New clients", "41"]],
      },
      small: { label: "Deposits", title: "$100 deposit paid", text: "Session locked in for Saturday" },
    },
  },
  problems: [
    { title: "DMs everywhere", text: "Requests come in through Instagram, texts and calls, and half of them get lost." },
    { title: "Endless price questions", text: "Everyone asks “how much?” before they share size, placement or detail." },
    { title: "No-shows on long sessions", text: "A missed four-hour session is a whole day of income gone." },
    { title: "New artists start slow", text: "Your newer artists have open books while your top artist is booked out for months." },
  ],
  systems: [
    { icon: "✏️", title: "Design Line", text: "Missed calls get a text back in seconds asking for the idea, size, placement and reference photos.", tier: 1 },
    { icon: "🧮", title: "Tattoo Price Check", text: "Clients pick size and detail and see a price range, so serious clients book.", tier: 1 },
    { icon: "💵", title: "Deposit Booking", text: "Sessions lock in with a deposit, so no-shows stop costing you full days.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every session, so you top Google for “tattoo shop near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for every style your artists do.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one tattoo shop per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🎨", title: "Artist Portfolios", text: "A page for each artist and style, so clients find the right fit.", tier: 2 },
    { icon: "⚡", title: "Flash Day Promotions", text: "Flash days and holiday specials sent to past clients and followers.", tier: 2 },
    { icon: "📆", title: "Open Book Filler", text: "Newer artists' open slots promoted, so every chair stays busy.", tier: 2 },
    { icon: "🩹", title: "Aftercare Texts", text: "Aftercare tips sent after every session, with touch-up booking.", tier: 2 },
    { icon: "🧩", title: "Next Session Reminders", text: "Sleeve and back piece clients reminded to book the next sitting.", tier: 2 },
    { icon: "✨", title: "Cover-Up Pages", text: "Cover-up and rework pages that bring in clients other shops turn away.", tier: 2 },
  ],
  packages: [
    { name: "Linework", tagline: "Everything a tattoo shop needs to collect design requests, take deposits and get great reviews." },
    { name: "Full Sleeve", tagline: "Linework plus artist portfolios, flash days, open book filling, aftercare and next session reminders." },
  ],
  estimator: {
    name: "Tattoo Price Check",
    question: "What will my tattoo cost?",
    blurb: "Clients pick size and detail and see a range in seconds, so serious clients send their idea and book.",
    bullets: ["Uses your real rates", "Reference photos come with every request", "Deposits lock in the session"],
    projectLabel: "Size",
    projects: [
      { key: "small", label: "Small (under 3 in)", unit: "none", fixed: [80, 200] },
      { key: "medium", label: "Medium (3-6 in)", unit: "none", fixed: [200, 500] },
      { key: "large", label: "Large (6-10 in)", unit: "none", fixed: [500, 1200] },
      { key: "session", label: "Big piece, by session", unit: "count", unitLabel: "Sessions", perWord: "session", per: [600, 1000], start: 3 },
    ],
    toggles: [
      { key: "color", label: "Full color", fixed: [50, 200], only: ["small", "medium", "large"] },
      { key: "coverup", label: "Cover-up", fixed: [100, 300], only: ["small", "medium", "large"] },
    ],
    minimum: 80,
    cta: "Send my idea",
    after: "Final price set by your artist.",
  },
  demo: {
    name: "Design Line",
    business: "Ironwood Tattoo Co.",
    greeting:
      "Hey, this is Jade with Ironwood Tattoo Co.! Sorry we missed your call, our artists are tattooing. I can help right here by text. What are you thinking of getting?",
    chips: ["Small fine line tattoo", "Start a sleeve", "Cover up an old tattoo"],
    busy: "Your artists are mid-session",
    steps: [
      { t: "The call comes in", d: "Someone wants a fine line floral piece on their forearm. Every artist is tattooing, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking for the size, placement and reference photos." },
      { t: "The session gets booked", d: "Jade shares a price range and books a consult with a deposit." },
    ],
    goal: "a consult or tattoo session",
    facts: `Business: Ironwood Tattoo Co. (a demo shop on the Truly Automation website)
Location: Asheville, serving Weaverville, Black Mountain, Hendersonville and Waynesville
Hours: Tue-Sat 12pm-9pm, Sun 12pm-6pm. Licensed artists, single-use needles, health department inspected. 18+ with a valid photo ID.
Styles: fine line, black and gray, traditional, neo-traditional, realism, color, script, cover-ups, sleeves.
Prices (set by the artist): shop minimum $80; small (under 3 inches) $80-$200; medium $200-$500; large $500-$1,200; big pieces $600-$1,000 per session. Color adds $50-$200; cover-ups add $100-$300. $50-$100 deposit to book, goes toward the tattoo. Free consults.
Open times: Thursday 3:00 PM consult; Friday 6:00 PM (small pieces); Saturday 1:00 PM session; walk-ins for small flash when open.
Rules: ask for the idea, size, placement, color or black and gray, and reference photos. Everyone must be 18+ with a valid ID; no exceptions, even with a parent. Don't book anyone who says they'll be drinking first. Never give a firm price; say the artist sets it after seeing the design.`,
  },
  faqs: [
    { q: "Can it handle all the “how much?” questions?", a: "Yes. The Design Line asks for size, placement and references, and the price check gives a range, so you only talk to serious clients." },
    { q: "How do deposits work?", a: "Clients pay a deposit to lock in their session, which goes toward the tattoo. No-shows stop costing you full days." },
    { q: "Can you help my newer artists get busy?", a: "Yes. Artist portfolios and the Open Book Filler promote their style and open slots to the right clients." },
    { q: "How soon will I see more bookings?", a: "The Design Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default tattooShops;
