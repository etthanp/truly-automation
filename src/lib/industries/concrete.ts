import type { Industry } from "./types";

const concrete: Industry = {
  slug: "concrete",
  name: "Concrete",
  who: "concrete contractors",
  one: "concrete company",
  category: "Construction & outdoor",
  icon: "🧱",
  tagline: "Instant pour pricing, permit leads and quote follow-up.",
  meta: {
    title: "Marketing for Concrete Contractors | Truly Automation",
    description:
      "The marketing team built only for concrete contractors: a Pour Price Calculator on your website, Job Site Pages, missed-call text-back, estimate follow-up, permit leads and builder outreach. One concrete company per city.",
  },
  hero: {
    line1: "You pour the concrete.",
    line2: "We fill the schedule.",
    sub: "The marketing team built only for concrete contractors. More calls, fewer tire-kickers, and follow-up on every quote, while you stay on the job site.",
    cards: {
      lead: {
        label: "Photo Quote Line",
        title: "Driveway replacement",
        fields: [["Size", "About 640 sq ft"], ["Finish", "Broom, tear-out"], ["Town", "Newberg"], ["Timeline", "Before spring"]],
      },
      side: {
        label: "Permit Radar",
        title: "This week in your county",
        rows: [["New home permits", "14"], ["Pool permits", "3"], ["Shop & pole barn permits", "5"]],
      },
      small: { label: "Estimate Chaser", title: "Day 7 follow-up sent", text: "Stamped patio quote, $8,400" },
    },
  },
  problems: [
    { title: "Tire-kickers eat your day", text: "Half the calls are someone wanting a price on a 10x10 pad. You drive out, measure, write the quote, and never hear from them again." },
    { title: "Quotes that go quiet", text: "You bid a $14,000 driveway and nobody follows up. A month later you drive by and someone else poured it." },
    { title: "Feast or famine", text: "Slammed all summer, dead when it rains or freezes, with no plan to fill the slow months or line up spring work early." },
    { title: "Calls you can't answer", text: "You're finishing a slab when the phone rings. It goes to voicemail, and they call the next concrete company on Google." },
  ],
  systems: [
    { icon: "🧮", title: "Pour Price Calculator", text: "Homeowners get a real price range on your website in 30 seconds. You get their name, number and project.", tier: 1 },
    { icon: "📸", title: "Photo Quote Line", text: "Missed calls get a text back in seconds. It collects photos, size, town and timeline, then sends you a ready-to-quote lead.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Google Maps and ChatGPT when homeowners search for concrete, with a page for every service and town you cover.", tier: 1 },
    { icon: "📍", title: "Job Site Pages", text: "Every finished pour becomes a page like “Stamped patio in Dayton” that helps you rank on Google and ChatGPT in that town.", tier: 1 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic texts and emails follow up on every open quote at day 2, 7 and 14, so bids stop going quiet.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one concrete company per city. Once your town is yours, your competitors can't hire us.", tier: 1 },
    { icon: "📡", title: "Permit Radar", text: "Every week, new home, pool and shop permits in your county. Each one is a future driveway, deck or slab.", tier: 2 },
    { icon: "🤝", title: "Outreach", text: "We call and email home builders, general contractors, pool companies and property managers for you to line up steady repeat work.", tier: 2 },
    { icon: "📋", title: "Bid Board", text: "Public concrete jobs open for bids in your area, sent to you every week: city, county, school and commercial work.", tier: 2 },
    { icon: "✉️", title: "Neighbor Drop", text: "Postcards to the homes around every job: “We just poured your neighbor's driveway.” Concrete sells itself to the street.", tier: 2 },
    { icon: "❄️", title: "Off-Season Engine", text: "Pre-book spring pours over the winter, send reseal reminders to past customers, and push indoor work when it rains.", tier: 2 },
    { icon: "🦺", title: "Crew Finder", text: "A hiring page and job ads that bring in finishers and laborers, so you can say yes to more work.", tier: 2 },
  ],
  packages: [
    { name: "Foundation", tagline: "Everything a concrete company needs to get found, get calls, and win more of the jobs you quote." },
    { name: "Reinforced", tagline: "Foundation plus the systems that bring in builder work, commercial bids, and a full schedule all year." },
  ],
  estimator: {
    name: "Pour Price Calculator",
    question: "What will my project cost?",
    blurb: "Homeowners get a real price range in 30 seconds. You get their name, number and project details, and the tire-kickers screen themselves out before they ever call you.",
    bullets: ["Uses your prices, finishes and job minimum", "Every lead texts straight to your phone", "Works around the clock, even while you're pouring"],
    projects: [
      { key: "driveway", label: "Driveway", unit: "area", per: [8, 12], start: [24, 20] },
      { key: "patio", label: "Patio", unit: "area", per: [8, 12], start: [16, 14] },
      { key: "sidewalk", label: "Sidewalk", unit: "area", per: [8, 11], start: [40, 4] },
      { key: "slab", label: "Garage / shop slab", unit: "area", per: [6, 9], start: [30, 30] },
    ],
    choiceLabel: "Finish",
    choices: [
      { key: "broom", label: "Broom finish" },
      { key: "aggregate", label: "Exposed aggregate", per: [3, 5] },
      { key: "stamped", label: "Stamped", per: [6, 9] },
    ],
    toggles: [{ key: "tearout", label: "Remove old concrete first", per: [2, 4], on: true }],
    minimum: 2500,
  },
  demo: {
    name: "Photo Quote Line",
    business: "Granite Ridge Concrete",
    greeting:
      "Hi, this is Ava with Granite Ridge Concrete. Sorry we missed your call, the crew is out on a pour! I can help right here by text. What kind of project are you thinking about?",
    chips: ["I need a new driveway", "Price for a stamped patio?", "Do you pour shop slabs?"],
    busy: "Your crew is out on a pour",
    steps: [
      { t: "The call comes in", d: "A homeowner calls about a new driveway. Your whole crew is finishing a slab, so nobody can grab it." },
      { t: "It texts back in seconds", d: "Instead of hitting voicemail, they get a friendly text before they can dial the next company." },
      { t: "You get a ready-to-quote lead", d: "Ava asks about the project, size, finish, town and timeline, asks for photos, and books a time for you to come measure." },
    ],
    goal: "a free on-site measure",
    facts: "(Concrete uses the dedicated 'concrete' prompt in the chat route.)",
  },
  faqs: [
    { q: "Do you only work with concrete companies?", a: "On this page, yes. Every system here is built for how concrete companies run: quotes by the square foot, busy and slow seasons, builders and general contractors, and crews on the job all day." },
    { q: "What's Territory Lock?", a: "We only work with one concrete company per city. Once you sign up, we won't take on your competitors in your town. If your city is already taken, we'll tell you on the checkup." },
    { q: "How does the Pour Price Calculator work?", a: "It lives on your website. A homeowner picks the project, size and finish and gets a price range based on your prices. To get an exact quote they leave their name, number and photos, and the lead texts straight to you. You set the prices, finishes and job minimum." },
    { q: "How soon will I see more calls?", a: "The Photo Quote Line, Estimate Chaser and review requests start working the week they go live. Google Maps rankings and ads build over the first 60 to 90 days, which is why plans start with a 3-month term." },
    { q: "Who pays for postcards?", a: "Neighbor Drop printing and postage are billed at cost with no markup." },
  ],
  samples: true,
};

export default concrete;
