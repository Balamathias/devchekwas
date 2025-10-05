import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "DEVCHEKWAS GLOBAL LIMITED - Multi-Sector Business Solutions in Nigeria",
  description: "DEVCHEKWAS GLOBAL LIMITED delivers excellence across construction, IT, agriculture, oil & gas, and business solutions. CAC registered (RC: 6910062), serving government and private sectors nationwide.",
  keywords: "Nigeria business, construction, IT services, agribusiness, oil and gas, business consultancy, Abuja, CAC registered",
  authors: [{ name: "DEVCHEKWAS GLOBAL LIMITED" }],
  openGraph: {
    title: "DEVCHEKWAS GLOBAL LIMITED",
    description: "Your trusted multi-sector partner for comprehensive business solutions in Nigeria",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
