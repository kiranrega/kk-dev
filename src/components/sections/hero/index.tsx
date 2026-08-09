"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ProfileInfoCard } from "./profile-info-card";
import { SocialLinks } from "./social-links";
import { AvailabilityStatus } from "@/components/ui/availability-status";
import { CompanyIcon } from "@/components/icons/company-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { TypeScriptIcon } from "@/components/icons/typescript-icon";
import { NodeIcon } from "@/components/icons/node-icon";
import { Copy, Check } from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="overview"
      className="flex flex-col items-start justify-start scroll-mt-24 w-full"
    >
      <div className="flex items-center gap-3 sm:gap-4 animate-blur-in">
        <div className="rounded-full bg-slate-100/70 dark:bg-slate-900/70 p-1 sm:p-1.5 shadow-sm shadow-slate-900/5 dark:shadow-black/20">
          <Image
            src="/assets/Kiran%20Kumar%20Rega.avif"
            alt={siteConfig.name}
            width={128}
            height={128}
            priority
            className="rounded-full object-cover w-28 h-28 sm:w-32 sm:h-32 grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
          />
        </div>

        <div className="flex flex-col justify-center min-w-0">
          <h1 className="m-0 text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-foreground">
            {siteConfig.name}
          </h1>
          <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 mt-1 select-none">
            <span>{siteConfig.role}</span>
            <span className="text-neutral-600 dark:text-neutral-700">·</span>
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors group/email"
              onClick={copyEmail}
              title="Copy email"
            >
              <span className="select-all underline decoration-dotted underline-offset-4 decoration-neutral-600 hover:decoration-foreground">
                {siteConfig.links.email}
              </span>
              <span className="text-neutral-500 group-hover/email:text-foreground transition-colors">
                {copied ? (
                  <Check size={13} className="text-emerald-500 shrink-0" />
                ) : (
                  <Copy size={13} className="shrink-0" />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full mt-6 border-t border-b border-border py-4">
        <ProfileInfoCard />
      </div> */}

      <p className="max-w-none hero-type-body-small text-balance text-muted mt-6 leading-relaxed">
        I build full-stack web products end-to-end, obsessing over small details
        that make software feel right to use. Currently working as{" "}
        <span className="text-foreground">Software Developer</span> at{" "}
        <a
          href="https://www.intouchcx.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 align-middle decoration-muted decoration-dotted underline-offset-4 underline"
        >
          <CompanyIcon className="size-4 shrink-0 inline-block align-middle" />
          <span className="bg-gradient-to-r from-[#0052CC] to-[#00C6FF] bg-clip-text font-medium text-transparent dark:from-[#3388FF] dark:to-[#88DDFF]">
            IntouchCX
          </span>
        </a>
        . Shipped code focused on{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <ReactIcon className="size-4 shrink-0 inline-block align-middle text-[#61DAFB]" />{" "}
          React
        </span>
        ,{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <TypeScriptIcon className="size-4 shrink-0 inline-block align-middle text-[#3178C6]" />{" "}
          TypeScript
        </span>
        , and{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <NodeIcon className="size-4 shrink-0 inline-block align-middle text-[#339933]" />{" "}
          Node.js
        </span>{" "}
        — delivering high performance, reliability, and excellent user outcomes.
      </p>

      <div className="mt-6">
        <AvailabilityStatus />
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full p-2">
        <div className="flex gap-5 flex-wrap">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
