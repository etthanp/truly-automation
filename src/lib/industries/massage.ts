import type { Industry } from "./types";

const massage: Industry = {
  slug: "massage",
  name: "Massage & Day Spas",
  who: "massage therapists and day spas",
  one: "massage studio",
  category: "Beauty & personal care",
  icon: "💆",
  tagline: "Session pricing, gift card sales and memberships.",
  meta: {
    title: "Marketing for Massage Therapists and Day Spas | Truly Automation",
    description:
      "Marketing built for massage therapists and day spas: session pricing, booking by text, memberships, gift card campaigns, couples and event packages, rebooking reminders and review campaigns. One massage studio per area.",
  },
  hero: {
    line1: "Relaxed clients.",
    line2: "A full schedule.",
    sub: "The marketing team built for massage therapists and day spas. Clients book by text while you're in a session, memberships bring steady income, and gift cards sell themselves every holiday.",
    cards: {
      lead: {
        label: "Calm Line",
        title: "Couples massage",
        fields: [["Length", "90 minutes"], ["Occasion", "Anniversary"], ["Town", "Cornelius"], ["Booked", "Saturday 2:00 PM"]],
      },
      side: {
        label: "Holiday Gift Cards",
        title: "December",
        rows: [["Gift cards sold", "184"], ["Revenue", "$19,600"], ["Redeemed by new clients", "61%"]],
      },
      small: { label: "Membership", title: "New member", text: "Monthly 60-minute massage" },
    },
  },
  problems: [
    { title: "Your hands are busy", text: "You can't answer the phone during a session, and callers book the spa that picks up." },
    { title: "One-time clients", text: "Clients love the massage and then don't book again for months." },
    { title: "Gift card season is chaotic", text: "December, Valentine's and Mother's Day bring a rush, and most spas don't plan for it." },
    { title: "Chains are cheaper", text: "Membership chains advertise low prices, and independent spas need to show why they're worth more." },
  ],
  systems: [
    { icon: "📲", title: "Calm Line", text: "Missed calls get a text back in seconds with pricing and open times, and clients book in the thread.", tier: 1 },
    { icon: "🧮", title: "Session Pricing", text: "Clients pick the massage, length and add-ons and see the price before they book.", tier: 1 },
    { icon: "⏰", title: "Rebooking Reminders", text: "Clients get a text a few weeks after their visit with a link to book again.", tier: 1 },
    { icon: "💳", title: "Membership Pages", text: "Monthly memberships explained simply and promoted, for steady income every month.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “massage near me,” couples massage and every service.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one massage studio per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🎁", title: "Gift Card Campaigns", text: "Online gift card sales promoted for the holidays, Valentine's Day and Mother's Day.", tier: 2 },
    { icon: "💑", title: "Couples & Event Packages", text: "Pages for couples, bridal parties and spa days, booked ahead.", tier: 2 },
    { icon: "🏃", title: "Sports & Recovery Outreach", text: "Outreach to gyms, run clubs and chiropractors for deep tissue and recovery clients.", tier: 2 },
    { icon: "🏨", title: "Hotel & Concierge Partners", text: "Partnerships with local hotels and Airbnb hosts for visiting guests.", tier: 2 },
    { icon: "📅", title: "Opening Filler", text: "Cancellations go out to your waitlist, and the first reply gets the spot.", tier: 2 },
    { icon: "👯", title: "Refer-a-Friend", text: "Clients get a reward for every friend who books.", tier: 2 },
  ],
  packages: [
    { name: "Unwind", tagline: "Everything a massage studio needs to book every caller, bring clients back and sell memberships." },
    { name: "Full Retreat", tagline: "Unwind plus gift card campaigns, couples and event packages, sports outreach and hotel partners." },
  ],
  estimator: {
    name: "Session Pricing",
    question: "What will my massage cost?",
    blurb: "Clients pick their massage, length and add-ons and book in one step.",
    bullets: ["Uses your real prices", "Shows member pricing", "Books straight to your calendar"],
    projectLabel: "Service",
    projects: [
      { key: "swedish", label: "Swedish / relaxation", unit: "none", fixed: [0, 0] },
      { key: "deep", label: "Deep tissue", unit: "none", fixed: [10, 20] },
      { key: "couples", label: "Couples massage (2 people)", unit: "none", fixed: [90, 140] },
    ],
    choiceLabel: "Length",
    choices: [
      { key: "60", label: "60 minutes", fixed: [80, 110] },
      { key: "90", label: "90 minutes", fixed: [115, 150] },
      { key: "120", label: "120 minutes", fixed: [150, 195] },
    ],
    toggles: [
      { key: "stone", label: "Add hot stones", fixed: [15, 25] },
      { key: "cbd", label: "Add CBD or aromatherapy", fixed: [10, 20] },
    ],
    cta: "Book my massage",
    after: "Members save on every session.",
  },
  demo: {
    name: "Calm Line",
    business: "Stillwater Massage & Spa",
    greeting:
      "Hi, this is Ava with Stillwater Massage & Spa. Sorry we missed your call, our therapists are in session! I can help right here by text. What kind of massage are you looking for?",
    chips: ["Book a couples massage", "Price for 90 minutes?", "Do you sell gift cards?"],
    busy: "Your therapist is in a session",
    steps: [
      { t: "The call comes in", d: "Someone wants to book an anniversary couples massage. Your therapists are in session, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a calm, friendly text before they call the chain down the road." },
      { t: "The session gets booked", d: "Ava asks the type, length and any add-ons, gives the price, and books the time." },
    ],
    goal: "a massage appointment",
    facts: `Business: Stillwater Massage & Spa (a demo spa on the Truly Automation website)
Location: Cornelius, serving Davidson, Huntersville and Mooresville
Hours: Mon-Sat 9am-8pm, Sun 11am-5pm. Licensed massage therapists.
Services: Swedish, deep tissue, prenatal (after the first trimester), sports and recovery, couples massage, hot stone, facials, spa packages, gift cards.
Prices: 60 min $80-$110; 90 min $115-$150; 120 min $150-$195; deep tissue adds $10-$20; couples is two sessions in one room; hot stones $15-$25; CBD or aromatherapy $10-$20. Membership $69/month includes one 60-minute massage and 15% off extra sessions. Gift cards available online in any amount.
Open times: Thursday 3:00 PM, 6:00 PM; Friday 11:00 AM; Saturday 2:00 PM (couples room open).
Rules: ask the type of massage, length, preferred therapist gender if any, and any injuries or pregnancy, which the therapist will go over before the session. Never give medical advice. 24-hour cancellation policy.`,
  },
  faqs: [
    { q: "How do memberships help?", a: "A membership turns a once-a-year client into a monthly one. We explain your plan clearly on your site and promote it to every new client." },
    { q: "How do gift card campaigns work?", a: "We set up online gift card sales and promote them before the holidays, Valentine's Day and Mother's Day. Many people who redeem them become new regulars." },
    { q: "Does it work with my booking app?", a: "Yes. We connect to the booking system you already use, so appointments land on the right therapist's calendar." },
    { q: "How soon will I see more bookings?", a: "The Calm Line and reminders start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default massage;
