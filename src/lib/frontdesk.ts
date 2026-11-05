import type { Industry } from "./industries/types";

/** Sample data for the example front desk dashboard (mirrors the real Truly Front Desk app). Never real customers. */
export interface DashData {
  business: string;
  metrics: [label: string, value: string, sub: string][];
  activity: { name: string; title: string; kind: "call" | "text"; badge: "Booked" | "Answered" | "Follow-up" | "Text"; time: string }[];
  tasks: { name: string; title: string; detail: string; priority: "Urgent" | "Normal"; due: string }[];
  appts: { day: string; time: string; name: string; what: string; status: "Booked" | "Requested" }[];
  customers: { name: string; phone: string; stage: string; note: string }[];
  convo: { name: string; phone: string; summary: string; lines: { ai: boolean; text: string }[] };
}

/** Job stages, the same ones the real dashboard uses. */
export const STAGES = ["New lead", "Qualified", "Appointment requested", "Appointment booked", "Quote sent", "Won", "Completed", "Lost"];

const strip = (s: string) => s.replace(/\s*\(.*\)/, "").replace(/\?$/, "");
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
// A customer's words as a quoted sentence, e.g. "I need a new driveway."
const said = (s: string) => `"${s}${/[?.!]$/.test(s) ? "" : "."}"`;

/** Builds the example dashboard for an industry from its demo receptionist. */
export function dashFor(ind: Industry): DashData {
  const [c1, c2, c3] = ind.demo.chips;
  const goal = strip(ind.demo.goal);
  const lead = ind.hero.cards.lead;
  return {
    business: ind.demo.business,
    metrics: [
      ["Calls received", "38", "Saved call records"],
      ["Text messages", "14", "Incoming and outgoing"],
      ["Appointments", "12", "Booked this week"],
      ["Needs attention", "2", "Waiting on you"],
    ],
    activity: [
      { name: "Sarah Mitchell", title: cap(strip(c1)), kind: "call", badge: "Booked", time: "9:42 PM" },
      { name: "Mike Torres", title: cap(strip(c2)), kind: "call", badge: "Answered", time: "8:15 AM" },
      { name: "Dana Reed", title: cap(strip(c3)), kind: "call", badge: "Follow-up", time: "10:03 AM" },
      { name: "Jen Kowalski", title: "Incoming text message", kind: "text", badge: "Text", time: "11:26 AM" },
      { name: "Chris Patel", title: lead.title, kind: "call", badge: "Booked", time: "12:10 PM" },
    ],
    tasks: [
      { name: "Dana Reed", title: "Callback requested", detail: `Wants to talk to the owner. Asked: ${said(c3)}`, priority: "Urgent", due: "Today, 2:00 PM" },
      { name: "Jen Kowalski", title: "Reschedule request", detail: "Asked to move Thursday's appointment. Two open times are ready to offer.", priority: "Normal", due: "Today" },
    ],
    appts: [
      { day: "Today", time: "2:30 PM", name: "Chris Patel", what: lead.title, status: "Booked" },
      { day: "Tomorrow", time: "9:00 AM", name: "Sarah Mitchell", what: cap(goal), status: "Booked" },
      { day: "Thursday", time: "11:00 AM", name: "Jen Kowalski", what: cap(strip(c1)), status: "Requested" },
    ],
    customers: [
      { name: "Sarah Mitchell", phone: "(704) 555-0142", stage: "Appointment booked", note: cap(strip(c1)) },
      { name: "Mike Torres", phone: "(704) 555-0187", stage: "Qualified", note: cap(strip(c2)) },
      { name: "Dana Reed", phone: "(980) 555-0116", stage: "New lead", note: "Callback requested" },
      { name: "Chris Patel", phone: "(704) 555-0164", stage: "Appointment booked", note: lead.title },
      { name: "Alex Wright", phone: "(704) 555-0129", stage: "Won", note: "Repeat customer" },
    ],
    convo: {
      name: "Sarah Mitchell",
      phone: "(704) 555-0142",
      summary: `Called after hours: ${said(c1)} Booked ${goal} for tomorrow at 9:00 AM.`,
      lines: [
        { ai: true, text: `Thanks for calling ${ind.demo.business}, this is Ava. How can I help?` },
        { ai: false, text: c1 },
        { ai: true, text: "I can help with that. Can I get your name and the best number to reach you?" },
        { ai: false, text: "Sarah Mitchell, 704-555-0142." },
        { ai: true, text: `Thanks, Sarah. I have tomorrow at 9:00 AM or 2:30 PM for ${goal}. Which works better?` },
        { ai: false, text: "9 works." },
        { ai: true, text: "You're all set for tomorrow at 9:00 AM. Is there anything else I can help with?" },
      ],
    },
  };
}

/** Questions every front desk page answers. */
export const FRONT_DESK_FAQS = [
  {
    q: "Who built this?",
    a: "Truly Automation built it, and we run it for you. We set up your AI front desk around your business, test it with you before it takes a single real call, and keep watching it after it goes live.",
  },
  {
    q: "Does it sound like a robot?",
    a: "No. It talks like a friendly, calm person at your front desk. If a caller asks whether it's an AI, it tells them the truth.",
  },
  {
    q: "Will it make things up?",
    a: "It only answers from what you approve: your services, prices, hours, policies and open times. If it doesn't know something, it says so and creates a callback for you instead of guessing.",
  },
  {
    q: "What if a caller wants a real person?",
    a: "You decide. It can transfer the call to you or your team, or take a message and put a callback in your dashboard with the full notes.",
  },
  {
    q: "Do I keep my phone number?",
    a: "Yes. Your customers keep calling the same number. We forward calls to your AI front desk, either all of them or only the ones you can't answer.",
  },
  {
    q: "Does it really replace a front desk hire?",
    a: "It covers the phone work: answering, booking, taking notes and following up. It doesn't greet people in person or handle cash, so if you need someone at a physical desk you'll still want a person there. If you were about to hire someone mostly to answer phones and book appointments, this is built to do that job.",
  },
  {
    q: "What does it cost?",
    a: "Far less than a full-time receptionist. Pricing depends on your call volume and what you want it to do, so we go over it on a short call after your free front desk checkup.",
  },
];

/** What a front desk hire costs, for the comparison band. */
export const SALARY = "$40,000";

/** What every AI front desk includes, for structured data and llms.txt. */
export const FEATURES = [
  { title: "AI receptionist", text: "Answers every call in the business's name, 24/7, from information the owner approves." },
  { title: "Calendar booking", text: "Books appointments, estimates and visits into the business's real open times." },
  { title: "Call notes and summaries", text: "Saves every caller's details, what they need and a short summary of the call." },
  { title: "Handoff to a person", text: "Transfers calls or creates callbacks for anything the owner wants to handle personally." },
  { title: "Front desk dashboard", text: "One place to see every call, appointment, job and callback, on a phone or computer." },
  { title: "Customer list (CRM)", text: "A customer record for every caller, with their history and status." },
];
