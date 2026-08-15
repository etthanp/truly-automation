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
  title: "Truly Automation | Never Lose Another HVAC Job to a Missed Call",
  description:
    "When an HVAC contractor misses a call, the customer calls a competitor. Truly Automation's AI receptionist instantly texts back every missed call, qualifies the customer, and books the job — 24/7, nights and weekends. Setup in days.",
  openGraph: {
    title: "Never lose another HVAC job to a missed call",
    description:
      "Your AI receptionist texts back every missed call in seconds, qualifies the customer, and books the job — 24/7. Built for HVAC contractors by Truly Automation.",
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
