"use client";

import { navItems } from "@/config/site";
import { ActiveNav } from "@/components/layout/active-nav";
import { CatSummoner } from "@/components/features/cat-summoner";

export function Header() {
  return (
    <header className="lg:hidden sticky top-0 z-40 -mx-4 border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <ActiveNav items={navItems} />
        <div className="flex items-center gap-2">
          <CatSummoner />
        </div>
      </div>
    </header>
  );
}
