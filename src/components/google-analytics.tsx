"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

function GoogleAnalyticsTracker({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && measurementId && typeof window !== "undefined") {
      const url = pathname + (searchParams.toString() ? "?" + searchParams.toString() : "");
      window.gtag?.("config", measurementId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const isValidMeasurementId = /^G-[A-Z0-9]+$/i.test(measurementId ?? "");

  if (!measurementId || !isValidMeasurementId) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Google Analytics is disabled because the measurement ID is missing or invalid.");
    }
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsTracker measurementId={measurementId} />
      </Suspense>
    </>
  );
}
