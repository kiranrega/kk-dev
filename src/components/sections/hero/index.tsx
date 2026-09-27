"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import CipherText from "@/components/features/CipherText";
import { SocialLinks } from "./social-links";
import { HeroTitle } from "./hero-title";
import { VisitorCounter } from "@/components/features/visitor-counter";
import { CornerPluses } from "@/components/layout/plus";
import { Check, Copy, ArrowDownRight, MapPin, Clock } from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-US", {
      timeZone: siteConfig.timezone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZoneName: "short",
    });
    const update = () => setLocalTime(format.format(new Date()));
    update();
    const t = setInterval(update, 10_000);
    return () => clearInterval(t);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="overview" className="scroll-mt-24 w-full">
      <div className="relative min-h-[70px] w-full border-x border-edge screen-line-before screen-line-after page-dots sm:min-h-[110px]">
        <CornerPluses bottom />
      </div>

      <div className="relative flex border-x border-edge screen-line-after">
        <CornerPluses bottom />

        <div className="w-[35%] shrink-0 p-2 sm:w-auto sm:p-5">
          <div className="aspect-square h-auto w-full overflow-hidden rounded-[12px] border border-border p-[4px] transition duration-300 hover:brightness-90 sm:size-32">
            <div className="relative aspect-square overflow-hidden rounded-[8px]">
              <Image
                src="/assets/kiran_kumar_rega.avif"
                alt={siteConfig.name}
                fill
                sizes="128px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 py-3 pl-2 sm:pl-4">
          <div className="flex items-center justify-between pr-2 sm:pr-4">
            <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
              <MapPin size={12} className="shrink-0" />
              {siteConfig.location}
            </span>
            <VisitorCounter />
          </div>

          <div className="flex items-center gap-2 pt-2 pb-1">
            <h1 className="font-pixel text-xl font-black leading-none sm:text-3xl">
              <CipherText text={siteConfig.name} trigger="mount" speed={12} className="inline-block" />
            </h1>
          </div>

          <div className="font-mono text-sm leading-snug text-muted-foreground">
            <HeroTitle />
          </div>

          <span className="mt-1 flex min-h-4 items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            <span>Available · Open to Senior Full-Stack / MERN roles</span>
          </span>
        </div>
      </div>

      <div className="relative border-x border-edge screen-line-after px-4 py-5 sm:px-5">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          One of 2 engineers behind Catapult — 30,000+ users at{" "}
          <a
            href="https://www.intouchcx.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:opacity-80"
          >
            IntouchCX
          </a>
          . I build systems that hold up at scale.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <span>Explore Projects</span>
            <ArrowDownRight size={16} />
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <span>{copied ? "Email Copied!" : "Get in Touch"}</span>
            {copied ? (
              <Check size={16} className="shrink-0 text-emerald-500" />
            ) : (
              <Copy size={16} className="shrink-0 text-muted-foreground" />
            )}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <SocialLinks />
          <span
            className="inline-flex items-center gap-1.5 font-mono text-xs tabular-nums text-muted-foreground"
            title={`Current time in ${siteConfig.location} (${siteConfig.timezone})`}
          >
            <Clock size={12} className="shrink-0" />
            {localTime ?? "--:-- --"}
          </span>
        </div>
      </div>
    </section>
  );
}
