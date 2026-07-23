import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingTOC } from "@/components/layout/floating-toc";
import { RevealOnScroll } from "@/components/features/reveal-on-scroll";
import ThemeToggle from "@/components/features/theme-toggle";
import { HeroSection } from "@/components/sections/hero";
import { StackSection } from "@/components/sections/stack";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      <RevealOnScroll />
      <FloatingTOC />
      <ThemeToggle />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl px-4 py-4 sm:px-6">
        <Header />

        <div className="pt-10 sm:pt-10 pb-4">
          <HeroSection />
          <StackSection />
          <ExperienceSection />
          <ProjectsSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}
