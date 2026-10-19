"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface GSAPScrubTextProps {
  children: string;
  className?: string;
  as?: React.ElementType;
}

export function GSAPScrubText({
  children,
  className = "",
  as: Component = "p",
}: GSAPScrubTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [ScrollTrigger, setScrollTrigger] = useState<
    typeof import("gsap/ScrollTrigger")["ScrollTrigger"] | null
  >(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let inView = false;
    let requested = false;
    const load = () => {
      if (!inView || reducedMotion.matches || requested) return;
      requested = true;
      void import("gsap/ScrollTrigger").then((module) => {
        if (!disposed) setScrollTrigger(() => module.ScrollTrigger);
      });
    };
    // Prepare the plugin just before the paragraph approaches the viewport.
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      load();
    }, { rootMargin: "300px 0px" });
    observer.observe(container);
    reducedMotion.addEventListener("change", load);
    return () => {
      disposed = true;
      observer.disconnect();
      reducedMotion.removeEventListener("change", load);
    };
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || !ScrollTrigger) return;

      const words = containerRef.current.querySelectorAll(".gsap-scrub-word");
      if (!words.length) return;

      // Register before creating the media context so ScrollTrigger can manage
      // its synchronous setup, reversion and restart through the normal hook.
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.saveStyles(words);
        gsap.fromTo(words, { opacity: 0.15 }, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        });
      });
      return () => media.revert();
    },
    { scope: containerRef, dependencies: [ScrollTrigger], revertOnUpdate: true }
  );

  const words = children.split(" ");

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="gsap-scrub-word inline-block mr-[0.25em] transition-colors duration-75"
        >
          {word}
        </span>
      ))}
    </Component>
  );
}
