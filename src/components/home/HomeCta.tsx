import Link from "next/link";
import Reveal from "../Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export default function HomeCta() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-5xl text-navy sm:text-6xl">Don&apos;t see your business?</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy/70">
          We&apos;re adding new industries every week. Get a free marketing checkup and we&apos;ll
          build a plan for yours, and tell you if your city is still open.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-royal px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
          >
            Get your free checkup <span aria-hidden>→</span>
          </Link>
          <a href={PHONE_HREF} className="text-base font-semibold text-navy underline-offset-4 hover:underline">
            or call / text {PHONE_DISPLAY}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
