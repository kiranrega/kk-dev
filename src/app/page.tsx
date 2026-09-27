import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingTOC } from "@/components/layout/floating-toc";
import { RevealOnScroll } from "@/components/features/reveal-on-scroll";
import ThemeToggle from "@/components/features/theme-toggle";
import { Section } from "@/components/layout/section";
import { Hatch } from "@/components/layout/hatch";
import { HeroSection } from "@/components/sections/hero";
import { Stack, stackToolCount } from "@/components/stack";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full max-w-full overflow-x-clip bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      <RevealOnScroll />
      <FloatingTOC />
      <ThemeToggle />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl px-2 pt-2 sm:px-4">
        <Header />

        <HeroSection />
        <Hatch />
        <Section
          id="stack"
          title="Stack"
          count={stackToolCount}
          subtitle="01 / Tools & Technologies"
          description="The languages, frameworks, and infrastructure I reach for when building and shipping web products."
          pinned={true}
        >
          <div className="reveal-item" style={{ "--reveal-index": 0 } as React.CSSProperties}>
            <Stack />
          </div>
        </Section>
        <Hatch />
        <ExperienceSection />
        <Hatch />
        <ProjectsSection />
        <Hatch />
        <Footer />
      </div>
    </main>
  );
}
