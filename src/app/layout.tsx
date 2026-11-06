import type { Metadata } from "next";
import { Anton, Caveat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd, websiteJsonLd } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "Truly Automation | AI Systems Built for Local Businesses",
  description:
    "Truly Automation builds and runs real AI systems for local businesses: an AI receptionist that answers every call 24/7 and books appointments, automatic follow-ups, and a dashboard with every call, customer and job. Built to do the work of a $40,000-a-year hire.",
  openGraph: {
    title: "Real AI systems. Built by us.",
    description:
      "An AI receptionist that answers every call and books appointments, automatic follow-ups, and your own dashboard. Built and run by Truly Automation.",
    url: "https://trulyautomation.com",
    siteName: "Truly Automation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${caveat.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';window.scrollTo(0,0);window.addEventListener('load',function(){window.scrollTo(0,0);});" }} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
