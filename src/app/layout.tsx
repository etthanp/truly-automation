import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Truly Automation | The Marketing Team for Home & Outdoor Service Companies",
  description:
    "Truly Automation is the marketing team for HVAC, plumbing, electrical, roofing, concrete, landscaping and other trade businesses: websites, Google Business Profile, reviews, social media, ads and a 24/7 AI receptionist. Get a free marketing checkup.",
  openGraph: {
    title: "Your marketing team, without the payroll",
    description:
      "Websites, Google listings, reviews, social media, ads and a 24/7 AI receptionist for trade businesses. Get a free marketing checkup.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';window.scrollTo(0,0);window.addEventListener('load',function(){window.scrollTo(0,0);});" }} />
        {children}
      </body>
    </html>
  );
}
