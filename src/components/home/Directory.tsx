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

function Card({ i }: { i: DirectoryItem }) {
  return (
    <Link
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
  );
}

export default function Directory({ items, categories }: { items: DirectoryItem[]; categories: string[] }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string[]>([]);
  const query = q.trim().toLowerCase();
  const matches = query
    ? items.filter((i) => `${i.name} ${i.tagline} ${i.category}`.toLowerCase().includes(query))
    : [];
  const toggle = (cat: string) => setOpen((o) => (o.includes(cat) ? o.filter((c) => c !== cat) : [...o, cat]));

  return (
    <section id="industries" className="scroll-mt-24 bg-gradient-to-b from-background to-royal/5 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">Find your business</span>
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">Pick your industry</h2>
          <p className="mt-4 text-lg text-navy/70">
            Search for your business or open a category. Each page shows the systems we build for
            that business, with a tool you can try.
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
            placeholder="Search, e.g. roofing, dentist, salon"
            className="w-full rounded-full border border-navy/15 bg-white px-6 py-3.5 text-base text-navy shadow-sm outline-none placeholder:text-navy/40 focus:border-royal"
          />
        </div>

        {query ? (
          matches.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {matches.map((i) => (
                <Card key={i.slug} i={i} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-navy/70">
              We haven&apos;t built a page for that yet.{" "}
              <Link href={`/contact?business=${encodeURIComponent(q)}`} className="font-semibold text-royal underline underline-offset-4">
                Get a free checkup
              </Link>{" "}
              and we&apos;ll build your plan.
            </p>
          )
        ) : (
          <div className="mx-auto mt-10 max-w-4xl divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
            {categories.map((cat) => {
              const list = items.filter((i) => i.category === cat);
              if (!list.length) return null;
              const isOpen = open.includes(cat);
              const preview = list.slice(0, 3).map((i) => i.name).join(", ");
              const id = `cat-${cat.replace(/\W+/g, "-").toLowerCase()}`;
              return (
                <div key={cat}>
                  <button
                    type="button"
                    onClick={() => toggle(cat)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-royal/5 sm:px-6"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block font-bold text-navy">
                        {cat} <span className="font-medium text-navy/45">({list.length})</span>
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-navy/55">
                        {preview}
                        {list.length > 3 ? ` and ${list.length - 3} more` : ""}
                      </span>
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy transition ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    >
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div id={id} className="grid gap-4 bg-background/60 px-5 pb-6 pt-2 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
                      {list.map((i) => (
                        <Card key={i.slug} i={i} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <p className="mt-8 text-center text-sm text-navy/60">
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
