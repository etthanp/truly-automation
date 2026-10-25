import type { Industry } from "./types";

const dogTrainers: Industry = {
  slug: "dog-trainers",
  name: "Dog Trainers",
  who: "dog trainers",
  one: "dog trainer",
  category: "Pets",
  icon: "🦮",
  tagline: "Training evaluations, puppy classes and board-and-train leads.",
  meta: {
    title: "Marketing for Dog Trainers | Truly Automation",
    description:
      "Marketing built for dog trainers: free evaluation booking, a training program price check, puppy class and board-and-train promotions, vet and groomer referrals, and review campaigns. One dog trainer per area.",
  },
  hero: {
    line1: "Better dogs,",
    line2: "booked programs.",
    sub: "The marketing team built for dog trainers. Frustrated owners describe the problem by text, see your programs, and book an evaluation before they give up on their dog.",
    cards: {
      lead: {
        label: "Training Line",
        title: "Leash pulling + jumping",
        fields: [["Dog", "Lab mix, 10 months"], ["Goal", "Calm walks"], ["Town", "Mooresville"], ["Booked", "Evaluation, Sat"]],
      },
      side: {
        label: "Vet Referrals",
        title: "This month",
        rows: [["Vets referring", "5"], ["Groomers", "3"], ["New puppies", "17"]],
      },
      small: { label: "Puppy Class", title: "6-week class", text: "4 spots left, filling by text" },
    },
  },
  problems: [
    { title: "Owners wait too long", text: "Most people call when they're at their wits' end, and they want help today." },
    { title: "Price shock", text: "Programs cost real money, and owners compare you to a $99 big box class." },
    { title: "Hard to show results", text: "Training happens in a backyard, and nobody sees the before and after." },
    { title: "Inconsistent leads", text: "Some months are packed, others are dead, with no steady referral source." },
  ],
  systems: [
    { icon: "📞", title: "Training Line", text: "Missed calls get a text back in seconds, ask about the dog's behavior and book an evaluation.", tier: 1 },
    { icon: "🧮", title: "Training Program Price Check", text: "Owners pick a program and see your price, so the ones who book are ready to commit.", tier: 1 },
    { icon: "🎥", title: "Before & After Videos", text: "Short clips of real dogs before and after training, the thing that sells the program.", tier: 1 },
    { icon: "⭐", title: "Review Engine", text: "Review requests after every program, so you top Google for “dog trainer near me.”", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for puppy training, reactivity and obedience.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one dog trainer per area. Your competitors can't hire us.", tier: 1 },
    { icon: "🩺", title: "Vet & Groomer Referrals", text: "Local vets and groomers who send you puppies and dogs with behavior problems.", tier: 2 },
    { icon: "🐶", title: "Puppy Class Promotions", text: "Group puppy classes filled every cycle by new puppy owners in your area.", tier: 2 },
    { icon: "🏠", title: "Board & Train Pages", text: "Pages that sell your highest-ticket program to busy owners.", tier: 2 },
    { icon: "🐕‍🦺", title: "Rescue Partners", text: "Shelters and rescues who send new adopters your way.", tier: 2 },
    { icon: "🔁", title: "Refresher Reminders", text: "Past clients get offered tune-up sessions and advanced classes.", tier: 2 },
    { icon: "🏡", title: "Breeder Partners", text: "Breeders who recommend you to every new puppy family.", tier: 2 },
  ],
  packages: [
    { name: "Sit", tagline: "Everything a dog trainer needs to book evaluations, show real results and get great reviews." },
    { name: "Stay", tagline: "Sit plus vet, groomer, rescue and breeder referrals, puppy classes, board and train pages and refreshers." },
  ],
  estimator: {
    name: "Training Program Price Check",
    question: "What will training my dog cost?",
    blurb: "Owners pick a program and see your price in seconds, so they book an evaluation ready to commit.",
    bullets: ["Uses your real prices", "Behavior details with every lead", "Books evaluations to your calendar"],
    projectLabel: "Program",
    projects: [
      { key: "puppy", label: "Puppy class (6 weeks)", unit: "none", fixed: [200, 350] },
      { key: "private", label: "Private lessons", unit: "count", unitLabel: "Lessons", perWord: "lesson", per: [90, 150], start: 4 },
      { key: "board", label: "Board & train", unit: "count", unitLabel: "Weeks", perWord: "week", per: [900, 1500], start: 2 },
    ],
    toggles: [
      { key: "reactive", label: "Reactivity or aggression", fixed: [100, 300], only: ["private", "board"] },
      { key: "home", label: "Sessions at my home", per: [20, 40], only: ["private"] },
    ],
    resultLabel: "Program price",
    cta: "Book my evaluation",
    after: "Free evaluation first. Final plan set by your trainer.",
  },
  demo: {
    name: "Training Line",
    business: "Lakeside K9 Training",
    greeting:
      "Hi, this is Riley with Lakeside K9 Training! Sorry we missed your call, we're in a training session. I can help right here by text. Tell me a little about your dog!",
    chips: ["New puppy", "My dog pulls on the leash", "Reactive to other dogs"],
    busy: "You're in a training session",
    steps: [
      { t: "The call comes in", d: "An owner's 10-month-old lab drags them down the street every walk. You're mid-session, so nobody picks up." },
      { t: "It texts back in seconds", d: "They get a friendly reply asking about their dog and the problem." },
      { t: "The evaluation gets booked", d: "Riley shares the right program and books a free evaluation." },
    ],
    goal: "a free evaluation",
    facts: `Business: Lakeside K9 Training (a demo company on the Truly Automation website)
Service area: Mooresville, Cornelius, Davidson, Huntersville, Statesville and Denver NC
Hours: Mon-Sat 8am-6pm. Certified trainers, positive reinforcement based. Training at our facility or the owner's home.
Programs: puppy classes, obedience, leash pulling, jumping, recall, reactivity, board and train, refreshers.
Prices: free 30-minute evaluation; puppy class 6 weeks $200-$350; private lessons $90-$150 each (at home add $20-$40); board and train $900-$1,500 per week (2-4 weeks typical); reactivity or aggression cases add $100-$300. Dogs must be vaccinated.
Open times: Tomorrow 10:00 AM; Thursday 5:00 PM; Saturday 9:00 AM, 11:00 AM. Next puppy class starts in 2 weeks, 4 spots left.
Rules: ask the dog's breed, age, the behavior and what they want to fix. If a dog has bitten a person or is a safety risk, say a trainer will do a private evaluation first and never suggest group class. Don't give medical advice; if a behavior change is sudden, suggest a vet check. Never promise a specific result.`,
  },
  faqs: [
    { q: "How do I compete with cheap big box classes?", a: "Before and after videos, a clear program price check and steady reviews show owners why your training works." },
    { q: "Where do steady clients come from?", a: "Vets, groomers, rescues and breeders. In Stay we set up those referral partners for you." },
    { q: "What about dogs with aggression?", a: "The AI flags safety cases and books a private evaluation with a trainer first, never a group class." },
    { q: "How soon will I see more clients?", a: "The Training Line and review requests start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default dogTrainers;
