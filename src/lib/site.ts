import { EMAIL, LEGAL_NAME, PHONE_DISPLAY } from "./contact";
import { FEATURES } from "./frontdesk";

export const SITE_URL = "https://trulyautomation.com";

// Official profiles for this business (Google Business Profile, Clutch, LinkedIn, TikTok...).
// Search engines and AI assistants use these to confirm the company is real. Add each URL here.
export const PROFILES: string[] = [];

export const COMPANY_DESCRIPTION =
  "Truly Automation builds and runs AI front desks for local businesses. Each one includes an AI receptionist that answers every call 24/7, books appointments on the business's calendar and takes notes on every caller, plus a front desk dashboard and customer list where the owner sees every call, appointment, customer and job.";

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
      "AI receptionists",
      "AI front desk software",
      "Call answering",
      "Appointment scheduling",
      "Lead qualification",
      "CRM dashboards for small businesses",
      "Local service businesses",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Front Desk",
      itemListElement: FEATURES.map((c) => ({
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
