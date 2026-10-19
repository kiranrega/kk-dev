import type { Metadata } from "next";
// Previous body font: import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { Caveat, Recursive } from "next/font/google";
import { CloudflareAnalytics } from "@/components/features/cloudflare-analytics";
import { ClickSound } from "@/components/features/click-sound";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

// Import only the faces used by the page. The geist/font/pixel barrel creates
// preload links for every pixel variant, including the unused ones.
const geistPixelGrid = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-pixel/GeistPixel-Grid.woff2",
  variable: "--font-geist-pixel-grid",
  weight: "500",
  display: "swap",
  adjustFontFallback: false,
});

const geistMono = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const recursive = Recursive({
  variable: "--font-recursive",
  subsets: ["latin"],
  axes: ["CASL", "MONO"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: false,
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
    // icon: [
    //   { url: "/assets/kiran_kumar_rega_sketch.png", sizes: "192x192", type: "image/png" },
    //   { url: "/assets/kiran_kumar_rega_sketch.png", sizes: "32x32", type: "image/png" },
    // ],
    icon: "/icon",
    // apple: "/assets/kiran_kumar_rega_sketch.png",
    apple: "/icon",
  },
  /*
  icons: {
    icon: [
      { url: "/assets/kiran_kumar_rega_sketch.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/kiran_kumar_rega_sketch.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/kiran_kumar_rega_sketch.png",
  },
  */
  openGraph: {
    title: "Kiran Kumar Rega | Full-Stack Software Engineer",
    description:
      "React, TypeScript, Next.js, and Node.js portfolio focused on measurable frontend and full-stack engineering impact.",
    url: "https://kiranrega.in",
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
      className={`${recursive.variable} ${geistMono.variable} ${geistPixelGrid.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_INIT_SCRIPT,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <CloudflareAnalytics />
        <ClickSound />
        {children}
      </body>
    </html>
  );
}
