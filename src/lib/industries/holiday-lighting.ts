import type { Industry } from "./types";

const holidayLighting: Industry = {
  slug: "holiday-lighting",
  name: "Holiday Lighting",
  who: "holiday lighting installers",
  one: "holiday lighting installer",
  category: "Home services",
  icon: "🎄",
  tagline: "Early-bird bookings, photo quotes and yearly rebooking.",
  meta: {
    title: "Marketing for Holiday Lighting Installers | Truly Automation",
    description:
      "Marketing built for Christmas and holiday lighting installers: a light price check from a photo of the house, early-bird booking, automatic yearly rebooking, commercial and HOA accounts, and review campaigns. One holiday lighting installer per area.",
  },
  hero: {
    line1: "Sold out by",
    line2: "Thanksgiving.",
    sub: "The marketing team built for holiday lighting installers. Homeowners send a photo of the house, see a price, and lock in their install date while you're still booking in September.",
    cards: {
      lead: {
        label: "Lights Line",
        title: "Roofline + 2 trees",
        fields: [["Photo", "Front of house sent"], ["Roofline", "About 140 ft"], ["Town", "Waxhaw"], ["Install", "Nov 8"]],
      },
      side: {
        label: "Rebooking",
        title: "Last year's customers",
        rows: [["Reminders sent", "186"], ["Rebooked", "141"], ["Upgrades", "37"]],
      },
      small: { label: "Takedown", title: "Jan 6 removal", text: "Takedown + storage booked" },
    },
  },
  problems: [
    { title: "A short season", text: "You have about eight weeks to make your money, so every missed call hurts." },
    { title: "Quoting takes forever", text: "Driving out to measure every house eats the days you should be installing." },
    { title: "Starting from zero", text: "Every fall you have to find customers again instead of just rebooking last year's." },
    { title: "Late bookings pile up", text: "Everyone wants lights the week after Thanksgiving, and you can't fit them all." },
  ],
  systems: [
    { icon: "📸", title: "Lights Line", text: "Missed calls get a text back in seconds asking for a photo of the house, then book the install.", tier: 1 },
    { icon: "🧮", title: "Lights Price Check", text: "Homeowners enter their roofline and trees and see your price before you ever drive out.", tier: 1 },
    { icon: "🐦", title: "Early-Bird Booking", text: "September deals that fill your install calendar before the rush hits.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every install, so you top Google for “Christmas light installation near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for Christmas and holiday light installation.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one holiday lighting installer per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🔁", title: "Yearly Rebooking", text: "Every customer gets asked to rebook the same design for next year, the day you take it down.", tier: 2 },
    { icon: "🏢", title: "Commercial & HOA Accounts", text: "Storefronts, office parks and neighborhood entrances that pay more and rebook every year.", tier: 2 },
    { icon: "📦", title: "Takedown & Storage", text: "Removal and storage booked at install time, so January runs itself.", tier: 2 },
    { icon: "🌸", title: "Off-Season Lighting", text: "Permanent and landscape lighting offers to keep work coming the rest of the year.", tier: 2 },
    { icon: "📷", title: "Night Photo Gallery", text: "Photos of your best houses at night, the thing that sells the next one.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every install, while the lights are glowing.", tier: 2 },
  ],
  packages: [
    { name: "Bright Start", tagline: "Everything a holiday lighting installer needs to quote by photo, book early and get great reviews." },
    { name: "Full Glow", tagline: "Bright Start plus yearly rebooking, commercial and HOA accounts, takedown booking and off-season lighting." },
  ],
  estimator: {
    name: "Lights Price Check",
    question: "What will my holiday lights cost?",
    blurb: "Homeowners enter their roofline and trees and see a price in seconds, so you quote from a photo instead of driving out.",
    bullets: ["Uses your real rates", "Photo of the house with every request", "Locks in install dates early"],
    projectLabel: "Install",
    projects: [
      { key: "roofline", label: "Roofline lights", unit: "length", unitLabel: "Roofline (ft)", perWord: "ft", per: [5, 9], start: 120 },
      { key: "trees", label: "Wrapped trees", unit: "count", unitLabel: "Trees", perWord: "tree", per: [100, 250], start: 2 },
      { key: "bushes", label: "Bushes & shrubs", unit: "count", unitLabel: "Bushes", perWord: "bush", per: [30, 60], start: 6 },
    ],
    toggles: [
      { key: "wreath", label: "Wreaths & garland", fixed: [150, 400] },
      { key: "takedown", label: "Takedown + storage", fixed: [100, 250] },
    ],
    minimum: 500,
    cta: "Lock in my install date",
    after: "Includes the lights, install and takedown support.",
  },
  demo: {
    name: "Lights Line",
    business: "Merry & Bright Lighting Co.",
    greeting:
      "Hi, this is Holly with Merry & Bright Lighting Co.! Sorry we missed your call, our crews are out installing. I can help right here by text. Are you looking to get lights up this year?",
    chips: ["Price for my roofline", "Can you do my trees too?", "When can you install?"],
    busy: "Your crew is up on a roofline",
    steps: [
      { t: "The call comes in", d: "A homeowner wants lights up before their holiday party. Your crew is on a roof, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking for a photo of the front of the house." },
      { t: "The install gets booked", d: "Holly gives a price range from the photo and locks in an install date." },
    ],
    goal: "a booked install date",
    facts: `Business: Merry & Bright Lighting Co. (a demo company on the Truly Automation website)
Service area: Waxhaw, Weddington, Marvin, Matthews, Indian Trail and Ballantyne
Hours: Mon-Sat 8am-6pm, Sept through Jan. Licensed and insured. Commercial-grade LED lights included.
Services: roofline lights, wrapped trees, bushes and shrubs, wreaths and garland, walkway lights, commercial and HOA displays, takedown and storage. Permanent lighting quoted separately.
Prices (lights included, confirmed from a photo): roofline $5-$9 per foot; trees $100-$250 each; bushes $30-$60 each; wreaths and garland $150-$400; takedown and storage $100-$250. Most homes $800-$2,500. $500 minimum. 10% off for September bookings; 50% deposit holds the date.
Open install dates: Nov 3, Nov 8, Nov 10, Nov 15. Late November is almost full.
Rules: ask for a photo of the front of the house, the roofline length if they know it, and the town. Never give a firm price before seeing a photo. If they want it after Thanksgiving, offer the earliest open date and mention late slots go fast.`,
  },
  faqs: [
    { q: "Can I quote without driving out?", a: "Yes. Homeowners send a photo of the house and the price check gives them a range from your real rates." },
    { q: "How do I get customers to rebook?", a: "Yearly Rebooking asks every customer to lock in next year's install the day you take the lights down." },
    { q: "How do I avoid the post-Thanksgiving crunch?", a: "Early-bird deals in September fill your calendar before the rush, so late November isn't a scramble." },
    { q: "How soon will I see more calls?", a: "The Lights Line and review requests start working the week they go live. Start in August or September for the best season." },
  ],
};

export default holidayLighting;
