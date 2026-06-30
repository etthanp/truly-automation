const links = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-12 text-white/70 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-lg font-bold text-white">
              T
            </span>
            <span className="text-lg font-bold text-white">
              Truly Automation
            </span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:ethan@trulyautomation.com"
            className="text-sm transition hover:text-white"
          >
            ethan@trulyautomation.com
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Truly Automation. All rights reserved.</p>
          <p>Built by Ethan Presley, Founder & Automation Consultant</p>
        </div>
      </div>
    </footer>
  );
}
