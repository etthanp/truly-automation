import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPage from "@/components/industry/IndustryPage";
import { getIndustry, industries } from "@/lib/industries";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

// Only industries listed in src/lib/industries exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const ind = getIndustry(industry);
  return ind
    ? {
        title: ind.meta.title,
        description: ind.meta.description,
        alternates: { canonical: `/${ind.slug}` },
        openGraph: { title: ind.meta.title, description: ind.meta.description, url: `/${ind.slug}` },
      }
    : {};
}

export default async function Page({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const ind = getIndustry(industry);
  if (!ind) notFound();
  const url = `${SITE_URL}/${ind.slug}`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Marketing for ${ind.who}`,
    serviceType: "Marketing agency services",
    description: ind.meta.description,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", audienceType: ind.who },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ind.faqs.map((f) => ({
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
