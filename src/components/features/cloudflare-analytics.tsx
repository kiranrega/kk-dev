import Script from "next/script";

export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;
  // The previous placeholder token downloaded the beacon without recording data.
  if (!token) return null;

  return (
    <Script
      strategy="lazyOnload"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
