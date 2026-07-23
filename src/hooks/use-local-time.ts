"use client";

import { useEffect, useState } from "react";

export function useLocalTime() {
  const [time, setTime] = useState<{ formatted: string; offset: string } | null>(null);

  useEffect(() => {
    function update() {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const offsetMinutes = -now.getTimezoneOffset();
      const sign = offsetMinutes >= 0 ? "+" : "";
      const offset = `UTC${sign}${offsetMinutes / 60}`;
      setTime({ formatted, offset });
    }
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return time;
}
