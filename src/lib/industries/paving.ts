import type { Industry } from "./types";

const paving: Industry = {
  slug: "paving",
  name: "Asphalt Paving",
  who: "paving contractors",
  one: "paving contractor",
  category: "Construction & outdoor",
  icon: "🛣️",
  tagline: "Driveway quotes, sealcoat routes and commercial lot accounts.",
  meta: {
    title: "Marketing for Asphalt Paving & Sealcoating Contractors | Truly Automation",
    description:
      "Marketing built for asphalt paving and sealcoating contractors: a driveway price calculator, photo quotes, sealcoating route filling, commercial parking lot and HOA accounts, and review campaigns. One paving contractor per area.",
  },
  hero: {
    line1: "Fresh blacktop,",
    line2: "full schedule.",
    sub: "The marketing team built for paving contractors. Homeowners price their driveway in seconds, and parking lot owners and HOAs book sealcoating every two years.",
    cards: {
      lead: {
        label: "Paving Line",
        title: "Driveway replacement",
        fields: [["Size", "About 1,100 sq ft"], ["Photo", "Cracked + potholes"], ["Town", "Rock Hill"], ["Booked", "Estimate, Wed"]],
      },
      side: {
        label: "Commercial Accounts",
        title: "This season",
        rows: [["Lots sealcoated", "14"], ["HOAs on schedule", "5"], ["Restripes", "9"]],
      },
      small: { label: "Sealcoat Route", title: "Street filled", text: "6 neighbors booked same day" },
    },
  },
  problems: [
    { title: "Fly-by-night crews", text: "Driveway scammers with leftover asphalt make homeowners nervous about every paver." },
    { title: "Estimates eat your days", text: "Driving out to measure every driveway takes time you could spend paving." },
    { title: "Weather windows", text: "Rain cancels jobs and you need to fill the schedule again fast." },
    { title: "Commercial is hard to crack", text: "Parking lot work pays the best, but property managers already have a guy." },
  ],
  systems: [
    { icon: "📸", title: "Paving Line", text: "Missed calls get a text back in seconds asking for a photo of the driveway, then book an estimate.", tier: 1 },
    { icon: "🧮", title: "Driveway Price Calculator", text: "Homeowners enter their driveway size and see a price range from your real rates.", tier: 1 },
    { icon: "🛡️", title: "Trust Pages", text: "Your license, insurance, written warranty and real jobs, so homeowners know you're not a scam crew.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every job, so you top Google for “asphalt paving near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for paving, sealcoating and patching.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one paving contractor per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🏢", title: "Commercial Lot Accounts", text: "Outreach to property managers, churches and shopping centers for sealcoating, patching and striping.", tier: 2 },
    { icon: "🏘️", title: "HOA Contracts", text: "Neighborhood roads and common areas on a regular maintenance schedule.", tier: 2 },
    { icon: "🗺️", title: "Sealcoat Route Filling", text: "When you're on a street, neighbors get an offer to sealcoat the same day.", tier: 2 },
    { icon: "🔁", title: "Sealcoat Reminders", text: "Past customers get a reminder every two years, when their driveway needs it again.", tier: 2 },
    { icon: "🌧️", title: "Rain Day Rebooking", text: "Weather cancellations rebooked by text, with open slots offered to the waitlist.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every fresh driveway.", tier: 2 },
  ],
  packages: [
    { name: "Base Coat", tagline: "Everything a paving contractor needs to quote driveways fast, look trustworthy and get great reviews." },
    { name: "Top Coat", tagline: "Base Coat plus commercial lot and HOA accounts, sealcoat routes, reminders and rain day rebooking." },
  ],
  estimator: {
    name: "Driveway Price Calculator",
    question: "What will my driveway cost?",
    blurb: "Homeowners enter their driveway size and see a price in seconds, so you only drive out to real buyers.",
    bullets: ["Uses your real rates", "Photo comes with every request", "Books estimates to your calendar"],
    projects: [
      { key: "new", label: "New or replacement driveway", unit: "area", unitLabel: "Driveway size (ft)", per: [5, 9], start: [60, 12] },
      { key: "overlay", label: "Resurface (overlay)", unit: "area", unitLabel: "Driveway size (ft)", per: [3, 5], start: [60, 12] },
      { key: "seal", label: "Sealcoating", unit: "area", unitLabel: "Driveway size (ft)", per: [0.2, 0.4], start: [60, 12] },
    ],
    toggles: [
      { key: "base", label: "Add new gravel base", per: [1.5, 3], only: ["new"] },
      { key: "cracks", label: "Crack filling", fixed: [100, 300], only: ["overlay", "seal"] },
    ],
    minimum: 250,
    cta: "Get my exact quote",
  },
  demo: {
    name: "Paving Line",
    business: "Carolina Blacktop Co.",
    greeting:
      "Hi, this is Mason with Carolina Blacktop Co.! Sorry we missed your call, our crew is out paving. I can help right here by text. What are you looking to get done?",
    chips: ["New driveway", "Sealcoat my driveway", "Parking lot repairs"],
    busy: "Your crew is laying asphalt",
    steps: [
      { t: "The call comes in", d: "A homeowner's driveway is cracked and full of potholes. Your crew is mid-pour, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply and an easy way to send a photo of the driveway." },
      { t: "The estimate gets booked", d: "Mason gets the size and photos, shares a price range, and books an estimate." },
    ],
    goal: "an estimate visit",
    facts: `Business: Carolina Blacktop Co. (a demo company on the Truly Automation website)
Service area: Rock Hill, Fort Mill, Tega Cay, Lake Wylie, Indian Land and south Charlotte
Hours: Mon-Fri 7am-5pm, Sat 7am-12pm (April-November). Licensed and insured. 2-year written warranty on new asphalt.
Services: new and replacement driveways, overlays, sealcoating, crack filling, pothole patching, parking lots, striping, private roads and HOA streets.
Prices (confirmed at the estimate): new or replacement driveway $5-$9 per sq ft (new gravel base adds $1.50-$3 per sq ft); overlay $3-$5 per sq ft; sealcoating $0.20-$0.40 per sq ft ($250 minimum); crack filling $100-$300. Parking lots and striping quoted on site. Free estimates.
Open times: Tomorrow 10:00 AM; Wednesday 8:00 AM, 3:00 PM; Friday 1:00 PM.
Rules: ask for the approximate size, a photo, the town and what's wrong (cracks, potholes, drainage). Never give a firm price before the estimate. Mention we never ask for full payment up front.`,
  },
  faqs: [
    { q: "How do I stand out from scam crews?", a: "Trust pages show your license, insurance, written warranty and real jobs, and steady reviews prove you're local and established." },
    { q: "Can homeowners get a price before I drive out?", a: "Yes. The driveway calculator gives a range from your real rates, and they send photos so you know the job before the visit." },
    { q: "How do I get commercial work?", a: "In Top Coat we reach out to property managers, churches, shopping centers and HOAs for sealcoating, patching and striping." },
    { q: "How soon will I see more calls?", a: "The Paving Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default paving;
