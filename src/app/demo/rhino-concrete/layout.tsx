import type { Metadata } from "next";
import Link from "next/link";
import { ChatButton } from "@/components/RhinoChat";
import { BASE, EMAIL, IMG, PHONE, TEL } from "./data";

// Private prospect demo: a small two-page site (Home + Services) for Rhino Concrete (Charlotte,
// NC), shared by link at the meeting, never indexed. Logo and photos are their own from
// rhinoconcretenc.com; every fact comes from that site.
export const metadata: Metadata = {
  title: "Rhino Concrete | Charlotte, NC | Demo by Truly Automation",
  robots: { index: false, follow: false },
};

// Their logo is white, so the header and footer are dark.
function Logo({ className = "h-9 sm:h-10" }: { className?: string }) {
  return <img src={`${IMG}/logo.png`} alt="Rhino Concrete" className={`w-auto ${className}`} />;
}

export default function RhinoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#eef4fb] text-[#0a0e13]">
      <div className="bg-black px-4 py-2 text-center text-[12px] text-white/80">
        <span className="font-semibold text-white">Demo site for Rhino Concrete</span> built by
        Truly Automation · not live yet
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0e13]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href={BASE} className="flex shrink-0 items-center" aria-label="Rhino Concrete home">
            <Logo />
          </Link>
          <nav className="flex items-center gap-4 text-sm font-semibold text-white/75 sm:gap-7">
            <Link href={BASE} className="hover:text-[#6ab0ff]">Home</Link>
            <Link href={`${BASE}/services`} className="hover:text-[#6ab0ff]">Services</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={TEL}
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-bold lg:inline-flex"
            >
              📞 {PHONE}
            </a>
            <ChatButton
              message="I'd like a free quote"
              className="rounded-full bg-[#4080cc] px-3.5 py-2 text-sm font-bold whitespace-nowrap text-white transition hover:bg-white hover:text-[#0a0e13] sm:px-4"
            >
              Free Quote
            </ChatButton>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#0a0e13] px-4 pt-10 pb-24 text-sm text-white/70 sm:px-6 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-6">
          <div>
            <Logo className="h-10" />
            <p className="mt-3">301 McCullough Dr Suite 400, Charlotte, NC 28262</p>
            <p className="mt-1">
              <a href={TEL} className="hover:text-white">{PHONE}</a> ·{" "}
              <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
            </p>
            <p className="mt-1">Mon to Sun, 9am to 9pm</p>
          </div>
          <p className="text-xs text-white/40">
            © 2026 Rhino Concrete LLC
            <br />
            Demo website by Truly Automation
          </p>
        </div>
      </footer>
    </div>
  );
}
