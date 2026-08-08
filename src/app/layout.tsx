import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interDisplay = Inter({
  variable: "--font-inter-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "[BUSINESS NAME] — Structural · MEP · Independent Peer Review",
  description:
    "[SHORT COMPANY DESCRIPTION — OWNER TO PROVIDE] Premium engineering consultancy delivering structural design, MEP design and independent peer review.",
  keywords: [
    "structural engineering consultancy",
    "MEP design consultancy",
    "structural peer review",
    "MEP peer review",
    "engineering consultancy",
  ],
  authors: [{ name: "[BUSINESS NAME — OWNER TO PROVIDE]" }],
  openGraph: {
    title: "[BUSINESS NAME] — Engineering Consultancy",
    description:
      "[SHORT COMPANY DESCRIPTION — OWNER TO PROVIDE]",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interDisplay.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
