import type { Industry } from "./types";

const autoRepair: Industry = {
  slug: "auto-repair",
  name: "Auto Repair",
  who: "auto repair shops",
  one: "auto repair shop",
  category: "Auto",
  icon: "🔧",
  tagline: "Repair price checks, service reminders and fleet accounts.",
  meta: {
    title: "Marketing for Auto Repair Shops | Truly Automation",
    description:
      "Marketing built for independent auto repair shops: a repair price checker, booking by text, oil change and service reminders, trust pages, declined work follow-up and fleet account outreach. One auto repair shop per area.",
  },
  hero: {
    line1: "Bays full.",
    line2: "Customers for life.",
    sub: "The marketing team built for independent auto repair shops. Drivers check repair prices and book by text, service reminders bring them back on time, and local fleets keep your bays busy.",
    cards: {
      lead: {
        label: "Service Line",
        title: "Brakes grinding",
        fields: [["Vehicle", "2018 Honda CR-V"], ["Noise", "Front, when braking"], ["Town", "Mint Hill"], ["Booked", "Tomorrow 8:00 AM drop-off"]],
      },
      side: {
        label: "Service Reminders",
        title: "This month",
        rows: [["Due for oil change", "340"], ["Booked", "158"], ["Extra work approved", "$22,700"]],
      },
      small: { label: "Declined Work", title: "30-day follow-up", text: "Rear brakes, approved this time" },
    },
  },
  problems: [
    { title: "Techs can't answer the phone", text: "Your service writer is with a customer and your techs are under cars, so calls go to voicemail." },
    { title: "People don't trust shops", text: "Drivers are afraid of getting ripped off, so they go to the dealer or the chain they know." },
    { title: "Customers forget about you", text: "After one repair, they take their next oil change to the quick lube on the corner." },
    { title: "Declined work never comes back", text: "Customers say “next time” to recommended repairs, and nobody follows up." },
  ],
  systems: [
    { icon: "📲", title: "Service Line", text: "Missed calls get a text back in seconds that asks about the vehicle and problem and books a drop-off.", tier: 1 },
    { icon: "🧮", title: "Repair Price Check", text: "Drivers see honest price ranges for common repairs before they call, which builds trust.", tier: 1 },
    { icon: "⏰", title: "Service Reminders", text: "Oil changes, inspections and maintenance reminders by text, so customers come back to you.", tier: 1 },
    { icon: "🛡️", title: "Trust Pages", text: "Your certifications, warranty, real techs and photo inspections up front, so drivers know you're honest.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “auto repair near me,” brakes, check engine light and every service.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one auto repair shop per area. The shop down the road can't hire us.", tier: 1 },
    { icon: "📋", title: "Declined Work Follow-Up", text: "Friendly reminders about repairs customers put off, with the original quote.", tier: 2 },
    { icon: "🚚", title: "Fleet Account Outreach", text: "Outreach to local businesses with vans and trucks for recurring fleet service.", tier: 2 },
    { icon: "🚗", title: "Dealer Alternative Campaign", text: "Ads and pages for out-of-warranty drivers who are tired of dealer prices.", tier: 2 },
    { icon: "❄️", title: "Seasonal Pushes", text: "AC checks before summer, batteries and tires before winter, and road trip inspections.", tier: 2 },
    { icon: "👯", title: "Refer-a-Friend", text: "Customers get a discount on their next service for every friend who comes in.", tier: 2 },
    { icon: "📸", title: "Digital Inspection Promo", text: "Show off your photo inspections in ads and reviews, so drivers see your honesty before they arrive.", tier: 2 },
  ],
  packages: [
    { name: "Tune-Up", tagline: "Everything a shop needs to answer every call, earn trust and bring customers back for every service." },
    { name: "Full Service", tagline: "Tune-Up plus declined work follow-up, fleet accounts, dealer alternative campaigns and seasonal pushes." },
  ],
  estimator: {
    name: "Repair Price Check",
    question: "What will my repair cost?",
    blurb: "Drivers see honest price ranges for common repairs, which is the fastest way to earn trust before they arrive.",
    bullets: ["Uses your real prices", "Every request texts straight to your service writer", "Builds trust before they walk in"],
    projectLabel: "Service",
    projects: [
      { key: "oil", label: "Oil change (synthetic)", unit: "none", fixed: [70, 110] },
      { key: "brakes", label: "Brake pads + rotors", unit: "count", unitLabel: "Axles (front, rear or both)", perWord: "axle", per: [350, 600], start: 1 },
      { key: "diag", label: "Check engine light diagnostic", unit: "none", fixed: [100, 180], note: "Often applied to the repair." },
      { key: "ac", label: "AC recharge", unit: "none", fixed: [150, 300] },
      { key: "battery", label: "Battery replacement", unit: "none", fixed: [180, 320] },
    ],
    choiceLabel: "Vehicle",
    choices: [
      { key: "car", label: "Car", fixed: [0, 0], only: ["brakes", "battery"] },
      { key: "suv", label: "SUV or truck", fixed: [50, 120], only: ["brakes", "battery"] },
      { key: "euro", label: "European", fixed: [100, 250], only: ["brakes", "battery"] },
    ],
    toggles: [
      { key: "rotate", label: "Add tire rotation", fixed: [25, 40], only: ["oil"] },
    ],
    cta: "Book my service",
    after: "Exact price after a free inspection.",
  },
  demo: {
    name: "Service Line",
    business: "Precision Auto Care",
    greeting:
      "Hi, this is Ava with Precision Auto Care. Sorry we missed your call, our techs are under the hood! I can help right here by text. What's going on with your vehicle?",
    chips: ["My brakes are grinding", "Check engine light is on", "Need an oil change"],
    busy: "Your techs are under the hood",
    steps: [
      { t: "The call comes in", d: "A driver hears grinding when they brake. Your service writer is with a customer, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get an honest price range before they call the dealer." },
      { t: "The drop-off gets booked", d: "Ava asks the year, make and model and the symptoms, gives a range, and books a drop-off time." },
    ],
    goal: "a service appointment",
    facts: `Business: Precision Auto Care (a demo shop on the Truly Automation website)
Location: Mint Hill, serving Matthews, Indian Trail, east Charlotte and Stallings
Hours: Mon-Fri 7:30am-6pm, Sat 8am-1pm. ASE-certified techs. 3-year/36,000-mile warranty on repairs. Digital photo inspections texted to every customer.
Services: oil changes, brakes, check engine diagnostics, AC, batteries, suspension, tires and alignment, timing belts, state inspections, fleet service. All makes, including European.
Typical prices (exact price after inspection, nothing done without approval): synthetic oil change $70-$110; brake pads and rotors $350-$600 per axle; diagnostic $100-$180 (applied to the repair if done here); AC recharge $150-$300; battery $180-$320. SUVs, trucks and European cars cost more.
Open times: Tomorrow 8:00 AM drop-off, 1:00 PM; Thursday 7:30 AM, 10:00 AM; Saturday 8:00 AM. Loaner cars and local shuttle rides available.
Rules: ask year, make, model, mileage and symptoms. If brakes feel unsafe, the car is overheating, or there's smoke or a burning smell, tell them not to drive it and offer a tow referral. Never diagnose for sure by text or give a firm price.`,
  },
  faqs: [
    { q: "How do you help a shop earn trust?", a: "Trust pages show your certifications, warranty and real techs, the Repair Price Check shows honest ranges, and reviews mention your photo inspections. Drivers who fear getting ripped off look for exactly that." },
    { q: "How do Service Reminders work?", a: "Customers get a text when they're due for an oil change or maintenance, based on their last visit. It keeps them from drifting to the quick lube." },
    { q: "What is Declined Work Follow-Up?", a: "When customers put off a recommended repair, they get a friendly reminder later with the original quote. Much of that work comes back." },
    { q: "How soon will I see more cars?", a: "The Service Line and reminders start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default autoRepair;
