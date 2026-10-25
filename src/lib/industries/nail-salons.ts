import type { Industry } from "./types";

const nailSalons: Industry = {
  slug: "nail-salons",
  name: "Nail Salons",
  who: "nail salons",
  one: "nail salon",
  category: "Beauty & personal care",
  icon: "💅",
  tagline: "Booked fills, rebooking reminders and fewer no-shows.",
  meta: {
    title: "Marketing for Nail Salons | Truly Automation",
    description:
      "Marketing built for nail salons and nail techs: online and text booking, fill reminders every 2 to 3 weeks, no-show protection, nail art galleries, bridal and party bookings, and review campaigns. One nail salon per area.",
  },
  hero: {
    line1: "Full chairs,",
    line2: "fills rebooked.",
    sub: "The marketing team built for nail salons. Clients book by text in seconds, get reminded when their fill is due, and show up on time.",
    cards: {
      lead: {
        label: "Booking Line",
        title: "Gel-X full set",
        fields: [["Client", "New"], ["Design", "French + chrome"], ["Town", "Huntersville"], ["Booked", "Sat, 11 AM"]],
      },
      side: {
        label: "Fill Reminders",
        title: "This week",
        rows: [["Fills due", "64"], ["Rebooked", "51"], ["No-shows", "1"]],
      },
      small: { label: "Party Bookings", title: "Bridal party of 6", text: "Saturday morning reserved" },
    },
  },
  problems: [
    { title: "Phones ring mid-set", text: "Your techs can't answer with wet polish on someone's hands, so callers try the next salon." },
    { title: "Clients wander", text: "Clients go wherever has an opening when their fill is due." },
    { title: "No-shows", text: "An empty chair on a Saturday is money you never get back." },
    { title: "Every salon looks the same online", text: "Clients pick by photos and reviews, and most salons have neither." },
  ],
  systems: [
    { icon: "📞", title: "Booking Line", text: "Missed calls get a text back in seconds and book the appointment, even with your hands full.", tier: 1 },
    { icon: "🧮", title: "Nail Price Check", text: "Clients pick their service and add-ons and see your price before they book.", tier: 1 },
    { icon: "🔁", title: "Fill Reminders", text: "Clients get a text when their fill is due, with a one-tap rebook.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every visit, so you top Google for “nail salon near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for gel, acrylics, dip and nail art.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one nail salon per area. Your competitors can't hire us.", tier: 1 },
    { icon: "⏰", title: "No-Show Protection", text: "Reminders, confirmations and a card on file, so empty chairs get filled.", tier: 2 },
    { icon: "🎨", title: "Nail Art Gallery", text: "Your best sets posted and sorted by style, so new clients book the look.", tier: 2 },
    { icon: "👰", title: "Bridal & Party Bookings", text: "Bridal parties, proms and birthday groups booked by text.", tier: 2 },
    { icon: "🎂", title: "Birthday Offers", text: "A birthday treat sent to every client, which brings them in that month.", tier: 2 },
    { icon: "🕐", title: "Last-Minute Openings", text: "Cancellations sent to clients who want an earlier spot.", tier: 2 },
    { icon: "💳", title: "Membership Plans", text: "Monthly fill memberships for steady income.", tier: 2 },
  ],
  packages: [
    { name: "Base Coat", tagline: "Everything a nail salon needs to book by text, rebook every fill and get great reviews." },
    { name: "Top Coat", tagline: "Base Coat plus no-show protection, a nail art gallery, party bookings, birthday offers and memberships." },
  ],
  estimator: {
    name: "Nail Price Check",
    question: "What will my nails cost?",
    blurb: "Clients pick their service and add-ons and see your price in seconds, then book their chair.",
    bullets: ["Uses your real prices", "Books straight to your calendar", "Fill reminders set automatically"],
    projectLabel: "Service",
    projects: [
      { key: "gelmani", label: "Gel manicure", unit: "none", fixed: [35, 50] },
      { key: "fullset", label: "Full set (acrylic or Gel-X)", unit: "none", fixed: [55, 85] },
      { key: "fill", label: "Fill", unit: "none", fixed: [40, 60] },
      { key: "pedi", label: "Spa pedicure", unit: "none", fixed: [45, 75] },
    ],
    toggles: [
      { key: "art", label: "Nail art or chrome", fixed: [10, 30], only: ["gelmani", "fullset", "fill"] },
      { key: "removal", label: "Removal of old set", fixed: [10, 20] },
    ],
    resultLabel: "Your price",
    cta: "Book my appointment",
    after: "Final price depends on length and design.",
  },
  demo: {
    name: "Booking Line",
    business: "Polished Nail Lounge",
    greeting:
      "Hi, this is Chloe with Polished Nail Lounge! Sorry we missed your call, all our techs are with clients. I can book you right here by text. What are you looking to get done?",
    chips: ["Full set this weekend", "Gel mani and pedi", "Nails for a bridal party"],
    busy: "Your techs are mid-set",
    steps: [
      { t: "The call comes in", d: "A client wants a full set before a wedding Saturday. Every tech is mid-set, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking what they want and when." },
      { t: "The appointment gets booked", d: "Chloe shares the price and books the chair." },
    ],
    goal: "a nail appointment",
    facts: `Business: Polished Nail Lounge (a demo salon on the Truly Automation website)
Location: Huntersville, serving Cornelius, Davidson, Mooresville and north Charlotte
Hours: Mon-Sat 9:30am-7pm, Sun 11am-5pm. Licensed nail techs. Walk-ins welcome when open, appointments recommended.
Services: gel manicures, acrylic and Gel-X full sets, fills, dip powder, nail art and chrome, spa pedicures, removal, kids' manis, bridal and party groups.
Prices: gel manicure $35-$50; full set $55-$85; fill $40-$60; dip $45-$60; spa pedicure $45-$75; nail art $10-$30; removal $10-$20. Groups of 4+ book a block with a $10 per person deposit.
Open times: Today 5:30 PM; Tomorrow 11:00 AM, 2:30 PM; Saturday 10:00 AM, 1:00 PM.
Rules: ask what service, any design ideas, and the day and time they want. Ask them to send a photo of the look if they have one. If they have an infection or open cut on their nail, suggest seeing a doctor first.`,
  },
  faqs: [
    { q: "How do I get clients to rebook?", a: "Fill Reminders text every client when their fill is due with a one-tap rebook, so they come back to you instead of wherever is open." },
    { q: "Can it book while my techs are working?", a: "Yes. The Booking Line answers missed calls by text and books the chair, so nobody has to put down a brush." },
    { q: "How do I cut down on no-shows?", a: "Reminders, confirmations and a card on file, plus last-minute openings sent to clients who want an earlier spot." },
    { q: "How soon will I see more bookings?", a: "The Booking Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default nailSalons;
