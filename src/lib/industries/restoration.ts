import type { Industry } from "./types";

const restoration: Industry = {
  slug: "restoration",
  name: "Water & Fire Restoration",
  who: "restoration companies",
  one: "restoration company",
  category: "Home services",
  icon: "🧯",
  tagline: "24/7 emergency calls, insurance-ready intake and plumber partners.",
  meta: {
    title: "Marketing for Water & Fire Restoration Companies | Truly Automation",
    description:
      "Marketing built for water, fire and mold restoration companies: 24/7 emergency answering, photo intake, insurance claim info gathered up front, plumber and agent referral partners, and review campaigns. One restoration company per area.",
  },
  hero: {
    line1: "Flooded at 2 AM?",
    line2: "You get the call.",
    sub: "The marketing team built for restoration companies. Every emergency call gets answered day or night, with photos and insurance details gathered before your crew rolls.",
    cards: {
      lead: {
        label: "Emergency Line",
        title: "Burst pipe, finished basement",
        fields: [["Water", "Still coming in"], ["Insurance", "State Farm"], ["Town", "Gastonia"], ["Crew", "On the way, 45 min"]],
      },
      side: {
        label: "Referral Partners",
        title: "This month",
        rows: [["Plumbers sending jobs", "6"], ["Insurance agents", "4"], ["Jobs referred", "13"]],
      },
      small: { label: "Claim Updates", title: "Drying day 3", text: "Photo update sent to homeowner" },
    },
  },
  problems: [
    { title: "Emergencies don't wait", text: "If you miss a 2 AM call, the homeowner calls the next company and that job is gone." },
    { title: "Big national names", text: "Franchises with huge ad budgets sit at the top of Google for every water damage search." },
    { title: "Insurance back-and-forth", text: "Gathering claim info, photos and policy details takes hours of phone tag." },
    { title: "No steady referrals", text: "Plumbers and agents send work to whoever they already know." },
  ],
  systems: [
    { icon: "🚨", title: "Emergency Line", text: "Every missed call gets a text back in seconds, day or night, with safety steps and your crew dispatched.", tier: 1 },
    { icon: "📸", title: "Damage Photo Intake", text: "Homeowners send photos and insurance details by text before you arrive, so the job starts faster.", tier: 1 },
    { icon: "🛡️", title: "Trust Pages", text: "Your IICRC certifications, insurance and real before-and-after jobs, so homeowners pick you over a franchise.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every job, so you top Google for “water damage restoration near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for water damage, fire damage and mold.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one restoration company per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🚰", title: "Plumber Partners", text: "Plumbers who find the leak send you the cleanup, and you send them the repairs.", tier: 2 },
    { icon: "📋", title: "Insurance Agent Accounts", text: "Local agents keep your name handy for every claim in town.", tier: 2 },
    { icon: "🏢", title: "Property Manager Accounts", text: "Priority response agreements with property managers and HOAs.", tier: 2 },
    { icon: "📲", title: "Claim Updates", text: "Automatic drying and progress updates to the homeowner, so they stop calling to ask.", tier: 2 },
    { icon: "🌧️", title: "Storm Alerts", text: "Ads and texts ready to go the moment a big storm or freeze hits your area.", tier: 2 },
    { icon: "🍄", title: "Mold Pages", text: "Mold inspection and removal pages that bring in steady non-emergency work.", tier: 2 },
  ],
  packages: [
    { name: "First Response", tagline: "Everything a restoration company needs to answer every emergency and win against the franchises." },
    { name: "Full Recovery", tagline: "First Response plus plumber, agent and property manager partners, claim updates and storm alerts." },
  ],
  estimator: {
    name: "Damage Cost Check",
    question: "What will water damage cleanup cost?",
    blurb: "Homeowners see a rough range for drying and cleanup, and learn most of it is often covered by insurance.",
    bullets: ["Uses your real rates", "Photos come with every request", "Crew dispatched 24/7"],
    projectLabel: "Damage",
    projects: [
      { key: "water", label: "Water damage", unit: "area", unitLabel: "Wet area (ft)", perWord: "sq ft", per: [4, 8], start: [15, 12] },
      { key: "mold", label: "Mold removal", unit: "area", unitLabel: "Affected area (ft)", perWord: "sq ft", per: [15, 30], start: [10, 8] },
      { key: "fire", label: "Smoke & fire cleanup", unit: "area", unitLabel: "Affected area (ft)", perWord: "sq ft", per: [5, 10], start: [20, 15] },
    ],
    toggles: [
      { key: "afterhours", label: "Nights or weekend", fixed: [150, 300] },
      { key: "contents", label: "Pack out furniture and belongings", fixed: [800, 2000] },
    ],
    minimum: 1000,
    cta: "Send a crew",
    after: "Often covered by insurance. Final price after inspection.",
  },
  demo: {
    name: "Emergency Line",
    business: "ClearDry Restoration",
    greeting:
      "Hi, this is Jordan with ClearDry Restoration! Sorry we missed your call, our crews are on a job. I can help right now by text. Is water still coming in?",
    chips: ["My basement is flooding", "We had a kitchen fire", "I think I have mold"],
    busy: "Your crew is drying out a flooded basement",
    steps: [
      { t: "The call comes in", d: "A pipe burst in a finished basement at 2 AM. Your crew is on another job, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get safety steps right away: shut off the water and stay out of standing water near outlets." },
      { t: "The crew gets sent", d: "Jordan gathers photos and insurance details, and gets a crew on the way." },
    ],
    goal: "an emergency crew visit",
    facts: `Business: ClearDry Restoration (a demo company on the Truly Automation website)
Service area: Gastonia, Belmont, Mount Holly, Dallas, Lincolnton and west Charlotte
Hours: 24/7 emergency response, office Mon-Fri 8am-5pm. IICRC certified, licensed and insured. Crews usually arrive within 60 minutes.
Services: water damage drying, burst pipes, flooded basements, sewage backups, fire and smoke cleanup, mold inspection and removal, content pack-out, insurance claim help.
Prices (confirmed at inspection): water damage $4-$8 per sq ft, typical jobs $1,500-$5,000; mold removal $15-$30 per sq ft; smoke and fire cleanup $5-$10 per sq ft. Nights and weekends add $150-$300. Pack-out $800-$2,000. Free inspection. We work directly with most insurance companies.
Open times: Emergency crew available now (about 45-60 minutes); inspections Tomorrow 9:00 AM, 2:00 PM.
Rules: safety first. If water is near outlets or the panel, tell them not to walk in it and to shut off power only if it's safe. Tell them to shut off the main water valve. If there's fire, smoke or a gas smell, tell them to get out and call 911. Ask for photos, the source, the town and their insurance company. Never promise insurance will cover it; say we'll help with the claim.`,
  },
  faqs: [
    { q: "Do you answer emergency calls at night?", a: "Yes. The Emergency Line texts back every missed call in seconds, 24/7, with safety steps and gets your crew dispatched." },
    { q: "How do I compete with the big franchises?", a: "Faster response, trust pages, steady reviews and local SEO. Homeowners pick the local company that answers first and looks trustworthy." },
    { q: "Where do referral jobs come from?", a: "Plumbers, insurance agents and property managers. In Full Recovery we build those partnerships for you." },
    { q: "How soon will I see more calls?", a: "The Emergency Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default restoration;
