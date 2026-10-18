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

export default function Directory({ items, categories }: { items: DirectoryItem[]; categories: string[] }) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const shown = query
    ? items.filter((i) => `${i.name} ${i.tagline} ${i.category}`.toLowerCase().includes(query))
    : items;

  return (
    <section id="industries" className="scroll-mt-24 bg-gradient-to-b from-background to-royal/5 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">Find your business</span>
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">Pick your industry</h2>
          <p className="mt-4 text-lg text-navy/70">
            Each page shows the systems we build for that business, with a tool you can try.
            New industries are added every week.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-xl">
          <label htmlFor="industry-search" className="sr-only">
            Search industries
          </label>
          <input
            id="industry-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search, e.g. roofing, plumber, pools"
            className="w-full rounded-full border border-navy/15 bg-white px-6 py-3.5 text-base text-navy shadow-sm outline-none placeholder:text-navy/40 focus:border-royal"
          />
        </div>

        {categories.map((cat) => {
          const list = shown.filter((i) => i.category === cat);
          if (!list.length) return null;
          return (
            <div key={cat} className="mt-12">
              <h3 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-navy/50">{cat}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/${i.slug}`}
                    className="group flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-royal/40 hover:shadow-lg hover:shadow-royal/10"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember/15 to-sky/20 text-2xl" aria-hidden>
                      {i.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold text-navy group-hover:text-royal">{i.name}</span>
                      <span className="mt-1 block text-sm text-navy/65">{i.tagline}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {shown.length === 0 && (
          <p className="mt-12 text-center text-navy/70">
            We haven&apos;t built a page for that yet.{" "}
            <Link href={`/contact?business=${encodeURIComponent(q)}`} className="font-semibold text-royal underline underline-offset-4">
              Get a free checkup
            </Link>{" "}
            and we&apos;ll build your plan.
          </p>
        )}
      </div>
    </section>
  );
}
