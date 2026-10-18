import type { Industry } from "./types";

const plumbing: Industry = {
  slug: "plumbing",
  name: "Plumbing",
  who: "plumbers",
  one: "plumbing company",
  category: "Home services",
  icon: "🚰",
  tagline: "Emergency text-back, water heater quotes and bigger jobs.",
  meta: {
    title: "Marketing for Plumbers | Truly Automation",
    description:
      "Marketing built for plumbing companies: 24/7 emergency text-back, a water heater and repipe estimator, upfront price pages, membership plans, freeze alerts and big-job follow-up. One plumbing company per city.",
  },
  hero: {
    line1: "Burst pipe at midnight?",
    line2: "They find you first.",
    sub: "The marketing team built only for plumbers. Every emergency answered, more water heaters and repipes, and fewer price shoppers asking what it costs to unclog a sink.",
    cards: {
      lead: {
        label: "Emergency Line",
        title: "Water heater leaking",
        fields: [["Heater", "50 gal gas, 12 years old"], ["Water off?", "Yes, told how"], ["Town", "Matthews"], ["Wants", "Replacement today"]],
      },
      side: {
        label: "Freeze Alert",
        title: "18° forecast Friday night",
        rows: [["Past customers texted", "1,140"], ["Pipe-wrap visits booked", "17"], ["Calls after the freeze", "31"]],
      },
      small: { label: "Big Job Follow-Up", title: "Repipe quote, day 7", text: "Camera found cast iron, $9,400" },
    },
  },
  problems: [
    { title: "Emergencies go to whoever answers", text: "A flooded kitchen won't wait for a callback. If you don't answer, they call the next plumber on the list." },
    { title: "Lots of small tickets", text: "Clogs and faucets keep you busy but barely profitable. The money is in water heaters, repipes and sewer lines." },
    { title: "Price shoppers", text: "Half the calls start with “how much to…” and end with a lower quote from someone else." },
    { title: "No reason to come back", text: "Customers forget your name until the next emergency, and then they search Google again." },
  ],
  systems: [
    { icon: "🧮", title: "Big Job Estimator", text: "Price ranges for water heaters, tankless upgrades, repipes and sewer lines on your website, so serious buyers call you ready.", tier: 1 },
    { icon: "🆘", title: "Emergency Line", text: "Missed calls get a text back in seconds, 24/7, with shut-off-valve instructions and a booked visit.", tier: 1 },
    { icon: "🏷️", title: "Upfront Price Pages", text: "Clear starting prices for common jobs on your website, which builds trust and cuts down the “how much” calls.", tier: 1 },
    { icon: "🛠️", title: "Plumbing Club", text: "Yearly plumbing check memberships with autopay, priority service and member discounts.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “plumber near me” and “water heater replacement” in every town you serve.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one plumbing company per city. Your competitors can't hire us.", tier: 1 },
    { icon: "📹", title: "Big Job Follow-Up", text: "Camera inspections and old heaters your techs flag get automatic repipe, sewer and replacement offers over the next few months.", tier: 2 },
    { icon: "🥶", title: "Freeze Alerts", text: "Before a hard freeze, past customers get pipe-protection tips and an offer to book. You get the calls when pipes burst, too.", tier: 2 },
    { icon: "🏢", title: "Property Manager Program", text: "We reach out to property managers and landlords for service contracts on rental units and apartments.", tier: 2 },
    { icon: "🤝", title: "Realtor & Inspector Outreach", text: "Home sales come with inspection repair lists. We connect you with the agents and inspectors who send those jobs.", tier: 2 },
    { icon: "🔁", title: "Estimate Chaser", text: "Automatic follow-up on every open quote at day 2, 7 and 14.", tier: 2 },
    { icon: "🦺", title: "Tech Finder", text: "A hiring page and job ads for licensed plumbers and apprentices.", tier: 2 },
  ],
  packages: [
    { name: "Service Call", tagline: "Everything a plumbing company needs to answer every emergency and turn small jobs into steady customers." },
    { name: "Full Flow", tagline: "Service Call plus big-job follow-up, freeze campaigns and outreach to property managers and realtors." },
  ],
  estimator: {
    name: "Big Job Estimator",
    question: "What will my plumbing project cost?",
    blurb: "Homeowners price the big jobs (water heaters, repipes, sewer lines) in 30 seconds. You get the serious ones calling you instead of price shoppers.",
    bullets: ["Uses your prices and the brands you install", "Every lead texts straight to your phone", "Works at midnight when the heater fails"],
    projects: [
      { key: "tank", label: "Tank water heater", unit: "none", fixed: [1400, 2600] },
      { key: "tankless", label: "Tankless water heater", unit: "none", fixed: [3200, 5800] },
      { key: "repipe", label: "Whole-home repipe", unit: "count", unitLabel: "Bathrooms", perWord: "bathroom", fixed: [3000, 5000], per: [1500, 3000], start: 2 },
      { key: "sewer", label: "Sewer line replacement", unit: "length", unitLabel: "Length of line (feet)", per: [80, 200], start: 50 },
    ],
    toggles: [{ key: "permit", label: "Include permit & inspection", fixed: [150, 400], on: true }],
  },
  demo: {
    name: "Emergency Line",
    business: "Blue Line Plumbing",
    greeting:
      "Hi, this is Ava with Blue Line Plumbing. Sorry we missed your call, our plumbers are out on jobs! I can help right here by text. What's going on?",
    chips: ["Water heater is leaking", "My sink is backed up", "How much for a tankless heater?"],
    busy: "Your plumbers are all on jobs",
    steps: [
      { t: "The call comes in", d: "A homeowner's water heater starts leaking. Your plumbers are on jobs, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get help right away, including how to shut off the water, before they call someone else." },
      { t: "The visit gets booked", d: "Ava gets the details, the address and photos, and books the next open slot, then sends it all to you." },
    ],
    goal: "a service visit",
    facts: `Business: Blue Line Plumbing (a demo company on the Truly Automation website)
Service area: Charlotte, Matthews, Mint Hill, Huntersville, Gastonia and nearby towns
Hours: Mon-Sat 7am-7pm, with 24/7 emergency service. Licensed and insured.
Work: leaks, clogs and drain cleaning, water heaters (tank and tankless), repipes, sewer line camera inspection and replacement, fixtures, garbage disposals.
Typical prices (final price after the plumber looks at it): service call $89 (waived if you do the repair); drain cleaning $150-$350; tank water heater installed $1,400-$2,600; tankless $3,200-$5,800; whole-home repipe usually $6,000-$12,000; sewer line replacement $80-$200 per foot.
Open slots: Today 3:00 PM, 6:00 PM; Tomorrow 8:00 AM, 11:00 AM, 2:30 PM. Emergencies: try for same day.
Rules: for an active leak or flooding, first tell them how to shut off the main water valve (usually where the water line enters the house, or at the street meter) and for a water heater, the cold-water valve on top; then treat it as urgent. If they smell gas, tell them to leave the house and call the gas company or 911 first.`,
  },
  faqs: [
    { q: "Won't upfront prices scare people off?", a: "Starting prices for common jobs build trust. People who call after seeing them are already comfortable with your range, so you spend less time on price shoppers and close more of the calls you get." },
    { q: "How does the Emergency Line help with a real emergency?", a: "It answers in seconds, tells them how to shut off the water, gets the address and photos, and books the next open slot or alerts you right away, based on your rules." },
    { q: "What's Big Job Follow-Up?", a: "When your techs flag an old water heater or a bad sewer line on a camera inspection, the homeowner gets a series of messages with options and financing over the next few months. Big jobs often close on the second or third touch." },
    { q: "How soon will I see more calls?", a: "The Emergency Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default plumbing;
