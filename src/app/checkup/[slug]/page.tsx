import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { checkups, getCheckup, type Status } from "@/lib/checkups";
import { packages, usd } from "@/lib/packages";

// Only slugs listed in src/lib/checkups.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return checkups.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCheckup(slug);
  return {
    title: c
      ? `Marketing checkup for ${c.business} | Truly Automation`
      : "Marketing checkup | Truly Automation",
    robots: { index: false, follow: false },
  };
}

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#demo", label: "Live Demo" },
  { href: "/#packages", label: "Packages" },
  { href: "/#faq", label: "FAQ" },
];

const statusStyle: Record<Status, { dot: string; chip: string; label: string; icon: string }> = {
  good: { dot: "bg-emerald-500", chip: "bg-emerald-50 text-emerald-700", label: "Looking good", icon: "✓" },
  warn: { dot: "bg-amber-500", chip: "bg-amber-50 text-amber-700", label: "Needs work", icon: "!" },
  bad: { dot: "bg-red-500", chip: "bg-red-50 text-red-700", label: "Costing you jobs", icon: "✕" },
};

export default async function CheckupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCheckup(slug);
  if (!c) notFound();

  const items = c.sections.flatMap((s) => s.items);
  const counts = (["good", "warn", "bad"] as Status[]).map((s) => ({
    status: s,
    n: items.filter((i) => i.status === s).length,
  }));
  const pkg = packages.find((p) => p.name === c.recommended)!;
  const maxReviews = Math.max(...(c.competitors ?? []).map((x) => x.reviews), 1);

  return (
    <>
      <Navbar links={links} />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-b from-navy to-royal/90 px-6 pt-16 pb-20 text-white lg:px-8">
          <div className="mx-auto max-w-4xl">
            {c.sample && (
              <p className="mb-6 inline-block rounded-full bg-ember px-4 py-1.5 text-xs font-bold uppercase tracking-wide">
                Sample report · made-up business and numbers
              </p>
            )}
            <p className="text-sm font-bold uppercase tracking-wide text-sky">
              Free marketing checkup
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {c.business}
            </h1>
            <p className="mt-3 text-white/70">
              {c.trade} &middot; {c.city} &middot; Prepared {c.date} by Ethan,
              Truly Automation
            </p>
            <p className="mt-8 max-w-3xl text-lg text-white/90">{c.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {counts.map(({ status, n }) => (
                <span
                  key={status}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${statusStyle[status].dot}`} />
                  {n} {statusStyle[status].label.toLowerCase()}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Snapshot */}
        <section className="px-6 lg:px-8">
          <div className="mx-auto -mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {c.snapshot.map((s) => (
              <div key={s.label} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-lg shadow-navy/5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-navy/60">{s.label}</p>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${statusStyle[s.status].chip}`}>
                    {statusStyle[s.status].icon}
                  </span>
                </div>
                <p className="mt-2 text-3xl font-extrabold text-navy">{s.value}</p>
                {s.note && <p className="mt-1 text-sm text-navy/60">{s.note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Priorities */}
        <section className="px-6 pt-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-wide text-ember">Fix these first</p>
            <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
              Your top 3 priorities
            </h2>
            <ol className="mt-6 grid gap-4">
              {c.priorities.map((p, i) => (
                <li key={p.title} className="flex gap-5 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                    <p className="mt-1 text-navy/70">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Competitors */}
        {c.competitors && c.competitors.length > 0 && (
          <section className="px-6 pt-16 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-wide text-ember">How you compare</p>
              <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
                Google reviews vs. the top companies near you
              </h2>
              <div className="mt-6 space-y-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                {c.competitors.map((x) => (
                  <div key={x.name}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className={x.isYou ? "font-bold text-ember" : "font-semibold text-navy"}>
                        {x.name}
                        {x.isYou && " (you)"}
                      </span>
                      <span className="tabular-nums text-navy/60">
                        {x.rating.toFixed(1)}★ · {x.reviews} reviews
                      </span>
                    </div>
                    <div className="mt-1.5 h-3 rounded-full bg-navy/5">
                      <div
                        className={`h-3 rounded-full ${x.isYou ? "bg-ember" : "bg-royal/40"}`}
                        style={{ width: `${Math.max(2, (x.reviews / maxReviews) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Detailed checks */}
        <section className="px-6 pt-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-wide text-ember">The details</p>
            <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
              Everything we checked
            </h2>
            <div className="mt-6 grid gap-6">
              {c.sections.map((sec) => (
                <div key={sec.title} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                  <h3 className="border-b border-navy/10 bg-royal/5 px-6 py-3 font-bold text-navy">
                    {sec.title}
                  </h3>
                  <ul className="divide-y divide-navy/5">
                    {sec.items.map((it) => (
                      <li key={it.label} className="flex gap-4 px-6 py-4">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${statusStyle[it.status].chip}`}
                          aria-label={statusStyle[it.status].label}
                        >
                          {statusStyle[it.status].icon}
                        </span>
                        <div>
                          <p className="font-semibold text-navy">{it.label}</p>
                          <p className="mt-0.5 text-sm text-navy/70">{it.note}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border-2 border-ember bg-white shadow-xl shadow-ember/10">
            <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-ember">Our recommendation</p>
                <h2 className="mt-2 text-3xl font-extrabold text-navy">{pkg.name}</h2>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-navy">{usd(pkg.monthly)}</span>
                  <span className="text-navy/60">/ month</span>
                </div>
                <p className="text-sm text-navy/60">+ {usd(pkg.setup)} one-time setup</p>
                <p className="mt-5 text-navy/75">{c.recommendedWhy}</p>
              </div>
              <div className="flex flex-col">
                <ul className="space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy/80">
                      <span className="mt-0.5 text-ember">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex-1" />
                <a
                  href={`mailto:ethan@trulyautomation.com?subject=${encodeURIComponent(`Checkup for ${c.business}`)}`}
                  className="mt-8 block rounded-full bg-ember px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-ember/30 transition hover:scale-105"
                >
                  Let&apos;s talk about it
                </a>
                <Link
                  href="/#packages"
                  className="mt-3 block text-center text-sm font-semibold text-royal hover:text-navy"
                >
                  Compare all packages →
                </Link>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm text-navy/50">
            This report is yours to keep, whether you work with us or not. Questions?
            Email ethan@trulyautomation.com.
          </p>
        </section>
      </main>
      <Footer links={links} />
    </>
  );
}
