import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPage from "@/components/industry/IndustryPage";
import { getIndustry, industries } from "@/lib/industries";

// Only industries listed in src/lib/industries exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const ind = getIndustry(industry);
  return ind ? { title: ind.meta.title, description: ind.meta.description } : {};
}

export default async function Page({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const ind = getIndustry(industry);
  if (!ind) notFound();
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <IndustryPage ind={ind} />
      </main>
      <Footer />
    </>
  );
}
