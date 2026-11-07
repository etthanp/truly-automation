export type Kind = "contact" | "call" | "message" | "appointment" | "task" | "event" | "test" | "notification" | "setting";
export type Item = {
  id: string; kind: Kind; revision?: number; createdAt: string; updatedAt?: string;
  name?: string; company?: string; phone?: string; email?: string; stage?: string; notes?: string;
  contactId?: string; title?: string; summary?: string; status?: string; source?: string;
  duration?: number; transcript?: string; direction?: string; text?: string; start?: string; end?: string;
  priority?: string; assignee?: string; resolution?: string; resolvedAt?: string; acknowledgedAt?: string;
  actionHash?: string; scenario?: string; result?: string; details?: string; providerId?: string;
};
export type Workspace = { id: string; name: string; mode: "practice" | "live" };
export const STAGES = ["New lead", "Qualified", "Appointment requested", "Appointment booked", "Quote sent", "Won", "Completed", "Lost"];
export const SCENARIOS = ["booking", "failure", "callback"] as const;
export type Scenario = typeof SCENARIOS[number];
export function validScope(id: string) { return id === "practice" || id === "truly"; }
export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10 ? `+1${digits}` : digits.length === 11 && digits[0] === "1" ? `+${digits}` : value.trim();
}
export function timeLabel(iso: string) {
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" }).format(new Date(iso));
}
export function dayKey(iso: string) { return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(iso)); }
export function safeAppointment(start: string, end: string) {
  const a = Date.parse(start), b = Date.parse(end);
  return Number.isFinite(a) && Number.isFinite(b) && b > a && b - a <= 8 * 3600000;
}
export function overlaps(start: string, end: string, appointments: Item[]) {
  return appointments.some(a => a.status !== "Cancelled" && !!a.start && !!a.end && Date.parse(start) < Date.parse(a.end) && Date.parse(end) > Date.parse(a.start));
}

// Fictional records, inserted only in the practice workspace.
export function practiceSeed(now: string): Item[] {
  const stamp = (minutes: number) => new Date(Date.parse(now) + minutes * 60000).toISOString();
  const base = (id: string, kind: Kind, minutes = 0) => ({ id, kind, createdAt: stamp(minutes), revision: 1, source: "Practice" });
  return [
    { ...base("c-jordan", "contact", -260), name: "Jordan Lee", company: "Example Home Services", phone: "+17045550101", email: "jordan@example.com", stage: "Appointment booked", notes: "Fictional customer. Interested in phone coverage while the crew is on site." },
    { ...base("c-morgan", "contact", -230), name: "Morgan Ellis", company: "Example Auto Care", phone: "+17045550102", email: "morgan@example.com", stage: "Qualified", notes: "Fictional customer. Asked to discuss their existing booking system." },
    { ...base("c-alex", "contact", -190), name: "Alex Rivera", company: "Example Cleaning Co.", phone: "+17045550103", email: "alex@example.com", stage: "Appointment requested", notes: "Fictional customer. A booking failed and needs a callback." },
    { ...base("c-sam", "contact", -160), name: "Sam Taylor", company: "Example Landscaping", phone: "+17045550104", email: "sam@example.com", stage: "Quote sent", notes: "Fictional customer. Reviewing the front desk scope." },
    { ...base("call-1", "call", -20), contactId: "c-jordan", title: "Front desk walkthrough", summary: "Asked about after-hours coverage. A practice walkthrough was booked and the details were saved.", duration: 184, status: "Appointment booked", transcript: "Riley: Thanks for calling Truly Automation. I'm the AI receptionist. How can I help?\nJordan: We miss calls while our team is out. Can we see how this works?\nRiley: Absolutely. I can check a walkthrough time.\nJordan: That works for me.\nRiley: Your practice appointment is saved. This is a simulated conversation.", direction: "Inbound" },
    { ...base("call-2", "call", -48), contactId: "c-morgan", title: "Callback requested", summary: "Wants to discuss connecting an existing calendar. Asked for a callback from Ethan.", duration: 142, status: "Needs attention", transcript: "Morgan: Can Ethan call me about our booking software?\nRiley: I'll record your request for Ethan. This is a practice conversation.", direction: "Inbound" },
    { ...base("call-3", "call", -80), contactId: "c-alex", title: "Booking needs confirmation", summary: "The simulated calendar action failed. No appointment was confirmed; a follow-up task was created.", duration: 221, status: "Needs attention", transcript: "Riley: I couldn't confirm that appointment. I've recorded a request for a person to help. No external notification was sent in this practice scenario.", direction: "Inbound" },
    { ...base("call-4", "call", -140), contactId: "c-sam", title: "Questions about the service", summary: "Discussed call handling and human follow-up. No additional action requested.", duration: 96, status: "Answered", transcript: "Sam: Can we see every call?\nRiley: The front desk keeps the call history and next steps together. This is a simulated conversation.", direction: "Inbound" },
    { ...base("msg-1", "message", -110), contactId: "c-sam", direction: "Inbound", text: "Thanks for the walkthrough. We're reviewing the proposal.", status: "Example message" },
    { ...base("msg-2", "message", -105), contactId: "c-sam", direction: "Outbound", text: "Thanks, Sam. Your questions are saved for Ethan to review.", status: "Simulated, not sent" },
    { ...base("msg-3", "message", -16), contactId: "c-jordan", direction: "Inbound", text: "Looking forward to seeing the dashboard.", status: "Example message" },
    { ...base("appt-1", "appointment", -20), contactId: "c-jordan", title: "Front desk walkthrough", start: stamp(60), end: stamp(90), status: "Practice booking" },
    { ...base("appt-2", "appointment", -150), contactId: "c-sam", title: "Proposal follow-up", start: stamp(180), end: stamp(210), status: "Practice booking" },
    { ...base("task-1", "task", -48), contactId: "c-morgan", title: "Call Morgan about their calendar", summary: "Find out which booking system they use and what needs to stay in sync.", priority: "Normal", assignee: "Ethan", status: "Open" },
    { ...base("task-2", "task", -80), contactId: "c-alex", title: "Confirm Alex's appointment", summary: "The practice booking action failed. Check availability before confirming a time.", priority: "Urgent", assignee: "Ethan", status: "Open" },
    { ...base("task-3", "task", -100), contactId: "c-sam", title: "Review the proposed setup", summary: "Confirm the service scope before sending a final agreement.", priority: "Normal", assignee: "Ethan", status: "Open" },
  ];
}

export function simulation(scenario: Scenario, eventId: string, now: string, slotStart?: string): Item[] {
  const id = (suffix: string) => `test-${eventId}-${suffix}`;
  const base = (suffix: string, kind: Kind) => ({ id: id(suffix), kind, createdAt: now, revision: 1, source: "Practice test" });
  const contactId = id("contact"), booked = scenario === "booking";
  const start = slotStart || new Date(Date.parse(now) + 86400000).toISOString();
  return [
    { ...base("contact", "contact"), name: "Casey Demo", company: "Practice caller", phone: "+17045550109", stage: booked ? "Appointment booked" : "Appointment requested", notes: "Fictional test contact. No real call was made." },
    { ...base("call", "call"), contactId, title: booked ? "Practice booking completed" : scenario === "failure" ? "Practice booking failed safely" : "Practice callback requested", summary: booked ? "A booking was saved in the practice calendar. No external calendar was contacted." : "No booking was confirmed. An open task was saved for Ethan. No external notification was sent.", status: booked ? "Appointment booked" : "Needs attention", duration: 120, direction: "Inbound", transcript: "Simulated event. This checks the dashboard workflow, not voice quality or a live Vapi connection." },
    ...(booked ? [{ ...base("appointment", "appointment"), contactId, title: "Practice walkthrough", start, end: new Date(Date.parse(start) + 1800000).toISOString(), status: "Practice booking" }] : [{ ...base("task", "task"), contactId, title: scenario === "failure" ? "Recover the failed practice booking" : "Call back the practice caller", summary: "Review the request and resolve it with a note.", priority: scenario === "failure" ? "Urgent" : "Normal", assignee: "Ethan", status: "Open" }]),
    { ...base("test", "test"), title: booked ? "Booking saved" : "Human follow-up created", scenario, result: "Passed", details: "Dashboard simulation only. Voice, messaging, and external calendar delivery remain untested." },
    { ...base("event", "event"), title: "Practice scenario completed", details: `${scenario}: event ${eventId}`, scenario },
  ];
}

// Adapter contract for the later Vapi connection. A call summary never proves a booking.
export function normalizeVapiCall(call: { id?: string; createdAt?: string; startedAt?: string; endedAt?: string; status?: string; endedReason?: string; artifact?: { transcript?: string }; analysis?: { summary?: string } }, now: string): Item {
  if (!call.id || call.id.length > 200) throw new Error("Missing valid provider call ID");
  const duration = call.startedAt && call.endedAt ? Math.max(0, Math.round((Date.parse(call.endedAt) - Date.parse(call.startedAt)) / 1000)) : 0;
  return { id: `vapi-${call.id}`, kind: "call", createdAt: call.createdAt && Number.isFinite(Date.parse(call.createdAt)) ? call.createdAt : now, source: "Vapi", providerId: call.id, title: "Vapi call", duration: Number.isFinite(duration) ? duration : 0, summary: call.analysis?.summary || "No summary provided.", transcript: call.artifact?.transcript || "", status: call.endedReason?.includes("error") ? "Needs attention" : call.status === "ended" ? "Completed, outcome unverified" : "In progress" };
}
