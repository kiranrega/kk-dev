"use client";

import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Link,
  Mars,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { CopyButton } from "@/components/ui/copy-button";
import { useLocalTime } from "@/hooks/use-local-time";

interface InfoRow {
  icon: React.ReactNode;
  value: string;
  href?: string;
  copyable?: boolean;
}

function InfoItem({ icon, value, href, copyable }: InfoRow) {
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

  return <div className="group">{content}</div>;
}

export function ProfileInfoCard() {
  const time = useLocalTime();

  const leftRows: InfoRow[] = [
    {
      icon: <MapPin size={16} strokeWidth={1.5} />,
      value: siteConfig.location,
    },
    {
      icon: <Phone size={16} strokeWidth={1.5} />,
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <Link size={16} strokeWidth={1.5} />,
      value: siteConfig.website,
      href: `https://${siteConfig.website}`,
    },
  ];

  const rightRows: InfoRow[] = [
    {
      icon: <Clock size={16} strokeWidth={1.5} />,
      value: time ? `${time.formatted} // ${time.offset}` : "--:--",
    },
    {
      icon: <Mail size={16} strokeWidth={1.5} />,
      value: siteConfig.links.email,
      copyable: true,
    },
    {
      icon: <Mars size={16} strokeWidth={1.5} />,
      value: siteConfig.pronouns,
    },
  ];

  return (
    <div className="w-full font-[var(--font-geist-mono)]">
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-x-0">
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px border-l border-dotted border-border" />
        <div className="flex flex-col gap-3 sm:pr-8">
          {leftRows.map((row, i) => (
            <InfoItem key={i} {...row} />
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:pl-8">
          {rightRows.map((row, i) => (
            <InfoItem key={i} {...row} />
          ))}
        </div>
      </div>
    </div>
  );
}
