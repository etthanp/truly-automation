"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import Demo from "../Demo";
import Estimator from "./Estimator";
import type { Industry } from "@/lib/industries/types";

export default function IndustryTry({ ind }: { ind: Industry }) {
  const [tab, setTab] = useState<"estimator" | "receptionist">("estimator");
  const tabs = [
    { id: "estimator" as const, label: ind.estimator.name },
    { id: "receptionist" as const, label: ind.demo.name },
  ];
  const d = ind.demo;

  return (
    <section id="try" className="scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">Try it yourself</span>
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">See what your customers would see</h2>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <div role="tablist" className="inline-flex rounded-full border border-navy/10 bg-white p-1 shadow-sm">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition sm:px-6 ${
                  tab === t.id ? "bg-navy text-white" : "text-navy/70 hover:text-navy"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12" role="tabpanel">
          {tab === "estimator" ? (
            <Estimator config={ind.estimator} />
          ) : (
            <Demo
              bare
              bot={ind.slug}
              business={d.business}
              greeting={d.greeting}
              chips={d.chips}
              busy={d.busy}
              steps={d.steps}
            />
          )}
        </div>
      </div>
    </section>
  );
}
