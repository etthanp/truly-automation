"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import PourCalculator from "./PourCalculator";
import Demo from "./Demo";

const tabs = [
  { id: "calculator", label: "Pour Price Calculator" },
  { id: "receptionist", label: "Photo Quote Line" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function TryIt() {
  const [tab, setTab] = useState<TabId>("calculator");

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
          {tab === "calculator" ? <PourCalculator bare /> : <Demo bare />}
        </div>
      </div>
    </section>
  );
}
