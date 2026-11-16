"use client";

import { useEffect, useRef, useState } from "react";
import {
  EXAMPLES,
  PATIENTS,
  PATIENT_TEXTS,
  PRESCRIBERS,
  patientById,
  pharmacyById,
  productById,
  runChecks,
  type Check,
  type ParsedOrder,
} from "@/lib/order-desk";

// Infused Wellness order desk demo. Orders come in from staff shorthand, a patient's text, or
// refills that come due on their own. The AI preps them, rules check them, the AI fills the
// pharmacy portal draft, and the prescriber signs on their phone. The signature always stays
// the prescriber's: Truly never signs.

type Status = "needs_fix" | "waiting" | "submitted" | "compounding" | "shipped" | "labs_requested";

type Order = ParsedOrder & {
  id: string;
  prescriberId: string;
  checks: Check[];
  status: Status;
  tracking?: string;
  isNew?: boolean;
};

type Text = { id: string; to: string; body: string };
type LogEntry = { id: number; time: string; who: string; what: string };

const STATUS_LABEL: Record<Status, string> = {
  needs_fix: "Needs a fix",
  labs_requested: "Waiting on labs",
  waiting: "Waiting on signature",
  submitted: "Sent to pharmacy",
  compounding: "Compounding",
  shipped: "Shipped",
};

const STATUS_STYLE: Record<Status, string> = {
  needs_fix: "bg-red-100 text-red-800",
  labs_requested: "bg-amber-100 text-amber-800",
  waiting: "bg-amber-100 text-amber-800",
  submitted: "bg-sky-100 text-sky-800",
  compounding: "bg-indigo-100 text-indigo-800",
  shipped: "bg-emerald-100 text-emerald-800",
};

const CHECK_DOT: Record<Check["status"], string> = {
  ok: "bg-emerald-500",
  warn: "bg-amber-500",
  block: "bg-red-500",
};

const seed = (o: ParsedOrder, id: string, prescriberId: string, status: Status, tracking?: string): Order => ({
  ...o,
  id,
  prescriberId,
  status,
  tracking,
  checks: runChecks(o),
});

const SEED: Order[] = [
  seed({ patientId: "p6", productId: "ketamine", quantity: 30, refills: 0, shipTo: "patient", note: "" }, "IW-1041", "ruiz", "waiting"),
  seed({ patientId: "p4", productId: "sema", quantity: 1, refills: 1, shipTo: "patient", note: "" }, "IW-1038", "vega", "compounding"),
  seed({ patientId: "p1", productId: "nad", quantity: 1, refills: 0, shipTo: "clinic", note: "" }, "IW-1035", "vega", "shipped", "1Z 84W 2F0 03 1182 7740"),
];

const SEED_LOG: LogEntry[] = [
  { id: 3, time: "9:14 AM", who: "Maria, front desk", what: "Prepped IW-1041 for Carla Mendez. All checks passed" },
  { id: 2, time: "Yesterday", who: "Andrea Vega, APRN", what: "Signed IW-1038 for Jessica Perez" },
  { id: 1, time: "Mon", who: "Palm Peptide Pharmacy", what: "IW-1035 shipped, tracking 1Z 84W 2F0 03 1182 7740" },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const firstName = (patientId: string) => patientById(patientId)!.name.split(" ")[0];
const prescriberName = (id: string) => PRESCRIBERS.find((p) => p.id === id)!.name;
const now = () => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
const isControlled = (o: Order) => productById(o.productId)!.schedule === "CIII";

export default function OrderDeskDemo() {
  const [orders, setOrders] = useState<Order[]>(SEED);
  const [texts, setTexts] = useState<Text[]>([]);
  const [log, setLog] = useState<LogEntry[]>(SEED_LOG);
  const [source, setSource] = useState<"staff" | "patient">("staff");
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState<Order | null>(null);
  const [portal, setPortal] = useState<{ orderId: string; filled: number } | null>(null);
  const nextId = useRef(1042);
  const logId = useRef(10);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const update = (id: string, patch: Partial<Order>) =>
    setOrders((all) => all.map((o) => (o.id === id ? { ...o, ...patch } : o)));
  const addLog = (who: string, what: string) =>
    setLog((l) => [{ id: logId.current++, time: now(), who, what }, ...l]);
  const addText = (id: string, patientId: string, body: string) =>
    setTexts((t) => [{ id, to: patientById(patientId)!.name, body }, ...t]);

  function buildOrder(parsed: ParsedOrder): Order {
    const order: Order = {
      ...parsed,
      id: `IW-${nextId.current++}`,
      prescriberId: productById(parsed.productId)!.schedule === "CIII" ? "ruiz" : "vega",
      checks: runChecks(parsed),
      status: "waiting",
      isNew: true,
    };
    const open = orders.find(
      (o) => o.patientId === parsed.patientId && o.productId === parsed.productId && o.status !== "shipped",
    );
    if (open) {
      order.checks.push({
        label: "Duplicate order",
        status: "warn",
        detail: `${open.id} for the same medication is already ${STATUS_LABEL[open.status].toLowerCase()}`,
      });
    }
    if (order.checks.some((c) => c.status === "block")) order.status = "needs_fix";
    return order;
  }

  const checkSummary = (o: Order) => {
    const block = o.checks.find((c) => c.status === "block");
    return block ? `Blocked: ${block.detail.toLowerCase()}` : "All checks passed";
  };

  async function prep(text: string, from: "staff" | "patient") {
    if (!text.trim() || busy) return;
    setBusy(true);
    setError("");
    setDraft(null);
    setPortal(null);
    try {
      const res = await fetch("/api/order-desk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      const order = buildOrder(data.order);
      const product = productById(order.productId)!;
      if (from === "patient") {
        addLog("AI, from patient text", `Turned ${firstName(order.patientId)}'s text into ${order.id}. ${checkSummary(order)}`);
        if (order.status !== "needs_fix") {
          addText(
            `${order.id}-ack`,
            order.patientId,
            `Got it ${firstName(order.patientId)}! Your ${product.short} refill is with ${prescriberName(order.prescriberId)} for approval. We'll text you tracking when it ships.`,
          );
        }
      } else {
        addLog("Maria, front desk", `Prepped ${order.id} for ${patientById(order.patientId)!.name}. ${checkSummary(order)}`);
      }
      setDraft(order);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  // The AI fills the pharmacy's portal as a draft, then the order lands in the prescriber's queue.
  async function sendToPrescriber(order: Order) {
    const pharmacy = pharmacyById(productById(order.productId)!.pharmacyId)!;
    setPortal({ orderId: order.id, filled: 0 });
    for (let i = 1; i <= PORTAL_FIELDS; i++) {
      await sleep(320);
      setPortal({ orderId: order.id, filled: i });
    }
    await sleep(500);
    setOrders((all) => [{ ...order, status: "waiting" }, ...all]);
    addLog("AI", `Filled the ${pharmacy.portal} draft for ${order.id}, sent to ${prescriberName(order.prescriberId)}`);
  }

  function requestLabs(order: Order) {
    setOrders((all) => [{ ...order, status: "labs_requested" }, ...all]);
    labsText(order);
    setDraft(null);
  }

  function labsText(order: Order) {
    addText(
      `${order.id}-labs`,
      order.patientId,
      `Hi ${firstName(order.patientId)}, it's Infused Wellness. Your refill is ready to go as soon as we get updated labs. Book your draw here: infusedwellness.link/labs`,
    );
    addLog("AI", `Held ${order.id} and texted ${firstName(order.patientId)} a link to book labs`);
  }

  // Refills that run out within two weeks and don't already have an open order.
  const due = PATIENTS.flatMap((p) => {
    if (!p.lastFill) return [];
    const product = productById(p.lastFill.productId)!;
    const daysLeft = product.daysSupply * p.lastFill.qty - p.lastFill.daysAgo;
    const open = orders.some((o) => o.patientId === p.id && o.productId === product.id);
    return daysLeft <= 14 && !open ? [{ patient: p, product, daysLeft, qty: p.lastFill.qty }] : [];
  }).sort((a, b) => a.daysLeft - b.daysLeft);

  function prepRefills() {
    const made = due.map((d) =>
      buildOrder({
        patientId: d.patient.id,
        productId: d.product.id,
        quantity: d.qty,
        refills: 0,
        shipTo: "patient",
        note: "Auto-prepped refill",
      }),
    );
    const ready = made.map((o) => (o.status === "needs_fix" ? { ...o, status: "labs_requested" as Status } : o));
    setOrders((all) => [...ready, ...all]);
    ready.forEach((o) => {
      if (o.status === "labs_requested") labsText(o);
      else
        addLog(
          "AI, refill autopilot",
          `Prepped ${o.id} for ${patientById(o.patientId)!.name}, filled the ${pharmacyById(productById(o.productId)!.pharmacyId)!.portal} draft`,
        );
    });
  }

  function signed(order: Order) {
    update(order.id, { status: "submitted" });
    addLog(
      prescriberName(order.prescriberId),
      isControlled(order)
        ? `Signed ${order.id} with two-factor. E-FORCSE check confirmed`
        : `Approved and signed ${order.id}`,
    );
    timers.current.push(
      setTimeout(() => update(order.id, { status: "compounding" }), 3500),
      setTimeout(() => {
        const tracking = `1Z 84W 2F0 03 ${Math.floor(1000 + Math.random() * 8999)} ${Math.floor(1000 + Math.random() * 8999)}`;
        update(order.id, { status: "shipped", tracking });
        const product = productById(order.productId)!;
        addLog(pharmacyById(product.pharmacyId)!.name, `${order.id} shipped, tracking ${tracking}`);
        addText(
          `${order.id}-ship`,
          order.patientId,
          order.shipTo === "clinic"
            ? `Hi ${firstName(order.patientId)}, your ${product.short} arrives at the clinic this week. We'll text you when it's ready.`
            : `Hi ${firstName(order.patientId)}, your ${product.short} from Infused Wellness shipped. Tracking: ${tracking}`,
        );
      }, 8000),
    );
  }

  const waiting = orders.filter((o) => o.status === "waiting");
  const done = orders.filter((o) => ["submitted", "compounding", "shipped"].includes(o.status)).length;
  const chips = source === "staff" ? EXAMPLES : PATIENT_TEXTS;

  return (
    <div className="space-y-6">
      {/* Owner numbers */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-4">
        <Stat value={orders.length} label="Orders this week" />
        <Stat value={waiting.length} label="Waiting on a signature" />
        <Stat value={done} label="Sent to pharmacies" />
        <Stat value={`${((orders.length * 12) / 60).toFixed(1)} hrs`} label="Staff time saved" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_330px]">
        <div className="min-w-0 space-y-6">
          {/* 1. Orders come in */}
          <section className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <StepLabel n="1" text="An order comes in" />
              <div className="flex rounded-full bg-[#f1eee7] p-1 text-[13px] font-semibold">
                {(["staff", "patient"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSource(s);
                      setInput("");
                    }}
                    className={`rounded-full px-3 py-1.5 transition ${source === s ? "bg-white text-navy shadow-sm" : "text-navy/55"}`}
                  >
                    {s === "staff" ? "Staff types it" : "Patient texts in"}
                  </button>
                ))}
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                prep(input, source);
              }}
              className="mt-3 flex flex-col gap-2 sm:flex-row"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  source === "staff"
                    ? "e.g. Refill test cyp for Marco Rivera, ship to his house"
                    : "e.g. Hey it's Marco, I need my refill"
                }
                className="min-w-0 flex-1 rounded-xl border border-navy/15 bg-[#fbfaf7] px-4 py-3 text-[15px] outline-none focus:border-royal"
              />
              <button
                disabled={busy || !input.trim()}
                className="rounded-xl bg-royal px-5 py-3 font-semibold text-white transition hover:bg-navy disabled:opacity-40"
              >
                {busy ? "Prepping..." : "Prep order"}
              </button>
            </form>
            {source === "patient" && (
              <p className="mt-2 text-[13px] text-navy/55">
                Patients text your clinic number. Riley answers, and the request becomes an order.
              </p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {chips.map((ex) => (
                <button
                  key={ex}
                  onClick={() => {
                    setInput(ex);
                    prep(ex, source);
                  }}
                  disabled={busy}
                  className={`px-3 py-1.5 text-left text-[13px] transition disabled:opacity-40 ${
                    source === "staff"
                      ? "rounded-full border border-navy/10 bg-[#f8f5ef] text-navy/75 hover:border-royal hover:text-royal"
                      : "rounded-2xl rounded-bl-md bg-[#e9e9eb] text-navy/85 hover:bg-[#dcdce0]"
                  }`}
                >
                  {ex}
                </button>
              ))}
            </div>
            {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
          </section>

          {/* Refill autopilot */}
          <section className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold">
                Refills running out in the next 14 days
                <span className="ml-2 font-hand text-lg font-normal text-ember">nobody has to remember these</span>
              </p>
              {due.length > 0 && (
                <button
                  onClick={prepRefills}
                  className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-royal"
                >
                  Prep all {due.length}
                </button>
              )}
            </div>
            {due.length === 0 ? (
              <p className="mt-3 text-sm text-navy/55">Every refill due soon already has an order.</p>
            ) : (
              <ul className="mt-3 divide-y divide-navy/5 text-sm">
                {due.map((d) => (
                  <li key={d.patient.id} className="flex flex-wrap items-baseline justify-between gap-x-4 py-2">
                    <span>
                      <b>{d.patient.name}</b> <span className="text-navy/60">{d.product.short}</span>
                    </span>
                    <span className={d.daysLeft <= 5 ? "font-semibold text-red-700" : "text-navy/60"}>
                      {d.daysLeft <= 1 ? "Runs out tomorrow" : `Runs out in ${d.daysLeft} days`}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* 2. The prepped, checked order */}
          {draft && (
            <section className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
              <StepLabel n="2" text="The AI preps it and checks it before a prescriber ever sees it" />
              <OrderSummary order={draft} />
              <ul className="mt-4 divide-y divide-navy/5 rounded-xl border border-navy/10">
                {draft.checks.map((c) => (
                  <li key={c.label} className="flex items-start gap-3 px-4 py-2.5 text-sm">
                    <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${CHECK_DOT[c.status]}`} />
                    <span className="flex flex-col sm:flex-row sm:gap-3">
                      <span className="shrink-0 font-semibold sm:w-40">{c.label}</span>
                      <span className="text-navy/65">{c.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>

              {draft.status === "needs_fix" ? (
                <div className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-900">
                  <p className="font-semibold">Blocked. This order can&apos;t go to a prescriber yet.</p>
                  <p className="mt-1">
                    The system won&apos;t let it through until the problem is fixed, so nobody signs something
                    that fails your protocol.
                  </p>
                  <button
                    onClick={() => requestLabs(draft)}
                    className="mt-3 rounded-lg bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-800"
                  >
                    Text {firstName(draft.patientId)} to book labs
                  </button>
                </div>
              ) : portal?.orderId === draft.id ? (
                <PortalFill order={draft} filled={portal.filled} />
              ) : (
                <button
                  onClick={() => sendToPrescriber(draft)}
                  className="mt-4 w-full rounded-xl bg-navy px-5 py-3 font-semibold text-white transition hover:bg-royal sm:w-auto"
                >
                  Fill the {pharmacyById(productById(draft.productId)!.pharmacyId)!.name} portal and send to{" "}
                  {prescriberName(draft.prescriberId)}
                </button>
              )}
            </section>
          )}

          {/* 4. Tracker */}
          <section className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
            <StepLabel n="4" text="Every order tracked until it ships" />
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="text-xs text-navy/50 uppercase">
                  <tr>
                    <th className="py-2 pr-3 font-semibold">Order</th>
                    <th className="py-2 pr-3 font-semibold">Patient</th>
                    <th className="py-2 pr-3 font-semibold">Medication</th>
                    <th className="py-2 pr-3 font-semibold">Pharmacy</th>
                    <th className="py-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/5">
                  {orders.map((o) => {
                    const product = productById(o.productId)!;
                    return (
                      <tr key={o.id} className={o.isNew ? "bg-royal/[0.03]" : ""}>
                        <td className="py-2.5 pr-3 font-mono text-xs">{o.id}</td>
                        <td className="py-2.5 pr-3">{patientById(o.patientId)!.name}</td>
                        <td className="py-2.5 pr-3">
                          {product.short}
                          {product.schedule === "CIII" && (
                            <span className="ml-1.5 rounded bg-navy/5 px-1.5 py-0.5 text-[10px] font-bold">C-III</span>
                          )}
                        </td>
                        <td className="py-2.5 pr-3 text-navy/65">{pharmacyById(product.pharmacyId)!.name}</td>
                        <td className="py-2.5">
                          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLE[o.status]}`}>
                            {STATUS_LABEL[o.status]}
                          </span>
                          {o.tracking && o.status === "shipped" && (
                            <div className="mt-1 font-mono text-[11px] text-navy/45">{o.tracking}</div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {texts.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-semibold text-navy/50 uppercase">Texts sent to patients</p>
                <div className="mt-2 space-y-2">
                  {texts.map((t) => (
                    <div key={t.id} className="max-w-md rounded-2xl rounded-bl-md bg-[#e9e9eb] px-4 py-2.5 text-sm">
                      <span className="block text-[11px] text-navy/50">To {t.to}</span>
                      {t.body}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <details className="group mt-5 border-t border-navy/10 pt-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                <span>
                  Audit trail <span className="font-normal text-navy/50">({log.length} entries)</span>
                </span>
                <span className="text-navy/40 transition group-open:rotate-90">›</span>
              </summary>
              <p className="mt-1 text-[13px] text-navy/55">
                Who prepped, checked, signed and shipped every order, with the time. Ready if a board or the
                DEA ever asks.
              </p>
              <ol className="mt-3 space-y-2 font-mono text-[12px]">
                {log.map((l) => (
                  <li key={l.id} className="grid grid-cols-[70px_1fr] gap-2">
                    <span className="text-navy/45">{l.time}</span>
                    <span>
                      <b className="font-semibold">{l.who}</b>
                      <span className="text-navy/65">: {l.what}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </details>
          </section>
        </div>

        {/* 3. Prescriber's phone */}
        <div className="lg:sticky lg:top-6 lg:self-start">
          <StepLabel n="3" text="The prescriber signs from their phone" />
          <PrescriberPhone orders={waiting} onSigned={signed} />
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="bg-white px-4 py-3.5">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-navy/55">{label}</div>
    </div>
  );
}

function StepLabel({ n, text }: { n: string; text: string }) {
  return (
    <p className="flex items-center gap-2 text-sm font-semibold">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ember text-xs text-white">{n}</span>
      {text}
    </p>
  );
}

function OrderSummary({ order }: { order: Order }) {
  const patient = patientById(order.patientId)!;
  const product = productById(order.productId)!;
  const allergySwap = patient.allergy === "cottonseed oil" && product.id === "testcyp";
  const rows: [string, string][] = [
    ["Patient", `${patient.name}, DOB ${patient.dob}`],
    ["Medication", `${product.name}${allergySwap ? " (grapeseed oil)" : ""}${product.schedule === "CIII" ? ", Schedule III" : ""}`],
    ["Quantity", `${order.quantity} x ${product.unit}, ${order.refills} refill${order.refills === 1 ? "" : "s"}`],
    ["Directions", product.sig],
    ["Pharmacy", `${pharmacyById(product.pharmacyId)!.name} (where you order this medication)`],
    ["Prescriber", prescriberName(order.prescriberId)],
    ["Ship to", order.shipTo === "clinic" ? "Infused Wellness clinic" : `Patient, ${patient.city}, FL`],
  ];
  if (order.note) rows.push(["Note", order.note]);
  return (
    <dl className="mt-4 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-[110px_1fr]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-navy/50">{k}</dt>
          <dd className="mb-1 font-medium sm:mb-0">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

const PORTAL_FIELDS = 7;

function PortalFill({ order, filled }: { order: Order; filled: number }) {
  const patient = patientById(order.patientId)!;
  const product = productById(order.productId)!;
  const pharmacy = pharmacyById(product.pharmacyId)!;
  const prescriber = PRESCRIBERS.find((p) => p.id === order.prescriberId)!;
  const fields: [string, string][] = [
    ["Patient name", patient.name],
    ["Date of birth", patient.dob],
    ["Product", product.name],
    ["Quantity", `${order.quantity} ${product.unit}`],
    ["Sig", product.sig],
    ["Prescriber", `${prescriber.name}, ${prescriber.title}`],
    ["Ship to", order.shipTo === "clinic" ? "Clinic" : "Patient address on file"],
  ];
  const finished = filled >= PORTAL_FIELDS;
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-navy/15">
      <div className="flex items-center gap-2 bg-[#eef1f5] px-3 py-2 text-xs text-navy/60">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-2 truncate">{pharmacy.portal}, new prescription</span>
      </div>
      <div className="grid gap-2 p-4 text-sm sm:grid-cols-2">
        {fields.map(([label, value], i) => (
          <label key={label} className="block">
            <span className="text-xs text-navy/50">{label}</span>
            <div
              className={`mt-0.5 rounded-md border px-2.5 py-1.5 transition ${
                i < filled ? "border-royal/40 bg-royal/[0.04]" : "border-navy/10 text-transparent"
              }`}
            >
              {i < filled ? value : "."}
            </div>
          </label>
        ))}
      </div>
      <div className={`px-4 py-2.5 text-sm font-semibold ${finished ? "bg-emerald-50 text-emerald-800" : "bg-[#f8f5ef] text-navy/60"}`}>
        {finished
          ? `Draft saved in ${pharmacy.portal}. Sent to ${prescriber.name}'s phone to sign.`
          : `Filling ${pharmacy.portal}...`}
      </div>
    </div>
  );
}

function PrescriberPhone({ orders, onSigned }: { orders: Order[]; onSigned: (o: Order) => void }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [pdmp, setPdmp] = useState(false);
  const [stage, setStage] = useState<"review" | "code">("review");
  const [code, setCode] = useState("");
  const open = orders.find((o) => o.id === openId) ?? null;
  const plain = orders.filter((o) => !isControlled(o));

  const close = () => {
    setOpenId(null);
    setPdmp(false);
    setStage("review");
    setCode("");
  };

  function approve(o: Order) {
    if (isControlled(o)) setStage("code");
    else {
      onSigned(o);
      close();
    }
  }

  return (
    <div className="mx-auto mt-3 w-full max-w-[330px] rounded-[2.6rem] bg-[#111] p-2.5 shadow-xl">
      <div className="relative h-[600px] overflow-hidden rounded-[2.1rem] bg-[#f4f4f6]">
        <div className="mx-auto mt-2 h-6 w-24 rounded-full bg-black" />
        <div className="px-4 pt-3 pb-2">
          <p className="text-xs text-navy/50">Truly Front Desk</p>
          <p className="text-lg font-bold">Orders to sign</p>
        </div>

        {!open ? (
          <div className="h-[500px] space-y-2 overflow-y-auto px-3 pb-4">
            {orders.length === 0 && (
              <p className="px-2 pt-10 text-center text-sm text-navy/50">All caught up. Nothing to sign.</p>
            )}
            {plain.length > 1 && (
              <button
                onClick={() => plain.forEach(onSigned)}
                className="block w-full rounded-2xl bg-royal py-2.5 text-sm font-semibold text-white"
              >
                Approve all {plain.length} non-controlled
              </button>
            )}
            {orders.map((o) => {
              const product = productById(o.productId)!;
              const flags = o.checks.filter((c) => c.status === "warn" && c.label !== "E-FORCSE check").length;
              return (
                <button
                  key={o.id}
                  onClick={() => setOpenId(o.id)}
                  className="block w-full rounded-2xl bg-white p-3 text-left shadow-sm transition hover:ring-2 hover:ring-royal/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{patientById(o.patientId)!.name}</span>
                    <span className="text-xs text-navy/40">{o.id}</span>
                  </div>
                  <div className="text-sm text-navy/65">
                    {product.short}, {prescriberName(o.prescriberId)}
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {product.schedule === "CIII" && (
                      <span className="rounded-full bg-navy/5 px-2 py-0.5 text-[11px] font-semibold">C-III</span>
                    )}
                    {flags > 0 && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                        {flags} flag{flags > 1 ? "s" : ""} to look at
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : stage === "review" ? (
          <div className="flex h-[520px] flex-col px-3">
            <button onClick={close} className="mb-2 self-start text-sm text-royal">
              ‹ Back
            </button>
            <div className="flex-1 overflow-y-auto rounded-2xl bg-white p-3 text-sm shadow-sm">
              <p className="font-semibold">{patientById(open.patientId)!.name}</p>
              <p className="text-navy/65">{productById(open.productId)!.name}</p>
              <p className="mt-1 text-navy/65">
                {open.quantity} x {productById(open.productId)!.unit}, {open.refills} refills
              </p>
              <p className="mt-1 text-navy/65">{productById(open.productId)!.sig}</p>
              <ul className="mt-3 space-y-1.5">
                {open.checks
                  .filter((c) => c.label !== "E-FORCSE check")
                  .map((c) => (
                    <li key={c.label} className="flex gap-2 text-[13px]">
                      <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${CHECK_DOT[c.status]}`} />
                      <span>
                        <b>{c.label}:</b> {c.detail}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
            {isControlled(open) && (
              <label className="mt-2 flex items-start gap-2 rounded-xl bg-white p-3 text-[13px] shadow-sm">
                <input type="checkbox" checked={pdmp} onChange={(e) => setPdmp(e.target.checked)} className="mt-0.5" />
                I checked E-FORCSE for this patient today
              </label>
            )}
            <button
              onClick={() => approve(open)}
              disabled={isControlled(open) && !pdmp}
              className="mt-2 mb-3 rounded-xl bg-royal py-3 font-semibold text-white disabled:opacity-40"
            >
              Approve and sign
            </button>
          </div>
        ) : (
          <div className="px-3">
            <div className="rounded-2xl bg-white p-4 text-sm shadow-sm">
              <p className="font-semibold">Two-factor signature</p>
              <p className="mt-1 text-[13px] text-navy/65">
                Controlled substance. This signs through a DEA-certified e-prescribing service, with the code
                from your own authenticator. Nobody else can sign for you.
              </p>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                inputMode="numeric"
                placeholder="000000"
                className="mt-3 w-full rounded-lg border border-navy/15 px-3 py-2.5 text-center font-mono text-xl tracking-[0.3em] outline-none focus:border-royal"
              />
              <button onClick={() => setCode("482913")} className="mt-2 text-xs text-royal">
                Demo: fill a sample code
              </button>
            </div>
            <button
              onClick={() => {
                onSigned(open);
                close();
              }}
              disabled={code.length !== 6}
              className="mt-3 w-full rounded-xl bg-royal py-3 font-semibold text-white disabled:opacity-40"
            >
              Sign and send to pharmacy
            </button>
            <button onClick={() => setStage("review")} className="mt-2 w-full py-2 text-sm text-navy/60">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
