"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { navItems } from "@/config/site";
// import { ActiveNav } from "@/components/layout/active-nav";
// import { CatSummoner } from "@/components/features/cat-summoner";
import { CornerPluses } from "./plus";

const moreItems = navItems.filter(
  (item) => item.href === "#stack" || item.href === "#experience"
);
const searchItems = navItems.map((item) => ({
  ...item,
  label: item.href === "#overview" ? "Home" : item.label,
}));

export function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const openSearch = () => {
    setSearchTerm("");
    setIsMoreOpen(false);
    setIsSearchOpen(true);
  };

  /*
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  */

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }
      if (event.key === "Escape") setIsSearchOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  const matchingItems = searchItems.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="relative sticky top-0 z-40 border-x border-edge bg-background/95 screen-line-before screen-line-after backdrop-blur">
      <CornerPluses bottom />
      <div className="flex h-14 items-center justify-between gap-4 px-3 sm:px-5">
        <a
          href="#overview"
          className="font-pixel text-lg font-black leading-none text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          aria-label="Go to homepage"
        >
          KR
        </a>

        <div className="ml-auto flex items-center gap-5">
          <nav className="hidden items-center gap-5 font-mono text-sm sm:flex" aria-label="Primary navigation">
            <a href="#overview" className="text-foreground transition-colors hover:text-muted-foreground">
              Home
            </a>
            <a href="#projects" className="text-muted-foreground transition-colors hover:text-foreground">
              Projects
            </a>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMoreOpen((open) => !open)}
                className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                aria-expanded={isMoreOpen}
                aria-controls="more-navigation"
              >
                More
                <ChevronDown size={14} aria-hidden />
              </button>
              {isMoreOpen ? (
                <div
                  id="more-navigation"
                  className="absolute left-1/2 top-full z-50 mt-3 w-36 -translate-x-1/2 border border-border bg-background p-1 shadow-lg"
                >
                  {moreItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMoreOpen(false)}
                      className="block px-3 py-2 text-muted-foreground transition-colors hover:bg-muted/10 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>
          <button
            type="button"
            onClick={openSearch}
            className="inline-flex h-8 items-center gap-2 border border-border px-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            aria-label="Search"
            title="Search (Ctrl+K)"
          >
            <Search size={16} aria-hidden />
            <kbd className="hidden rounded border border-border bg-muted/10 px-1.5 py-0.5 font-mono text-xs sm:inline">
              Ctrl K
            </kbd>
          </button>
          {/*
          <span aria-hidden className="h-5 w-px bg-border" />
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-8 place-items-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <Moon size={16} aria-hidden />
          </button>
          */}
        </div>

        {/*
        <div className="min-w-0 justify-self-center">
          <ActiveNav items={navItems} />
        </div>
        <div className="justify-self-end">
          <CatSummoner />
        </div>
        */}
      </div>

      {isSearchOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/30 p-4 pt-24"
          role="presentation"
          onMouseDown={() => setIsSearchOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search sections"
            className="mx-auto w-full max-w-md border border-border bg-background shadow-xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search size={18} className="text-muted-foreground" aria-hidden />
              <input
                ref={searchInputRef}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search sections"
                className="min-w-0 flex-1 bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <kbd className="border border-border px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Esc</kbd>
            </div>
            <div className="p-1">
              {matchingItems.length ? (
                matchingItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSearchOpen(false)}
                    className="block px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-muted/10 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))
              ) : (
                <p className="px-3 py-6 font-mono text-sm text-muted-foreground">No matching sections.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
