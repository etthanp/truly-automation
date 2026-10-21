import { EMAIL, LEGAL_NAME, PHONE_DISPLAY } from "./contact";
import { CORE } from "./industries/core";

export const SITE_URL = "https://trulyautomation.com";

// Official profiles for this business (Google Business Profile, Clutch, LinkedIn, TikTok...).
// Search engines and AI assistants use these to confirm the company is real. Add each URL here.
export const PROFILES: string[] = [];

export const COMPANY_DESCRIPTION =
  "Truly Automation is a marketing agency for local service businesses. We build websites, run Google and Facebook ads, handle SEO and AI search, run outreach, and set up an AI receptionist that answers every call, qualifies leads and books them onto the calendar. Every plan is personalized, and we work with one business per industry per city.";

/** schema.org Organization for the whole site, read by Google and AI assistants. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Truly Automation",
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: COMPANY_DESCRIPTION,
    foundingDate: "2026-09-29",
    founder: { "@type": "Person", name: "Ethan Presley", jobTitle: "Founder" },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "North Carolina Secretary of State SOSID",
      value: "3392776",
    },
    address: { "@type": "PostalAddress", addressRegion: "NC", addressCountry: "US" },
    areaServed: { "@type": "Country", name: "United States" },
    email: EMAIL,
    telephone: PHONE_DISPLAY,
    knowsAbout: [
      "Local SEO",
      "AI search optimization",
      "Google Ads",
      "Facebook and Instagram ads",
      "AI receptionists",
      "Lead qualification",
      "Website design",
      "Online reviews",
      "Marketing for contractors and local service businesses",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing services",
      itemListElement: CORE.map((c) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: c.title, description: c.text },
      })),
    },
    ...(PROFILES.length ? { sameAs: PROFILES } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Truly Automation",
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
