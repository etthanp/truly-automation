import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old pages folded into the homepage.
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/", permanent: true },
      { source: "/samples", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
