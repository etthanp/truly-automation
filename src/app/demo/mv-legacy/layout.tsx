import type { Metadata } from "next";
import Link from "next/link";
import { ChatButton } from "@/components/MVLegacyChat";
import { BASE, EMAIL, IMG, PHONE, TEL } from "./data";

// Private prospect demo: a small two-page site (Home + Services) for M.V. Legacy Construction
// (Dudley / Goldsboro, NC), shared by link with Carlos, never indexed. Logo and photos are their
// own from mvlegacyconstruction.com; every fact comes from that site.
export const metadata: Metadata = {
  title: "M.V. Legacy Construction | Goldsboro, NC | Demo by Truly Automation",
  robots: { index: false, follow: false },
};

// Their logo is red and black on transparent, so the header and footer are light.
function Logo({ className = "h-11 sm:h-12" }: { className?: string }) {
  return <img src={`${IMG}/logo.webp`} alt="M.V. Legacy Construction" className={`w-auto ${className}`} />;
}

export default function MVLegacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#f5f3f1] text-[#141414]">
      <div className="bg-black px-4 py-2 text-center text-[12px] text-white/80">
        <span className="font-semibold text-white">Demo site for M.V. Legacy Construction</span> built
        by Truly Automation · not live yet
      </div>

      <header className="sticky top-0 z-30 border-b-4 border-[#c8191f] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <Link href={BASE} className="flex shrink-0 items-center" aria-label="M.V. Legacy home">
            <Logo />
          </Link>
          <nav className="flex items-center gap-4 text-sm font-semibold text-black/70 sm:gap-7">
            <Link href={BASE} className="hover:text-[#c8191f]">Home</Link>
            <Link href={`${BASE}/services`} className="hover:text-[#c8191f]">Services</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={TEL}
              className="hidden rounded-full border border-black/15 px-4 py-2 text-sm font-bold lg:inline-flex"
            >
              📞 {PHONE}
            </a>
            <ChatButton
              message="I'd like a free estimate"
              className="rounded-full bg-[#c8191f] px-3.5 py-2 text-sm font-bold whitespace-nowrap text-white transition hover:bg-[#141414] sm:px-4"
            >
              Free Estimate
            </ChatButton>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t-4 border-[#c8191f] bg-white px-4 pt-10 pb-24 text-sm text-black/65 sm:px-6 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-6">
          <div>
            <Logo className="h-14" />
            <p className="mt-3">PO Box 210, Dudley, NC 28333 · Serving Goldsboro &amp; Eastern NC</p>
            <p className="mt-1">
              <a href={TEL} className="hover:text-black">{PHONE}</a> ·{" "}
              <a href={`mailto:${EMAIL}`} className="hover:text-black">{EMAIL}</a>
            </p>
            <p className="mt-1">Open 9am to 5pm · Chat answers 24/7</p>
          </div>
          <p className="text-xs text-black/40">
            © 2026 MV Legacy Construction Inc.
            <br />
            Demo website by Truly Automation
          </p>
        </div>
      </footer>
    </div>
  );
}
