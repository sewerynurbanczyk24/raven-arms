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
  title: "Raven Arms | Komponenty CNC klasy premium",
  description:
    "Raven Arms projektuje i produkuje komponenty CNC klasy premium do platform AR15, PCC, pistoletów sportowych oraz strzelb.",

  keywords: [
    "Raven Arms",
    "AR15",
    "PCC",
    "strzelectwo sportowe",
    "komponenty CNC",
    "charging handle",
    "trigger",
    "tuning broni",
    "akcesoria strzeleckie",
    "Made in Poland",
  ],

  authors: [
    {
      name: "Raven Arms",
    },
  ],

  creator: "Raven Arms",

  openGraph: {
    title: "Raven Arms",
    description:
      "Komponenty CNC klasy premium dla najbardziej wymagających strzelców.",
    siteName: "Raven Arms",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}