import Image from "next/image";
import { siteConfig } from "@/config/site";
import { HeroTitle } from "./hero-title";
import { ProfileInfoCard } from "./profile-info-card";
import { SocialLinks } from "./social-links";
import { AvailabilityStatus } from "@/components/ui/availability-status";
import { CompanyIcon } from "@/components/icons/company-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { TypeScriptIcon } from "@/components/icons/typescript-icon";
import { NodeIcon } from "@/components/icons/node-icon";

export function HeroSection() {
  return (
    <section
      id="overview"
      className="flex flex-col items-start justify-start scroll-mt-24 w-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-center">
        <Image
          src="/assets/Profile (2).webp"
          alt="Kiran Kumar Rega"
          width={160}
          height={160}
          priority
          className="rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 grayscale hover:grayscale-0 transition-all duration-200"
        />

        <div className="space-y-1">
          <h1 className="m-0 text-4xl sm:text-5xl font-bold tracking-tighter leading-none animate-blur-in">
            {siteConfig.name}
          </h1>
          <HeroTitle />
        </div>
      </div>

      <div className="w-full mt-6 border-t border-b border-border py-4">
        <ProfileInfoCard />
      </div>

      <p className="max-w-[650px] hero-type-body-small text-pretty text-muted mt-6 hero-font-mono leading-relaxed">
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
