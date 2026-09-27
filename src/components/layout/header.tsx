"use client";

import { navItems } from "@/config/site";
import { ActiveNav } from "@/components/layout/active-nav";
import { CatSummoner } from "@/components/features/cat-summoner";
import { CornerPluses } from "./plus";

export function Header() {
  return (
    <header className="relative sticky top-0 z-40 lg:hidden border-x border-edge bg-background/80 screen-line-before screen-line-after backdrop-blur">
      <CornerPluses bottom />
      <div className="flex items-center justify-between gap-3 px-3 py-3">
        <ActiveNav items={navItems} />
        <div className="flex items-center gap-2">
          <CatSummoner />
        </div>
      </div>
    </header>
  );
}
