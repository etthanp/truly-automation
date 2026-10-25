import type { Industry } from "./types";

const autoBody: Industry = {
  slug: "auto-body",
  name: "Auto Body & Collision",
  who: "auto body shops",
  one: "auto body shop",
  category: "Auto",
  icon: "🛠️",
  tagline: "Photo estimates, insurance claims and repair status texts.",
  meta: {
    title: "Marketing for Auto Body & Collision Repair Shops | Truly Automation",
    description:
      "Marketing built for auto body and collision repair shops: photo estimates by text, insurance claim help, repair status updates, towing and insurance agent partners, and review campaigns. One auto body shop per area.",
  },
  hero: {
    line1: "Dented today,",
    line2: "fixed this week.",
    sub: "The marketing team built for auto body shops. Drivers send photos of the damage, get a rough estimate, and choose your shop before their insurance sends them somewhere else.",
    cards: {
      lead: {
        label: "Photo Estimate",
        title: "Rear bumper + tail light",
        fields: [["Vehicle", "2021 Toyota RAV4"], ["Photos", "4 sent"], ["Insurance", "GEICO claim"], ["Booked", "Drop-off, Mon"]],
      },
      side: {
        label: "Partners",
        title: "This month",
        rows: [["Tow companies", "4"], ["Insurance agents", "6"], ["Cars referred", "19"]],
      },
      small: { label: "Repair Status", title: "Paint done", text: "Pickup Thursday, text sent" },
    },
  },
  problems: [
    { title: "Insurance steers customers", text: "Insurance companies push drivers to their preferred shops, unless the driver already picked you." },
    { title: "Estimates take a trip in", text: "People put off driving in for an estimate, then forget about you." },
    { title: "“Is my car ready?” calls", text: "Your front desk spends all day answering status calls." },
    { title: "Hard to stand out", text: "Every shop says quality work, and drivers pick based on reviews and photos." },
  ],
  systems: [
    { icon: "📸", title: "Photo Estimate Line", text: "Missed calls get a text back in seconds asking for damage photos, then book a drop-off.", tier: 1 },
    { icon: "🧮", title: "Repair Price Check", text: "Drivers pick the damage and see a rough range before they come in.", tier: 1 },
    { icon: "📋", title: "Claim Helper", text: "Explains that drivers can choose their own shop, and gathers their claim details.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every repair, so you top Google for “collision repair near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for collision repair, dents, paint and bumpers.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one auto body shop per area. Your competitors can't hire us.", tier: 1 },
    { icon: "📲", title: "Repair Status Texts", text: "Automatic updates from teardown to paint to pickup, so the phone stops ringing.", tier: 2 },
    { icon: "🛻", title: "Tow Partners", text: "Tow companies bring wrecked cars to your shop first.", tier: 2 },
    { icon: "🤝", title: "Insurance Agent Partners", text: "Local agents who recommend you to their clients after an accident.", tier: 2 },
    { icon: "🔨", title: "Paintless Dent Repair Pages", text: "Hail and door ding pages that bring in quick, profitable jobs.", tier: 2 },
    { icon: "🚚", title: "Fleet Accounts", text: "Local businesses with vans and trucks on a steady repair agreement.", tier: 2 },
    { icon: "📷", title: "Before & After Gallery", text: "Your best repairs, side by side, the thing that wins the next car.", tier: 2 },
  ],
  packages: [
    { name: "Primer", tagline: "Everything an auto body shop needs to win cars with photo estimates, help with claims and get great reviews." },
    { name: "Clear Coat", tagline: "Primer plus repair status texts, tow and insurance agent partners, dent repair pages and fleet accounts." },
  ],
  estimator: {
    name: "Repair Price Check",
    question: "What will my body work cost?",
    blurb: "Drivers pick the damage and see a rough range in seconds, then send photos for a real estimate.",
    bullets: ["Uses your real rates", "Damage photos with every request", "Insurance claims welcome"],
    projectLabel: "Damage",
    projects: [
      { key: "bumper", label: "Bumper repair or replace", unit: "none", fixed: [400, 1500] },
      { key: "dent", label: "Paintless dent repair", unit: "count", unitLabel: "Dents", perWord: "dent", per: [75, 200], start: 2 },
      { key: "panel", label: "Door or fender panel", unit: "count", unitLabel: "Panels", perWord: "panel", per: [500, 1200], start: 1 },
      { key: "scratch", label: "Scratch and paint touch-up", unit: "count", unitLabel: "Areas", perWord: "area", per: [150, 400], start: 1 },
    ],
    toggles: [
      { key: "light", label: "Broken headlight or tail light", fixed: [150, 600] },
      { key: "sensor", label: "Parking sensor or camera", fixed: [200, 700], only: ["bumper"] },
    ],
    minimum: 150,
    cta: "Send my photos",
    after: "Rough range. Exact estimate from your photos or a visit.",
  },
  demo: {
    name: "Photo Estimate Line",
    business: "Precision Collision Center",
    greeting:
      "Hi, this is Ava with Precision Collision Center! Sorry we missed your call, we're out in the shop. I can help right here by text. What happened to your vehicle?",
    chips: ["Someone hit my bumper", "Can I use my insurance?", "Fix a few dents"],
    busy: "Your techs are in the paint booth",
    steps: [
      { t: "The call comes in", d: "A driver got rear-ended and wants it fixed before their insurance picks a shop. Your team is in the booth, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply and an easy way to send photos of the damage." },
      { t: "The drop-off gets booked", d: "Ava gathers the claim details, shares a rough range and books a drop-off." },
    ],
    goal: "an estimate or drop-off",
    facts: `Business: Precision Collision Center (a demo shop on the Truly Automation website)
Location: Durham, serving Chapel Hill, Raleigh, Morrisville and Hillsborough
Hours: Mon-Fri 7:30am-5:30pm, Sat 8am-12pm. I-CAR trained techs, lifetime warranty on paint and workmanship.
Services: collision repair, bumper repair and replacement, dent and panel repair, paintless dent repair, scratch and paint, frame straightening, headlights and tail lights, insurance claims.
Prices (rough, confirmed from photos or a visit): bumper $400-$1,500; paintless dent repair $75-$200 per dent; door or fender panel $500-$1,200; scratch and paint $150-$400 per area; lights $150-$600. Free estimates. We work with all insurance companies and help set up rentals.
Open times: Tomorrow 8:00 AM, 1:00 PM estimates; Monday 7:30 AM drop-off; Saturday 9:00 AM estimates.
Rules: ask what happened, the vehicle, photos of the damage, and whether it's an insurance claim. Tell them they have the right to choose their repair shop, but don't give legal or insurance advice. If anyone was hurt or the car isn't safe to drive, suggest a tow and tell them to call 911 if there's an emergency. Never give a firm price before seeing photos.`,
  },
  faqs: [
    { q: "How do I keep insurance from sending drivers elsewhere?", a: "Reach drivers first. Photo estimates and the Claim Helper let them pick your shop right after the accident, before the insurance company suggests one." },
    { q: "Can drivers get an estimate without coming in?", a: "Yes. They send photos by text and get a rough range, then book a drop-off or in-person estimate." },
    { q: "How do I cut down on status calls?", a: "Repair Status Texts update customers automatically from teardown to pickup." },
    { q: "How soon will I see more cars?", a: "The Photo Estimate Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default autoBody;
