import type { Industry } from "./types";

const salons: Industry = {
  slug: "salons",
  name: "Hair Salons",
  who: "hair salons",
  one: "salon",
  category: "Beauty & personal care",
  icon: "💇",
  tagline: "Service pricing, booking by text and rebooking reminders.",
  meta: {
    title: "Marketing for Hair Salons | Truly Automation",
    description:
      "Marketing built for hair salons: a service price checker, booking by text, rebooking reminders, last-minute opening fill, stylist portfolio pages, Instagram content and new client offers. One salon per area.",
  },
  hero: {
    line1: "Every chair booked.",
    line2: "Every week.",
    sub: "The marketing team built for hair salons. New clients price their color and book by text, regulars get reminded when it's time, and last-minute openings fill themselves.",
    cards: {
      lead: {
        label: "Salon Line",
        title: "New client, balayage",
        fields: [["Hair", "Long, dark brown"], ["Stylist", "Any, first available"], ["Town", "South End"], ["Booked", "Saturday 9:00 AM"]],
      },
      side: {
        label: "Opening Filler",
        title: "Cancellation at 2pm",
        rows: [["Waitlist texted", "18"], ["Replies", "6"], ["Filled in", "11 minutes"]],
      },
      small: { label: "Rebooking Reminder", title: "6 weeks since color", text: "Root touch-up booked" },
    },
  },
  problems: [
    { title: "You can't answer with foils in", text: "Clients call while you're mid-color, and new clients book whoever answers first." },
    { title: "No-shows and late cancels", text: "One empty two-hour color slot costs a stylist a full day's profit." },
    { title: "Regulars drift", text: "Clients stretch eight weeks into twelve, or try someone new, because nobody reminded them." },
    { title: "Price questions", text: "“How much for balayage?” is the most common DM, and “it depends” loses them." },
  ],
  systems: [
    { icon: "📲", title: "Salon Line", text: "Missed calls and DMs get a text back in seconds with pricing and open times, and clients book right in the thread.", tier: 1 },
    { icon: "🧮", title: "Service Price Checker", text: "Clients pick their service and hair length and see a real price range, which answers the most common question.", tier: 1 },
    { icon: "⏰", title: "Rebooking Reminders", text: "Clients get a text when it's time for their next cut or color, with a link to book their stylist.", tier: 1 },
    { icon: "📅", title: "Opening Filler", text: "Cancellations go out to your waitlist by text, and the first reply gets the spot.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “hair salon near me,” balayage, extensions and every service.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one salon per area. The salon down the street can't hire us.", tier: 1 },
    { icon: "💇‍♀️", title: "Stylist Portfolio Pages", text: "Each stylist gets their own page with their best work and a book-me button.", tier: 2 },
    { icon: "🎥", title: "Instagram & TikTok Content", text: "Transformations, reels and stylist intros posted for you every week.", tier: 2 },
    { icon: "✨", title: "New Client Offers", text: "Ads and offers that bring in new clients who fit your best services.", tier: 2 },
    { icon: "💍", title: "Bridal & Event Booking", text: "Wedding and event hair pages and inquiries, booked months ahead.", tier: 2 },
    { icon: "🎁", title: "Gift Card & Holiday Promos", text: "Gift card pushes for the holidays, Mother's Day and Valentine's Day.", tier: 2 },
    { icon: "👯", title: "Refer-a-Friend", text: "Clients get a reward for every friend who books.", tier: 2 },
  ],
  packages: [
    { name: "Trim", tagline: "Everything a salon needs to answer every client, fill cancellations and bring regulars back on time." },
    { name: "Full Color", tagline: "Trim plus stylist portfolios, weekly social content, new client ads, bridal booking and promos." },
  ],
  estimator: {
    name: "Service Price Checker",
    question: "What will my hair cost?",
    blurb: "Clients see a real price range for their service and hair length, then book right away.",
    bullets: ["Uses your real price list", "Hair length changes the price", "Books straight to your calendar"],
    projectLabel: "Service",
    projects: [
      { key: "cut", label: "Women's haircut + style", unit: "none", fixed: [55, 85] },
      { key: "color", label: "All-over color", unit: "none", fixed: [90, 150] },
      { key: "highlights", label: "Highlights or balayage", unit: "none", fixed: [180, 300] },
      { key: "ext", label: "Extensions (install)", unit: "none", fixed: [600, 1500], note: "Hair cost depends on the method." },
    ],
    choiceLabel: "Hair length",
    choices: [
      { key: "short", label: "Short", fixed: [0, 0], only: ["color", "highlights"] },
      { key: "medium", label: "Medium", fixed: [15, 30], only: ["color", "highlights"] },
      { key: "long", label: "Long or thick", fixed: [35, 60], only: ["color", "highlights"] },
    ],
    toggles: [
      { key: "gloss", label: "Add a gloss or toner", fixed: [30, 50], only: ["color", "highlights"] },
      { key: "treat", label: "Add a deep conditioning treatment", fixed: [25, 40] },
    ],
    cta: "Book my appointment",
    after: "Your stylist confirms at your consultation.",
  },
  demo: {
    name: "Salon Line",
    business: "Bloom Hair Studio",
    greeting:
      "Hi, this is Ava with Bloom Hair Studio! Sorry we missed your call, our stylists are with clients. I can help right here by text. What are you looking to book?",
    chips: ["How much for balayage?", "Need a haircut this week", "Do you do extensions?"],
    busy: "Your stylist has foils in",
    steps: [
      { t: "The call comes in", d: "A new client wants balayage before a wedding. Your stylist has foils in, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get a price range and open times before they DM three other salons." },
      { t: "The appointment gets booked", d: "Ava asks about their hair and the look they want, asks for an inspo photo, and books the appointment." },
    ],
    goal: "an appointment",
    facts: `Business: Bloom Hair Studio (a demo salon on the Truly Automation website)
Location: South End, Charlotte, serving Dilworth, Myers Park, Plaza Midwood and nearby
Hours: Tue-Fri 10am-8pm, Sat 8am-4pm. Closed Sun-Mon.
Services: women's and men's cuts, all-over color, highlights, balayage, blonding, extensions, keratin treatments, bridal and event styling.
Typical prices (stylist confirms at the appointment): women's cut and style $55-$85; men's cut $35-$45; all-over color $90-$150; highlights or balayage $180-$300; longer or thicker hair adds $15-$60; gloss or toner $30-$50; extensions install $600-$1,500 plus hair. New clients get 15% off their first color.
Open times: Thursday 11:00 AM, 4:30 PM; Friday 2:00 PM; Saturday 9:00 AM.
Policy: color services over $150 hold the spot with a $25 deposit. 24-hour cancellation policy.
Rules: ask the service, hair length and history (box dye, recent color), and invite them to send an inspiration photo. Never promise an exact result or a firm price.`,
  },
  faqs: [
    { q: "Does it work with my booking app?", a: "Yes. We connect to the booking system you already use, or set up a simple one, so appointments land on the right stylist's calendar." },
    { q: "How does the Opening Filler work?", a: "When someone cancels, clients on your waitlist get a text with the open time. The first one to reply gets it, often within minutes." },
    { q: "Do you make the Instagram content?", a: "In Full Color, yes. We post transformations, reels and stylist intros every week using photos and clips from your salon." },
    { q: "How soon will I see more bookings?", a: "The Salon Line, Rebooking Reminders and Opening Filler start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default salons;
