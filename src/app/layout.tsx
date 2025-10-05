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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
