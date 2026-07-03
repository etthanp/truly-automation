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
          <a href="#" className="flex items-center gap-3">
            <svg width="36" height="32" viewBox="0 0 110 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="52,0 65,0 98,95 84,95 58.5,18 33,95 19,95" fill="#2563eb"/>
              <polygon points="36,62 44,62 50,78 42,78" fill="white"/>
              <rect x="0" y="0" width="68" height="15" rx="2" fill="white"/>
              <rect x="20" y="0" width="17" height="80" rx="2" fill="white"/>
            </svg>
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
          <p>Built by Ethan, Founder &amp; Automation Consultant</p>
        </div>
      </div>
    </footer>
  );
}
