"use client";

import { useEffect } from "react";

const CLICK_SOUND = "/sound/click-003.mp3";
const CLICKABLE_SELECTOR =
  'button, a[href], [role="button"], summary, input[type="button"], input[type="submit"], input[type="reset"]';

function playClickSound() {
  const audio = new Audio(CLICK_SOUND);
  audio.volume = 0.7;
  void audio.play().catch(() => {
    // Browsers can reject playback when the interaction is not user initiated.
  });
}

export function ClickSound() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const clickable = event.target.closest<HTMLElement>(CLICKABLE_SELECTOR);
      if (!clickable) return;
      if (clickable.hasAttribute("disabled")) return;
      if (clickable.getAttribute("aria-disabled") === "true") return;
      if (clickable.closest('[data-click-sound="off"]')) return;

      playClickSound();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
