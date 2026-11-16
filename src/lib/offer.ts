/** The one package we sell: Truly Front Desk. */
export const PRICE = {
  setup: "$2,000",
  monthly: "$1,000",
  setupLine: "$2,000 to build and set up",
  monthlyLine: "$1,000 a month, starting your second month",
};

/** What every Truly Front Desk includes, for the pricing section, structured data and llms.txt. */
export const FEATURES = [
  { title: "Your own AI receptionist", text: "Answers every call 24/7 in your business's name, from information you approve." },
  { title: "Booking on your calendar", text: "Books, moves and cancels appointments in your real open times." },
  { title: "Handoff to you", text: "Transfers the calls you want to take and saves a callback for anything that needs a person." },
  { title: "Every call saved", text: "Each call is logged with the caller's details, a summary and the full transcript." },
  { title: "The Truly Front Desk dashboard", text: "Calls, customers, calendar and follow-ups in one place on your computer." },
  { title: "The Truly Front Desk iPhone app", text: "The same front desk on your phone, with alerts when it books a job or needs you." },
  { title: "Built and run by us", text: "We build it around your business, test it with you before it takes a real call, and keep it running." },
];

/** Common questions, answered on the homepage. */
export const FAQS = [
  {
    q: "What does it cost?",
    a: `${PRICE.setup} to build and set up your front desk, then ${PRICE.monthly} a month starting your second month. That's one price for everything on this page, less than a part-time receptionist.`,
  },
  {
    q: "Do I keep my phone number?",
    a: "Yes. Your customers keep calling the same number. We forward calls to your front desk, either all of them or only the ones you can't answer.",
  },
  {
    q: "Does it sound like a robot?",
    a: "No. It talks like a friendly, calm person who works for you. Call our line and hear it yourself. If a caller asks whether it's an AI, it tells them the truth.",
  },
  {
    q: "Will it make things up?",
    a: "It only answers from what you approve: your services, prices, hours and policies. If it doesn't know something, it says so and saves a callback for you instead of guessing.",
  },
  {
    q: "Who builds it?",
    a: "We do. Truly Front Desk is built and run by Truly Automation in North Carolina. You work with Ethan directly, not a support ticket.",
  },
];
