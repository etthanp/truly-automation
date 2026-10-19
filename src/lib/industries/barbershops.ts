import type { Industry } from "./types";

const barbershops: Industry = {
  slug: "barbershops",
  name: "Barbershops",
  who: "barbershops",
  one: "barbershop",
  category: "Beauty & personal care",
  icon: "💈",
  tagline: "Booking by text, regulars on a schedule and fewer no-shows.",
  meta: {
    title: "Marketing for Barbershops | Truly Automation",
    description:
      "Marketing built for barbershops: booking by text, a price list that answers questions, rebooking reminders, no-show protection, barber portfolio pages, Instagram content and new client offers. One barbershop per area.",
  },
  hero: {
    line1: "Chairs full.",
    line2: "Phone quiet.",
    sub: "The marketing team built for barbershops. Clients book by text while you're cutting, regulars get a reminder every few weeks, and no-shows drop.",
    cards: {
      lead: {
        label: "Chair Line",
        title: "Cut + beard trim",
        fields: [["Barber", "Marcus"], ["Style", "Low taper fade"], ["Town", "Gastonia"], ["Booked", "Friday 5:30 PM"]],
      },
      side: {
        label: "Regulars",
        title: "This month",
        rows: [["Reminders sent", "520"], ["Rebooked", "301"], ["No-shows", "Down 40%"]],
      },
      small: { label: "Opening Filler", title: "Spot filled", text: "3:00 PM cancel, filled by 3:12" },
    },
  },
  problems: [
    { title: "You can't stop mid-fade", text: "The phone rings with clippers in your hand, and a new client books somewhere else." },
    { title: "No-shows", text: "Every no-show is an empty 30 to 45 minutes you never get back." },
    { title: "Regulars stretch it out", text: "A two-week client turns into a four-week client when nobody reminds them." },
    { title: "New clients pick on Instagram", text: "People find barbers by scrolling, and a shop with no fresh posts gets skipped." },
  ],
  systems: [
    { icon: "📲", title: "Chair Line", text: "Missed calls and DMs get a text back in seconds with open times, and clients book in the thread.", tier: 1 },
    { icon: "🧮", title: "Price List", text: "A clean price list on your site and Google, so clients know what they're paying before they sit down.", tier: 1 },
    { icon: "⏰", title: "Rebooking Reminders", text: "Clients get a text at their usual interval with a link to book their barber.", tier: 1 },
    { icon: "🛡️", title: "No-Show Protection", text: "Confirmation texts, reminders and optional card holds that cut no-shows.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “barbershop near me” and “fade near me.”", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one barbershop per area. The shop down the street can't hire us.", tier: 1 },
    { icon: "✂️", title: "Barber Portfolio Pages", text: "Each barber gets a page with their best cuts and a book-me button.", tier: 2 },
    { icon: "🎥", title: "Instagram & TikTok Content", text: "Fresh cuts, transformations and shop clips posted every week.", tier: 2 },
    { icon: "📅", title: "Opening Filler", text: "Cancellations go out to your waitlist, and the first reply gets the chair.", tier: 2 },
    { icon: "🎓", title: "Back-to-School & Holiday Pushes", text: "Campaigns timed for back-to-school, holidays, graduation and prom.", tier: 2 },
    { icon: "👦", title: "Kids & Family Pages", text: "Family pages that bring in dads and their kids together.", tier: 2 },
    { icon: "👯", title: "Refer-a-Friend", text: "Clients get a free beard trim or discount for every friend who books.", tier: 2 },
  ],
  packages: [
    { name: "Line-Up", tagline: "Everything a barbershop needs to book while you cut, keep regulars on schedule and cut no-shows." },
    { name: "Full Fade", tagline: "Line-Up plus barber portfolios, weekly content, opening filling, seasonal pushes and referrals." },
  ],
  estimator: {
    name: "Price List",
    question: "What will my cut cost?",
    blurb: "Clients see what they'll pay before they sit down and book their barber in one tap.",
    bullets: ["Uses your real prices", "Books straight to your barber's calendar", "No awkward price surprises"],
    projectLabel: "Service",
    projects: [
      { key: "cut", label: "Haircut", unit: "none", fixed: [30, 40] },
      { key: "cutbeard", label: "Haircut + beard", unit: "none", fixed: [45, 55] },
      { key: "kids", label: "Kids cut (12 and under)", unit: "none", fixed: [20, 30] },
      { key: "shave", label: "Hot towel shave", unit: "none", fixed: [35, 45] },
    ],
    toggles: [
      { key: "design", label: "Add a design", fixed: [5, 15], only: ["cut", "cutbeard", "kids"] },
      { key: "towel", label: "Add hot towel + facial", fixed: [10, 20] },
    ],
    cta: "Book my chair",
    after: "Prices set by each barber.",
  },
  demo: {
    name: "Chair Line",
    business: "Sharp Lines Barbershop",
    greeting:
      "What's up, this is Ava with Sharp Lines Barbershop! Sorry we missed your call, the barbers are mid-cut. I can get you booked right here by text. What are you looking to get done?",
    chips: ["Need a fade this week", "Cut and beard price?", "Do you take walk-ins?"],
    busy: "Your barbers are mid-cut",
    steps: [
      { t: "The call comes in", d: "A new client wants a fade before the weekend. Every barber is mid-cut, so nobody can grab it." },
      { t: "It texts back in seconds", d: "He gets a quick text with open times before he walks into another shop." },
      { t: "The chair gets booked", d: "Ava asks what he wants and when, picks a barber, and books the chair." },
    ],
    goal: "an appointment",
    facts: `Business: Sharp Lines Barbershop (a demo shop on the Truly Automation website)
Location: Gastonia, serving Belmont, Cramerton, Dallas and Lowell
Hours: Tue-Fri 9am-7pm, Sat 8am-4pm. Walk-ins welcome when chairs are open, appointments get priority.
Barbers: Marcus (fades and designs), Jay (classic cuts and beards), Tre (kids and tapers).
Prices: haircut $30-$40; haircut and beard $45-$55; kids cut $20-$30; hot towel shave $35-$45; design $5-$15; hot towel and facial add $10-$20.
Open times: Thursday 4:00 PM (Marcus), 5:30 PM (Jay); Friday 10:00 AM (Tre), 5:30 PM (Marcus); Saturday 9:00 AM (Jay).
Policy: please give 2 hours notice to cancel. Two no-shows means a card is required to book.
Rules: keep it casual and quick. Ask what cut they want and if they have a barber preference. Never promise a time that isn't on the open list.`,
  },
  faqs: [
    { q: "Does it work with Booksy or Square?", a: "Yes. We connect to the booking app you already use so appointments land on the right barber's calendar." },
    { q: "How does No-Show Protection work?", a: "Clients get a confirmation and reminder before every appointment, and repeat no-shows can be required to hold a card. Most shops see no-shows drop fast." },
    { q: "Do you make the content?", a: "In Full Fade, yes. We post fresh cuts and shop clips every week using photos and videos from your barbers." },
    { q: "How soon will I see more bookings?", a: "The Chair Line and reminders start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default barbershops;
