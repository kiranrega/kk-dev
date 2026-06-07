// import { catConfig } from '@/config/Cat';
import Script from 'next/script';
import React, { useEffect } from 'react';

export const catConfig = {
  enabled: true, // Set to false to disable the cat
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

  return (
    <Script 
      src="/oneko/oneko.js" 
      data-cat="/oneko/oneko.gif"
      strategy="lazyOnload"
    />
  );
}
