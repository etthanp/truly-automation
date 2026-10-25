import type { Industry } from "./types";

const towing: Industry = {
  slug: "towing",
  name: "Towing",
  who: "towing companies",
  one: "towing company",
  category: "Auto",
  icon: "🛻",
  tagline: "24/7 tow calls, instant quotes and shop and fleet accounts.",
  meta: {
    title: "Marketing for Towing Companies | Truly Automation",
    description:
      "Marketing built for towing and roadside assistance companies: 24/7 call answering, instant tow quotes by text, location sharing, repair shop and fleet accounts, and review campaigns. One towing company per area.",
  },
  hero: {
    line1: "Stranded drivers,",
    line2: "dispatched fast.",
    sub: "The marketing team built for towing companies. Every call gets answered day or night, drivers share their location and get a price, and your truck is on the way in minutes.",
    cards: {
      lead: {
        label: "Tow Line",
        title: "Car won't start",
        fields: [["Vehicle", "2018 Honda Accord"], ["Location", "Pinned, I-85 exit 30"], ["Tow to", "Shop, 8 miles"], ["Truck", "ETA 25 min"]],
      },
      side: {
        label: "Shop & Fleet Accounts",
        title: "This month",
        rows: [["Repair shops", "9"], ["Fleet accounts", "4"], ["Calls from partners", "63"]],
      },
      small: { label: "Roadside", title: "Lockout, 11:40 PM", text: "Driver dispatched by text" },
    },
  },
  problems: [
    { title: "Calls at 2 AM", text: "If your driver is out on a tow and nobody answers, the caller hangs up and tries the next number." },
    { title: "Price shopping", text: "Stranded drivers call three companies asking how much, and pick whoever answers with a price." },
    { title: "Where are you?", text: "Callers can't tell you where they are, so finding them takes forever." },
    { title: "Motor clubs pay less", text: "Motor club work keeps trucks busy, but the cash calls are where the money is." },
  ],
  systems: [
    { icon: "🚨", title: "Tow Line", text: "Every missed call gets a text back in seconds, 24/7, with a price and a link to share their location.", tier: 1 },
    { icon: "🧮", title: "Tow Price Check", text: "Drivers pick the service and distance and see your price before they book.", tier: 1 },
    { icon: "📍", title: "Location Pin", text: "Drivers share their exact location with one tap, so your truck finds them fast.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every tow, so you top Google for “towing near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for towing, lockouts, jump starts and tire changes.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one towing company per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🔧", title: "Repair Shop Accounts", text: "Local shops send you their tows, and you send them the repairs.", tier: 2 },
    { icon: "🚚", title: "Fleet Accounts", text: "Outreach to local businesses with work vans and trucks for priority towing contracts.", tier: 2 },
    { icon: "🏢", title: "Property & Parking Accounts", text: "Apartment complexes and lots that need private property towing.", tier: 2 },
    { icon: "🚗", title: "Junk Car Buying", text: "Cash for junk car pages that bring in extra loads.", tier: 2 },
    { icon: "📲", title: "ETA Texts", text: "Automatic texts with the driver's ETA, so callers don't call again or book someone else.", tier: 2 },
    { icon: "🏍️", title: "Specialty Tow Pages", text: "Motorcycles, flatbed, long distance and heavy duty pages that bring higher-paying calls.", tier: 2 },
  ],
  packages: [
    { name: "Hook", tagline: "Everything a towing company needs to answer every call, price it fast and get great reviews." },
    { name: "Full Haul", tagline: "Hook plus repair shop, fleet and property accounts, junk car buying, ETA texts and specialty pages." },
  ],
  estimator: {
    name: "Tow Price Check",
    question: "What will my tow cost?",
    blurb: "Drivers pick the service and distance and see your price in seconds, so they book you instead of calling around.",
    bullets: ["Uses your real rates", "Location shared with every request", "Truck dispatched 24/7"],
    projectLabel: "Service",
    projects: [
      { key: "tow", label: "Tow", unit: "count", unitLabel: "Miles", perWord: "mile", per: [4, 6], start: 10 },
      { key: "jump", label: "Jump start", unit: "none", fixed: [65, 100] },
      { key: "lockout", label: "Lockout", unit: "none", fixed: [65, 110] },
      { key: "tire", label: "Flat tire change", unit: "none", fixed: [70, 110] },
    ],
    toggles: [
      { key: "hookup", label: "Hook-up fee", fixed: [75, 125], only: ["tow"] },
      { key: "night", label: "Night or weekend", fixed: [25, 50] },
      { key: "flatbed", label: "Flatbed needed", fixed: [25, 75], only: ["tow"] },
    ],
    cta: "Send a truck",
    after: "Final price confirmed by your driver.",
  },
  demo: {
    name: "Tow Line",
    business: "Roadline Towing & Recovery",
    greeting:
      "Hi, this is Jake with Roadline Towing & Recovery! Sorry we missed your call, our drivers are on the road. I can help right now by text. Are you somewhere safe?",
    chips: ["My car won't start", "I need a tow", "Locked my keys in the car"],
    busy: "Your driver is out on a tow",
    steps: [
      { t: "The call comes in", d: "A driver's car died on the highway at night. Your driver is out on another tow, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get safety steps first, then a link to share their exact location." },
      { t: "The truck gets sent", d: "Jake gives a price, confirms where they're going and sends the next truck." },
    ],
    goal: "a dispatched tow truck",
    facts: `Business: Roadline Towing & Recovery (a demo company on the Truly Automation website)
Service area: Greensboro, High Point, Burlington, Kernersville and I-40 / I-85 between them
Hours: 24/7. Licensed and insured. Flatbeds and wheel-lift trucks. Usual ETA 20-45 minutes.
Services: local and long distance towing, flatbed towing, jump starts, lockouts, flat tire changes, fuel delivery, winch-outs, motorcycle towing, junk car removal.
Prices (confirmed by the driver): hook-up $75-$125 plus $4-$6 per mile; flatbed adds $25-$75; jump start $65-$100; lockout $65-$110; tire change $70-$110 (their spare); fuel delivery $65-$95 plus fuel. Nights and weekends add $25-$50. Cards, cash and most insurance roadside plans accepted.
Availability: a truck can usually be on the way now.
Rules: safety first. If they're on a highway shoulder, tell them to turn on hazards and stay buckled in the car or move behind the guardrail if it's safe. If anyone is hurt, the car is in a travel lane, or there's smoke or fire, tell them to call 911 right away. Ask for the location (or the location pin), the vehicle, the problem and where it needs to go.`,
  },
  faqs: [
    { q: "Do you answer calls overnight?", a: "Yes. The Tow Line texts back every missed call in seconds, 24/7, with a price and a location link." },
    { q: "How do I win against price shoppers?", a: "The first company that answers with a clear price usually gets the tow. The Tow Line gives a price in the first text." },
    { q: "Where does steady work come from?", a: "Repair shops, fleets and property managers. In Full Haul we set up those accounts for you." },
    { q: "How soon will I see more calls?", a: "The Tow Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default towing;
