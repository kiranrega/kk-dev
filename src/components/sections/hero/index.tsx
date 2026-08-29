"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import CipherText from "@/components/features/CipherText";
import { SocialLinks } from "./social-links";
import { AvailabilityStatus } from "@/components/ui/availability-status";
import { Check, Copy, ArrowDownRight, MapPin, Clock } from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  // null until mounted — avoids a server/client hydration mismatch on the clock
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
    // Minute-precision clock — refresh often enough to stay honest
    const t = setInterval(update, 10_000);
    return () => clearInterval(t);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="overview"
      className="flex flex-col items-start justify-start scroll-mt-24 w-full py-6 sm:py-10"
    >
      {/* Top Meta Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 w-full mb-8 animate-blur-in">
        <div className="flex items-center gap-3">
          <AvailabilityStatus />
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-mono">
            <MapPin size={12} className="shrink-0" />
            {siteConfig.location}
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <span
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono tabular-nums"
            title={`Current time in ${siteConfig.location} (${siteConfig.timezone})`}
          >
            <Clock size={12} className="shrink-0" />
            {localTime ?? "--:-- --"}
          </span>
        </div>

        <a
          href={`mailto:${siteConfig.links.email}`}
          className="text-xs font-mono text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
        >
          {siteConfig.links.email}
        </a>
      </div>

      {/* Editorial Split Hero Layout: Text on Left, Avatar on Right */}
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 lg:gap-12 w-full animate-blur-in [animation-delay:120ms]">
        {/* Left Side: Headline & Text Content */}
        <div className="flex-1 flex flex-col items-start justify-start min-w-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground">
            Building full-stack web products at{" "}
            <a
              href="https://www.intouchcx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#0052CC] to-[#00C6FF] dark:from-[#3388FF] dark:to-[#88DDFF] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              IntouchCX
            </a>{" "}
            with{" "}
            <em className="font-serif italic font-normal tracking-normal text-[1.08em]">
              precision.
            </em>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed max-w-2xl">
            Hi, I&apos;m <CipherText text={siteConfig.name} trigger="mount" speed={12} className="inline-block text-foreground font-semibold" /> — <CipherText text={siteConfig.role} trigger="mount" speed={10} className="inline-block text-foreground/90" />. I specialize in crafting performant frontend interfaces and scalable web applications.
          </p>
        </div>

        {/* Right Side: Prominent Profile Avatar Card */}
        <div className="shrink-0 relative group/avatar">
          <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-black/5 dark:shadow-black/30">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <Image width={128} height={128}
                src="/assets/kiran_kumar_rega.avif"
                alt={siteConfig.name}
                fill
                priority
                className="object-cover grayscale group-hover/avatar:grayscale-0 group-hover/avatar:scale-105 transition-all duration-500"
              />
            </div>
            {/* Corner Badge */}
            <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-background border border-border shadow-md flex items-center gap-1.5 text-[11px] font-mono font-medium text-foreground">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="mt-10 flex flex-wrap items-center gap-4 w-full animate-blur-in [animation-delay:240ms]">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
        >
          <span>Explore Projects</span>
          <ArrowDownRight size={16} />
        </a>

        <button
          onClick={copyEmail}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-sm"
        >
          <span>{copied ? "Email Copied!" : "Get in Touch"}</span>
          {copied ? (
            <Check size={16} className="text-emerald-500 shrink-0" />
          ) : (
            <Copy size={16} className="shrink-0 text-muted-foreground" />
          )}
        </button>

        <div className="sm:ml-auto pt-2 sm:pt-0">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
