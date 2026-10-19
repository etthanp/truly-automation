import type { Industry } from "./types";

const medSpa: Industry = {
  slug: "med-spa",
  name: "Med Spas",
  who: "med spas",
  one: "med spa",
  category: "Health & wellness",
  icon: "💉",
  tagline: "Treatment pricing, consult booking and rebooking reminders.",
  meta: {
    title: "Marketing for Med Spas | Truly Automation",
    description:
      "Marketing built for med spas and aesthetic clinics: a treatment price checker, consult booking by text, Botox rebooking reminders, membership pages, before-and-after galleries and Instagram content. One med spa per area.",
  },
  hero: {
    line1: "Booked consults.",
    line2: "Clients who return.",
    sub: "The marketing team built for med spas. New clients price treatments and book consults by text, and every Botox client gets a reminder right when it's time to come back.",
    cards: {
      lead: {
        label: "Glow Line",
        title: "New client, Botox consult",
        fields: [["Areas", "Forehead + crow's feet"], ["First time", "Yes"], ["Town", "Ballantyne"], ["Booked", "Saturday 10:30 AM"]],
      },
      side: {
        label: "Rebooking Reminders",
        title: "This month",
        rows: [["Clients at 12 weeks", "210"], ["Rebooked", "97"], ["Memberships started", "12"]],
      },
      small: { label: "Instagram", title: "Reel posted", text: "Lip filler before and after" },
    },
  },
  problems: [
    { title: "DMs and calls slip through", text: "Clients ask about prices in DMs and calls while you're injecting, and by the time you reply they've booked somewhere else." },
    { title: "Clients don't come back on time", text: "Botox wears off at 3 to 4 months, but clients forget to rebook until it's long gone." },
    { title: "Price shopping", text: "Clients compare price per unit everywhere and don't see why you're worth more." },
    { title: "Instagram takes forever", text: "You know content brings clients, but there's no time to film, edit and post." },
  ],
  systems: [
    { icon: "📲", title: "Glow Line", text: "Missed calls and DMs get an answer in seconds with pricing and open consult times.", tier: 1 },
    { icon: "🧮", title: "Treatment Price Checker", text: "Clients price Botox by units, filler by syringes, and facials and laser packages on your website.", tier: 1 },
    { icon: "⏰", title: "Rebooking Reminders", text: "Every client gets a text right when it's time for their next appointment, with a booking link.", tier: 1 },
    { icon: "🖼️", title: "Before & After Gallery", text: "Real results with client permission, organized by treatment, on your site and Google.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “Botox near me” and every treatment you offer.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one med spa per area. The med spa down the road can't hire us.", tier: 1 },
    { icon: "💎", title: "Membership Pages", text: "Monthly memberships explained simply and promoted, for steady revenue every month.", tier: 2 },
    { icon: "🎥", title: "Instagram & TikTok Content", text: "Short videos and posts planned, edited and posted for you every week.", tier: 2 },
    { icon: "🎁", title: "Event & Holiday Promos", text: "Botox parties, gift card sales and holiday promotions planned and sent.", tier: 2 },
    { icon: "👯", title: "Refer-a-Friend", text: "Clients get a reward for every friend who books. Most med spa clients came from a friend.", tier: 2 },
    { icon: "💍", title: "Bridal & Event Packages", text: "Pages and outreach for brides and event prep, booked months ahead.", tier: 2 },
    { icon: "🔁", title: "Consult Follow-Up", text: "Follow-up with clients who had a consult but didn't book their treatment.", tier: 2 },
  ],
  packages: [
    { name: "Refresh", tagline: "Everything a med spa needs to answer every inquiry, book consults and bring clients back on time." },
    { name: "Full Glow", tagline: "Refresh plus memberships, weekly social content, promos, referrals and bridal packages." },
  ],
  estimator: {
    name: "Treatment Price Checker",
    question: "What will my treatment cost?",
    blurb: "Clients price treatments in 30 seconds and book a consult while they're excited.",
    bullets: ["Uses your real prices", "Shows member pricing", "Every request books straight to your calendar"],
    projectLabel: "Treatment",
    projects: [
      { key: "botox", label: "Botox / Dysport", unit: "count", unitLabel: "Units (most areas 20-40)", perWord: "unit", per: [11, 15], start: 30 },
      { key: "filler", label: "Lip or cheek filler", unit: "count", unitLabel: "Syringes", perWord: "syringe", per: [650, 850], start: 1 },
      { key: "facial", label: "HydraFacial", unit: "none", fixed: [180, 280] },
      { key: "laser", label: "Laser hair removal (6 sessions)", unit: "none", fixed: [900, 2400], note: "Price depends on the area." },
    ],
    toggles: [
      { key: "member", label: "I'm a member (about 10% off)", per: [-1.1, -1.5], only: ["botox"] },
      { key: "dermaplane", label: "Add dermaplaning", fixed: [50, 75], only: ["facial"] },
    ],
    cta: "Book my consult",
    after: "Exact plan at your free consult.",
  },
  demo: {
    name: "Glow Line",
    business: "Luxe Aesthetics",
    greeting:
      "Hi, this is Ava with Luxe Aesthetics. Sorry we missed your call, our injectors are with a client! I can help right here by text. What treatment are you interested in?",
    chips: ["How much is Botox?", "First time getting filler", "Do you have memberships?"],
    busy: "Your injector is with a client",
    steps: [
      { t: "The call comes in", d: "A first-time client wants to ask about Botox. Your injector is with a client, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a friendly answer with pricing before they DM three other med spas." },
      { t: "The consult gets booked", d: "Ava explains pricing per unit, answers first-timer questions, and books a free consult." },
    ],
    goal: "a free consult",
    facts: `Business: Luxe Aesthetics (a demo med spa on the Truly Automation website)
Location: Ballantyne in south Charlotte, serving Pineville, Fort Mill, Waxhaw and Matthews
Hours: Tue-Fri 10am-7pm, Sat 9am-3pm. Treatments by licensed nurse injectors under a medical director.
Treatments: Botox and Dysport, lip and cheek filler, HydraFacials, chemical peels, microneedling, laser hair removal, dermaplaning.
Typical prices (exact plan at a free consult): Botox $11-$15 per unit (most areas 20-40 units); filler $650-$850 per syringe; HydraFacial $180-$280; laser hair removal 6 sessions $900-$2,400 depending on area. Membership $99/month includes a monthly facial or credit toward injectables and member pricing.
Open consult times: Tomorrow 11:00 AM, 5:30 PM; Friday 1:00 PM; Saturday 10:30 AM.
Rules: never give medical advice or promise results. Pregnant or breastfeeding clients can't get injectables; say the nurse will go over health questions at the consult. If someone describes a bad reaction (vision changes, severe swelling, skin turning white or blue), tell them to call the office or 911 right away. Never give a firm price.`,
  },
  faqs: [
    { q: "Can it answer Instagram DMs too?", a: "Yes. The same system can answer DMs, Facebook messages and missed calls with your pricing and open consult times." },
    { q: "How do Rebooking Reminders work?", a: "Each client gets a text right when their treatment usually wears off, with a link to book. It keeps your calendar full without anyone making calls." },
    { q: "Do you make the social content?", a: "In Full Glow, yes. We plan, edit and post short videos and posts every week, using clips and photos from your spa." },
    { q: "How soon will I see more bookings?", a: "The Glow Line and Rebooking Reminders start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default medSpa;
