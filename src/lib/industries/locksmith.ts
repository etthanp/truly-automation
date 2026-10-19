import type { Industry } from "./types";

const locksmith: Industry = {
  slug: "locksmith",
  name: "Locksmiths",
  who: "locksmiths",
  one: "locksmith",
  category: "Home services",
  icon: "🔑",
  tagline: "Lockout text-back, real local trust and commercial accounts.",
  meta: {
    title: "Marketing for Locksmiths | Truly Automation",
    description:
      "Marketing built for local locksmiths: 24/7 lockout text-back, upfront price pages, real-local trust pages to beat fake listings, smart lock installs, property manager and business accounts. One locksmith per city.",
  },
  hero: {
    line1: "Locked out at midnight?",
    line2: "You answer first.",
    sub: "The marketing team built only for local locksmiths. Every lockout gets answered in seconds, honest upfront prices beat the fake listings, and property managers and businesses keep you busy all week.",
    cards: {
      lead: {
        label: "Lockout Line",
        title: "Locked out of the house",
        fields: [["Where", "Front door, deadbolt"], ["Who", "Mom + 2 kids outside"], ["Town", "Belmont"], ["ETA asked", "25 minutes"]],
      },
      side: {
        label: "Business Accounts",
        title: "This month",
        rows: [["Property managers", "6"], ["Rekeys after move-outs", "34"], ["Office lock changes", "8"]],
      },
      small: { label: "Smart Lock Upgrade", title: "Offer sent after lockout", text: "Keypad deadbolt, installed" },
    },
  },
  problems: [
    { title: "Fake listings everywhere", text: "Lead-gen scammers with fake addresses fill Google, quote $35, then charge $300 on site. Customers can't tell who's real." },
    { title: "Lockouts don't wait", text: "Someone locked out at night calls until someone answers. A missed call is a lost job." },
    { title: "One-time customers", text: "Homeowners call once for a lockout and forget your name." },
    { title: "Steady commercial work is hard to land", text: "Property managers and businesses need rekeys every week, but you don't know who to call." },
  ],
  systems: [
    { icon: "🆘", title: "Lockout Line", text: "Every missed call gets a text back in seconds, 24/7, with your real ETA and an upfront price range.", tier: 1 },
    { icon: "🧮", title: "Upfront Price Pages", text: "Clear price ranges for lockouts, rekeys and lock changes, which is the best way to beat the bait-and-switch listings.", tier: 1 },
    { icon: "⭐", title: "Real Local Trust Pages", text: "Your real address, license, van photos and steady real reviews, so customers know you're not a scam listing.", tier: 1 },
    { icon: "📲", title: "Smart Lock Upgrades", text: "After every lockout or rekey, customers get an offer for keypad or smart locks, which turns small jobs into bigger ones.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “locksmith near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one locksmith per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🏢", title: "Property Manager Accounts", text: "Every move-out needs a rekey. We set up recurring accounts with property managers and apartment communities.", tier: 2 },
    { icon: "🏬", title: "Business Security Outreach", text: "Offices, stores and restaurants need master key systems, access control and lock changes. We reach out for those accounts.", tier: 2 },
    { icon: "🏡", title: "Realtor New Homeowner Program", text: "New homeowners should rekey on day one. We partner with agents so the rekey goes to you.", tier: 2 },
    { icon: "🚗", title: "Auto Key Funnel", text: "Pages and ads for car key replacement and fob programming, a high-value service many people don't know locksmiths do.", tier: 2 },
    { icon: "📱", title: "Follow-Up After Service", text: "A thank-you text with a review link and a saved contact card, so they call you next time instead of searching again.", tier: 2 },
    { icon: "🔁", title: "Quote Chaser", text: "Follow-up on every commercial and access control quote.", tier: 2 },
  ],
  packages: [
    { name: "Deadbolt", tagline: "Everything a locksmith needs to answer every lockout and beat the fake listings with real trust." },
    { name: "Master Key", tagline: "Deadbolt plus property manager, business, realtor and auto key work for steady jobs all week." },
  ],
  estimator: {
    name: "Upfront Price Check",
    question: "What will this cost?",
    blurb: "Customers see an honest price range before you arrive, which is the opposite of the bait-and-switch listings, and why they'll call you.",
    bullets: ["Uses your real prices", "Every request texts straight to your phone", "Builds trust before you arrive"],
    projects: [
      { key: "lockout", label: "House or car lockout", unit: "none", fixed: [75, 150] },
      { key: "rekey", label: "Rekey locks", unit: "count", unitLabel: "Number of locks", perWord: "lock", fixed: [50, 90], per: [20, 40], start: 4 },
      { key: "change", label: "New deadbolts installed", unit: "count", unitLabel: "Number of locks", perWord: "lock", per: [90, 200], start: 2 },
      { key: "carkey", label: "Car key or fob replacement", unit: "none", fixed: [150, 400] },
    ],
    toggles: [
      { key: "afterhours", label: "After hours (nights and weekends)", fixed: [50, 100] },
      { key: "smart", label: "Upgrade to a smart or keypad lock", fixed: [150, 350], only: ["change", "rekey"] },
    ],
  },
  demo: {
    name: "Lockout Line",
    business: "Keystone Lock & Key",
    greeting:
      "Hi, this is Ava with Keystone Lock & Key. Sorry we missed your call, our locksmith is on another job! I can help right here by text. Are you locked out right now?",
    chips: ["I'm locked out of my house", "I need my locks rekeyed", "Lost my car key"],
    busy: "Your locksmith is on another job",
    steps: [
      { t: "The call comes in", d: "A mom and two kids are locked out at 9pm. Your locksmith is on another job, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a real ETA and an honest price range before they call a scam listing." },
      { t: "The job gets dispatched", d: "Ava gets the address, the lock type and who's there, gives the price range, and sends it to you right away." },
    ],
    goal: "a dispatched visit",
    facts: `Business: Keystone Lock & Key (a demo company on the Truly Automation website)
Service area: Gastonia, Belmont, Mount Holly, Charlotte west side, Cramerton and nearby towns
Hours: 24/7 for lockouts. Shop hours Mon-Sat 8am-6pm. Licensed and insured, local family business with a real storefront.
Work: house and car lockouts, rekeying, lock changes and deadbolts, smart and keypad locks, car keys and fob programming, safes, master key systems and access control for businesses.
Typical prices (exact price confirmed before any work starts): lockout $75-$150; rekey $50-$90 service plus $20-$40 per lock; new deadbolt installed $90-$200 per lock; car key or fob $150-$400; after-hours add $50-$100. Typical arrival time 20-40 minutes.
Rules: if anyone is in danger (a child or pet locked in a car, someone hurt), tell them to call 911 right away. Ask the address, lock type and whether they can show ID or proof of residence (required for lockouts). Confirm the price range before dispatching; never a firm price.`,
  },
  faqs: [
    { q: "How do I beat the fake locksmith listings?", a: "With trust they can't fake: your real address and storefront, upfront price ranges, real crew and van photos, steady reviews and a complete Google profile. Customers burned by bait-and-switch look for exactly that." },
    { q: "How fast does the Lockout Line respond?", a: "In seconds, 24/7. It gives your real ETA and price range, collects the address and lock type, and alerts you right away so you can dispatch." },
    { q: "Where does steady weekday work come from?", a: "Property managers need rekeys after every move-out, and businesses need lock changes and master key systems. In Master Key we set up those accounts." },
    { q: "How soon will I see more calls?", a: "The Lockout Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default locksmith;
