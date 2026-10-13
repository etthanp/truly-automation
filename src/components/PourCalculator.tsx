"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { usd } from "@/lib/packages";

// Example prices per square foot (low, high). On a client's site these come
// from the client's own pricing.
const projects = {
  driveway: { label: "Driveway", base: [8, 12] },
  patio: { label: "Patio", base: [8, 12] },
  sidewalk: { label: "Sidewalk", base: [8, 11] },
  slab: { label: "Garage / shop slab", base: [6, 9] },
} as const;

const finishes = {
  broom: { label: "Broom finish", add: [0, 0] },
  aggregate: { label: "Exposed aggregate", add: [3, 5] },
  stamped: { label: "Stamped", add: [6, 9] },
} as const;

const TEAR_OUT = [2, 4];
const MINIMUM = 2500;

type ProjectKey = keyof typeof projects;
type FinishKey = keyof typeof finishes;

const roundTo100 = (n: number) => Math.round(n / 100) * 100;

function Choice<T extends string>({
  options,
  value,
  onChange,
}: {
  options: Record<T, { label: string }>;
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(options) as T[]).map((k) => (
        <button
          key={k}
          type="button"
          onClick={() => onChange(k)}
          aria-pressed={value === k}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            value === k
              ? "border-royal bg-royal text-white"
              : "border-navy/15 bg-white text-navy hover:border-royal/50"
          }`}
        >
          {options[k].label}
        </button>
      ))}
    </div>
  );
}

export default function PourCalculator({ bare = false }: { bare?: boolean } = {}) {
  const [project, setProject] = useState<ProjectKey>("driveway");
  const [finish, setFinish] = useState<FinishKey>("broom");
  const [length, setLength] = useState(24);
  const [width, setWidth] = useState(20);
  const [tearOut, setTearOut] = useState(true);
  const [asked, setAsked] = useState(false);

  const sqft = Math.max(0, length) * Math.max(0, width);
  const perLow = projects[project].base[0] + finishes[finish].add[0] + (tearOut ? TEAR_OUT[0] : 0);
  const perHigh = projects[project].base[1] + finishes[finish].add[1] + (tearOut ? TEAR_OUT[1] : 0);
  const low = Math.max(MINIMUM, roundTo100(sqft * perLow));
  const high = Math.max(MINIMUM, roundTo100(sqft * perHigh));
  const atMinimum = sqft * perLow < MINIMUM;

  const numberInput =
    "w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-base text-navy outline-none focus:border-royal";

  return (
    <section id={bare ? undefined : "calculator"} className={bare ? "" : "px-6 py-24 lg:px-8"}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          {!bare && <span className="eyebrow">Try it</span>}
          <h2 className={bare ? "text-4xl text-navy sm:text-5xl" : "mt-5 text-5xl text-navy sm:text-6xl"}>
            The Pour Price Calculator
          </h2>
          <p className="mt-6 max-w-lg text-lg text-navy/75">
            Homeowners get a real price range in 30 seconds. You get their name,
            number and project details, and the tire-kickers screen themselves
            out before they ever call you.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Uses your prices, finishes and job minimum",
              "Every lead texts straight to your phone",
              "Works around the clock, even while you're pouring",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-navy/85">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ember" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-xl shadow-navy/10 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="font-bold text-navy">What will my project cost?</p>
              <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy/60">
                Demo
              </span>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-2 text-sm font-medium text-navy/70">Project</p>
                <Choice options={projects} value={project} onChange={setProject} />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-navy/70">Size</p>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <label className="block">
                    <span className="sr-only">Length in feet</span>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      value={length}
                      onChange={(e) => setLength(Number(e.target.value))}
                      className={numberInput}
                      aria-label="Length in feet"
                    />
                  </label>
                  <span className="text-navy/50">×</span>
                  <label className="block">
                    <span className="sr-only">Width in feet</span>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className={numberInput}
                      aria-label="Width in feet"
                    />
                  </label>
                </div>
                <p className="mt-2 text-sm text-navy/60">
                  Feet, length × width. That&apos;s {sqft.toLocaleString()} sq ft.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-navy/70">Finish</p>
                <Choice options={finishes} value={finish} onChange={setFinish} />
              </div>

              <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-navy">
                <input
                  type="checkbox"
                  checked={tearOut}
                  onChange={(e) => setTearOut(e.target.checked)}
                  className="h-4 w-4 accent-royal"
                />
                Remove old concrete first
              </label>
            </div>

            <div className="mt-7 rounded-2xl bg-navy p-6 text-white">
              <p className="text-sm text-white/60">Estimated price</p>
              <p className="mt-1 font-[family-name:var(--font-anton)] text-4xl tracking-wide sm:text-5xl">
                {low === high ? usd(low) : `${usd(low)} to ${usd(high)}`}
              </p>
              <p className="mt-2 text-sm text-white/60">
                {atMinimum
                  ? `Small jobs start at our ${usd(MINIMUM)} minimum.`
                  : `About $${perLow} to $${perHigh} per sq ft.`}
              </p>
              <button
                type="button"
                onClick={() => setAsked(true)}
                className="mt-5 w-full rounded-full bg-ember px-6 py-3 text-base font-semibold text-white transition hover:scale-[1.01]"
              >
                Get my exact quote
              </button>
              {asked && (
                <p className="mt-4 rounded-xl bg-white/10 p-4 text-sm text-white/85">
                  On your website, this is where the homeowner leaves their name,
                  number and photos, and the lead texts straight to you with
                  everything above.
                </p>
              )}
            </div>

            <p className="mt-4 text-xs text-navy/50">
              Example pricing for this demo. Your calculator uses your own prices.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
