import type { NextConfig } from "next";

// The old per-industry pages (/roofing, /dental...), removed when the site became Truly Front Desk.
const OLD_INDUSTRY_PAGES = [
  "accountants",
  "adu-builders",
  "appliance-repair",
  "auto-body",
  "auto-detailing",
  "auto-repair",
  "barbershops",
  "cabinets-countertops",
  "carpet-cleaning",
  "catering",
  "chimney-sweeps",
  "chiropractors",
  "concrete",
  "dance-studios",
  "daycares",
  "decks",
  "dental",
  "dog-grooming",
  "dog-trainers",
  "electrical",
  "epoxy-floors",
  "event-rentals",
  "excavation",
  "fencing",
  "flooring",
  "foundation-repair",
  "garage-doors",
  "gutters",
  "gyms",
  "handyman",
  "holiday-lighting",
  "house-cleaning",
  "hvac",
  "insulation",
  "insurance-agents",
  "junk-removal",
  "landscaping",
  "law-firms",
  "locksmith",
  "martial-arts",
  "masonry",
  "massage",
  "med-spa",
  "movers",
  "nail-salons",
  "optometrists",
  "painting",
  "paving",
  "pest-control",
  "pet-boarding",
  "photographers",
  "physical-therapy",
  "plumbing",
  "pools",
  "pressure-washing",
  "property-management",
  "real-estate",
  "remodeling",
  "restaurants",
  "restoration",
  "roofing",
  "salons",
  "septic",
  "siding",
  "solar",
  "tattoo-shops",
  "towing",
  "tree-service",
  "tutoring",
  "veterinarians",
  "wedding-venues",
  "window-cleaning",
  "windows-doors",
  "yoga-pilates",
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/front-desk/verify", headers: [{ key: "Referrer-Policy", value: "strict-origin" }, { key: "Cache-Control", value: "private, no-store" }] },
      { source: "/front-desk/sw.js", headers: [
        { key: "Service-Worker-Allowed", value: "/front-desk" },
        { key: "Cache-Control", value: "no-cache" },
      ] },
      { source: "/front-desk/:path*", headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin" },
      ] },
    ];
  },
  // Old pages folded into the homepage, including the industry and checkup pages
  // from before the site was just Truly Front Desk (old emails still link to them).
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/", permanent: true },
      { source: "/samples", destination: "/", permanent: true },
      { source: "/checkup/:slug*", destination: "/", permanent: true },
      ...OLD_INDUSTRY_PAGES.map((slug) => ({ source: `/${slug}`, destination: "/", permanent: true })),
      // The sales portal for setters lives on its own subdomain.
      { source: "/portal", destination: "https://portal.trulyautomation.com", permanent: false },
    ];
  },
};

export default nextConfig;
