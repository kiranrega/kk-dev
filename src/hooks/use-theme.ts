"use client";

import { useSyncExternalStore } from "react";
import { toggleTheme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  window.addEventListener("portfolio:theme-applied", onChange);
  return () => window.removeEventListener("portfolio:theme-applied", onChange);
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

export function useTheme() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => false);
  return { isDark, toggleTheme };
}
