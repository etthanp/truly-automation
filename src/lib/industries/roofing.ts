import type { Industry } from "./types";

const roofing: Industry = {
  slug: "roofing",
  name: "Roofing",
  who: "roofing contractors",
  one: "roofing company",
  category: "Home services",
  icon: "🏠",
  tagline: "Storm alerts, instant roof quotes and claim follow-up.",
  meta: {
    title: "Marketing for Roofing Contractors | Truly Automation",
    description:
      "Marketing built for roofers: an instant roof estimator, storm alert campaigns, missed-call text-back, inspection booking, insurance claim updates and neighbor marketing. One roofing company per city.",
  },
  hero: {
    line1: "The storm hits at 2am.",
    line2: "Your phone rings first.",
    sub: "The marketing team built only for roofing contractors. Instant roof quotes, storm alerts to the right neighborhoods, and follow-up on every inspection, so the storm chasers don't get your jobs.",
    cards: {
      lead: {
        label: "Leak Line",
        title: "Leak over the kitchen",
        fields: [["Roof", "Asphalt, about 18 years old"], ["Damage", "Hail last night"], ["Town", "Gastonia"], ["Insurance", "Wants to file a claim"]],
      },
      side: {
        label: "Storm Alert",
        title: "Hail reported last night",
        rows: [["Past customers in the zone", "212"], ["Texts sent", "212"], ["Inspections booked", "9"]],
      },
      small: { label: "Claim Tracker", title: "Adjuster meeting tomorrow", text: "Reminder sent to the Hendersons" },
    },
  },
  problems: [
    { title: "Storm chasers take your jobs", text: "After every hailstorm, out-of-town crews knock on doors and run ads before you've even answered your voicemail." },
    { title: "Leads go cold in an hour", text: "A homeowner with a leak calls three roofers. Whoever calls back first gets the inspection, and usually the job." },
    { title: "Insurance jobs stall", text: "Homeowners get confused by adjusters and paperwork, stop answering, and the job sits for weeks or goes to someone else." },
    { title: "One job every 20 years", text: "A new roof lasts decades, so every customer is one-and-done unless you stay in touch for repairs, gutters and referrals." },
  ],
  systems: [
    { icon: "🧮", title: "Instant Roof Quote", text: "Homeowners pick their roof size and material and get a price range on your website. You get a lead with the details already filled in.", tier: 1 },
    { icon: "📸", title: "Leak Line", text: "Missed calls get a text back in seconds. It asks for photos of the damage, the roof's age and the address, and books an inspection.", tier: 1 },
    { icon: "⛈️", title: "Storm Alert", text: "When hail or high wind hits your area, past customers and homes in the affected zip codes get a text and ads offering a free inspection.", tier: 1 },
    { icon: "📅", title: "Inspection Booker", text: "Free roof inspections booked online with reminders, so fewer people forget or cancel.", tier: 1 },
    { icon: "📍", title: "Job Site Pages", text: "Every finished roof becomes a page like “Roof replacement in Belmont” with photos, which helps you rank in that town on Google and ChatGPT.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one roofing company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "📑", title: "Claim Tracker", text: "Homeowners get automatic updates and reminders through the insurance process (adjuster meeting, approval, install date), so jobs don't stall.", tier: 2 },
    { icon: "🪧", title: "Neighbor Drop", text: "Yard signs and postcards to the homes around every job: “We just replaced your neighbor's roof.”", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open quote at day 2, 7 and 14.", tier: 2 },
    { icon: "🤝", title: "Realtor & Inspector Outreach", text: "Home inspectors and agents flag roofs on every sale. We build those relationships so the repair work comes to you.", tier: 2 },
    { icon: "🛡️", title: "Roof Care Club", text: "Yearly roof check memberships with gutter cleaning, which bring in steady income and repair work between replacements.", tier: 2 },
    { icon: "🦺", title: "Crew Finder", text: "A hiring page and job ads for roofers and laborers, ready before storm season.", tier: 2 },
  ],
  packages: [
    { name: "Ridge", tagline: "Everything a roofing company needs to get found, answer every lead fast, and book more inspections." },
    { name: "Storm Ready", tagline: "Ridge plus storm campaigns, claim follow-up and the outreach that keeps work coming all year." },
  ],
  estimator: {
    name: "Instant Roof Quote",
    question: "What will my new roof cost?",
    blurb: "Homeowners get a price range for their roof in 30 seconds. You get their name, number, roof size and material before you ever pick up a ladder.",
    bullets: ["Uses your prices per square and your materials", "Every lead texts straight to your phone", "Works overnight, right after a storm"],
    projects: [
      { key: "shingle", label: "Asphalt shingle roof", unit: "count", unitLabel: "Roof size (sq ft)", perWord: "sq ft", per: [4.5, 7], start: 2000 },
      { key: "metal", label: "Metal roof", unit: "count", unitLabel: "Roof size (sq ft)", perWord: "sq ft", per: [9, 15], start: 2000 },
      { key: "flat", label: "Flat roof (TPO)", unit: "count", unitLabel: "Roof size (sq ft)", perWord: "sq ft", per: [6, 10], start: 1500 },
      { key: "repair", label: "Leak or storm repair", unit: "none", fixed: [400, 1500] },
    ],
    toggles: [
      { key: "tearoff", label: "Tear off the old roof first", per: [1, 1.5], on: true },
      { key: "steep", label: "Steep roof (hard to walk)", per: [0.5, 1.5] },
    ],
    minimum: 400,
  },
  demo: {
    name: "Leak Line",
    business: "Summit Peak Roofing",
    greeting:
      "Hi, this is Ava with Summit Peak Roofing. Sorry we missed your call, our crews are up on roofs right now! I can help right here by text. What's going on with your roof?",
    chips: ["I have a leak", "Hail hit my roof last night", "How much is a new roof?"],
    busy: "Your crew is up on a roof",
    steps: [
      { t: "The call comes in", d: "A homeowner calls about a leak after last night's storm. Your crews are on two roofs, so nobody can grab it." },
      { t: "It texts back in seconds", d: "Instead of voicemail, they get a friendly text before they call the storm chaser who knocked on their door." },
      { t: "An inspection gets booked", d: "Ava asks about the damage, the roof's age and the address, asks for photos, and books a free inspection." },
    ],
    goal: "a free roof inspection",
    facts: `Business: Summit Peak Roofing (a demo company on the Truly Automation website)
Service area: Gastonia, Charlotte, Belmont, Mount Holly, Rock Hill and nearby towns
Hours: Mon-Sat 7am-6pm. Emergency tarping available after storms. Licensed and insured.
Work: roof replacement (asphalt shingle, metal, flat/TPO), leak and storm repair, gutters, roof inspections, helping homeowners document storm damage for their insurance.
Typical prices (final price after a free inspection): shingle roof about $4.50-$7 per sq ft; metal $9-$15 per sq ft; flat/TPO $6-$10 per sq ft; most leak repairs $400-$1,500; emergency tarp $300-$700.
Free inspection times this week: Tomorrow 8:00 AM, 1:00 PM, 4:30 PM; Thursday 9:00 AM, 3:00 PM; Saturday 10:00 AM.
Rules: never promise insurance will pay or say you can negotiate with the insurance company. You can say the crew will document the damage with photos for their claim. If water is actively coming in, offer emergency tarping and treat it as urgent.`,
  },
  faqs: [
    { q: "How do Storm Alerts work?", a: "We watch for hail and high-wind reports in your service area. When one hits, homes and past customers in the affected zip codes get a text and see ads offering a free inspection from you, usually the same day." },
    { q: "Do you handle insurance claims?", a: "No, and neither should a marketing company. The Claim Tracker just keeps homeowners updated and reminded at each step (adjuster meeting, approval, install date) so the job keeps moving. You handle the claim work the way you already do." },
    { q: "Is the roof quote accurate?", a: "It gives a realistic range based on your own prices per square foot and materials. The exact price still comes after your inspection. Its job is to start the conversation and screen out people who aren't ready." },
    { q: "How soon will I see more calls?", a: "The Leak Line, Inspection Booker and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default roofing;
