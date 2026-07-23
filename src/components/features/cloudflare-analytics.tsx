export function CloudflareAnalytics() {
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "YOUR_TOKEN"}'
    />
  );
}
