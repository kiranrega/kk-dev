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
  metadataBase: new URL("https://kiranrega.netlify.app"),
  title: {
    default: "Kiran Kumar Rega | Full-Stack Software Engineer",
    template: "%s | Kiran Kumar Rega",
  },
  description:
    "Portfolio of Kiran Kumar Rega, a React, TypeScript, Next.js, and Node.js software engineer focused on frontend performance and product quality.",
  keywords: [
    "Full-Stack Software Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Frontend Portfolio",
  ],
  authors: [{ name: "Kiran Kumar Rega" }],
  openGraph: {
    title: "Kiran Kumar Rega | Full-Stack Software Engineer",
    description:
      "React, TypeScript, Next.js, and Node.js portfolio focused on measurable frontend and full-stack engineering impact.",
    url: "https://kiranrega.netlify.app",
    siteName: "Kiran Kumar Rega Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Kumar Rega | Full-Stack Software Engineer",
    description:
      "Portfolio for a React, TypeScript, Next.js, and Node.js software engineer.",
  },
  robots: {
    index: true,
    follow: true,
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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
