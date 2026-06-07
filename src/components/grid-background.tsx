"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      ref.current.style.setProperty("--mouse-x", `${clientX}px`);
      ref.current.style.setProperty("--mouse-y", `${clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="bg-grid-pattern pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-100 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}
