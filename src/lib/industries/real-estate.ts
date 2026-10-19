import type { Industry } from "./types";

const realEstate: Industry = {
  slug: "real-estate",
  name: "Real Estate Agents",
  who: "real estate agents and teams",
  one: "real estate team",
  category: "Professional services",
  icon: "🏡",
  tagline: "Seller net sheets, instant lead response and past client nurture.",
  meta: {
    title: "Marketing for Real Estate Agents and Teams | Truly Automation",
    description:
      "Marketing built for real estate agents and teams: a seller net sheet, instant response to every lead, past client and sphere nurture, neighborhood pages, just-listed and just-sold campaigns and video content. One real estate team per area.",
  },
  hero: {
    line1: "Answer every lead",
    line2: "in seconds.",
    sub: "The marketing team built for real estate agents. Every buyer and seller lead gets a reply in seconds, sellers see what they'd walk away with, and your past clients remember you when it's time to move.",
    cards: {
      lead: {
        label: "Lead Line",
        title: "Seller, thinking of listing",
        fields: [["Home", "4 bed, built 2006"], ["Timing", "This spring"], ["Town", "Fort Mill"], ["Booked", "Listing appointment, Sat"]],
      },
      side: {
        label: "Past Client Nurture",
        title: "This month",
        rows: [["Contacts reached", "1,240"], ["Replies", "86"], ["Referrals", "5"]],
      },
      small: { label: "Just Sold", title: "Postcards mailed", text: "200 homes around Oak Ridge Dr" },
    },
  },
  problems: [
    { title: "Speed to lead", text: "Online leads talk to whichever agent replies first, and you're at a showing." },
    { title: "Past clients forget you", text: "Most clients can't name their agent a few years later, and their next move goes to someone else." },
    { title: "Paying for portal leads", text: "Lead portals charge a lot for leads that were sent to several agents." },
    { title: "Sellers want a number", text: "Every seller wants to know what they'll walk away with before they'll meet." },
  ],
  systems: [
    { icon: "📲", title: "Lead Line", text: "Every call, portal lead and website inquiry gets a reply in seconds, 24/7, and books a showing or listing appointment.", tier: 1 },
    { icon: "🧮", title: "Seller Net Sheet", text: "Sellers enter a price and see roughly what they'd walk away with, then book a real valuation.", tier: 1 },
    { icon: "🏘️", title: "Neighborhood Pages", text: "Pages for every neighborhood you know, with market stats, that rank on Google and ChatGPT.", tier: 1 },
    { icon: "💌", title: "Past Client Nurture", text: "Home anniversaries, market updates and check-ins that keep you top of mind for years.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “realtor near me” and every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one real estate team per area. Competing agents can't hire us.", tier: 1 },
    { icon: "📬", title: "Just Listed / Just Sold", text: "Postcards and digital ads to the homes around every listing and sale.", tier: 2 },
    { icon: "🎥", title: "Listing & Market Videos", text: "Short listing tours and market update videos posted every week.", tier: 2 },
    { icon: "🏚️", title: "Expired & FSBO Outreach", text: "Respectful outreach to expired listings and for-sale-by-owners, following do-not-call rules.", tier: 2 },
    { icon: "🤝", title: "Partner Network", text: "Referral relationships with lenders, builders, divorce attorneys and estate planners.", tier: 2 },
    { icon: "🎉", title: "Client Events", text: "Appreciation events and pie drops that bring referrals.", tier: 2 },
    { icon: "🔁", title: "Long-Term Lead Nurture", text: "Leads who aren't ready yet get helpful updates for months, until they are.", tier: 2 },
  ],
  packages: [
    { name: "Open House", tagline: "Everything an agent needs to answer every lead in seconds and stay top of mind with past clients." },
    { name: "Sold", tagline: "Open House plus just-sold campaigns, weekly videos, expired and FSBO outreach, partners and events." },
  ],
  estimator: {
    name: "Seller Net Sheet",
    question: "What would I walk away with?",
    blurb: "Sellers enter a price and see roughly what they'd take home, then book a real valuation with you.",
    bullets: ["Uses your local closing costs", "Every seller lead texts straight to you", "Turns curious owners into listing appointments"],
    projectLabel: "I'm",
    projects: [
      { key: "sell", label: "Selling a home", unit: "count", unitLabel: "Expected sale price ($)", per: [0.92, 0.95], start: 400000, note: "Before your mortgage payoff. Commissions are negotiable." },
      { key: "buy", label: "Buying a home", unit: "count", unitLabel: "Purchase price ($)", per: [0.02, 0.04], start: 350000, note: "Typical buyer closing costs, before the down payment." },
    ],
    toggles: [
      { key: "concession", label: "Seller pays 2% toward buyer costs", per: [-0.02, -0.02], only: ["sell"] },
    ],
    resultLabel: "Estimated amount",
    cta: "Get my real number",
    after: "A local agent confirms your numbers.",
  },
  demo: {
    name: "Lead Line",
    business: "Keystone Home Team",
    greeting:
      "Hi, this is Ava with Keystone Home Team! Sorry we missed your call, our agents are at showings. I can help right here by text. Are you looking to buy, sell, or both?",
    chips: ["Thinking about selling", "Want to see a house", "What's my home worth?"],
    busy: "Your agent is at a showing",
    steps: [
      { t: "The call comes in", d: "A homeowner is thinking about listing this spring. Your agents are at showings, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly reply before they fill out a form on a portal that sends them to five agents." },
      { t: "The appointment gets booked", d: "Ava asks about the home and timing, explains the next step, and books a listing appointment." },
    ],
    goal: "a listing appointment or showing",
    facts: `Business: Keystone Home Team (a demo real estate team on the Truly Automation website)
Area: Fort Mill, Tega Cay, Rock Hill, Indian Land, Ballantyne and south Charlotte
Hours: 7 days a week, 8am-8pm.
Services: home selling with professional photos and video, buyer representation, relocation, new construction, first-time buyers, free home valuations.
Facts: sellers typically net about 92-95% of the sale price before paying off their mortgage (commissions are negotiable and vary); buyer closing costs usually run 2-4% of the price. Buyers sign a written buyer agreement before touring.
Open times: Listing appointments Thursday 6:00 PM, Saturday 10:00 AM and 1:00 PM; showings available daily.
Rules: follow fair housing law. Never describe neighborhoods by who lives there, never comment on crime or school "quality" to steer buyers; share objective info or point to public sources. Never give legal, tax or lending advice; point them to a lender, attorney or CPA. Never promise a sale price or a specific commission. Ask buy or sell, area, timing and price range.`,
  },
  faqs: [
    { q: "How fast does the Lead Line reply?", a: "In seconds, any time of day, to calls, portal leads and website inquiries. Speed is the biggest reason a lead picks one agent over another." },
    { q: "Is it fair housing compliant?", a: "It's set up to share only objective information and never steer buyers based on who lives in a neighborhood. Your brokerage reviews everything we publish." },
    { q: "How does Past Client Nurture work?", a: "Past clients get home anniversary notes, market updates and check-ins over the years, so you're the agent they call and refer." },
    { q: "How soon will I see results?", a: "The Lead Line and nurture start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default realEstate;
