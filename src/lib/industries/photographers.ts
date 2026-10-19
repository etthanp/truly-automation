import type { Industry } from "./types";

const photographers: Industry = {
  slug: "photographers",
  name: "Photographers",
  who: "photographers",
  one: "photographer per specialty",
  category: "Events & creative",
  icon: "📷",
  tagline: "Session pricing, inquiry follow-up and mini session sellouts.",
  meta: {
    title: "Marketing for Photographers | Truly Automation",
    description:
      "Marketing built for wedding, family and portrait photographers: a session price check, instant inquiry replies, inquiry follow-up, mini session campaigns, gallery-to-review flows and vendor referral partners. One photographer per specialty per area.",
  },
  hero: {
    line1: "Inquiries answered.",
    line2: "Dates booked.",
    sub: "The marketing team built for photographers. Couples and families see your pricing and get a reply in seconds, inquiries get followed up until they book, and mini sessions sell out.",
    cards: {
      lead: {
        label: "Inquiry Line",
        title: "Wedding inquiry",
        fields: [["Date", "Sept 2027"], ["Venue", "Lake Norman"], ["Coverage", "8 hours + engagement"], ["Booked", "Video call, Sunday"]],
      },
      side: {
        label: "Fall Mini Sessions",
        title: "One weekend",
        rows: [["Families emailed", "900"], ["Spots", "24"], ["Sold out in", "2 days"]],
      },
      small: { label: "Gallery Delivered", title: "Review request sent", text: "5 stars, 2 referrals" },
    },
  },
  problems: [
    { title: "Slow replies lose bookings", text: "Couples inquire with five photographers at once, and you're editing or shooting when the inquiry comes in." },
    { title: "Inquiries go quiet", text: "People ask for pricing and then disappear, and nobody follows up." },
    { title: "Seasonal swings", text: "Wedding season is packed, and winter is slow." },
    { title: "Instagram isn't enough", text: "Posting beautiful work doesn't bring bookings unless people can find you on Google too." },
  ],
  systems: [
    { icon: "📲", title: "Inquiry Line", text: "Calls, DMs and contact forms get a reply in seconds with pricing and availability for their date.", tier: 1 },
    { icon: "🧮", title: "Session Price Check", text: "Clients pick the session type and coverage and see your pricing, which filters out bad fits.", tier: 1 },
    { icon: "🔁", title: "Inquiry Follow-Up", text: "A friendly series after every inquiry, with sample galleries and reviews, until they book or say no.", tier: 1 },
    { icon: "⭐", title: "Gallery-to-Review Flow", text: "Review requests go out when clients get their gallery and are happiest.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “wedding photographer near me” and every venue you shoot.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one photographer per specialty per area. Competing photographers can't hire us.", tier: 1 },
    { icon: "🍂", title: "Mini Session Campaigns", text: "Fall, holiday and spring mini sessions promoted to your list, often selling out in days.", tier: 2 },
    { icon: "💒", title: "Venue Pages", text: "A page for every venue you've shot, which ranks when couples research their venue.", tier: 2 },
    { icon: "🤝", title: "Vendor Partners", text: "Referral relationships with planners, venues, florists and DJs.", tier: 2 },
    { icon: "🏢", title: "Headshot & Business Outreach", text: "Team headshot days for local businesses to fill the off-season.", tier: 2 },
    { icon: "🎥", title: "Social Content", text: "Sneak peeks, reels and behind-the-scenes posted every week.", tier: 2 },
    { icon: "🎁", title: "Past Client Offers", text: "Anniversary, maternity and family session offers for past couples.", tier: 2 },
  ],
  packages: [
    { name: "Snapshot", tagline: "Everything a photographer needs to answer every inquiry first and follow up until it books." },
    { name: "Full Frame", tagline: "Snapshot plus mini session campaigns, venue pages, vendor partners, headshot days and content." },
  ],
  estimator: {
    name: "Session Price Check",
    question: "What will my photos cost?",
    blurb: "Clients see your pricing for their session and check your availability, so every inquiry is a real one.",
    bullets: ["Uses your real packages", "Every inquiry texts straight to you", "Filters out bad-fit inquiries"],
    projectLabel: "Session",
    projects: [
      { key: "family", label: "Family session", unit: "none", fixed: [350, 600], note: "About an hour, with an online gallery." },
      { key: "headshots", label: "Headshots", unit: "count", unitLabel: "People", perWord: "person", per: [150, 250], start: 1 },
      { key: "wedding", label: "Wedding", unit: "count", unitLabel: "Hours of coverage", perWord: "hour", per: [350, 550], start: 8 },
    ],
    toggles: [
      { key: "engage", label: "Add an engagement session", fixed: [300, 500], only: ["wedding"] },
      { key: "second", label: "Add a second shooter", per: [75, 125], only: ["wedding"] },
      { key: "album", label: "Add a printed album", fixed: [400, 900], only: ["wedding", "family"] },
    ],
    cta: "Check my date",
    after: "Your photographer confirms the package.",
  },
  demo: {
    name: "Inquiry Line",
    business: "Golden Hour Studio",
    greeting:
      "Hi, this is Ava with Golden Hour Studio! Sorry we missed your call, we're out on a shoot. I can help right here by text. What kind of photos are you looking for?",
    chips: ["Is my wedding date open?", "Family photos this fall", "Headshots for my team"],
    busy: "You're out on a shoot",
    steps: [
      { t: "The call comes in", d: "A newly engaged couple wants to check a date. You're shooting a wedding, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get pricing and availability before the other four photographers reply." },
      { t: "The call gets booked", d: "Ava checks the date, shares packages, and books a video call." },
    ],
    goal: "a video call or session booking",
    facts: `Business: Golden Hour Studio (a demo photographer on the Truly Automation website)
Area: Charlotte, Lake Norman, and travel anywhere in the Carolinas
Hours: Replies 7 days a week; shoots by appointment.
Sessions: weddings, engagements, families, maternity, newborns, headshots, mini sessions.
Pricing (the photographer confirms the package): family session $350-$600; headshots $150-$250 per person (team days available); weddings $350-$550 per hour, most couples book 6-10 hours; engagement session $300-$500; second shooter $75-$125/hour; printed albums $400-$900. 30% retainer holds a wedding date.
Availability: 2027 Saturdays in May, June and October are almost full; Fridays and Sundays are open. Fall mini sessions: Oct 25-26, a few spots left. Video calls: Sunday afternoon, Tuesday evening.
Rules: ask the type of session, date, location and how many people. Never promise a date is held until the retainer is paid. Never give a firm price.`,
  },
  faqs: [
    { q: "How fast does the Inquiry Line reply?", a: "In seconds, any time. Couples inquire with several photographers at once, and a fast reply with real pricing and availability wins most of them." },
    { q: "How do Mini Session Campaigns work?", a: "We promote fall, holiday and spring mini sessions to your list and local families. They often sell out in days and fill slow months." },
    { q: "Do you help with SEO for venues?", a: "Yes. In Full Frame we build a page for every venue you've shot, which ranks when couples research their venue." },
    { q: "How soon will I see more bookings?", a: "The Inquiry Line and follow-up start working the week they go live. Google rankings build over 60 to 90 days." },
  ],
};

export default photographers;
