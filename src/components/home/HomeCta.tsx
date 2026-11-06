import Link from "next/link";
import Reveal from "../Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export default function HomeCta({ business }: { business?: string }) {
  const href = business ? `/contact?business=${encodeURIComponent(business)}` : "/contact";
  return (
    <section className="px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-5xl text-navy sm:text-6xl">Stop missing calls.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy/70">
          Get a free automation checkup. We&apos;ll look at how your calls and follow-ups get
          handled today and show you exactly what our AI would take off your plate.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-md bg-royal px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
          >
            Get your free checkup <span aria-hidden>→</span>
          </Link>
          <a href={PHONE_HREF} className="text-base font-semibold text-navy underline-offset-4 hover:underline">
            or call {PHONE_DISPLAY}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
