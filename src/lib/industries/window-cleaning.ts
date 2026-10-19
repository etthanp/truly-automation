import type { Industry } from "./types";

const windowCleaning: Industry = {
  slug: "window-cleaning",
  name: "Window Cleaning",
  who: "window cleaning companies",
  one: "window cleaning company",
  category: "Home services",
  icon: "🪟",
  tagline: "Instant window pricing, recurring routes and storefront accounts.",
  meta: {
    title: "Marketing for Window Cleaning Companies | Truly Automation",
    description:
      "Marketing built for window cleaners: an instant price by window count, booking by text, recurring service plans, storefront and commercial route outreach, gutter and pressure washing add-ons, and neighbor marketing. One window cleaning company per area.",
  },
  hero: {
    line1: "Spotless windows.",
    line2: "Recurring routes.",
    sub: "The marketing team built for window cleaners. Homeowners count their windows and book online, one-time cleanings turn into twice-a-year plans, and storefronts fill your weekday route.",
    cards: {
      lead: {
        label: "Clear Line",
        title: "Inside + outside, 28 windows",
        fields: [["Home", "Two story"], ["Extras", "Screens + tracks"], ["Town", "Davidson"], ["Booked", "Tuesday 9 AM"]],
      },
      side: {
        label: "Storefront Route",
        title: "Monthly accounts",
        rows: [["Storefronts", "34"], ["Monthly revenue", "$3,900"], ["Added this month", "6"]],
      },
      small: { label: "Twice-a-Year Plan", title: "Spring visit booked", text: "Auto-scheduled, no call needed" },
    },
  },
  problems: [
    { title: "One-and-done customers", text: "Homeowners clean their windows once and forget about you." },
    { title: "Quoting takes time", text: "Every quote means counting windows on site or going back and forth by phone." },
    { title: "Weather and seasons", text: "Spring is packed, winter is slow, and rain days wreck the schedule." },
    { title: "Commercial routes are hard to build", text: "Storefront accounts are steady money, but you don't have time to walk in and ask." },
  ],
  systems: [
    { icon: "🧮", title: "Window Price Check", text: "Homeowners enter their window count and options and see the price on your website.", tier: 1 },
    { icon: "📲", title: "Clear Line", text: "Missed calls get a text back in seconds with a price and open days, and the job gets booked.", tier: 1 },
    { icon: "🔁", title: "Recurring Plans", text: "Every customer is offered a twice-a-year or quarterly plan that schedules itself.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests right after the job, when the windows are sparkling.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “window cleaning near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one window cleaning company per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🏬", title: "Storefront Route Builder", text: "Outreach to storefronts, restaurants and offices along your route for monthly service.", tier: 2 },
    { icon: "🍂", title: "Gutter & Wash Add-Ons", text: "Gutter cleaning, pressure washing and solar panel cleaning offered to every customer.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards and door hangers to the homes around every job.", tier: 2 },
    { icon: "🏡", title: "Realtor & Builder Program", text: "Pre-listing and post-construction cleanings referred by agents and builders.", tier: 2 },
    { icon: "🌸", title: "Spring Pre-Booking", text: "Past customers book spring early with a small discount, so the season fills before it starts.", tier: 2 },
    { icon: "🎄", title: "Holiday Lights Add-On", text: "Holiday light hanging offered to window customers to fill winter.", tier: 2 },
  ],
  packages: [
    { name: "Squeegee", tagline: "Everything a window cleaner needs to price online and turn every customer into a recurring plan." },
    { name: "Full Shine", tagline: "Squeegee plus storefront routes, add-ons, neighbor marketing, realtor work and seasonal pushes." },
  ],
  estimator: {
    name: "Window Price Check",
    question: "What will my window cleaning cost?",
    blurb: "Homeowners count their windows, pick options and book, with no site visit to quote.",
    bullets: ["Uses your real prices per window", "Every booking texts straight to your phone", "Offers a recurring plan on every quote"],
    projectLabel: "Service",
    projects: [
      { key: "out", label: "Outside only", unit: "count", unitLabel: "Windows", perWord: "window", per: [5, 8], start: 30 },
      { key: "both", label: "Inside + outside", unit: "count", unitLabel: "Windows", perWord: "window", per: [9, 14], start: 30 },
    ],
    toggles: [
      { key: "screens", label: "Screen cleaning", per: [2, 3] },
      { key: "tracks", label: "Track + sill detailing", per: [2, 4], only: ["both"] },
      { key: "story", label: "Two or three stories", per: [1, 3] },
      { key: "plan", label: "Twice-a-year plan (save 10%)", per: [-0.5, -1.4] },
    ],
    minimum: 150,
    cta: "Book my cleaning",
    after: "Price confirmed on arrival.",
  },
  demo: {
    name: "Clear Line",
    business: "Crystal View Window Cleaning",
    greeting:
      "Hi, this is Ava with Crystal View Window Cleaning! Sorry we missed your call, we're up on a ladder. I can help right here by text. About how many windows does your home have?",
    chips: ["Price for my whole house?", "Inside and outside", "Do you clean gutters too?"],
    busy: "You're up on a ladder",
    steps: [
      { t: "The call comes in", d: "A homeowner wants clean windows before hosting the holidays. You're on a ladder, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a price for their window count right away." },
      { t: "The cleaning gets booked", d: "Ava asks the window count, stories and options, gives the price, offers a recurring plan, and books it." },
    ],
    goal: "a booked cleaning",
    facts: `Business: Crystal View Window Cleaning (a demo company on the Truly Automation website)
Service area: Davidson, Cornelius, Huntersville, Mooresville and Lake Norman
Hours: Mon-Sat 8am-5pm. Insured. Weather days rescheduled automatically.
Services: residential window cleaning inside and out, screens, tracks and sills, hard water stain removal, gutter cleaning, pressure washing, solar panel cleaning, storefront routes, holiday light hanging.
Prices (confirmed on arrival): outside only $5-$8 per window; inside and outside $9-$14 per window; screens $2-$3 each; tracks $2-$4 each; two or three story homes add $1-$3 per window; twice-a-year plan saves 10%. $150 minimum. Most homes have 20-35 windows.
Open days: Tuesday 9:00 AM; Wednesday 1:00 PM; Friday 9:00 AM; Saturday 8:00 AM.
Rules: ask window count (or home size), stories, inside/outside and screens. Offer the twice-a-year plan. Never give a firm price.`,
  },
  faqs: [
    { q: "How do Recurring Plans work?", a: "Every customer is offered a twice-a-year or quarterly plan. Visits schedule themselves, and you build a route of repeat customers." },
    { q: "Can you help build a storefront route?", a: "Yes. In Full Shine we reach out to storefronts, restaurants and offices along your existing route for monthly service." },
    { q: "What about winter?", a: "Holiday light hanging, gutter cleaning and spring pre-booking campaigns keep winter busy and fill spring before it starts." },
    { q: "How soon will I see more bookings?", a: "The price check and Clear Line start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default windowCleaning;
