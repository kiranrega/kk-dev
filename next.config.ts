import type { NextConfig } from "next";
import { siteConfig } from "./src/config/site";
import { getResumePreviewUrl } from "./src/lib/resume";

const resumePreviewUrl = getResumePreviewUrl(siteConfig.links.resume, siteConfig.resume.previewUrl);
const resumeFrameOrigin = resumePreviewUrl
  ? new URL(resumePreviewUrl, siteConfig.url).origin
  : "";

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
            `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://static.cloudflareinsights.com; connect-src 'self' https://cloudflareinsights.com https://api.counterapi.dev; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline'; frame-src 'self' ${resumeFrameOrigin};`,
        },
      ],
    },
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
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
