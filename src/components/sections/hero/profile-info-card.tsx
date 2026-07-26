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
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
  colSpan?: boolean;
}

function InfoItem({ icon, label, value, href, copyable, colSpan }: InfoRow) {
  const content = (
    <span className="panel-row">
      <span className="icon-container">{icon}</span>
      <span className="text-balance flex-1">{value}</span>
      {copyable && (
        <span className="opacity-0 transition-opacity ease-out group-hover:opacity-100 -translate-x-3 translate-y-px">
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
        className="link group"
      >
        {content}
      </a>
    );
  }

  return <div className="panel-row group">{content}</div>;
}

export function ProfileInfoCard() {
  const time = useLocalTime();

  const rows: InfoRow[] = [
    {
      icon: <MapPin size={16} strokeWidth={2} />,
      label: "Location",
      value: siteConfig.location,
      colSpan: true,
    },
    {
      icon: <Clock size={16} strokeWidth={2} />,
      label: "Local Time",
      value: time ? `${time.formatted} // ${time.offset}` : "--:--",
    },
    {
      icon: <Phone size={16} strokeWidth={2} />,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <Mail size={16} strokeWidth={2} />,
      label: "Email",
      value: siteConfig.links.email,
      copyable: true,
    },
    {
      icon: <Link size={16} strokeWidth={2} />,
      label: "Website",
      value: siteConfig.website,
      href: `https://${siteConfig.website}`,
    },
    {
      icon: <Mars size={16} strokeWidth={2} />,
      label: "Pronouns",
      value: siteConfig.pronouns,
    },
  ];

  return (
    <div className="panel-body w-full font-mono text-sm">
      {rows.map((row, i) => (
        <InfoItem key={i} {...row} />
      ))}
    </div>
  );
}
