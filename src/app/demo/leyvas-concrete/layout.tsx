import type { Metadata } from "next";
import Link from "next/link";
import { ChatButton } from "@/components/LeyvasChat";
import { BASE, IMG, PHONE, TEL } from "./data";

// Private prospect demo: a small two-page site (Home + Services) for Leyva's Concrete &
// Landscaping (New Castle, DE), shared by link at the meeting, never indexed. Photos are their
// own job photos from leyvasconcreteandlandscapedelaware.com; ratings are from their Google profile.
export const metadata: Metadata = {
  title: "Leyva's Concrete & Landscaping | New Castle, DE | Demo by Truly Automation",
  robots: { index: false, follow: false },
};

export default function LeyvasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#f3f1ea] text-[#14211a]">
      <div className="bg-black px-4 py-2 text-center text-[12px] text-white/80">
        <span className="font-semibold text-white">Demo site for Leyva&apos;s</span> built by
        Truly Automation · not live yet
      </div>

      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <Link href={BASE} className="flex shrink-0 items-center">
            <img src={`${IMG}/logo.png`} alt="Leyva's Concrete & Landscaping" className="h-11 w-auto sm:h-14" />
          </Link>
          <nav className="flex items-center gap-4 text-sm font-semibold text-black/70 sm:gap-7">
            <Link href={BASE} className="hover:text-[#2f8a3c]">Home</Link>
            <Link href={`${BASE}/services`} className="hover:text-[#2f8a3c]">Services</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={TEL}
              className="hidden rounded-full border border-[#10241a]/15 px-4 py-2 text-sm font-bold lg:inline-flex"
            >
              📞 {PHONE}
            </a>
            <ChatButton
              message="I'd like a free estimate"
              className="rounded-full bg-[#2f8a3c] px-3.5 py-2 text-sm font-bold whitespace-nowrap text-white transition hover:bg-[#10241a] sm:px-4"
            >
              Free Estimate
            </ChatButton>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#0b1912] px-4 pt-10 pb-24 text-sm text-white/70 sm:px-6 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-6">
          <div>
            <img src={`${IMG}/logo.png`} alt="Leyva's Concrete & Landscaping" className="h-12 w-auto rounded-lg bg-white p-1" />
            <p className="mt-3">14 S Independence Blvd, New Castle, DE 19720</p>
            <p className="mt-1">
              <a href={TEL} className="hover:text-white">{PHONE}</a> · Open 24 hours · Licensed &amp; insured
            </p>
          </div>
          <p className="text-xs text-white/40">
            © 2026 Leyva&apos;s Concrete &amp; Landscaping LLC
            <br />
            Demo website by Truly Automation
          </p>
        </div>
      </footer>
    </div>
  );
}
