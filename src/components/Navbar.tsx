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
        <a href="#" className="flex items-center gap-3">
          <svg width="44" height="38" viewBox="0 0 110 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* A blue (behind) */}
            <polygon points="52,0 65,0 98,95 84,95 58.5,18 33,95 19,95" fill="#2563eb"/>
            {/* A crossbar in dark */}
            <polygon points="36,62 44,62 50,78 42,78" fill="#111318"/>
            {/* T crossbar */}
            <rect x="0" y="0" width="68" height="15" rx="2" fill="#111318"/>
            {/* T stem */}
            <rect x="20" y="0" width="17" height="80" rx="2" fill="#111318"/>
          </svg>
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
