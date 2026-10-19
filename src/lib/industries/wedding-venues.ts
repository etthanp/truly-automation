import type { Industry } from "./types";

const weddingVenues: Industry = {
  slug: "wedding-venues",
  name: "Wedding & Event Venues",
  who: "wedding and event venues",
  one: "venue",
  category: "Events & creative",
  icon: "💒",
  tagline: "Wedding cost planner, tour booking and off-peak date sales.",
  meta: {
    title: "Marketing for Wedding and Event Venues | Truly Automation",
    description:
      "Marketing built for wedding and event venues: a wedding cost planner, instant inquiry replies, tour booking by text, tour follow-up, off-peak date campaigns, corporate and private event outreach and vendor partners. One venue per area.",
  },
  hero: {
    line1: "Tours booked.",
    line2: "Dates filled.",
    sub: "The marketing team built for wedding and event venues. Couples plan their budget and book a tour by text, tours turn into contracts, and Fridays, Sundays and winter dates sell too.",
    cards: {
      lead: {
        label: "Tour Line",
        title: "Wedding inquiry",
        fields: [["Date", "Oct 2027, Saturday"], ["Guests", "About 150"], ["Style", "Rustic, outdoor ceremony"], ["Booked", "Tour, Saturday 11 AM"]],
      },
      side: {
        label: "Off-Peak Push",
        title: "Winter + Fridays",
        rows: [["Couples reached", "3,200"], ["Tours booked", "38"], ["Dates sold", "14"]],
      },
      small: { label: "Tour Follow-Up", title: "Day 3 sent", text: "Contract signed, Oct 16 2027" },
    },
  },
  problems: [
    { title: "Couples inquire everywhere", text: "Couples send the same inquiry to ten venues at once. The first friendly reply with pricing usually gets the tour." },
    { title: "Pricing questions", text: "“What's your price?” is the first question, and a vague answer loses them." },
    { title: "Tours that don't book", text: "Couples love the tour and then go quiet while they visit five more places." },
    { title: "Empty off-peak dates", text: "Saturdays in October sell out, but Fridays, Sundays and winter sit empty." },
  ],
  systems: [
    { icon: "📲", title: "Tour Line", text: "Calls, DMs and inquiries get a reply in seconds with date availability and pricing, and book a tour.", tier: 1 },
    { icon: "🧮", title: "Wedding Cost Planner", text: "Couples pick their day and guest count and see a budget range, so every tour is a real fit.", tier: 1 },
    { icon: "🔁", title: "Tour Follow-Up", text: "A thoughtful series after every tour, with photos, reviews and date holds, until they decide.", tier: 1 },
    { icon: "🖼️", title: "Real Wedding Pages", text: "Real weddings at your venue, with vendor credits, that rank and get shared.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “wedding venues near me” and your style and area.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one venue per area. Competing venues can't hire us.", tier: 1 },
    { icon: "❄️", title: "Off-Peak Date Campaigns", text: "Promotions for Fridays, Sundays and winter dates that fill your calendar.", tier: 2 },
    { icon: "🏢", title: "Corporate & Private Events", text: "Outreach for holiday parties, retreats, showers and milestone birthdays on open weekdays.", tier: 2 },
    { icon: "🤝", title: "Vendor Partners", text: "Referral relationships with planners, photographers, caterers and florists.", tier: 2 },
    { icon: "🎥", title: "Social Content", text: "Reels, real wedding highlights and venue tours posted every week.", tier: 2 },
    { icon: "🏠", title: "Open House Events", text: "Bridal open houses promoted and booked, with vendors on site.", tier: 2 },
    { icon: "💍", title: "Engagement Season Push", text: "Campaigns timed for December to February, when most couples get engaged and start searching.", tier: 2 },
  ],
  packages: [
    { name: "Something Blue", tagline: "Everything a venue needs to answer every couple first, book tours and turn tours into contracts." },
    { name: "Happily Ever After", tagline: "Something Blue plus off-peak campaigns, corporate events, vendor partners, open houses and content." },
  ],
  estimator: {
    name: "Wedding Cost Planner",
    question: "What will my wedding cost here?",
    blurb: "Couples see a budget range for their day and guest count, then book a tour of their favorite date.",
    bullets: ["Uses your real packages", "Every inquiry texts straight to your coordinator", "Shows off-peak savings"],
    projectLabel: "Day",
    projects: [
      { key: "sat", label: "Saturday", unit: "count", unitLabel: "Guests", perWord: "guest for food", fixed: [6000, 9000], per: [55, 95], start: 150 },
      { key: "offpeak", label: "Friday or Sunday", unit: "count", unitLabel: "Guests", perWord: "guest for food", fixed: [3500, 6000], per: [55, 95], start: 150 },
      { key: "elope", label: "Weekday elopement (under 30)", unit: "none", fixed: [1500, 3500] },
    ],
    toggles: [
      { key: "bar", label: "Add a bar package", per: [20, 40], only: ["sat", "offpeak"] },
      { key: "rehearsal", label: "Add the rehearsal dinner", fixed: [1500, 3000], only: ["sat", "offpeak"] },
    ],
    cta: "Book a tour",
    after: "Includes the venue, tables, chairs and a coordinator.",
  },
  demo: {
    name: "Tour Line",
    business: "Willow Creek Farm",
    greeting:
      "Hi, this is Ava with Willow Creek Farm! Congratulations, and sorry we missed your call, we're setting up for an event. I can help right here by text. Do you have a date in mind?",
    chips: ["Is October 2027 open?", "How much for 150 guests?", "Can we come see it?"],
    busy: "Your team is setting up an event",
    steps: [
      { t: "The call comes in", d: "A newly engaged couple wants a fall date. Your team is setting up a wedding, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a warm reply with pricing before the other nine venues respond." },
      { t: "The tour gets booked", d: "Ava checks the date, gives a budget range for their guest count, and books a tour." },
    ],
    goal: "a venue tour",
    facts: `Business: Willow Creek Farm (a demo venue on the Truly Automation website)
Location: Waxhaw, about 40 minutes from uptown Charlotte
Spaces: outdoor ceremony lawn under oak trees, a restored barn that seats 250, bridal suite and groom's lounge, covered patio. Rain plan included.
Pricing (coordinator confirms): Saturday venue $6,000-$9,000; Friday or Sunday $3,500-$6,000; weekday elopements under 30 guests $1,500-$3,500. Catering from our preferred caterers about $55-$95 per guest; bar packages $20-$40 per guest; rehearsal dinner $1,500-$3,000. Includes tables, chairs, setup, cleanup and a day-of coordinator. 30% deposit holds the date.
Availability: 2027 October Saturdays are almost full (Oct 16 open); Fridays and Sundays have many dates; winter 2027-28 is wide open. Tours: Saturday 11:00 AM and 1:00 PM, Wednesday 5:30 PM, Sunday 2:00 PM.
Rules: be warm and congratulate them. Ask their date or season, guest count and style. Never promise a date is held until the deposit is paid. Never give a firm price.`,
  },
  faqs: [
    { q: "How fast does the Tour Line reply?", a: "In seconds, at any hour. Couples inquire with many venues at once, and the first warm reply with real pricing usually gets the tour." },
    { q: "How do you fill off-peak dates?", a: "Off-peak campaigns promote Fridays, Sundays and winter dates with clear savings, and corporate and private event outreach fills open weekdays." },
    { q: "Does the planner hurt us by showing prices?", a: "Usually the opposite. Couples who see a range up front and still book a tour are serious, and you spend less time on tours that were never a fit." },
    { q: "How soon will I see more tours?", a: "The Tour Line and follow-up start working the week they go live. Google rankings build over 60 to 90 days." },
  ],
};

export default weddingVenues;
