"use client";

import { useEffect, useRef, useState } from "react";
import {
  EXAMPLES,
  PRESCRIBERS,
  patientById,
  pharmacyById,
  productById,
  runChecks,
  type Check,
  type ParsedOrder,
} from "@/lib/order-desk";

// Infused Wellness order desk demo. Staff type an order the way they'd text it, the AI preps
// it, rules check it, the AI fills the pharmacy portal draft, and the prescriber signs on
// their phone. The signature step stays the prescriber's: Truly never signs.

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

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const firstName = (patientId: string) => patientById(patientId)!.name.split(" ")[0];

export default function OrderDeskDemo() {
  const [orders, setOrders] = useState<Order[]>(SEED);
  const [texts, setTexts] = useState<Text[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState<Order | null>(null);
  const [portal, setPortal] = useState<{ orderId: string; filled: number } | null>(null);
  const nextId = useRef(1042);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const update = (id: string, patch: Partial<Order>) =>
    setOrders((all) => all.map((o) => (o.id === id ? { ...o, ...patch } : o)));

  async function prep(text: string) {
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
      const parsed: ParsedOrder = data.order;
      const product = productById(parsed.productId)!;
      const order: Order = {
        ...parsed,
        id: `IW-${nextId.current++}`,
        prescriberId: product.schedule === "CIII" ? "ruiz" : "vega",
        checks: runChecks(parsed),
        status: "waiting",
        isNew: true,
      };
      if (order.checks.some((c) => c.status === "block")) order.status = "needs_fix";
      setDraft(order);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  // The AI fills the pharmacy's portal as a draft, then the order lands in the prescriber's queue.
  async function sendToPrescriber(order: Order) {
    setPortal({ orderId: order.id, filled: 0 });
    for (let i = 1; i <= PORTAL_FIELDS; i++) {
      await sleep(320);
      setPortal({ orderId: order.id, filled: i });
    }
    await sleep(500);
    setOrders((all) => [{ ...order, status: "waiting" }, ...all]);
  }

  function requestLabs(order: Order) {
    setOrders((all) => [{ ...order, status: "labs_requested" }, ...all]);
    setTexts((t) => [
      {
        id: `${order.id}-labs`,
        to: patientById(order.patientId)!.name,
        body: `Hi ${firstName(order.patientId)}, it's Infused Wellness. Your refill is ready to go as soon as we get updated labs. Book your draw here: infusedwellness.link/labs`,
      },
      ...t,
    ]);
    setDraft(null);
  }

  function signed(order: Order) {
    update(order.id, { status: "submitted" });
    timers.current.push(
      setTimeout(() => update(order.id, { status: "compounding" }), 3500),
      setTimeout(() => {
        const tracking = `1Z 84W 2F0 03 ${Math.floor(1000 + Math.random() * 8999)} ${Math.floor(1000 + Math.random() * 8999)}`;
        update(order.id, { status: "shipped", tracking });
        const product = productById(order.productId)!;
        setTexts((t) => [
          {
            id: `${order.id}-ship`,
            to: patientById(order.patientId)!.name,
            body:
              order.shipTo === "clinic"
                ? `Hi ${firstName(order.patientId)}, your ${product.short} arrives at the clinic this week. We'll text you when it's ready.`
                : `Hi ${firstName(order.patientId)}, your ${product.short} from Infused Wellness shipped. Tracking: ${tracking}`,
          },
          ...t,
        ]);
      }, 8000),
    );
  }

  const waiting = orders.filter((o) => o.status === "waiting");
  const done = orders.filter((o) => ["submitted", "compounding", "shipped"].includes(o.status)).length;

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
          {/* 1. Staff types the order */}
          <section className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
            <StepLabel n="1" text="Staff types the order the way they'd text it" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                prep(input);
              }}
              className="mt-3 flex flex-col gap-2 sm:flex-row"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. Refill test cyp for Marco Rivera, ship to his house"
                className="min-w-0 flex-1 rounded-xl border border-navy/15 bg-[#fbfaf7] px-4 py-3 text-[15px] outline-none focus:border-royal"
              />
              <button
                disabled={busy || !input.trim()}
                className="rounded-xl bg-royal px-5 py-3 font-semibold text-white transition hover:bg-navy disabled:opacity-40"
              >
                {busy ? "Prepping..." : "Prep order"}
              </button>
            </form>
            <div className="mt-3 flex flex-wrap gap-2">
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  onClick={() => {
                    setInput(ex);
                    prep(ex);
                  }}
                  disabled={busy}
                  className="rounded-full border border-navy/10 bg-[#f8f5ef] px-3 py-1.5 text-left text-[13px] text-navy/75 transition hover:border-royal hover:text-royal disabled:opacity-40"
                >
                  {ex}
                </button>
              ))}
            </div>
            {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
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
                  {PRESCRIBERS.find((p) => p.id === draft.prescriberId)!.name}
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
    ["Pharmacy", `${pharmacyById(product.pharmacyId)!.name} (picked for this medication)`],
    ["Prescriber", PRESCRIBERS.find((p) => p.id === order.prescriberId)!.name],
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

  const close = () => {
    setOpenId(null);
    setPdmp(false);
    setStage("review");
    setCode("");
  };

  function approve(o: Order) {
    if (productById(o.productId)!.schedule === "CIII") setStage("code");
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
          <div className="space-y-2 px-3">
            {orders.length === 0 && (
              <p className="px-2 pt-10 text-center text-sm text-navy/50">All caught up. Nothing to sign.</p>
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
                    {product.short}, {PRESCRIBERS.find((p) => p.id === o.prescriberId)!.name}
                  </div>
                  {flags > 0 && (
                    <div className="mt-1.5 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                      {flags} flag{flags > 1 ? "s" : ""} to look at
                    </div>
                  )}
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
            {productById(open.productId)!.schedule === "CIII" && (
              <label className="mt-2 flex items-start gap-2 rounded-xl bg-white p-3 text-[13px] shadow-sm">
                <input type="checkbox" checked={pdmp} onChange={(e) => setPdmp(e.target.checked)} className="mt-0.5" />
                I checked E-FORCSE for this patient today
              </label>
            )}
            <button
              onClick={() => approve(open)}
              disabled={productById(open.productId)!.schedule === "CIII" && !pdmp}
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
                Controlled substance. Enter the code from your own authenticator. Only you can sign this.
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
