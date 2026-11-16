import Link from "next/link";
import Reveal from "../Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export default function HomeCta() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-5xl text-navy sm:text-6xl">Stop missing calls.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy/70">
          Call Riley right now and hear what your customers would hear. Then book a demo and we&apos;ll
          build your Truly Front Desk.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-md bg-royal px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
          >
            Call Riley: {PHONE_DISPLAY}
          </a>
          <Link href="/contact" className="text-base font-semibold text-navy underline-offset-4 hover:underline">
            or book a demo →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
