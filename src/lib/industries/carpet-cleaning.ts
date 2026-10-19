import type { Industry } from "./types";

const carpetCleaning: Industry = {
  slug: "carpet-cleaning",
  name: "Carpet Cleaning",
  who: "carpet cleaning companies",
  one: "carpet cleaning company",
  category: "Home services",
  icon: "🧽",
  tagline: "Instant room pricing, rebooking reminders and property manager work.",
  meta: {
    title: "Marketing for Carpet Cleaning Companies | Truly Automation",
    description:
      "Marketing built for carpet and upholstery cleaners: an instant price by room, booking by text, 12-month rebooking reminders, pet stain and upholstery upsells, property manager and realtor accounts, and review campaigns. One carpet cleaning company per area.",
  },
  hero: {
    line1: "Priced by the room.",
    line2: "Booked by text.",
    sub: "The marketing team built for carpet cleaners. Homeowners price their rooms and book online, every customer gets a reminder in a year, and property managers send you move-out cleanings every week.",
    cards: {
      lead: {
        label: "Clean Line",
        title: "4 rooms + stairs",
        fields: [["Extras", "Pet stain treatment"], ["Also", "Sectional sofa"], ["Town", "Gastonia"], ["Booked", "Thursday 10 AM"]],
      },
      side: {
        label: "Yearly Reminders",
        title: "This month",
        rows: [["Customers due", "310"], ["Rebooked", "124"], ["Upholstery added", "37"]],
      },
      small: { label: "Property Manager", title: "Move-out cleaning", text: "Unit 14B, 3 bedrooms" },
    },
  },
  problems: [
    { title: "Bait-and-switch competitors", text: "Companies advertise “$19 a room,” then upsell on site. Homeowners don't trust any price." },
    { title: "Once a year, if they remember", text: "Customers mean to clean every year but forget who they used." },
    { title: "You're on a job all day", text: "You can't answer the phone with the wand in your hand." },
    { title: "Uneven schedule", text: "Busy before the holidays and in spring, slow in between." },
  ],
  systems: [
    { icon: "🧮", title: "Room Price Check", text: "Homeowners pick their rooms and extras and see an honest price, the opposite of bait-and-switch.", tier: 1 },
    { icon: "📲", title: "Clean Line", text: "Missed calls get a text back in seconds with a price and open times, and the job gets booked.", tier: 1 },
    { icon: "📅", title: "Yearly Reminders", text: "Every customer gets a reminder 12 months later (6 for pet owners), with a link to rebook.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests while the carpets are still drying and the customer is happy.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “carpet cleaning near me” and pet stain removal.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one carpet cleaning company per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🛋️", title: "Upholstery & Tile Upsells", text: "Offers for sofas, rugs and tile and grout to every carpet customer.", tier: 2 },
    { icon: "🏢", title: "Property Manager Accounts", text: "Move-out cleanings every week. We set up recurring accounts with property managers and apartments.", tier: 2 },
    { icon: "🏡", title: "Realtor Program", text: "Pre-listing and move-in cleanings referred by local agents.", tier: 2 },
    { icon: "🐶", title: "Pet Owner Campaigns", text: "Pet stain and odor campaigns aimed at the households that need you most.", tier: 2 },
    { icon: "🎄", title: "Holiday & Spring Pushes", text: "Pre-holiday and spring cleaning campaigns sent to past customers first.", tier: 2 },
    { icon: "🏬", title: "Commercial Outreach", text: "Offices, churches and medical offices for recurring commercial carpet care.", tier: 2 },
  ],
  packages: [
    { name: "Spot Clean", tagline: "Everything a carpet cleaner needs to price honestly online and bring every customer back yearly." },
    { name: "Deep Clean", tagline: "Spot Clean plus upholstery upsells, property manager and realtor accounts, pet and seasonal campaigns." },
  ],
  estimator: {
    name: "Room Price Check",
    question: "What will my carpet cleaning cost?",
    blurb: "Homeowners pick their rooms and extras and see an honest price, with no $19-a-room surprises.",
    bullets: ["Uses your real prices", "Every booking texts straight to your phone", "Upholstery added in one tap"],
    projectLabel: "Service",
    projects: [
      { key: "rooms", label: "Carpet cleaning", unit: "count", unitLabel: "Rooms", perWord: "room", per: [40, 60], start: 4 },
      { key: "sofa", label: "Upholstery (sofa)", unit: "none", fixed: [120, 200] },
      { key: "tile", label: "Tile + grout", unit: "area", per: [1, 2], start: [20, 15] },
    ],
    toggles: [
      { key: "stairs", label: "Stairs", fixed: [40, 75], only: ["rooms"] },
      { key: "pet", label: "Pet stain + odor treatment", per: [15, 25], only: ["rooms"] },
      { key: "protect", label: "Stain protector", per: [10, 20], only: ["rooms"] },
      { key: "seal", label: "Grout sealing", per: [0.5, 1], only: ["tile"] },
    ],
    minimum: 150,
    cta: "Book my cleaning",
    after: "No surprise upsells on site.",
  },
  demo: {
    name: "Clean Line",
    business: "FreshStep Carpet Care",
    greeting:
      "Hi, this is Ava with FreshStep Carpet Care! Sorry we missed your call, our techs are on a job. I can help right here by text. How many rooms are you thinking about?",
    chips: ["Price for 4 rooms?", "Dog stains in the carpet", "Can you clean my couch?"],
    busy: "Your tech is on a job",
    steps: [
      { t: "The call comes in", d: "A family with a new puppy needs 4 rooms and the stairs cleaned. Your tech is on a job, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get an honest price before they call the $19-a-room ad." },
      { t: "The cleaning gets booked", d: "Ava asks rooms, stains and extras, gives the price, and books a time." },
    ],
    goal: "a booked cleaning",
    facts: `Business: FreshStep Carpet Care (a demo company on the Truly Automation website)
Service area: Gastonia, Belmont, Mount Holly, Dallas, Cramerton and west Charlotte
Hours: Mon-Sat 8am-6pm. IICRC-certified, truck-mounted hot water extraction. Carpets dry in 4-6 hours.
Services: carpet cleaning, pet stain and odor treatment, stairs, upholstery, area rugs, tile and grout, stain protector, move-out cleanings.
Prices (honest pricing, no surprise upsells): carpet $40-$60 per room; stairs $40-$75; pet treatment $15-$25 per room; protector $10-$20 per room; sofa $120-$200; sectional $200-$300; tile and grout $1-$2 per sq ft. $150 minimum.
Open times: Tomorrow 1:00 PM; Thursday 10:00 AM; Friday 8:00 AM, 2:00 PM; Saturday 9:00 AM.
Rules: ask rooms, stairs, pets or stains, and furniture. Say some old or set-in stains may not come out completely. Never give a firm price before the tech confirms room sizes.`,
  },
  faqs: [
    { q: "Why show prices when competitors don't?", a: "Homeowners are tired of “$19 a room” ads that turn into big upsells. Honest prices up front win trust and better customers." },
    { q: "How do Yearly Reminders work?", a: "Every customer gets a reminder 12 months after their cleaning, or 6 months for pet owners, with a link to rebook. It turns one-time jobs into repeat customers." },
    { q: "Can you help with property managers?", a: "Yes. In Deep Clean we reach out to property managers and apartment communities for recurring move-out cleanings." },
    { q: "How soon will I see more calls?", a: "The Clean Line and reminders start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default carpetCleaning;
