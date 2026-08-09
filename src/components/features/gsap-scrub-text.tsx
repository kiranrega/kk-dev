"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const words = containerRef.current.querySelectorAll(".gsap-scrub-word");
      if (!words.length) return;

      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        }
      );
    },
    { scope: containerRef }
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
