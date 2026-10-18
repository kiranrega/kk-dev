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
import { Card } from "@/components/layout/card";
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
      <span className="min-w-0 flex-1 break-words">{value}</span>
      {copyable && (
        <span className="copy-control shrink-0">
          <CopyButton text={value} label={label} />
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
    <Card variant="profile">
      <div className="panel-body w-full font-mono text-sm">
        {rows.map((row, i) => (
          <InfoItem key={i} {...row} />
        ))}
      </div>
    </Card>
  );
}
