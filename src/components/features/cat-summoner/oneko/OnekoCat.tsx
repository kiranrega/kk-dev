import Script from "next/script";
import { useEffect } from "react";

export const catConfig = {
  enabled: true,
};

export default function OnekoCat() {
  useEffect(() => {
    return () => {
      document.getElementById("oneko")?.remove();
    };
  }, []);

  if (!catConfig.enabled) {
    return null;
  }

  return <Script src="/oneko/oneko.js" strategy="lazyOnload" />;
}
