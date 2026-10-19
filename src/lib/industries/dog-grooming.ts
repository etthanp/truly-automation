import type { Industry } from "./types";

const dogGrooming: Industry = {
  slug: "dog-grooming",
  name: "Dog Grooming",
  who: "dog groomers",
  one: "grooming shop",
  category: "Pets",
  icon: "🐩",
  tagline: "Groom pricing by size, rebooking reminders and fewer no-shows.",
  meta: {
    title: "Marketing for Dog Groomers | Truly Automation",
    description:
      "Marketing built for dog groomers and mobile grooming vans: a groom price checker by breed size, booking by text, rebooking reminders, no-show protection, puppy first groom programs and cute before-and-after content. One grooming shop per area.",
  },
  hero: {
    line1: "Fresh cuts.",
    line2: "Full books.",
    sub: "The marketing team built for dog groomers. Pet parents price their groom and book by text, every dog gets a reminder when it's time, and cancellations fill fast.",
    cards: {
      lead: {
        label: "Groom Line",
        title: "Full groom, doodle",
        fields: [["Dog", "Goldendoodle, 55 lbs"], ["Coat", "Some matting"], ["Town", "Mooresville"], ["Booked", "Friday 9:00 AM"]],
      },
      side: {
        label: "Rebooking Reminders",
        title: "This month",
        rows: [["Dogs due", "280"], ["Rebooked", "201"], ["No-shows", "Down 35%"]],
      },
      small: { label: "Instagram", title: "Reel posted", text: "Matted doodle before and after" },
    },
  },
  problems: [
    { title: "You can't answer with a dog on the table", text: "You can't stop mid-groom to answer, and pet parents book whoever calls back first." },
    { title: "“How much for my dog?”", text: "Prices depend on size and coat, so every call turns into a long back-and-forth." },
    { title: "No-shows and late cancels", text: "An empty two-hour doodle slot hurts the whole day." },
    { title: "Dogs go too long between grooms", text: "Owners wait until the dog is matted, which makes the groom harder and longer." },
  ],
  systems: [
    { icon: "📲", title: "Groom Line", text: "Missed calls and DMs get a text back in seconds with pricing for their dog and open times.", tier: 1 },
    { icon: "🧮", title: "Groom Price Checker", text: "Owners pick the service and their dog's size and see the price before they call.", tier: 1 },
    { icon: "⏰", title: "Rebooking Reminders", text: "Every dog gets a reminder at the right interval for their coat, so they never get matted.", tier: 1 },
    { icon: "🛡️", title: "No-Show Protection", text: "Confirmations, reminders and deposits for long grooms that cut no-shows.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “dog groomer near me” and mobile grooming.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one grooming shop per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🐶", title: "Puppy First Groom Program", text: "A gentle intro groom promoted to new puppy owners, so they start with you.", tier: 2 },
    { icon: "🎥", title: "Instagram & TikTok Content", text: "Cute before-and-after photos and clips posted every week. Groomed dogs are made for social media.", tier: 2 },
    { icon: "📅", title: "Opening Filler", text: "Cancellations go out to your waitlist, and the first reply gets the spot.", tier: 2 },
    { icon: "🐾", title: "Vet & Trainer Partners", text: "Referral partnerships with local vets, trainers and boarding kennels.", tier: 2 },
    { icon: "🎄", title: "Holiday Groom Pushes", text: "Pre-booking campaigns before Thanksgiving and Christmas, your busiest weeks.", tier: 2 },
    { icon: "👯", title: "Refer-a-Friend", text: "Clients get a free add-on for every friend who books.", tier: 2 },
  ],
  packages: [
    { name: "Bath & Brush", tagline: "Everything a groomer needs to answer every call, price by size and keep every dog on schedule." },
    { name: "Full Groom", tagline: "Bath & Brush plus a puppy program, weekly content, opening filling, vet partners and holiday pushes." },
  ],
  estimator: {
    name: "Groom Price Checker",
    question: "What will my dog's groom cost?",
    blurb: "Pet parents pick the service and size and see the price, then book in one tap.",
    bullets: ["Uses your real price list", "Size and coat change the price", "Books straight to your calendar"],
    projectLabel: "Service",
    projects: [
      { key: "bath", label: "Bath + brush", unit: "none", fixed: [40, 55] },
      { key: "full", label: "Full groom (bath + haircut)", unit: "none", fixed: [65, 85] },
      { key: "puppy", label: "Puppy first groom", unit: "none", fixed: [40, 50], note: "Gentle intro for puppies under 6 months." },
    ],
    choiceLabel: "Dog size",
    choices: [
      { key: "small", label: "Small (under 20 lbs)", fixed: [0, 0], only: ["bath", "full"] },
      { key: "medium", label: "Medium (20-50 lbs)", fixed: [15, 25], only: ["bath", "full"] },
      { key: "large", label: "Large (50+ lbs)", fixed: [30, 50], only: ["bath", "full"] },
      { key: "doodle", label: "Doodle or double coat", fixed: [45, 70], only: ["bath", "full"] },
    ],
    toggles: [
      { key: "nails", label: "Nail grind", fixed: [10, 15] },
      { key: "teeth", label: "Teeth brushing", fixed: [10, 15] },
      { key: "dematt", label: "Dematting", fixed: [20, 40], only: ["bath", "full"] },
    ],
    cta: "Book my groom",
    after: "Matted coats may cost more.",
  },
  demo: {
    name: "Groom Line",
    business: "Happy Tails Grooming",
    greeting:
      "Hi, this is Ava with Happy Tails Grooming! Sorry we missed your call, we've got a pup on the table. I can help right here by text. Tell me about your dog!",
    chips: ["Price for a doodle groom?", "My puppy's first groom", "Any openings this week?"],
    busy: "You've got a dog on the table",
    steps: [
      { t: "The call comes in", d: "A doodle owner wants a groom before the holidays. You've got a dog on the table, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get pricing for their dog's size before they call another groomer." },
      { t: "The groom gets booked", d: "Ava asks the breed, size and coat condition, gives the price, and books the appointment." },
    ],
    goal: "a grooming appointment",
    facts: `Business: Happy Tails Grooming (a demo shop on the Truly Automation website)
Location: Mooresville, serving Cornelius, Davidson, Troutman and Lake Norman
Hours: Tue-Sat 8am-5pm. Dogs only. Cage-free, one-on-one grooming.
Services: bath and brush, full grooms and breed cuts, puppy first grooms, nail grinding, teeth brushing, dematting, de-shedding.
Prices: bath and brush $40-$55; full groom $65-$85; medium dogs add $15-$25, large $30-$50, doodles and double coats $45-$70; puppy first groom $40-$50; nails or teeth $10-$15 each; dematting $20-$40. Most dogs do best every 4-8 weeks.
Open times: Wednesday 1:00 PM; Thursday 9:00 AM; Friday 9:00 AM, 11:30 AM; Saturday 8:00 AM. Holiday spots are filling fast.
Policy: dogs need current rabies vaccines. $20 deposit for doodles and large breeds. 24-hour cancellation policy.
Rules: ask breed, weight, coat condition (any matting), and temperament. Severely matted dogs may need a shave-down for their comfort. Never give a firm price.`,
  },
  faqs: [
    { q: "Does it work for mobile groomers?", a: "Yes. The Groom Line and booking work the same, and we can group appointments by neighborhood to cut drive time." },
    { q: "How do Rebooking Reminders work?", a: "Each dog gets a reminder at the right interval for their coat, usually every 4 to 8 weeks. Dogs stay unmatted and your book stays full." },
    { q: "Do you make the social content?", a: "In Full Groom, yes. We post before-and-after photos and clips every week from the pictures you take." },
    { q: "How soon will I see more bookings?", a: "The Groom Line and reminders start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default dogGrooming;
