"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../Reveal";
import { STATES, isTaken } from "@/lib/territories";

type Result = { city: string; state: string; taken: boolean } | null;

const titleCase = (s: string) => s.trim().replace(/\s+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function CityCheck({ slug, name, one, who }: { slug: string; name: string; one: string; who: string }) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [result, setResult] = useState<Result>(null);
  const [error, setError] = useState("");

  function check(e: React.FormEvent) {
    e.preventDefault();
    const c = titleCase(city);
    if (c.length < 2 || !/[a-z]/i.test(c)) return setError("Type the name of your city.");
    if (!state) return setError("Pick your state.");
    setError("");
    setResult({ city: c, state, taken: isTaken(slug, c, state) });
  }

  const place = result ? `${result.city}, ${result.state}` : "";
  const contactHref = `/contact?business=${encodeURIComponent(name)}&city=${encodeURIComponent(place)}`;

  return (
    <section id="city" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl text-navy sm:text-6xl">Is your city still open?</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy/70">
          We only work with one {one} per city. Check yours before a competitor claims it.
        </p>
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-9 max-w-2xl">
        <form onSubmit={check} className="flex flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-3 shadow-sm sm:flex-row">
          <label htmlFor="city-input" className="sr-only">
            City
          </label>
          <input
            id="city-input"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setResult(null);
            }}
            placeholder="Your city"
            autoComplete="address-level2"
            className="min-w-0 flex-1 rounded-xl bg-background px-4 py-3 text-base text-navy outline-none placeholder:text-navy/40 focus:ring-2 focus:ring-royal/40"
          />
          <label htmlFor="state-input" className="sr-only">
            State
          </label>
          <select
            id="state-input"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setResult(null);
            }}
            className="rounded-xl bg-background px-4 py-3 text-base text-navy outline-none focus:ring-2 focus:ring-royal/40 sm:w-44"
          >
            <option value="">State</option>
            {STATES.map(([code, label]) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <button type="submit" className="rounded-xl bg-royal px-6 py-3 text-base font-semibold text-white transition hover:bg-navy">
            Check my city
          </button>
        </form>

        {error && <p className="mt-3 text-center text-sm text-ember">{error}</p>}

        <div aria-live="polite">
          {result && !result.taken && (
            <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-50 p-6 text-center">
              <p className="text-lg font-bold text-emerald-800">Good news, {place} is open for {who}.</p>
              <p className="mx-auto mt-2 max-w-md text-navy/70">
                It&apos;s first come, first served. Grab a free marketing checkup and we&apos;ll hold the
                spot while we put your plan together.
              </p>
              <Link
                href={contactHref}
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-royal px-6 py-3 font-semibold text-white transition hover:bg-navy"
              >
                Claim {result.city} <span aria-hidden>→</span>
              </Link>
            </div>
          )}
          {result && result.taken && (
            <div className="mt-5 rounded-2xl border border-ember/30 bg-ember/5 p-6 text-center">
              <p className="text-lg font-bold text-navy">{place} is already taken for {who}.</p>
              <p className="mx-auto mt-2 max-w-md text-navy/70">
                We already have a client in your industry there, so we won&apos;t work with their competitors. Nearby
                towns may still be open. Try another city, or join the waitlist in case it opens up.
              </p>
              <Link
                href={contactHref}
                className="mt-5 inline-flex items-center gap-2 rounded-md border border-navy/20 px-6 py-3 font-semibold text-navy transition hover:bg-white"
              >
                Join the waitlist <span aria-hidden>→</span>
              </Link>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
