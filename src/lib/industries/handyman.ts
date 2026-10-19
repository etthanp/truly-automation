import type { Industry } from "./types";

const handyman: Industry = {
  slug: "handyman",
  name: "Handyman",
  who: "handyman services",
  one: "handyman service",
  category: "Home services",
  icon: "🔨",
  tagline: "Honey-do list pricing, photo quotes and repeat customers.",
  meta: {
    title: "Marketing for Handyman Services | Truly Automation",
    description:
      "Marketing built for handyman businesses: a honey-do list price check, photo quotes by text, repeat customer reminders, realtor and property manager accounts, seasonal home checklists and review campaigns. One handyman service per area.",
  },
  hero: {
    line1: "Honey-do lists,",
    line2: "booked by text.",
    sub: "The marketing team built for handyman businesses. Homeowners send photos of their to-do list and get a price fast, and realtors and property managers keep your schedule full.",
    cards: {
      lead: {
        label: "Fix-It Line",
        title: "Honey-do list",
        fields: [["Jobs", "TV mount, 2 doors, drywall patch"], ["Photos", "4 sent"], ["Town", "Matthews"], ["Booked", "Half day, Friday"]],
      },
      side: {
        label: "Realtor Accounts",
        title: "This month",
        rows: [["Agents sending work", "9"], ["Pre-listing repairs", "16"], ["Inspection fixes", "11"]],
      },
      small: { label: "Seasonal Checklist", title: "Fall reminder sent", text: "Caulking + weatherstrip booked" },
    },
  },
  problems: [
    { title: "Lots of small calls", text: "Every call is a small job, and quoting them all takes as long as doing them." },
    { title: "You can't answer on a ladder", text: "Calls come in while you're working, and people call the next number." },
    { title: "Hard to look professional", text: "Homeowners worry about letting a stranger in, and pick whoever looks most trustworthy online." },
    { title: "No repeat customers", text: "You do a great job, and the customer forgets your name before the next project." },
  ],
  systems: [
    { icon: "📸", title: "Fix-It Line", text: "Missed calls get a text back in seconds asking for photos of the to-do list, then books a visit.", tier: 1 },
    { icon: "🧮", title: "Honey-Do Price Check", text: "Homeowners pick common jobs or hours and see your price, so small jobs don't need site visits.", tier: 1 },
    { icon: "🛡️", title: "Trust Pages", text: "Your license, insurance, background check and real photos, so homeowners feel safe.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every visit, so you top Google for “handyman near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “handyman near me” and every job you do.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one handyman service per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🏡", title: "Realtor Accounts", text: "Pre-listing repairs and inspection fixes referred by local agents every month.", tier: 2 },
    { icon: "🏢", title: "Property Manager Accounts", text: "Turnover repairs and work orders from property managers and landlords.", tier: 2 },
    { icon: "🍂", title: "Seasonal Home Checklists", text: "Spring and fall maintenance checklists sent to past customers, which turn into booked visits.", tier: 2 },
    { icon: "👵", title: "Senior Safety Program", text: "Grab bars, handrails and fall-proofing promoted to seniors and their families.", tier: 2 },
    { icon: "💳", title: "Maintenance Memberships", text: "A yearly plan with seasonal visits for steady income.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every job.", tier: 2 },
  ],
  packages: [
    { name: "Toolbox", tagline: "Everything a handyman needs to quote small jobs fast, look trustworthy and get great reviews." },
    { name: "Full Kit", tagline: "Toolbox plus realtor and property manager accounts, seasonal checklists, senior safety and memberships." },
  ],
  estimator: {
    name: "Honey-Do Price Check",
    question: "What will my to-do list cost?",
    blurb: "Homeowners price common jobs or a block of hours in seconds and send photos, so small jobs don't need a site visit.",
    bullets: ["Uses your real rates", "Photos come with every request", "Books straight to your calendar"],
    projectLabel: "Job",
    projects: [
      { key: "hours", label: "Hourly (to-do list)", unit: "count", unitLabel: "Hours", perWord: "hour", per: [75, 110], start: 3 },
      { key: "tv", label: "TV mounting", unit: "count", unitLabel: "TVs", perWord: "TV", per: [120, 200], start: 1 },
      { key: "drywall", label: "Drywall patch + paint", unit: "count", unitLabel: "Patches", perWord: "patch", per: [125, 250], start: 1 },
      { key: "halfday", label: "Half day (4 hours)", unit: "none", fixed: [300, 420] },
    ],
    toggles: [
      { key: "materials", label: "I need materials picked up", fixed: [25, 50] },
      { key: "wires", label: "Hide TV wires in the wall", per: [75, 150], only: ["tv"] },
    ],
    minimum: 125,
    cta: "Send my to-do list",
    after: "Materials extra. Confirmed from your photos.",
  },
  demo: {
    name: "Fix-It Line",
    business: "Handy Pro Home Services",
    greeting:
      "Hi, this is Ava with Handy Pro Home Services! Sorry we missed your call, we're on a job. I can help right here by text. What's on your to-do list?",
    chips: ["Mount a TV", "Bunch of small repairs", "Fix stuff before I sell"],
    busy: "You're up on a ladder",
    steps: [
      { t: "The call comes in", d: "A homeowner has a list of small repairs before guests arrive. You're on a ladder, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly reply and an easy way to send photos." },
      { t: "The visit gets booked", d: "Ava gets the list and photos, gives a price range, and books a half day." },
    ],
    goal: "a booked visit",
    facts: `Business: Handy Pro Home Services (a demo company on the Truly Automation website)
Service area: Matthews, Mint Hill, Indian Trail, Stallings, Monroe and south Charlotte
Hours: Mon-Fri 8am-5pm, Sat 8am-12pm. Licensed, insured and background checked.
Jobs: TV mounting, drywall repair, doors and trim, caulking, light fixtures and fans (replacing existing), furniture assembly, shelves and curtains, grab bars, minor plumbing (faucets, toilets), pre-listing and inspection repairs.
Prices (confirmed from photos): $75-$110 per hour, 1.5 hour minimum ($125 minimum); half day $300-$420; TV mount $120-$200; hide wires $75-$150; drywall patch $125-$250 each. Materials extra; pickup $25-$50.
Open times: Tomorrow 1:00 PM; Thursday 8:00 AM; Friday half day open; Saturday 9:00 AM.
Rules: ask for the full list and photos. Big jobs like new electrical circuits, panel work, roofing or structural work need a licensed specialist; say you'll refer them. Never give a firm price before seeing photos.`,
  },
  faqs: [
    { q: "How do photo quotes save time?", a: "Homeowners send photos of their to-do list by text, so you can price most small jobs without driving out first." },
    { q: "Where does steady work come from?", a: "Realtors need pre-listing and inspection repairs every month, and property managers need turnover work. In Full Kit we set up those accounts." },
    { q: "How do I look more trustworthy?", a: "Trust pages show your license, insurance, background check and real photos, and steady reviews do the rest." },
    { q: "How soon will I see more calls?", a: "The Fix-It Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default handyman;
