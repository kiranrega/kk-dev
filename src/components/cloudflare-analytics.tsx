import Script from "next/script";

export function CloudflareAnalytics() {
  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "3f9a8794d0e84834a03c5644c2da3c0d"}'
      strategy="afterInteractive"
    />
  );
}
