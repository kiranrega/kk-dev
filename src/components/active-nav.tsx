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

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the entry closest to the top of the viewport that's visible
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          return;
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-10% 0px -70% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
