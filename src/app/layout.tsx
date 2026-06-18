import type { Metadata } from "next";
import { Geist, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiranrega.is-a.dev"),
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
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "Kiran Kumar Rega | Full-Stack Software Engineer",
    description:
      "React, TypeScript, Next.js, and Node.js portfolio focused on measurable frontend and full-stack engineering impact.",
    url: "https://kiranrega.is-a.dev",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="Ye6b8f28-0574-49c0-bfa6-2067d7fc117d"
          data-user="kiranrega"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}

{/* <script src="https://cdn.counter.dev/script.js" data-id="Ye6b8f28-0574-49c0-bfa6-2067d7fc117d" data-user="kiranrega"></script> */}
