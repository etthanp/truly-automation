import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines and AI assistants (ChatGPT, Claude, Perplexity, Gemini) are all welcome.
      { userAgent: "*", allow: "/", disallow: ["/api/", "/demo/", "/checkup/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
