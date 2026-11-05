import type { Industry } from "./industries/types";

/** Sample data for the example front desk dashboard. Never real customers. */
export interface DashData {
  business: string;
  stats: [string, string][];
  attention: { who: string; text: string; due: string }[];
  calls: { time: string; who: string; summary: string; outcome: "Booked" | "Answered" | "Callback" | "Sent to you"; length: string }[];
  appts: { day: string; time: string; who: string; what: string }[];
  pipeline: { stage: string; items: { who: string; what: string }[] }[];
  customers: { name: string; phone: string; last: string; status: string }[];
}

const strip = (s: string) => s.replace(/\s*\(.*\)/, "").replace(/\?$/, "");
// A customer's words as a quoted sentence, e.g. "I need a new driveway."
const said = (s: string) => `"${s}${/[?.!]$/.test(s) ? "" : "."}"`;

/** Builds the example dashboard for an industry from its demo receptionist. */
export function dashFor(ind: Industry): DashData {
  const [c1, c2, c3] = ind.demo.chips;
  const goal = strip(ind.demo.goal);
  const lead = ind.hero.cards.lead;
  return {
    business: ind.demo.business,
    stats: [
      ["Calls answered", "38"],
      ["Booked", "12"],
      ["Needs you", "2"],
      ["After hours", "9"],
    ],
    attention: [
      { who: "Dana R.", text: `Wants to talk to the owner: ${said(c3)}`, due: "Call back by 2:00 PM" },
      { who: "Chris P.", text: "Asked to move Thursday's appointment. Two open times sent for you to approve.", due: "Today" },
    ],
    calls: [
      { time: "9:42 PM", who: "Sarah M.", summary: `${said(c1)} Booked ${goal}.`, outcome: "Booked", length: "3:12" },
      { time: "8:15 AM", who: "Mike T.", summary: `${said(c2)} Answered their questions and took their details.`, outcome: "Answered", length: "2:05" },
      { time: "10:03 AM", who: "Dana R.", summary: `${said(c3)} Wants the owner. Callback task created.`, outcome: "Callback", length: "1:41" },
      { time: "11:26 AM", who: "Jen K.", summary: `New customer. ${lead.title}.`, outcome: "Booked", length: "4:20" },
      { time: "12:10 PM", who: "Tom B.", summary: "Upset about a past visit. Sent straight to you with the notes.", outcome: "Sent to you", length: "0:58" },
    ],
    appts: [
      { day: "Today", time: "2:30 PM", who: "Jen K.", what: lead.title },
      { day: "Tomorrow", time: "9:00 AM", who: "Sarah M.", what: goal[0].toUpperCase() + goal.slice(1) },
      { day: "Thursday", time: "11:00 AM", who: "Chris P.", what: strip(c1) },
      { day: "Friday", time: "8:30 AM", who: "Alex W.", what: strip(c2) },
    ],
    pipeline: [
      { stage: "New", items: [{ who: "Mike T.", what: strip(c2) }, { who: "Dana R.", what: strip(c3) }] },
      { stage: "Booked", items: [{ who: "Sarah M.", what: goal }, { who: "Jen K.", what: lead.title }] },
      { stage: "Won", items: [{ who: "Alex W.", what: strip(c1) }] },
    ],
    customers: [
      { name: "Sarah M.", phone: "(704) 555-0142", last: "Last night", status: "Booked" },
      { name: "Mike T.", phone: "(704) 555-0187", last: "Today", status: "New" },
      { name: "Dana R.", phone: "(980) 555-0116", last: "Today", status: "Needs callback" },
      { name: "Jen K.", phone: "(704) 555-0164", last: "Today", status: "Booked" },
    ],
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
