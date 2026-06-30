"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#demo", label: "Demo" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-lg font-bold text-white">
            T
          </span>
          <span className="text-lg font-bold text-navy">Truly Automation</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition hover:text-royal"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-royal/30 transition hover:bg-navy lg:inline-block"
        >
          Get Started
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-navy" />
          <span className="h-0.5 w-6 bg-navy" />
          <span className="h-0.5 w-6 bg-navy" />
        </button>
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
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-royal px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
