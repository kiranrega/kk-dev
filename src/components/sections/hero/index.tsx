"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "./social-links";
import { AvailabilityStatus } from "@/components/ui/availability-status";
import { CompanyIcon } from "@/components/icons/company-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { TypeScriptIcon } from "@/components/icons/typescript-icon";
import { NodeIcon } from "@/components/icons/node-icon";
import { Copy, Check, ArrowDownRight, MapPin, Code2, Zap } from "lucide-react";

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
        </div>

        <div
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-muted-foreground hover:text-foreground cursor-pointer transition-colors group/email"
          title="Copy email address"
        >
          <span>{siteConfig.links.email}</span>
          {copied ? (
            <Check size={13} className="text-emerald-500 shrink-0" />
          ) : (
            <Copy size={13} className="shrink-0 group-hover/email:scale-110 transition-transform" />
          )}
        </div>
      </div>

      {/* Editorial Split Hero Layout: Text on Left, Avatar on Right */}
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 lg:gap-12 w-full animate-blur-in">
        {/* Left Side: Headline & Text Content */}
        <div className="flex-1 flex flex-col items-start justify-start min-w-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-foreground">
            Building full-stack web products at{" "}
            <a
              href="https://www.intouchcx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-0.5 text-xs sm:text-base font-mono rounded-full bg-blue-500/10 border border-blue-500/20 align-middle mx-1 text-foreground font-normal tracking-normal hover:scale-105 transition-transform"
            >
              <CompanyIcon className="size-4 shrink-0" />
              <span className="bg-gradient-to-r from-[#0052CC] to-[#00C6FF] bg-clip-text text-transparent font-semibold dark:from-[#3388FF] dark:to-[#88DDFF]">
                IntouchCX
              </span>
            </a>{" "}
            with{" "}
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-xs sm:text-base font-mono rounded-full bg-neutral-200/70 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 align-middle mx-1 text-foreground font-normal tracking-normal shadow-sm">
              <ReactIcon className="size-4 text-[#61DAFB] shrink-0" />
              <TypeScriptIcon className="size-4 text-[#3178C6] shrink-0" />
              <NodeIcon className="size-4 text-[#339933] shrink-0" />
            </span>{" "}
            precision.
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed max-w-2xl">
            Hi, I&apos;m <span className="text-foreground font-semibold">{siteConfig.name}</span> — {siteConfig.role}. I specialize in crafting performant frontend interfaces and scalable web applications.
          </p>
        </div>

        {/* Right Side: Prominent Profile Avatar Card */}
        <div className="shrink-0 relative group/avatar">
          <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-black/5 dark:shadow-black/30">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <Image
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

      {/* Micro Specs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-4xl mt-10 p-4 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-neutral-200/80 dark:bg-neutral-800/80 text-foreground shrink-0">
            <Zap size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">Role</span>
            <span className="text-sm font-semibold text-foreground">Software Developer</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-neutral-200/80 dark:bg-neutral-800/80 text-foreground shrink-0">
            <Code2 size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">Focus</span>
            <span className="text-sm font-semibold text-foreground">Frontend & Web Apps</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-neutral-200/80 dark:bg-neutral-800/80 text-foreground shrink-0">
            <MapPin size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">Base</span>
            <span className="text-sm font-semibold text-foreground">Hyderabad, India</span>
          </div>
        </div>
      </div>

      {/* Dual High-Contrast Action CTAs */}
      <div className="mt-8 flex flex-wrap items-center gap-4 w-full">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
        >
          <span>Explore Projects</span>
          <ArrowDownRight size={16} />
        </a>

        <button
          onClick={copyEmail}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
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
