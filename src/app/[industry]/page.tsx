import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPage from "@/components/industry/IndustryPage";
import { getIndustry, industries } from "@/lib/industries";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { FRONT_DESK_FAQS } from "@/lib/frontdesk";
import { WHY } from "@/lib/industries/why";
import type { Industry } from "@/lib/industries/types";

const metaFor = (ind: Industry) => ({
  title: `AI Receptionist & Front Desk for ${ind.name} | Truly Automation`,
  description: `An AI front desk for ${ind.who}, built and run by Truly Automation. ${WHY[ind.slug]}`.slice(0, 300),
});

// Only industries listed in src/lib/industries exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const ind = getIndustry(industry);
  if (!ind) return {};
  const meta = metaFor(ind);
  return {
    ...meta,
    alternates: { canonical: `/${ind.slug}` },
    openGraph: { ...meta, url: `/${ind.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const ind = getIndustry(industry);
  if (!ind) notFound();
  const url = `${SITE_URL}/${ind.slug}`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `AI front desk for ${ind.who}`,
    serviceType: "AI receptionist and front desk software",
    description: WHY[ind.slug],
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", audienceType: ind.who },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FRONT_DESK_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: ind.name, item: url },
    ],
  };
  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <JsonLd data={breadcrumbs} />
      <Navbar />
      <main className="flex-1">
        <IndustryPage ind={ind} />
      </main>
      <Footer />
    </>
  );
}
