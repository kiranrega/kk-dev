"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-muted hover:text-foreground size-6 rounded-md border-none text-muted-foreground [&_svg:not([class*='size-'])]:size-4"
      aria-label="Copy"
    >
      <span style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </span>
    </button>
  );
}
