"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = { href: string; label: string };

const homeLinks: NavLink[] = [
  { href: "#approach", label: "Our approach" },
  { href: "#services", label: "What we do" },
  { href: "#trades", label: "Who we help" },
  { href: "#packages", label: "Packages" },
  { href: "#about", label: "About us" },
];

export default function Navbar({ links = homeLinks }: { links?: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Truly Automation" className="h-10 w-auto" />
          <span className="hidden whitespace-nowrap text-lg font-bold text-navy sm:inline">Truly Automation</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-navy/70 transition hover:text-royal"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="whitespace-nowrap rounded-md bg-royal px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-royal/30 transition hover:bg-navy lg:px-5 lg:py-2.5"
          >
            <span className="xl:hidden">Free checkup</span>
            <span className="hidden xl:inline">Free marketing checkup →</span>
          </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-navy" />
          <span className="h-0.5 w-6 bg-navy" />
          <span className="h-0.5 w-6 bg-navy" />
        </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy/5 bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-navy/70"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-royal px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Free marketing checkup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
