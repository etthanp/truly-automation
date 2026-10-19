import type { Industry } from "./types";

const junkRemoval: Industry = {
  slug: "junk-removal",
  name: "Junk Removal",
  who: "junk removal companies",
  one: "junk removal company",
  category: "Home services",
  icon: "🚛",
  tagline: "Photo quotes, same-day booking and realtor cleanouts.",
  meta: {
    title: "Marketing for Junk Removal Companies | Truly Automation",
    description:
      "Marketing built for junk removal companies: a truckload price estimator, photo quotes by text, same-day booking, realtor, estate and property manager cleanout outreach. One junk removal company per city.",
  },
  hero: {
    line1: "Snap a photo.",
    line2: "Book the truck.",
    sub: "The marketing team built only for junk removal companies. Customers send a photo and get a price in minutes, book same-day, and realtors and property managers keep the truck full every week.",
    cards: {
      lead: {
        label: "Photo Quote",
        title: "Garage cleanout",
        fields: [["Load", "About half a truck"], ["Items", "Old couch, boxes, bikes"], ["Town", "Gastonia"], ["When", "Saturday"]],
      },
      side: {
        label: "Partner Cleanouts",
        title: "This month",
        rows: [["Realtor referrals", "6"], ["Property manager jobs", "9"], ["Estate cleanouts", "3"]],
      },
      small: { label: "Same-Day Slot", title: "Booked for 2:00 PM", text: "Mattress + box spring pickup" },
    },
  },
  problems: [
    { title: "Every quote is a guess", text: "Customers describe their junk badly on the phone, and you either drive out or guess wrong." },
    { title: "Franchises spend more", text: "National franchises run big ad budgets and show up first on Google." },
    { title: "Uneven days", text: "Some days the truck is full; other days it sits in the lot." },
    { title: "One-time customers", text: "Homeowners clean out once. The repeat work comes from realtors, property managers and estates." },
  ],
  systems: [
    { icon: "🧮", title: "Truckload Estimator", text: "Customers pick how much junk they have (from one item to a full truck) and see your price range online.", tier: 1 },
    { icon: "📸", title: "Photo Quote Line", text: "Missed calls get a text back in seconds asking for photos, so you can quote in minutes without driving out.", tier: 1 },
    { icon: "⚡", title: "Same-Day Booking", text: "Customers grab an open same-day or next-day slot online, which fills the empty spots in your schedule.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “junk removal near me” in every town you serve.", tier: 1 },
    { icon: "📍", title: "Local Job Pages", text: "Cleanout pages for each town (“Garage cleanout in Gastonia”) that beat the franchises in local search.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one junk removal company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🏡", title: "Realtor Cleanout Program", text: "Agents need homes cleared before listing and after closing. We build those relationships so the work repeats.", tier: 2 },
    { icon: "🏢", title: "Property Manager Outreach", text: "Evictions and move-outs leave junk behind every month. We reach out for repeat contracts.", tier: 2 },
    { icon: "🕊️", title: "Estate Cleanout Partners", text: "Outreach to estate attorneys, senior move managers and estate sale companies.", tier: 2 },
    { icon: "🏗️", title: "Contractor Debris Hauling", text: "Remodelers and roofers need debris gone fast. We line up those recurring hauls.", tier: 2 },
    { icon: "♻️", title: "Donation & Recycling Pages", text: "Show customers what gets donated and recycled, which wins eco-minded customers over cheaper haulers.", tier: 2 },
    { icon: "🔁", title: "Quote Chaser", text: "Automatic follow-up on every photo quote that didn't book.", tier: 2 },
  ],
  packages: [
    { name: "Haul", tagline: "Everything a junk removal company needs to quote from photos and fill every open slot." },
    { name: "Full Load", tagline: "Haul plus realtor, property manager, estate and contractor work that keeps the truck full every week." },
  ],
  estimator: {
    name: "Truckload Estimator",
    question: "What will my junk removal cost?",
    blurb: "Customers pick how much junk they have and see your price range in 30 seconds. Then they send a photo and book.",
    bullets: ["Uses your truckload prices", "Every lead texts straight to your phone with photos", "Fills same-day slots automatically"],
    projects: [
      { key: "single", label: "One or two items", unit: "none", fixed: [100, 200] },
      { key: "quarter", label: "Quarter truck", unit: "none", fixed: [175, 325] },
      { key: "half", label: "Half truck", unit: "none", fixed: [325, 550] },
      { key: "full", label: "Full truck", unit: "none", fixed: [550, 900] },
    ],
    toggles: [
      { key: "heavy", label: "Heavy items (piano, hot tub, concrete)", fixed: [150, 400] },
      { key: "stairs", label: "Items upstairs or in a basement", fixed: [25, 75] },
      { key: "sameday", label: "Same-day pickup", fixed: [0, 50] },
    ],
  },
  demo: {
    name: "Photo Quote Line",
    business: "Clear Out Junk Removal",
    greeting:
      "Hi, this is Ava with Clear Out Junk Removal. Sorry we missed your call, the truck is out on a pickup! I can help right here by text. What do you need hauled away?",
    chips: ["Garage cleanout", "Just an old couch", "Can you come today?"],
    busy: "Your crew is loading the truck",
    steps: [
      { t: "The call comes in", d: "A homeowner wants their garage cleared before the weekend. Your crew is loading the truck, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly text before they call the franchise from the billboard." },
      { t: "The pickup gets booked", d: "Ava asks for photos and what's going, gives a price range, and books the next open slot." },
    ],
    goal: "a booked pickup",
    facts: `Business: Clear Out Junk Removal (a demo company on the Truly Automation website)
Service area: Charlotte, Gastonia, Belmont, Mount Holly, Huntersville and nearby towns
Hours: Mon-Sat 7am-7pm. Insured. Same-day pickups often available.
Work: household junk, furniture and mattresses, appliances, garage and basement cleanouts, estate cleanouts, yard waste, construction debris, hot tub and piano removal. Usable items get donated; recyclables get recycled.
Typical prices (exact price on site before any work starts): one or two items $100-$200; quarter truck $175-$325; half truck $325-$550; full truck $550-$900; heavy items (piano, hot tub, concrete) add $150-$400.
Open slots: Today 2:00 PM, 5:00 PM; Tomorrow 8:00 AM, 11:00 AM, 3:00 PM; Saturday 9:00 AM.
Rules: ask for photos of the items so the crew can quote accurately. Say the final price is confirmed on site before any work starts. No hazardous waste (paint cans, chemicals); suggest the county drop-off for those.`,
  },
  faqs: [
    { q: "How accurate are photo quotes?", a: "Very close for most jobs. Customers send photos and pick a truckload size, and your crew confirms the final price on site before any work starts." },
    { q: "How do I beat the franchises on Google?", a: "Local job pages for each town, steady reviews, a complete Google profile and fast replies help a local company outrank franchises for searches in its area." },
    { q: "Where does the repeat work come from?", a: "Realtors, property managers, estate professionals and contractors need hauling every month. In Full Load, we build those relationships for you." },
    { q: "How soon will I see more bookings?", a: "The Photo Quote Line, same-day booking and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default junkRemoval;
