"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../Reveal";

export interface DirectoryItem {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  category: string;
}

function Item({ i }: { i: DirectoryItem }) {
  return (
    <Link
      href={`/${i.slug}`}
      title={i.tagline}
      className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.95rem] font-medium text-navy transition hover:bg-royal/5 hover:text-royal"
    >
      <span className="text-lg leading-none" aria-hidden>
        {i.icon}
      </span>
      <span className="truncate">{i.name}</span>
      <span className="ml-auto text-navy/30 transition group-hover:translate-x-0.5 group-hover:text-royal" aria-hidden>
        →
      </span>
    </Link>
  );
}

export default function Directory({ items, categories }: { items: DirectoryItem[]; categories: string[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const query = q.trim().toLowerCase();
  const cats = categories.filter((c) => items.some((i) => i.category === c));
  const shown = query
    ? items.filter((i) => `${i.name} ${i.tagline} ${i.category}`.toLowerCase().includes(query))
    : cat
      ? items.filter((i) => i.category === cat)
      : [];

  return (
    <section id="industries" className="scroll-mt-24 bg-gradient-to-b from-background to-royal/5 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">Find your business</span>
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">Pick your industry</h2>
        </Reveal>

        <div className="mx-auto mt-8 max-w-xl">
          <label htmlFor="industry-search" className="sr-only">
            Search industries
          </label>
          <input
            id="industry-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search, e.g. roofing, dentist, salon"
            className="w-full rounded-full border border-navy/15 bg-white px-6 py-3.5 text-base text-navy shadow-sm outline-none placeholder:text-navy/40 focus:border-royal"
          />
        </div>

        {!query && (
          <div className="mt-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Industry categories">
            {cats.map((c) => {
              const active = cat === c;
              return (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCat(active ? null : c)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-navy/15 bg-white text-navy/80 hover:border-royal/50 hover:text-royal"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        )}

        {shown.length > 0 && (
          <div className="mt-6 rounded-2xl border border-navy/10 bg-white p-2 shadow-sm sm:p-3">
            <div className="grid gap-x-2 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((i) => (
                <Item key={i.slug} i={i} />
              ))}
            </div>
          </div>
        )}

        {query && shown.length === 0 && (
          <p className="mt-6 text-center text-navy/70">
            We haven&apos;t built a page for that yet.{" "}
            <Link href={`/contact?business=${encodeURIComponent(q)}`} className="font-semibold text-royal underline underline-offset-4">
              Get a free checkup
            </Link>{" "}
            and we&apos;ll build your plan.
          </p>
        )}

        <p className="mt-6 text-center text-sm text-navy/60">
          Don&apos;t see yours?{" "}
          <Link href="/contact" className="font-semibold text-royal underline underline-offset-4">
            Tell us about your business
          </Link>{" "}
          and we&apos;ll build a plan for it.
        </p>
      </div>
    </section>
  );
}
