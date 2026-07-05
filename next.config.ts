import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://static.cloudflareinsights.com; connect-src 'self' https://cloudflareinsights.com; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline';",
        },
      ],
    },
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "hits.sh" },
    ],
    // Cache optimized images for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Remove source maps in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
