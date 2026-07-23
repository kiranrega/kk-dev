"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Link,
  Mars,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { CopyButton } from "@/components/copy-button";

interface InfoRow {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

function useLocalTime() {
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
      const hours = Math.floor(Math.abs(offsetMinutes) / 60);
      const mins = Math.abs(offsetMinutes) % 60;
      const offset = `UTC${sign}${offsetMinutes / 60}`;
      setTime({ formatted, offset });
    }
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function InfoItem({ icon, label, value, href, copyable }: InfoRow) {
  const content = (
    <span className="flex items-center gap-2 text-[13px] leading-5 text-foreground">
      <span className="text-muted-foreground shrink-0">{icon}</span>
      <span>{value}</span>
      {copyable && (
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <CopyButton text={value} />
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-foreground transition-colors duration-200"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group">
      {content}
    </div>
  );
}

export function ProfileInfoCard() {
  const time = useLocalTime();

  const leftRows: InfoRow[] = [
    {
      icon: <MapPin size={16} strokeWidth={1.5} />,
      label: "Location",
      value: profile.location,
    },
    {
      icon: <Phone size={16} strokeWidth={1.5} />,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <Link size={16} strokeWidth={1.5} />,
      label: "Website",
      value: profile.website,
      href: `https://${profile.website}`,
    },
  ];

  const rightRows: InfoRow[] = [
    {
      icon: <Clock size={16} strokeWidth={1.5} />,
      label: "Local Time",
      value: time ? `${time.formatted} // ${time.offset}` : "--:--",
    },
    {
      icon: <Mail size={16} strokeWidth={1.5} />,
      label: "Email",
      value: profile.email,
      copyable: true,
    },
    {
      icon: <Mars size={16} strokeWidth={1.5} />,
      label: "Pronouns",
      value: profile.pronouns,
    },
  ];

  return (
    <div className="w-full font-[var(--font-geist-mono)]">
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-x-0">
        {/* Dotted Divider (centered between columns on desktop) */}
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px border-l border-dotted border-border" />

        {/* Left Column */}
        <div className="flex flex-col gap-3 sm:pr-8">
          {leftRows.map((row) => (
            <InfoItem key={row.label} {...row} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3 sm:pl-8">
          {rightRows.map((row) => (
            <InfoItem key={row.label} {...row} />
          ))}
        </div>
      </div>
    </div>
  );
}
