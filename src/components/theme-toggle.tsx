"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  // Start as null to avoid server/client mismatch — real value set after mount
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const resolved = getStoredTheme() ?? "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(resolved);
    applyTheme(resolved);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    const apply = () => {
      setTheme(next);
      window.localStorage.setItem("theme", next);
      applyTheme(next);
      // Play sound effect (add the file at public/sound/theme-toggle.mp3)
      const audio = new Audio('/sound/click-003.mp3');
      // fire‑and‑forget; ignore errors if user blocks autoplay
      void audio.play().catch(() => {});
    };
    if (!document.startViewTransition) {
      apply();
      return;
    }
    document.startViewTransition(apply);
  }

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition hover:bg-muted/10 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      aria-label={label}
      title={label}
      suppressHydrationWarning
    >
      {isDark ? (
        <Sun size={16} aria-hidden="true" />
      ) : (
        <Moon size={16} aria-hidden="true" />
      )}
    </button>
  );
}
