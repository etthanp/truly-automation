import type { Industry } from "./types";

const propertyManagement: Industry = {
  slug: "property-management",
  name: "Property Management",
  who: "property managers",
  one: "property management company",
  category: "Professional services",
  icon: "🏢",
  tagline: "Owner leads, rental pricing checks and faster leasing.",
  meta: {
    title: "Marketing for Property Management Companies | Truly Automation",
    description:
      "Marketing built for property management companies: owner lead generation, a rental income check, prospect tenant replies and showing booking, accidental landlord outreach, realtor and investor partners, and review campaigns. One property management company per area.",
  },
  hero: {
    line1: "More doors,",
    line2: "fewer vacancies.",
    sub: "The marketing team built for property managers. Owners check what their rental could earn and book a call, while tenant inquiries get answered and showings booked any hour.",
    cards: {
      lead: {
        label: "Owner Lead",
        title: "3-bed house, moving away",
        fields: [["Owner", "Accidental landlord"], ["Rent check", "$2,050-$2,300"], ["Town", "Fort Mill"], ["Booked", "Owner call, Tue"]],
      },
      side: {
        label: "Leasing",
        title: "This week",
        rows: [["Tenant inquiries", "84"], ["Showings booked", "31"], ["Applications", "12"]],
      },
      small: { label: "Realtor Partners", title: "Listing didn't sell", text: "Owner referred to rent it out" },
    },
  },
  problems: [
    { title: "Growing doors is slow", text: "New owners come from word of mouth, and that doesn't scale." },
    { title: "Tenant inquiries pile up", text: "Every listing gets dozens of messages, and slow replies mean longer vacancies." },
    { title: "Owners shop on price", text: "Owners compare management fees without seeing what you actually do." },
    { title: "Bad reviews from tenants", text: "Your Google rating is dragged down by tenants, and owners read every review." },
  ],
  systems: [
    { icon: "📞", title: "Owner Line", text: "Missed calls get a text back in seconds, ask about the property and book an owner consultation.", tier: 1 },
    { icon: "🧮", title: "Rental Income Check", text: "Owners enter their property and see a rent range and what they'd keep after your fee.", tier: 1 },
    { icon: "🏠", title: "Showing Scheduler", text: "Prospective tenants get instant replies, a few screening questions and a booked showing.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests to happy owners and tenants, so you top Google for “property management near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT when owners search for a property manager.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one property management company per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🧳", title: "Accidental Landlord Outreach", text: "Reach owners who are relocating, inherited a home or couldn't sell, the people who need you most.", tier: 2 },
    { icon: "🤝", title: "Realtor Partners", text: "Agents send owners whose homes didn't sell, and you send them buyers when owners want out.", tier: 2 },
    { icon: "💼", title: "Investor Accounts", text: "Outreach to local investors and small landlords with several doors.", tier: 2 },
    { icon: "📊", title: "Owner Reports", text: "Clean monthly updates that keep owners happy and bring referrals.", tier: 2 },
    { icon: "🔧", title: "Maintenance Request Line", text: "Tenant repair requests collected by text with photos, sorted by urgency.", tier: 2 },
    { icon: "🔁", title: "Renewal Reminders", text: "Lease renewals offered early, so good tenants stay and units don't sit empty.", tier: 2 },
  ],
  packages: [
    { name: "Lease Up", tagline: "Everything a property manager needs to win new owners, lease faster and get great reviews." },
    { name: "Full Portfolio", tagline: "Lease Up plus accidental landlord outreach, realtor and investor partners, owner reports and renewals." },
  ],
  estimator: {
    name: "Rental Income Check",
    question: "What could my rental earn?",
    blurb: "Owners pick their property and see a rent range in seconds, then book a call to learn what you'd handle for them.",
    bullets: ["Uses your local rent data", "Property details with every lead", "Books owner calls to your calendar"],
    projectLabel: "Property",
    projects: [
      { key: "apt", label: "Condo or townhome", unit: "count", unitLabel: "Bedrooms", perWord: "bedroom", per: [550, 750], fixed: [300, 400], start: 2, note: "Rough range. We'll pull real comps for your street." },
      { key: "house", label: "Single-family home", unit: "count", unitLabel: "Bedrooms", perWord: "bedroom", per: [500, 650], fixed: [500, 700], start: 3, note: "Rough range. We'll pull real comps for your street." },
      { key: "duplex", label: "Duplex or small multi", unit: "count", unitLabel: "Units", perWord: "unit", per: [1200, 1600], start: 2, note: "Rough range per unit. We'll pull real comps for your street." },
    ],
    toggles: [
      { key: "garage", label: "Garage or big yard", fixed: [75, 150] },
      { key: "updated", label: "Recently updated", fixed: [100, 250] },
    ],
    resultLabel: "Estimated monthly rent",
    cta: "Book my owner call",
  },
  demo: {
    name: "Owner Line",
    business: "Keystone Property Management",
    greeting:
      "Hi, this is Claire with Keystone Property Management! Sorry we missed your call, we're out at a showing. I can help right here by text. Are you a property owner or looking to rent?",
    chips: ["I need someone to manage my rental", "What could my house rent for?", "I want to rent a home"],
    busy: "Your team is at a showing",
    steps: [
      { t: "The call comes in", d: "An owner is relocating and wants to rent their house instead of selling. Your team is at a showing, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking about the property and their timeline." },
      { t: "The owner call gets booked", d: "Claire shares a rent range and your fees, and books a consultation." },
    ],
    goal: "an owner consultation or a tenant showing",
    facts: `Business: Keystone Property Management (a demo company on the Truly Automation website)
Service area: Fort Mill, Rock Hill, Tega Cay, Indian Land, Lake Wylie and south Charlotte
Hours: Mon-Fri 9am-5pm; showings evenings and Saturdays. Licensed real estate brokerage.
Services for owners: tenant placement, full management, rent collection, maintenance coordination, inspections, owner reports, lease renewals, evictions handled through an attorney.
Fees: full management 8%-10% of monthly rent; leasing fee 50%-75% of one month's rent; lease renewal $200-$300. No fee while vacant.
Rent ranges (rough, comps confirmed on the call): condo or townhome $1,400-$1,900; 3-bed single-family $1,900-$2,500; duplex $1,200-$1,600 per unit.
Open times: Owner calls Tomorrow 10:00 AM, 2:00 PM; Thursday 11:00 AM. Showings Tomorrow 5:30 PM; Saturday 10:00 AM.
Rules: ask if they're an owner or a renter. For owners, ask the property type, bedrooms, town and timeline. For renters, ask move-in date, budget and bedrooms, and book a showing. Follow fair housing laws: never ask about or comment on race, religion, national origin, sex, disability, family status or other protected traits, and never steer people toward or away from areas. Don't give legal or tax advice.`,
  },
  faqs: [
    { q: "How do I add more doors?", a: "The Rental Income Check, accidental landlord outreach and realtor partners bring owners who need a manager, and the Owner Line books the call." },
    { q: "Can it answer tenant inquiries too?", a: "Yes. The Showing Scheduler replies instantly, asks a few basic questions and books showings, following fair housing rules." },
    { q: "What about bad tenant reviews?", a: "Review requests go to happy owners and tenants after good moments, like a fast repair or a smooth move-in, so your rating reflects the real work." },
    { q: "How soon will I see more owner leads?", a: "The Owner Line and income check start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default propertyManagement;
