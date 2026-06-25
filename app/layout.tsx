import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solstice Prep — Your Brightest Score Starts Here",
  description:
    "Custom ACT blueprints, top 1% tutors, and a tailored path to your target score — guaranteed. Solstice Prep is premium 1-on-1 ACT tutoring built for results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
