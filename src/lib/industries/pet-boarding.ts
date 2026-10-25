import type { Industry } from "./types";

const petBoarding: Industry = {
  slug: "pet-boarding",
  name: "Pet Boarding & Daycare",
  who: "pet boarding and daycare facilities",
  one: "pet boarding facility",
  category: "Pets",
  icon: "🐕",
  tagline: "Holiday bookings, daycare packages and vaccine reminders.",
  meta: {
    title: "Marketing for Pet Boarding & Doggy Daycare | Truly Automation",
    description:
      "Marketing built for pet boarding kennels and doggy daycares: booking by text, holiday waitlists, daycare packages, vaccine record collection, report card photos and review campaigns. One pet boarding facility per area.",
  },
  hero: {
    line1: "Holidays booked,",
    line2: "daycare full.",
    sub: "The marketing team built for pet boarding and daycare. Owners book stays by text, send vaccine records ahead of time, and fill your daycare every weekday.",
    cards: {
      lead: {
        label: "Stay Line",
        title: "Thanksgiving boarding",
        fields: [["Pets", "2 dogs"], ["Nights", "5"], ["Vaccines", "Records sent"], ["Booked", "Nov 26-Dec 1"]],
      },
      side: {
        label: "Daycare",
        title: "This week",
        rows: [["Packages sold", "23"], ["Daily dogs", "41"], ["New pups", "7"]],
      },
      small: { label: "Report Card", title: "Photo sent to owner", text: "Bella had a great day!" },
    },
  },
  problems: [
    { title: "Holiday chaos", text: "Everyone calls at once for Thanksgiving and Christmas, and you can't keep up." },
    { title: "Slow weekdays", text: "Your daycare is half empty on Mondays and Fridays." },
    { title: "Vaccine paperwork", text: "Chasing records at drop-off slows down the whole morning." },
    { title: "Nervous owners", text: "First-time boarders worry about leaving their dog, and pick the place that feels safest." },
  ],
  systems: [
    { icon: "📞", title: "Stay Line", text: "Missed calls get a text back in seconds, check dates and book the stay.", tier: 1 },
    { icon: "🧮", title: "Stay Price Check", text: "Owners pick boarding or daycare and see your price before they book.", tier: 1 },
    { icon: "💉", title: "Vaccine Record Collection", text: "Records requested and collected by text before drop-off, with expiration reminders.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every stay, so you top Google for “dog boarding near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for boarding, daycare and cat boarding.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one pet boarding facility per area. Your competitors can't hire us.", tier: 1 },
    { icon: "📸", title: "Report Card Photos", text: "Photos and a quick note sent to owners during every stay and daycare day.", tier: 2 },
    { icon: "🎄", title: "Holiday Waitlist", text: "Holiday dates sold out? Owners join a waitlist and get the first opening.", tier: 2 },
    { icon: "📦", title: "Daycare Packages", text: "Daycare packs and memberships promoted to fill slow weekdays.", tier: 2 },
    { icon: "🛁", title: "Bath & Groom Add-Ons", text: "Baths and nail trims offered before pickup.", tier: 2 },
    { icon: "🏢", title: "Vet & Apartment Partners", text: "Local vets and pet-friendly apartments who recommend you.", tier: 2 },
    { icon: "🐾", title: "Trial Day Offers", text: "A free or discounted first day for new daycare pups.", tier: 2 },
  ],
  packages: [
    { name: "Good Boy", tagline: "Everything a boarding facility needs to book stays fast, collect vaccine records and get great reviews." },
    { name: "Best in Show", tagline: "Good Boy plus report card photos, holiday waitlists, daycare packages, add-ons and partners." },
  ],
  estimator: {
    name: "Stay Price Check",
    question: "What will boarding or daycare cost?",
    blurb: "Owners pick boarding or daycare and see your price in seconds, then book their dates.",
    bullets: ["Uses your real rates", "Vaccine records collected ahead", "Books dates instantly"],
    projectLabel: "Service",
    projects: [
      { key: "boarding", label: "Dog boarding", unit: "count", unitLabel: "Nights", perWord: "night", per: [45, 65], start: 3 },
      { key: "cat", label: "Cat boarding", unit: "count", unitLabel: "Nights", perWord: "night", per: [25, 40], start: 3 },
      { key: "daycare", label: "Doggy daycare", unit: "count", unitLabel: "Days", perWord: "day", per: [30, 40], start: 5 },
    ],
    toggles: [
      { key: "second", label: "Second pet (same family)", per: [20, 35], only: ["boarding", "cat"] },
      { key: "bath", label: "Bath before pickup", fixed: [25, 45], only: ["boarding", "daycare"] },
    ],
    resultLabel: "Estimated total",
    cta: "Book my dates",
    after: "Holidays may have a small surcharge.",
  },
  demo: {
    name: "Stay Line",
    business: "Happy Tails Pet Resort",
    greeting:
      "Hi, this is Bella with Happy Tails Pet Resort! Sorry we missed your call, we're out with the pups. I can help right here by text. Are you looking for boarding or daycare?",
    chips: ["Boarding over Thanksgiving", "Daycare for my puppy", "Do you board cats?"],
    busy: "Your staff is out in the play yard",
    steps: [
      { t: "The call comes in", d: "An owner needs boarding over Thanksgiving for two dogs. Your staff is in the play yard, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply checking their dates and asking about their dogs." },
      { t: "The stay gets booked", d: "Bella shares the price, books the dates and asks for vaccine records." },
    ],
    goal: "a boarding stay or daycare day",
    facts: `Business: Happy Tails Pet Resort (a demo facility on the Truly Automation website)
Location: Fuquay-Varina, serving Holly Springs, Apex, Garner and south Raleigh
Hours: drop-off and pickup Mon-Fri 7am-7pm, Sat-Sun 8am-11am and 4pm-6pm. Staff on site overnight. Indoor and outdoor play yards.
Services: dog boarding, cat boarding, doggy daycare, baths and nail trims, puppy daycare (16 weeks+).
Prices: dog boarding $45-$65 per night (second dog same family $20-$35); cat boarding $25-$40 per night; daycare $30-$40 per day (10-day packs save 15%); bath before pickup $25-$45. Holidays add $5 per night. New daycare dogs need a free temperament trial day.
Vaccines required: rabies, DHPP and Bordetella for dogs; rabies and FVRCP for cats. Records must be sent before the first stay.
Open dates: Thanksgiving week has 4 dog suites left; Christmas has a waitlist; daycare open most weekdays.
Rules: ask the pet type, how many, dates, size and breed, and whether they've boarded before. Ask for vaccine records. If a dog has a history of biting or fighting, say staff will do a temperament check first. If a pet seems sick, suggest a vet visit before boarding. Don't give medical advice.`,
  },
  faqs: [
    { q: "Can it handle the holiday rush?", a: "Yes. The Stay Line books dates by text around the clock, and a holiday waitlist catches overflow when you're full." },
    { q: "How do vaccine records get collected?", a: "Owners get a text asking for records before drop-off, and reminders when shots are about to expire." },
    { q: "How do I fill slow weekdays?", a: "Daycare packages, trial day offers and partner referrals bring in new regulars." },
    { q: "How soon will I see more bookings?", a: "The Stay Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default petBoarding;
