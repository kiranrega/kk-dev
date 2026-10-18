"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton({ text, label = "value" }: { text: string; label?: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const handleCopy = async () => {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="icon-button"
        aria-label={`Copy ${label}`}
        title={status === "error" ? "Copy failed. Select and copy the text." : `Copy ${label}`}
      >
        {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
      <span role="status" className="sr-only">
        {status === "copied" ? `${label} copied` : status === "error" ? "Copy failed. Select and copy the text." : ""}
      </span>
    </>
  );
}
