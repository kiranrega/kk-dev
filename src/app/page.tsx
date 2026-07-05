import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import { ActiveNav } from "@/components/active-nav";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectCard } from "@/components/project-card";
import {
  experience,
  navItems,
  projects,
  stackGroups,
} from "@/data/portfolio";
import { SkillPill } from "@/components/skill-icons";
// import { GridBackground } from "@/components/grid-background";
import { HeroTitle } from "@/components/hero-title";
import { CatSummoner } from "@/components/cat-summoner";
import { StatusBadge } from "@/components/StatusBadge";
import FloatingTOC from "@/components/floating-toc";
import { AnimatedSocials } from "@/components/animated-socials";
import { RandomQuote } from "@/components/random-quote";
import { VisitorCounter } from "@/components/visitor-counter";
import { CopyButton } from "@/components/copy-button";
import { OpenToWorkBadge } from "@/components/open-to-work-badge";

function CompanySVG() {
  return (
    <svg className="size-4 shrink-0 inline-block align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function ReactSVG() {
  return (
    <svg className="size-4 shrink-0 inline-block align-middle text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TypeScriptSVG() {
  return (
    <svg className="size-4 shrink-0 inline-block align-middle text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM9.4 17.2c-.8 0-1.5-.4-1.8-1l1.3-.8c.2.4.5.6.8.6.4 0 .6-.2.6-.5 0-.8-2-.5-2-1.9 0-.8.6-1.4 1.6-1.4.7 0 1.3.3 1.6.8l-1.1.8c-.2-.3-.4-.4-.6-.4-.3 0-.5.1-.5.4 0 .7 2 .4 2 1.8.1.9-.6 1.6-1.9 1.6zm7.2-.2h-4.3v-1.2h1.5v-3.7h-1.5v-1.2h4.3v1.2h-1.5v3.7h1.5v1.2z" />
    </svg>
  );
}

function NodeSVG() {
  return (
    <svg className="size-4 shrink-0 inline-block align-middle text-[#339933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function LocationSVG() {
  return (
    <svg className="size-4 shrink-0 inline-block align-middle text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function Section({
  id,
  title,
  count,
  children,
}: {
  id: string;
  title: string;
  count?: number;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10 border-t border-border reveal">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h2 className="section-label">{title}</h2>
        {typeof count === "number" ? (
          <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
            {count}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function Card({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={[
        " bg-card p-5 shadow-sm transition-all duration-200",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

function TechLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground border-b border-border hover:opacity-70 transition-all font-medium"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const allSkills = stackGroups.flatMap((group) => group.items);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      {/* <GridBackground /> */}
      <RevealOnScroll />
      <FloatingTOC />
      <ThemeToggle />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl px-4 py-4 sm:px-6">
        <header className="lg:hidden sticky top-0 z-40 -mx-4 border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <ActiveNav items={navItems} />
            <div className="flex items-center gap-2">
              {/* <CatSummoner /> */}
            </div>
          </div>
        </header>

        <div className="pt-10 sm:pt-10 pb-4">
          {/* ── Hero ── */}
          <section id="overview" className="flex flex-col items-start justify-start scroll-mt-24 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <Image
                src="/assets/Profile (2).webp"
                alt="Kiran Kumar Rega"
                width={160}
                height={160}
                priority
                className="rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 grayscale hover:grayscale-0 transition-all duration-500"
              />

              <div className="space-y-1">
                <h1 className="m-0 text-4xl sm:text-5xl font-bold tracking-tighter leading-none animate-blur-in">
                  Kiran Kumar Rega
                </h1>
                <HeroTitle />
                <div className="pt-2">
                  {/* <StatusBadge /> */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full mt-6 border-t border-b border-border py-4 hero-font-mono">
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] tracking-wider uppercase font-medium text-muted">Location</span>
                <span className="text-sm font-normal text-foreground">Hyderabad, India</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] tracking-wider uppercase font-medium text-muted">Email</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-normal text-foreground">kirankumar.rega@gmail.com</span>
                  <CopyButton text="kirankumar.rega@gmail.com" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] tracking-wider uppercase font-medium text-muted">Pronouns</span>
                <span className="text-sm font-normal text-foreground">he/him</span>
              </div>
            </div>

            <p className="max-w-[650px] hero-type-body-small text-pretty text-muted mt-6 hero-font-mono leading-relaxed">
              I build full-stack web products end-to-end, obsessing over small details that make software feel right to use. Currently working as{" "}
              <span className="text-foreground">Software Developer</span> at{" "}
              <a
                href="https://www.intouchcx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 align-middle decoration-muted decoration-dotted underline-offset-4 underline"
              >
                <CompanySVG />
                <span className="bg-gradient-to-r from-[#0052CC] to-[#00C6FF] bg-clip-text font-medium text-transparent dark:from-[#3388FF] dark:to-[#88DDFF]">
                  IntouchCX
                </span>
              </a>
              . Shipped code focused on{" "}
              <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
                <ReactSVG /> React
              </span>
              ,{" "}
              <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
                <TypeScriptSVG /> TypeScript
              </span>
              , and{" "}
              <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
                <NodeSVG /> Node.js
              </span>{" "}
              — delivering high performance, reliability, and excellent user outcomes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full border-t border-border pt-6">
              <div className="flex gap-5 flex-wrap">
                <AnimatedSocials />
              </div>
              <OpenToWorkBadge />
            </div>


           {/* for metrics and stats, can be uncommented if needed 
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 pt-4 border-t border-neutral-800">
              {highlights.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                    <span className="text-xs text-neutral-500 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  {i < highlights.length - 1 && <div className="h-4 w-[1px] bg-neutral-700" />}
                </div>
              ))}
            </div> */}
          </section>

          <Section id="stack" title="TECH STACK" count={allSkills.length}>
            <Card className="reveal-item" style={{ "--reveal-index": 0 } as React.CSSProperties}>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {allSkills.map((item) => (
                  <SkillPill key={`stack-flat-${item}`} name={item} />
                ))}
              </div>
            </Card>
          </Section>

          <Section id="experience" title="Experience" count={experience.length}>
            <div className="reveal relative border-l border-border ml-3 mt-4">
              <div className="flex flex-col gap-12">
                {experience.map((job, index) => (
                  <ExperienceItem key={job.company} job={job} index={index} />
                ))}
              </div>
            </div>
          </Section>

          <Section id="projects" title="Projects" count={projects.length}>
            <div className="grid gap-4 reveal">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </Section>

          {/* <Section id="recognition" title="Recognition">
            <Card>
              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-muted">
                  <Trophy size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Top Performer - Q3 2024
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Recognised at IntouchCX out of the full engineering cohort for delivery quality and measurable product impact.
                  </p>
                </div>
              </div>
            </Card>
          </Section>

          <Section id="education" title="Education" count={education.length}>
            <div className="grid gap-3 reveal">
              {education.map((item, index) => (
                <Card
                  key={item.degree}
                  className="reveal-item"
                  style={{ "--reveal-index": index } as React.CSSProperties}
                >
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-muted">
                      <GraduationCap size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.school}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-xs text-muted">
                        <Calendar size={13} aria-hidden="true" />
                        {item.period}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section> */}
        </div>

        <RandomQuote />

        <footer className="mt-8 mb-8 py-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              <span>Designed & Developed by </span>
              <span className="font-semibold text-foreground">Kiran Kumar Rega</span>
            </div>
            <div className="flex items-center gap-4">
              <VisitorCounter repo="kiranrega/kiranrega" />
              <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-muted text-center sm:text-left">
            Hyderabad, India
          </div>
        </footer>
      </div>
    </main>
  );
}
