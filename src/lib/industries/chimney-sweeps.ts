import type { Industry } from "./types";

const chimneySweeps: Industry = {
  slug: "chimney-sweeps",
  name: "Chimney Sweeps",
  who: "chimney sweeps",
  one: "chimney sweep",
  category: "Home services",
  icon: "🔥",
  tagline: "Fall sweep rushes, yearly reminders and home inspector referrals.",
  meta: {
    title: "Marketing for Chimney Sweeps | Truly Automation",
    description:
      "Marketing built for chimney sweeps: a sweep and inspection price check, fall booking rushes, yearly reminders, home inspector and realtor referrals, and review campaigns. One chimney sweep per area.",
  },
  hero: {
    line1: "Book the fall rush",
    line2: "in August.",
    sub: "The marketing team built for chimney sweeps. Past customers get their yearly sweep reminder before the first cold snap, and realtors send you every inspection.",
    cards: {
      lead: {
        label: "Sweep Line",
        title: "Sweep + inspection",
        fields: [["Fireplace", "Wood burning"], ["Last swept", "3 years ago"], ["Town", "Hickory"], ["Booked", "Sept 14, 10 AM"]],
      },
      side: {
        label: "Yearly Reminders",
        title: "August",
        rows: [["Reminders sent", "412"], ["Sweeps booked", "96"], ["Repairs found", "18"]],
      },
      small: { label: "Realtor Referrals", title: "Level 2 inspection", text: "Pre-sale inspection booked" },
    },
  },
  problems: [
    { title: "Everyone calls at once", text: "The first cold week of fall, your phone explodes and you miss half the calls." },
    { title: "Dead in the summer", text: "Nobody thinks about their chimney when it's 90 degrees out." },
    { title: "Customers forget", text: "Chimneys need sweeping every year, but customers forget who did it last time." },
    { title: "Repairs are a hard sell", text: "You find cracked crowns and bad liners, but homeowners don't trust the upsell." },
  ],
  systems: [
    { icon: "📞", title: "Sweep Line", text: "Missed calls get a text back in seconds, ask about their fireplace and book a sweep.", tier: 1 },
    { icon: "🧮", title: "Sweep Price Check", text: "Homeowners pick sweep, inspection or cap and see your price before they book.", tier: 1 },
    { icon: "📅", title: "Yearly Reminders", text: "Every past customer gets a reminder in late summer, so the fall rush is booked early.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every sweep, so you top Google for “chimney sweep near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for sweeps, inspections and chimney repair.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one chimney sweep per area. Your competitors can't hire us.", tier: 1 },
    { icon: "📷", title: "Camera Reports", text: "Inspection photos and video sent to the homeowner, so repairs sell themselves.", tier: 2 },
    { icon: "🏡", title: "Realtor & Inspector Referrals", text: "Level 2 inspections for home sales, referred by agents and home inspectors.", tier: 2 },
    { icon: "☀️", title: "Summer Specials", text: "Off-season deals that fill your calendar from May to August.", tier: 2 },
    { icon: "🧢", title: "Cap & Crown Pages", text: "Pages for caps, crowns, liners and waterproofing that bring repair work.", tier: 2 },
    { icon: "🪵", title: "Wood Stove & Insert Pages", text: "Reach homeowners with wood stoves and gas inserts that need yearly service.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every job.", tier: 2 },
  ],
  packages: [
    { name: "Clean Sweep", tagline: "Everything a chimney sweep needs to handle the fall rush, rebook every customer and get great reviews." },
    { name: "Full Flue", tagline: "Clean Sweep plus camera reports, realtor and inspector referrals, summer specials and repair pages." },
  ],
  estimator: {
    name: "Sweep Price Check",
    question: "What will my chimney service cost?",
    blurb: "Homeowners pick the service and see your price in seconds, so they book instead of calling around.",
    bullets: ["Uses your real rates", "Fills your fall calendar early", "Books straight to your calendar"],
    projectLabel: "Service",
    projects: [
      { key: "sweep", label: "Sweep + Level 1 inspection", unit: "count", unitLabel: "Chimneys", perWord: "chimney", per: [180, 300], start: 1 },
      { key: "level2", label: "Level 2 camera inspection", unit: "none", fixed: [250, 450] },
      { key: "cap", label: "Chimney cap installed", unit: "count", unitLabel: "Caps", perWord: "cap", per: [250, 500], start: 1 },
      { key: "dryer", label: "Dryer vent cleaning", unit: "none", fixed: [120, 200] },
    ],
    toggles: [
      { key: "stove", label: "Wood stove or insert", fixed: [50, 100], only: ["sweep"] },
      { key: "waterproof", label: "Waterproofing", fixed: [300, 600], only: ["sweep", "cap"] },
    ],
    minimum: 150,
    cta: "Book my sweep",
    after: "Repairs quoted after the inspection.",
  },
  demo: {
    name: "Sweep Line",
    business: "Hearthside Chimney Co.",
    greeting:
      "Hi, this is Ella with Hearthside Chimney Co.! Sorry we missed your call, our crew is up on a roof. I can help right here by text. Are you looking to get your chimney swept?",
    chips: ["I need a sweep before winter", "Inspection for a home sale", "How much is a sweep?"],
    busy: "Your crew is up on a roof",
    steps: [
      { t: "The call comes in", d: "A homeowner wants a sweep before the first fire of the season. Your crew is up on a roof, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking about their fireplace and when it was last swept." },
      { t: "The sweep gets booked", d: "Ella shares the price and books a sweep and inspection before the rush." },
    ],
    goal: "a chimney sweep",
    facts: `Business: Hearthside Chimney Co. (a demo company on the Truly Automation website)
Service area: Hickory, Lenoir, Morganton, Newton, Conover and Statesville
Hours: Mon-Fri 8am-5pm, Sat 8am-12pm (Sept-Dec). CSIA certified, licensed and insured.
Services: chimney sweeps with Level 1 inspection, Level 2 camera inspections for home sales, wood stoves and inserts, chimney caps, crown repair, liners, waterproofing, dryer vent cleaning.
Prices: sweep with Level 1 inspection $180-$300 per chimney; wood stove or insert add $50-$100; Level 2 camera inspection $250-$450; chimney cap $250-$500 installed; waterproofing $300-$600; dryer vent cleaning $120-$200. Repairs quoted after the inspection.
Open times: Tomorrow 10:00 AM; Thursday 8:00 AM, 1:00 PM; Saturday 9:00 AM.
Rules: ask what kind of fireplace (wood, gas, stove or insert), when it was last swept and their town. If they smell smoke inside, see a chimney fire, or smell gas, tell them to get out and call 911. If they have no working carbon monoxide alarm, suggest getting one. Never give a firm repair price before the inspection.`,
  },
  faqs: [
    { q: "How do I fill the slow summer months?", a: "Summer specials and early yearly reminders book sweeps from May through August, before the fall rush." },
    { q: "How do yearly reminders work?", a: "Every past customer gets a text and email reminder in late summer with a link to book, so they rebook with you instead of searching again." },
    { q: "How do I sell repairs without sounding pushy?", a: "Camera reports send the homeowner photos and video of what you found, so they see the problem for themselves." },
    { q: "How soon will I see more calls?", a: "The Sweep Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default chimneySweeps;
