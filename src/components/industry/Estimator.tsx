"use client";

import { useState } from "react";
import type { EstimatorConfig, EstOption, EstProject, Range } from "@/lib/industries/types";
import { usd } from "@/lib/packages";

const roundTo100 = (n: number) => Math.round(n / 100) * 100;
const money = (n: number) => (Number.isInteger(n) ? `$${n.toLocaleString()}` : `$${n.toFixed(2)}`);

function startQty(p: EstProject): [number, number] {
  if (Array.isArray(p.start)) return p.start;
  if (typeof p.start === "number") return [p.start, 1];
  return p.unit === "area" ? [24, 20] : p.unit === "length" ? [150, 1] : [1, 1];
}

function Pills<T extends { key: string; label: string }>({
  items,
  value,
  onChange,
}: {
  items: T[];
  value: string;
  onChange: (key: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <button
          key={it.key}
          type="button"
          onClick={() => onChange(it.key)}
          aria-pressed={value === it.key}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            value === it.key
              ? "border-royal bg-royal text-white"
              : "border-navy/15 bg-white text-navy hover:border-royal/50"
          }`}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}

export default function Estimator({ config }: { config: EstimatorConfig }) {
  const [projectKey, setProjectKey] = useState(config.projects[0].key);
  const project = config.projects.find((p) => p.key === projectKey)!;
  const [qty, setQty] = useState<[number, number]>(startQty(project));
  const [choiceKey, setChoiceKey] = useState(config.choices?.[0]?.key ?? "");
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries((config.toggles ?? []).map((t) => [t.key, !!t.on]))
  );
  const [asked, setAsked] = useState(false);

  function pickProject(key: string) {
    const p = config.projects.find((x) => x.key === key)!;
    setProjectKey(key);
    setQty(startQty(p));
  }

  const units =
    project.unit === "area" ? Math.max(0, qty[0]) * Math.max(0, qty[1]) : project.unit === "none" ? 0 : Math.max(0, qty[0]);
  const sized = project.unit !== "none";

  // Choices and toggles only apply to sized projects when they're priced per unit.
  const extras: EstOption[] = [
    ...(config.choices?.filter((c) => c.key === choiceKey) ?? []),
    ...(config.toggles?.filter((t) => toggles[t.key]) ?? []),
  ];
  const sum = (i: 0 | 1) => {
    let total = (project.fixed?.[i] ?? 0) + (project.per?.[i] ?? 0) * units;
    for (const e of extras) total += (e.fixed?.[i] ?? 0) + (sized ? (e.per?.[i] ?? 0) * units : 0);
    return total;
  };
  const min = config.minimum ?? 0;
  const low = Math.max(min, roundTo100(sum(0)));
  const high = Math.max(min, roundTo100(sum(1)));
  const atMinimum = min > 0 && sum(0) < min;

  const perRange: Range | null =
    sized && units > 0 && project.per
      ? [
          project.per[0] + extras.reduce((a, e) => a + (e.per?.[0] ?? 0), 0),
          project.per[1] + extras.reduce((a, e) => a + (e.per?.[1] ?? 0), 0),
        ]
      : null;
  const unitWord =
    project.perWord ?? (project.unit === "area" ? "sq ft" : project.unit === "length" ? "foot" : (project.unitLabel ?? "").toLowerCase());

  const numberInput =
    "w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-base text-navy outline-none focus:border-royal";

  return (
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
      <div>
        <h3 className="text-4xl text-navy sm:text-5xl">{config.name}</h3>
        <p className="mt-6 max-w-lg text-lg text-navy/75">{config.blurb}</p>
        <ul className="mt-6 space-y-3">
          {config.bullets.map((t) => (
            <li key={t} className="flex items-start gap-3 text-navy/85">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ember" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-xl shadow-navy/10 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <p className="font-bold text-navy">{config.question}</p>
          <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy/60">Demo</span>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <p className="mb-2 text-sm font-medium text-navy/70">Project</p>
            <Pills items={config.projects} value={projectKey} onChange={pickProject} />
          </div>

          {project.unit === "area" && (
            <div>
              <p className="mb-2 text-sm font-medium text-navy/70">{project.unitLabel ?? "Size"}</p>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <input type="number" inputMode="numeric" min={0} value={qty[0]} onChange={(e) => setQty([Number(e.target.value), qty[1]])} className={numberInput} aria-label="Length in feet" />
                <span className="text-navy/50">×</span>
                <input type="number" inputMode="numeric" min={0} value={qty[1]} onChange={(e) => setQty([qty[0], Number(e.target.value)])} className={numberInput} aria-label="Width in feet" />
              </div>
              <p className="mt-2 text-sm text-navy/60">Feet, length × width. That&apos;s {units.toLocaleString()} sq ft.</p>
            </div>
          )}

          {(project.unit === "length" || project.unit === "count") && (
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy/70">{project.unitLabel ?? "Size"}</span>
              <input type="number" inputMode="numeric" min={0} value={qty[0]} onChange={(e) => setQty([Number(e.target.value), 1])} className={numberInput} />
            </label>
          )}

          {config.choices && config.choices.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-medium text-navy/70">{config.choiceLabel ?? "Option"}</p>
              <Pills items={config.choices} value={choiceKey} onChange={setChoiceKey} />
            </div>
          )}

          {config.toggles?.map((t) => (
            <label key={t.key} className="flex cursor-pointer items-center gap-3 text-sm font-medium text-navy">
              <input
                type="checkbox"
                checked={!!toggles[t.key]}
                onChange={(e) => setToggles({ ...toggles, [t.key]: e.target.checked })}
                className="h-4 w-4 accent-royal"
              />
              {t.label}
            </label>
          ))}
        </div>

        <div className="mt-7 rounded-2xl bg-navy p-6 text-white">
          <p className="text-sm text-white/60">Estimated price</p>
          <p className="mt-1 font-[family-name:var(--font-anton)] text-4xl tracking-wide sm:text-5xl">
            {low === high ? usd(low) : `${usd(low)} to ${usd(high)}`}
          </p>
          <p className="mt-2 text-sm text-white/60">
            {atMinimum
              ? `Small jobs start at our ${usd(min)} minimum.`
              : perRange
                ? `About ${money(perRange[0])} to ${money(perRange[1])} per ${unitWord}.`
                : "Final price after a free visit."}
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
              On your website, this is where the customer leaves their name,
              number and photos, and the lead texts straight to you with
              everything above.
            </p>
          )}
        </div>

        <p className="mt-4 text-xs text-navy/50">Example pricing for this demo. Your version uses your own prices.</p>
      </div>
    </div>
  );
}
