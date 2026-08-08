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
  title: "Probitas — Structural Engineering Consultancy | Where Excellence Meets Integrity",
  description:
    "Probitas is a structural engineering consultancy delivering innovative, value-led design and independent peer review across RCC and steel — for projects from airports and hangars to high-rise towers across India.",
  keywords: [
    "structural engineering consultancy",
    "structural design India",
    "structural peer review",
    "RCC design",
    "steel structure design",
    "high-rise structural design",
    "Probitas",
  ],
  authors: [{ name: "Probitas" }],
  icons: {
    icon: "/images/probitas-logo.png",
  },
  openGraph: {
    title: "Probitas — Where Excellence Meets Integrity",
    description:
      "A passionate team of highly skilled structural engineers delivering innovative and value-led solutions across India.",
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
