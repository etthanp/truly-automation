import type { Industry } from "./types";

const applianceRepair: Industry = {
  slug: "appliance-repair",
  name: "Appliance Repair",
  who: "appliance repair companies",
  one: "appliance repair company",
  category: "Home services",
  icon: "🔌",
  tagline: "Same-day repair calls, model-number photos and warranty partners.",
  meta: {
    title: "Marketing for Appliance Repair Companies | Truly Automation",
    description:
      "Marketing built for appliance repair companies: a repair price check, model-number photo intake by text, same-day booking, home warranty and property manager accounts, and review campaigns. One appliance repair company per area.",
  },
  hero: {
    line1: "Broken fridge?",
    line2: "Booked today.",
    sub: "The marketing team built for appliance repair companies. Homeowners send a photo of the model sticker, see a price range, and book a same-day visit before they call anyone else.",
    cards: {
      lead: {
        label: "Repair Line",
        title: "Fridge not cooling",
        fields: [["Brand", "Samsung French door"], ["Photo", "Model sticker sent"], ["Town", "Concord"], ["Booked", "Today, 3 PM"]],
      },
      side: {
        label: "Property Managers",
        title: "This month",
        rows: [["Managers sending work", "7"], ["Rental repairs", "22"], ["Repeat units", "9"]],
      },
      small: { label: "Parts Follow-Up", title: "Part arrived", text: "Return visit booked by text" },
    },
  },
  problems: [
    { title: "Every call is urgent", text: "A dead fridge or washer can't wait, so whoever answers first gets the job." },
    { title: "Diagnosing over the phone", text: "Customers can't tell you the model or the problem, so quotes take forever." },
    { title: "Parts delays lose customers", text: "When a part takes a week, customers forget you and call someone else." },
    { title: "Price shoppers", text: "People call five companies asking about the service fee and pick the cheapest." },
  ],
  systems: [
    { icon: "📸", title: "Repair Line", text: "Missed calls get a text back in seconds asking for the brand, problem and a photo of the model sticker, then book a visit.", tier: 1 },
    { icon: "🧮", title: "Repair Price Check", text: "Homeowners pick the appliance and see your service call and typical repair range before they book.", tier: 1 },
    { icon: "⏱️", title: "Same-Day Slots", text: "Open same-day and next-day times shown everywhere, so urgent customers book you first.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every repair, so you top Google for “appliance repair near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for every brand and appliance you fix.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one appliance repair company per area. Your competitors can't hire us.", tier: 1 },
    { icon: "📦", title: "Parts Follow-Up", text: "Automatic texts when a part ships and arrives, with the return visit booked for you.", tier: 2 },
    { icon: "🏢", title: "Property Manager Accounts", text: "Steady rental repair work from property managers, landlords and apartment complexes.", tier: 2 },
    { icon: "📋", title: "Home Warranty Partners", text: "Get set up with home warranty networks to fill slow days.", tier: 2 },
    { icon: "🧼", title: "Maintenance Reminders", text: "Dryer vent, fridge coil and dishwasher check-up reminders sent to past customers.", tier: 2 },
    { icon: "🏷️", title: "Brand Pages", text: "A page for every brand you service, so “Whirlpool repair near me” finds you.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every repair.", tier: 2 },
  ],
  packages: [
    { name: "Service Call", tagline: "Everything an appliance repair company needs to book urgent calls fast and get great reviews." },
    { name: "Full Service", tagline: "Service Call plus parts follow-up, property manager and warranty accounts, and maintenance reminders." },
  ],
  estimator: {
    name: "Repair Price Check",
    question: "What will my appliance repair cost?",
    blurb: "Homeowners pick the appliance and see your service call fee and typical repair range, so price shoppers become booked visits.",
    bullets: ["Uses your real rates", "Model photo comes with every request", "Books same-day slots"],
    projectLabel: "Appliance",
    projects: [
      { key: "fridge", label: "Refrigerator", unit: "none", fixed: [180, 450] },
      { key: "washer", label: "Washer", unit: "none", fixed: [150, 350] },
      { key: "dryer", label: "Dryer", unit: "none", fixed: [130, 300] },
      { key: "dish", label: "Dishwasher", unit: "none", fixed: [140, 320] },
      { key: "oven", label: "Oven or range", unit: "none", fixed: [160, 380] },
    ],
    toggles: [
      { key: "sameday", label: "I need it today", fixed: [40, 75] },
      { key: "ice", label: "Ice maker not working", fixed: [60, 150], only: ["fridge"] },
    ],
    minimum: 89,
    cta: "Book my repair",
    after: "Includes the service call. Parts confirmed at the visit.",
  },
  demo: {
    name: "Repair Line",
    business: "FixRight Appliance Repair",
    greeting:
      "Hi, this is Mia with FixRight Appliance Repair! Sorry we missed your call, our techs are out on repairs. I can help right here by text. What appliance is giving you trouble?",
    chips: ["My fridge stopped cooling", "Washer won't drain", "How much is a service call?"],
    busy: "Your techs are out on repairs",
    steps: [
      { t: "The call comes in", d: "A homeowner's fridge stopped cooling with a week of groceries inside. Your techs are all out, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply and an easy way to send a photo of the model sticker." },
      { t: "The repair gets booked", d: "Mia gets the brand and problem, shares the service call fee, and books a same-day visit." },
    ],
    goal: "a repair visit",
    facts: `Business: FixRight Appliance Repair (a demo company on the Truly Automation website)
Service area: Concord, Kannapolis, Harrisburg, Huntersville, Mooresville and north Charlotte
Hours: Mon-Fri 8am-6pm, Sat 9am-2pm. Licensed and insured. Same-day visits when open.
Appliances: refrigerators, ice makers, washers, dryers, dishwashers, ovens, ranges, cooktops, microwaves (built-in). Brands: Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid, Bosch.
Prices: service call $89 (waived if they go ahead with the repair). Typical repairs including the service call: fridge $180-$450, washer $150-$350, dryer $130-$300, dishwasher $140-$320, oven or range $160-$380. Same-day add $40-$75. 90-day warranty on parts and labor.
Open times: Today 3:00 PM; Tomorrow 9:00 AM, 1:00 PM; Thursday 10:00 AM.
Rules: ask for the brand, the problem and a photo of the model sticker. If they smell gas, tell them to leave the house and call the gas company or 911 first. If water is leaking, tell them to shut off the water valve behind the appliance. Never give a firm price before the tech diagnoses it.`,
  },
  faqs: [
    { q: "Why ask for a model-number photo?", a: "Your tech knows the exact unit before arriving, and can often bring the right part on the first visit." },
    { q: "How do I compete with price shoppers?", a: "The price check shows your service call fee and typical repair range up front, so callers book instead of calling around." },
    { q: "Where does steady work come from?", a: "Property managers and landlords need appliance repairs every month. In Full Service we set up those accounts and home warranty networks." },
    { q: "How soon will I see more calls?", a: "The Repair Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default applianceRepair;
