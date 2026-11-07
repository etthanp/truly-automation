import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/front-desk/verify", headers: [{ key: "Referrer-Policy", value: "no-referrer" }, { key: "Cache-Control", value: "private, no-store" }] },
      { source: "/front-desk/sw.js", headers: [
        { key: "Service-Worker-Allowed", value: "/front-desk" },
        { key: "Cache-Control", value: "no-cache" },
      ] },
      { source: "/front-desk/:path*", headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "no-referrer" },
      ] },
    ];
  },
  // Old pages folded into the homepage.
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/", permanent: true },
      { source: "/samples", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
