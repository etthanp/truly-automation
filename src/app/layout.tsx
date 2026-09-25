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
  title: "Truly Automation | We Fill Your Calendar With Qualified Sales Meetings",
  description:
    "Done-for-you client acquisition for B2B service companies. Truly Automation finds your ideal clients, reaches out by email, LinkedIn and phone, and books qualified meetings on your calendar — plus an AI receptionist so no lead goes cold.",
  openGraph: {
    title: "We fill your calendar with qualified sales meetings",
    description:
      "Done-for-you client acquisition for B2B service companies — plus an AI receptionist so no lead ever goes cold. Pay-per-meeting pilot, no long-term contract.",
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
