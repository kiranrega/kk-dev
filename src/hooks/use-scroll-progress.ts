"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setProgress(Math.min(scrolled, 1));
      setAtTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { progress, atTop };
}
