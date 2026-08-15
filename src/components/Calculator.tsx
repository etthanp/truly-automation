"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const BOOKING_RATE = 1 / 3; // ~1 in 3 missed callers would have booked
const MONTHLY_COST = 300; // Truly Automation monthly price
const ANNUAL_COST = MONTHLY_COST * 12;

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export default function Calculator() {
  const [missedPerWeek, setMissedPerWeek] = useState(8);
  const [avgJob, setAvgJob] = useState(400);

  const annualMissed = missedPerWeek * 52;
  const recoverableJobs = Math.round(annualMissed * BOOKING_RATE);
  const lostRevenue = Math.round(recoverableJobs * avgJob);
  const breakEvenJobs = Math.max(1, Math.ceil(ANNUAL_COST / avgJob));

  return (
    <section id="calculator" className="bg-navy px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            The cost
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            How much are missed calls costing you?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Drag the sliders to your numbers. Most owners are surprised how fast
            it adds up.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-2 lg:p-10">
            {/* Sliders */}
            <div className="flex flex-col justify-center gap-10">
              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="missed" className="text-sm font-medium text-white/80">
                    Calls you miss per week
                  </label>
                  <span className="text-2xl font-extrabold text-sky">
                    {missedPerWeek}
                  </span>
                </div>
                <input
                  id="missed"
                  type="range"
                  min={1}
                  max={30}
                  value={missedPerWeek}
                  onChange={(e) => setMissedPerWeek(Number(e.target.value))}
                  className="mt-3 w-full accent-ember"
                />
                <div className="mt-1 flex justify-between text-xs text-white/40">
                  <span>1</span>
                  <span>30+</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="job" className="text-sm font-medium text-white/80">
                    Average job value
                  </label>
                  <span className="text-2xl font-extrabold text-sky">
                    {usd(avgJob)}
                  </span>
                </div>
                <input
                  id="job"
                  type="range"
                  min={150}
                  max={8000}
                  step={50}
                  value={avgJob}
                  onChange={(e) => setAvgJob(Number(e.target.value))}
                  className="mt-3 w-full accent-ember"
                />
                <div className="mt-1 flex justify-between text-xs text-white/40">
                  <span>$150 service call</span>
                  <span>$8k replacement</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-ember/20 to-royal/20 p-8 text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-white/70">
                Revenue walking out the door
              </p>
              <p className="mt-2 text-5xl font-extrabold text-white">
                {usd(lostRevenue)}
                <span className="text-xl font-semibold text-white/60">/yr</span>
              </p>
              <p className="mt-4 text-sm text-white/70">
                That&apos;s about{" "}
                <span className="font-bold text-white">{recoverableJobs} jobs a year</span>{" "}
                you could be booking — assuming just 1 in 3 of those callers
                would have hired you.
              </p>
              <div className="mt-6 rounded-xl border border-white/15 bg-navy/40 p-4">
                <p className="text-sm text-white/80">
                  Truly Automation is <span className="font-bold text-sky">{usd(MONTHLY_COST)}/mo</span>.
                  Recover just{" "}
                  <span className="font-bold text-ember">{breakEvenJobs} job{breakEvenJobs === 1 ? "" : "s"}</span>{" "}
                  a year and it&apos;s already paid for itself.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-block rounded-full bg-ember px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-ember/30 transition hover:scale-105"
            >
              Stop the leak — get started
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
