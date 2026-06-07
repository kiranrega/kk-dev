"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

export function ActiveNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sectionIds = items
      .map((i) => i.href.replace("#", ""))
      .filter(Boolean);

    const observers: IntersectionObserver[] = [];

    // Track which sections are currently visible
    const visible = new Set<string>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
          // Pick the first visible section in document order
          const first = sectionIds.find((s) => visible.has(s));
          if (first) setActive(first);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav className="flex min-w-0 items-center gap-5 overflow-x-auto md:gap-6" aria-label="Primary navigation">
      {items.map((item) => {
        const id = item.href.replace("#", "");
        const isActive = active === id;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "relative shrink-0 font-geist-sans text-sm transition-colors",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
