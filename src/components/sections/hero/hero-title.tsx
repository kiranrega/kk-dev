"use client";

import { useEffect, useState } from "react";

const TITLES = [
  "Full-Stack Software Engineer",
  "React Developer",
  "TypeScript Engineer",
  "Product Builder",
  "Detail Oriented",
];

export function HeroTitle() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTitleIdx((i) => (i + 1) % TITLES.length);
        setVisible(true);
      }, 320);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="h-5 overflow-hidden">
      <span
        className={`block font-mono text-sm font-normal text-muted-foreground transition-all duration-320 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[7px]"
        }`}
      >
        {TITLES[titleIdx]}
      </span>
    </div>
  );
}
