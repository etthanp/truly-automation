import Link from "next/link";

/** A slow scrolling strip of every industry we serve. Pauses on hover and for reduced motion. */
export default function IndustryTicker({ items }: { items: { slug: string; name: string }[] }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((i) => (
        <li key={i.slug} className="flex items-center">
          <Link
            href={`/${i.slug}`}
            tabIndex={hidden ? -1 : undefined}
            className="whitespace-nowrap px-6 font-[family-name:var(--font-anton)] text-2xl uppercase tracking-wide text-white/85 transition hover:text-white sm:text-3xl"
          >
            {i.name}
          </Link>
          <span className="text-ember" aria-hidden>
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Industries we serve" className="ticker overflow-hidden bg-navy py-5">
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
