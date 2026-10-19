import type { Industry } from "./types";

const autoDetailing: Industry = {
  slug: "auto-detailing",
  name: "Auto Detailing",
  who: "auto detailers",
  one: "detailing company",
  category: "Auto",
  icon: "🚘",
  tagline: "Detail pricing by vehicle, ceramic coating funnels and maintenance plans.",
  meta: {
    title: "Marketing for Auto Detailing and Ceramic Coating | Truly Automation",
    description:
      "Marketing built for auto detailers: a detail price checker by vehicle size, booking by text, ceramic coating and paint correction funnels, maintenance plans, before-and-after content and dealership outreach. One detailing company per area.",
  },
  hero: {
    line1: "Showroom shine.",
    line2: "Booked solid.",
    sub: "The marketing team built for auto detailers. Customers price their detail by vehicle and book by text, ceramic coating leads find you first, and maintenance plans keep you busy every month.",
    cards: {
      lead: {
        label: "Detail Line",
        title: "Ceramic coating, new truck",
        fields: [["Vehicle", "2025 F-150"], ["Package", "3-year coating"], ["Town", "Waxhaw"], ["Booked", "Monday drop-off"]],
      },
      side: {
        label: "Maintenance Plans",
        title: "Monthly members",
        rows: [["Active plans", "46"], ["Monthly revenue", "$5,500"], ["Upgraded to coating", "9"]],
      },
      small: { label: "Instagram", title: "Reel posted", text: "Dog hair interior before and after" },
    },
  },
  problems: [
    { title: "You're on a car all day", text: "You can't answer the phone while polishing, and people book the next detailer who replies." },
    { title: "Cheap competition", text: "Someone with a pressure washer charges $60, and customers don't know the difference." },
    { title: "Coating is a hard sell", text: "Ceramic coating is your best service, but people don't understand why it costs more." },
    { title: "One-and-done customers", text: "Customers get one detail and come back a year later, or never." },
  ],
  systems: [
    { icon: "📲", title: "Detail Line", text: "Missed calls and DMs get a text back in seconds with pricing for their vehicle and open times.", tier: 1 },
    { icon: "🧮", title: "Detail Price Checker", text: "Customers pick their vehicle and package and see the price on your website.", tier: 1 },
    { icon: "🖼️", title: "Before & After Gallery", text: "Your best transformations organized by service, on your site and Google.", tier: 1 },
    { icon: "🔁", title: "Maintenance Plans", text: "Monthly or every-other-week wash plans that turn one-time customers into regulars.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “car detailing near me,” ceramic coating and mobile detailing.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one detailing company per area. Your competitors can't hire us.", tier: 1 },
    { icon: "💎", title: "Ceramic Coating Funnel", text: "Pages, ads and follow-up that explain coating clearly and book high-value jobs.", tier: 2 },
    { icon: "🎥", title: "Instagram & TikTok Content", text: "Satisfying before-and-after clips posted every week. Detailing is made for short video.", tier: 2 },
    { icon: "🏢", title: "Dealership & Fleet Outreach", text: "Outreach to used car dealers, rental fleets and local businesses for recurring work.", tier: 2 },
    { icon: "🏘️", title: "Office & Neighborhood Days", text: "Book several cars at one office park or neighborhood in a single day.", tier: 2 },
    { icon: "🎁", title: "Gift Card Promos", text: "Holiday and Father's Day gift card pushes.", tier: 2 },
    { icon: "⭐", title: "Review Engine", text: "Review requests right after the reveal, when customers are happiest.", tier: 2 },
  ],
  packages: [
    { name: "Wash", tagline: "Everything a detailer needs to answer every inquiry, price by vehicle and sell maintenance plans." },
    { name: "Full Coat", tagline: "Wash plus ceramic coating funnels, weekly content, dealership outreach and neighborhood days." },
  ],
  estimator: {
    name: "Detail Price Checker",
    question: "What will my detail cost?",
    blurb: "Customers pick their vehicle and package and book in one step. No back-and-forth on price.",
    bullets: ["Uses your real price list", "Vehicle size changes the price", "Books straight to your calendar"],
    projectLabel: "Package",
    projects: [
      { key: "interior", label: "Interior detail", unit: "none", fixed: [150, 200] },
      { key: "exterior", label: "Exterior wash + wax", unit: "none", fixed: [100, 150] },
      { key: "full", label: "Full detail", unit: "none", fixed: [225, 325] },
      { key: "ceramic", label: "Ceramic coating", unit: "none", fixed: [900, 1600], note: "Includes paint prep. Multi-year protection." },
    ],
    choiceLabel: "Vehicle",
    choices: [
      { key: "car", label: "Car", fixed: [0, 0] },
      { key: "suv", label: "SUV or truck", fixed: [30, 60] },
      { key: "large", label: "3-row SUV or van", fixed: [50, 100] },
    ],
    toggles: [
      { key: "pet", label: "Pet hair removal", fixed: [40, 75], only: ["interior", "full"] },
      { key: "correction", label: "Paint correction", fixed: [300, 600], only: ["exterior", "full", "ceramic"] },
    ],
    cta: "Book my detail",
    after: "Heavily soiled vehicles may cost more.",
  },
  demo: {
    name: "Detail Line",
    business: "Mirror Finish Detailing",
    greeting:
      "Hey, this is Ava with Mirror Finish Detailing! Sorry we missed your call, we're working on a car. I can help right here by text. What kind of vehicle do you have?",
    chips: ["Price for a full detail?", "Interested in ceramic coating", "Do you come to me?"],
    busy: "You're polishing a car",
    steps: [
      { t: "The call comes in", d: "Someone just bought a new truck and wants it coated. You're polishing a car, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get pricing for their vehicle before they find a cheaper guy on Facebook." },
      { t: "The detail gets booked", d: "Ava asks the vehicle and condition, explains the packages, and books a time." },
    ],
    goal: "a detail appointment",
    facts: `Business: Mirror Finish Detailing (a demo company on the Truly Automation website)
Location: Mobile service plus a shop in Waxhaw, serving Ballantyne, Weddington, Marvin, Indian Land and Matthews
Hours: Mon-Sat 8am-6pm. Insured. Mobile service brings water and power.
Services: interior detail, exterior wash and wax, full detail, paint correction, ceramic coating (2, 3 and 5 year), headlight restoration, maintenance plans.
Typical prices (car / SUV or truck / 3-row SUV or van): interior $150-$200, exterior $100-$150, full detail $225-$325; SUVs add $30-$60 and large vehicles $50-$100. Ceramic coating $900-$1,600 including prep. Paint correction $300-$600. Pet hair $40-$75. Maintenance plan $119/month for a monthly wash and interior wipe-down.
Open times: Thursday 9:00 AM; Friday 1:00 PM; Saturday 8:00 AM; Monday all-day drop-off for coatings.
Rules: ask the vehicle, its condition (pet hair, stains, scratches), and whether they want mobile or shop service. Coatings need the shop and a full day. Never give a firm price.`,
  },
  faqs: [
    { q: "How do you sell ceramic coating?", a: "The coating funnel explains what it is, how long it lasts and why prep matters, with before-and-after proof. Customers who understand it are happy to pay for it." },
    { q: "How do Maintenance Plans work?", a: "Customers sign up for a monthly or every-other-week wash. You get steady income, and plan members often upgrade to coating." },
    { q: "Do you make the videos?", a: "In Full Coat, yes. We edit and post before-and-after clips every week from the videos you take on the job." },
    { q: "How soon will I see more bookings?", a: "The Detail Line and price checker start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default autoDetailing;
