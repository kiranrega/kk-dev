"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gridElement = gridRef.current;

    if (
      !gridElement ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const grid = gridElement;
    let frame = 0;

    function handlePointerMove(event: PointerEvent) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        grid.style.setProperty("--mouse-x", `${event.clientX}px`);
        grid.style.setProperty("--mouse-y", `${event.clientY}px`);
      });
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern"
      aria-hidden="true"
    />
  );
}
