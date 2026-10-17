import type { Metadata } from "next";
import Link from "next/link";
import { ChatButton } from "@/components/BajaChat";
import { BASE, EMAIL, PHONE, TEL } from "./data";

// Private prospect demo: a small two-page site (Home + Services) for Baja Concrete (Mount Holly,
// NC), shared by link at the meeting, never indexed. Photos are their own job photos from
// bajaconcrete.com; every fact comes from that site.
export const metadata: Metadata = {
  title: "Baja Concrete | Charlotte & Lake Norman, NC | Demo by Truly Automation",
  robots: { index: false, follow: false },
};

// Their site has a text wordmark, not an image logo.
function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-display text-3xl tracking-wide sm:text-4xl ${light ? "text-white" : "text-[#11191c]"}`}>
        BAJA
      </span>
      <span className="text-[10px] font-bold tracking-[0.35em] text-[#d8922f] sm:text-[11px]">CONCRETE</span>
    </span>
  );
}

export default function BajaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#f4f3ef] text-[#11191c]">
      <div className="bg-black px-4 py-2 text-center text-[12px] text-white/80">
        <span className="font-semibold text-white">Demo site for Baja Concrete</span> built by
        Truly Automation · not live yet
      </div>

      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href={BASE} className="flex shrink-0 items-center" aria-label="Baja Concrete home">
            <Wordmark />
          </Link>
          <nav className="flex items-center gap-4 text-sm font-semibold text-black/70 sm:gap-7">
            <Link href={BASE} className="hover:text-[#b8741a]">Home</Link>
            <Link href={`${BASE}/services`} className="hover:text-[#b8741a]">Services</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={TEL}
              className="hidden rounded-full border border-[#11191c]/15 px-4 py-2 text-sm font-bold lg:inline-flex"
            >
              📞 {PHONE}
            </a>
            <ChatButton
              message="I'd like a free estimate"
              className="rounded-full bg-[#d8922f] px-3.5 py-2 text-sm font-bold whitespace-nowrap text-[#11191c] transition hover:bg-[#11191c] hover:text-white sm:px-4"
            >
              Free Estimate
            </ChatButton>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#0b1012] px-4 pt-10 pb-24 text-sm text-white/70 sm:px-6 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-6">
          <div>
            <Wordmark light />
            <p className="mt-3">1774 Old NC 27 Hwy, Mount Holly, NC 28120</p>
            <p className="mt-1">
              <a href={TEL} className="hover:text-white">{PHONE}</a> ·{" "}
              <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
            </p>
          </div>
          <p className="text-xs text-white/40">
            © 2026 Baja Concrete
            <br />
            Demo website by Truly Automation
          </p>
        </div>
      </footer>
    </div>
  );
}
