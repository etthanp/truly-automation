import type { Metadata } from "next";
import { Anton, Caveat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Truly Automation | Marketing for Concrete Contractors",
  description:
    "Truly Automation is the marketing team built only for concrete contractors: websites with an instant Pour Price Calculator, SEO and Job Site Pages, missed-call text-back, estimate follow-up, permit leads and builder outreach. One concrete company per city. Get a free marketing checkup.",
  openGraph: {
    title: "You pour the concrete. We fill the schedule.",
    description:
      "Websites, Google listings, reviews, social media, ads and a 24/7 AI receptionist for small businesses. Get a free marketing checkup.",
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
        {children}
      </body>
    </html>
  );
}
