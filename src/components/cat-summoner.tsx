"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import { MousePointer2 } from "lucide-react";

// Lazy load OnekoCat to avoid loading it on initial page render
const OnekoCat = lazy(() => import("./oneko/OnekoCat"));

export function CatSummoner() {
  const [catEnabled, setCatEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("cat-enabled");
    setCatEnabled(saved === "true");
  }, []);

  const toggleCat = () => {
    const next = !catEnabled;
    setCatEnabled(next);
    localStorage.setItem("cat-enabled", String(next));
    if (!next) {
      // Robust removal fallback
      document.getElementById("oneko")?.remove();
    }
  };

  // Only render after hydration to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      {catEnabled && (
        <Suspense fallback={null}>
          <OnekoCat />
        </Suspense>
      )}
      <button
        type="button"
        onClick={toggleCat}
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-all duration-200 ${
          catEnabled
            ? "border-muted bg-muted/10 text-foreground"
            : "border-border bg-card text-muted-foreground"
        } hover:bg-muted/10`}
        title={catEnabled ? "Dismiss cat" : "Summon cat"}
        aria-label={catEnabled ? "Dismiss cat" : "Summon cat"}
      >
        <MousePointer2 size={16} className={catEnabled ? "animate-pulse" : ""} />
      </button>
    </>
  );
}
