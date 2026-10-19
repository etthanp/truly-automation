import type { Industry } from "./types";

const movers: Industry = {
  slug: "movers",
  name: "Movers",
  who: "moving companies",
  one: "moving company",
  category: "Home services",
  icon: "📦",
  tagline: "Instant move quotes, booked dates and realtor referrals.",
  meta: {
    title: "Marketing for Moving Companies | Truly Automation",
    description:
      "Marketing built for local moving companies: an instant moving quote, online date booking, realtor and apartment referral programs, senior move partnerships and review campaigns. One moving company per city.",
  },
  hero: {
    line1: "Moving day booked",
    line2: "in one text.",
    sub: "The marketing team built only for moving companies. Customers get an instant quote and lock in their date online, and realtors and apartment managers send you their movers every month.",
    cards: {
      lead: {
        label: "Move Line",
        title: "3-bedroom house move",
        fields: [["Date", "Saturday, Nov 8"], ["From", "Matthews"], ["To", "Fort Mill, 18 miles"], ["Extras", "Piano + packing"]],
      },
      side: {
        label: "Realtor Referrals",
        title: "This month",
        rows: [["Agents sending moves", "11"], ["Moves referred", "19"], ["Booked", "14"]],
      },
      small: { label: "Weekend Fill", title: "Open Saturday filled", text: "Studio apartment move, 2 movers" },
    },
  },
  problems: [
    { title: "Price shoppers", text: "Everyone wants a quote, and most pick the lowest number without asking what's included." },
    { title: "Lead sites take a cut", text: "Moving lead sites sell the same lead to five companies, and you pay either way." },
    { title: "Busy weekends, empty weekdays", text: "End-of-month weekends overflow while weekdays sit empty." },
    { title: "Trust is everything", text: "People are scared of movers who hold their stuff hostage, so reviews and trust decide every booking." },
  ],
  systems: [
    { icon: "🧮", title: "Instant Move Quote", text: "Customers enter their home size and distance and see your price range on your website.", tier: 1 },
    { icon: "📅", title: "Date Booker", text: "Customers lock in their move date online with a deposit, which fills your calendar without phone tag.", tier: 1 },
    { icon: "📸", title: "Move Line", text: "Missed calls get a text back in seconds with a quote and a booking link.", tier: 1 },
    { icon: "🛡️", title: "Trust Pages", text: "Your license, insurance, real crew photos and no-surprise pricing policy, front and center.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “movers near me” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one moving company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "🏡", title: "Realtor Referral Program", text: "Every home sale is two moves. We build relationships with agents who send you their clients.", tier: 2 },
    { icon: "🏢", title: "Apartment Manager Program", text: "Apartment communities see move-ins and move-outs every week. We set up referral partnerships.", tier: 2 },
    { icon: "👵", title: "Senior Move Partnerships", text: "Outreach to senior living communities and senior move managers for downsizing moves.", tier: 2 },
    { icon: "📉", title: "Weekday Fill Offers", text: "Small discounts for midweek moves that fill the days that usually sit empty.", tier: 2 },
    { icon: "⭐", title: "Review After Every Move", text: "Review requests sent right after a smooth move, building the trust that wins the next booking.", tier: 2 },
    { icon: "🦺", title: "Crew Finder", text: "A hiring page and job ads for movers and drivers, ready before busy season.", tier: 2 },
  ],
  packages: [
    { name: "Local Move", tagline: "Everything a moving company needs to quote instantly, book dates online and earn trust." },
    { name: "Full Load", tagline: "Local Move plus realtor, apartment and senior referrals, and offers that fill your weekdays." },
  ],
  estimator: {
    name: "Instant Move Quote",
    question: "What will my move cost?",
    blurb: "Customers see a price range in 30 seconds and book their date online. No more quoting every move by phone.",
    bullets: ["Uses your hourly rates and crew sizes", "Bookings go straight to your calendar", "Works at midnight when people plan moves"],
    projects: [
      { key: "studio", label: "Studio or 1 bedroom", unit: "none", fixed: [400, 800] },
      { key: "two", label: "2 bedroom", unit: "none", fixed: [700, 1300] },
      { key: "three", label: "3 bedroom", unit: "none", fixed: [1100, 2000] },
      { key: "four", label: "4+ bedroom", unit: "none", fixed: [1700, 3200] },
    ],
    toggles: [
      { key: "far", label: "Moving more than 30 miles", fixed: [200, 600] },
      { key: "packing", label: "Full packing service", fixed: [400, 1500] },
      { key: "piano", label: "Piano or safe", fixed: [200, 500] },
      { key: "stairs", label: "Stairs or long walk at either home", fixed: [100, 300] },
    ],
  },
  demo: {
    name: "Move Line",
    business: "Steady Hands Moving",
    greeting:
      "Hi, this is Ava with Steady Hands Moving. Sorry we missed your call, our crews are out on moves! I can help right here by text. When are you planning to move?",
    chips: ["Moving a 3 bedroom house", "Price for an apartment move?", "Do you do packing?"],
    busy: "Your crew is loading a truck",
    steps: [
      { t: "The call comes in", d: "A family is moving a 3-bedroom house next month. Your crews are out on moves, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a quote right away, before they fill out a lead site that sells their info to five movers." },
      { t: "The date gets booked", d: "Ava gets the size, distance, date and extras, gives a range, and books the date with a deposit." },
    ],
    goal: "a booked move date",
    facts: `Business: Steady Hands Moving (a demo company on the Truly Automation website)
Service area: Charlotte metro, including Matthews, Fort Mill, Rock Hill, Gastonia, Concord and Huntersville
Hours: Mon-Sat 7am-7pm. Licensed and insured. No hidden fees.
Work: local residential moves, apartment moves, packing and unpacking, piano and safe moving, senior and downsizing moves, small office moves, loading and unloading only.
Typical prices (exact quote confirmed before move day): studio or 1 bedroom $400-$800; 2 bedroom $700-$1,300; 3 bedroom $1,100-$2,000; 4+ bedroom $1,700-$3,200. Long distance within the region, packing, pianos and stairs add to the price. Weekday moves are about 10% less. $100 deposit holds the date.
Open dates: Weekdays this week and next; Saturdays fill fast (two Saturdays left this month).
Rules: ask the move date, home size, both addresses or towns, stairs or elevators, and big items. Mention weekday savings if they're flexible. Never give a firm price.`,
  },
  faqs: [
    { q: "Why stop buying moving leads?", a: "Lead sites sell the same customer to several movers, and you pay whether you book or not. Leads from your own website, Google profile and referrals are yours alone." },
    { q: "How does the Realtor Referral Program work?", a: "Every home sale means two moves. We build relationships with local agents so they recommend you to their buyers and sellers." },
    { q: "Can you help fill weekdays?", a: "Yes. Weekday Fill Offers give a small discount for midweek moves to customers with flexible dates, which evens out your schedule." },
    { q: "How soon will I see more bookings?", a: "The instant quote, Date Booker and Move Line start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default movers;
