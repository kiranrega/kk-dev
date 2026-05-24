"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
