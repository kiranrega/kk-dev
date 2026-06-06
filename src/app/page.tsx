"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Calendar,
  Check,
  GraduationCap,
  Trophy,
  MousePointer2,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ActiveNav } from "@/components/active-nav";
import { StatsBand } from "@/components/stats-band";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectCard } from "@/components/project-card";
import {
  education,
  experience,
  highlights,
  navItems,
  projects,
  stackGroups,
} from "@/data/portfolio";
import { SkillPill } from "@/components/skill-icons";
import OnekoCat from "@/components/oneko/OnekoCat";
import { GridBackground } from "@/components/grid-background";

const TITLES = [
  "Full-Stack Software Engineer",
  "React Developer",
  "TypeScript Engineer",
  "Product Builder",
  "Detail Oriented",
];

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com/kiranrega" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kiranrega" },
  { label: "GitHub", href: "https://github.com/kiranrega" },
  { label: "Email", href: "mailto:kirankumar.rega@gmail.com" },
  {
    label: "Resume",
    href: "https://drive.google.com/uc?export=download&id=1VEj5j4SiNtpHRgQyJi5TsgLyBczkfX45",
  },
];

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
    <section id={id} className="scroll-mt-24 py-10 reveal">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h2 className="section-label">{title}</h2>
        {typeof count === "number" ? (
          <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-400 dark:border-zinc-800">
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
        "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-[#111111] transition-all duration-200",
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
      className="text-zinc-600 border-b border-zinc-200 hover:text-zinc-950 hover:border-zinc-950 transition-all dark:text-zinc-400 dark:border-zinc-800 dark:hover:text-white dark:hover:border-white font-medium"
    >
      {children}
    </a>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-[0.82rem] text-zinc-500 hover:text-zinc-950 transition-colors dark:text-zinc-500 dark:hover:text-white"
    >
      {label}
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M1 9L9 1M9 1H3M9 1V7"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function CatToggle({ enabled, onToggle }: { enabled: boolean; enabledTitle: string; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-all duration-200 ${
        enabled 
          ? "border-zinc-400 bg-zinc-100 text-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white" 
          : "border-zinc-200 bg-zinc-50 text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"
      } hover:bg-zinc-100 dark:hover:bg-zinc-800`}
      title={enabled ? "Dismiss cat" : "Summon cat"}
      aria-label={enabled ? "Dismiss cat" : "Summon cat"}
    >
      <MousePointer2 size={16} className={enabled ? "animate-pulse" : ""} />
    </button>
  );
}

export default function Home() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [catEnabled, setCatEnabled] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTitleIdx((i) => (i + 1) % TITLES.length);
        setVisible(true);
      }, 320);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("cat-enabled");
    setCatEnabled(saved === "true");
  }, []);

  const toggleCat = () => {
    const next = !catEnabled;
    setCatEnabled(next);
    localStorage.setItem("cat-enabled", String(next));
  };

  const allSkills = useMemo(() => stackGroups.flatMap((group) => group.items), []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-zinc-950 dark:bg-black dark:text-white font-sans selection:bg-zinc-950 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <GridBackground />
      <RevealOnScroll />
      {catEnabled && <OnekoCat />}
      
      <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl px-4 py-4 sm:px-6">
        <header className="sticky top-0 z-40 -mx-4 border-b border-zinc-200/50 bg-white/80 px-4 py-3 backdrop-blur dark:border-zinc-900/80 dark:bg-black/90 sm:-mx-6 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <ActiveNav items={navItems} />
            <div className="flex items-center gap-2">
              <CatToggle enabled={catEnabled} enabledTitle="Summon cat" onToggle={toggleCat} />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div id="overview" className="pt-10 sm:pt-10 pb-4">
          {/* ── Hero ── */}
          <section className="flex flex-col items-start justify-start gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <img
                src="/Profile.webp"
                alt="Kiran Kumar Rega"
                width={120}
                height={120}
                className="rounded-2xl object-cover border border-zinc-200 dark:border-zinc-800 w-24 h-24 sm:w-28 sm:h-28 grayscale hover:grayscale-0 transition-all duration-500"
              />

              <div className="space-y-1">
                <h1 className="m-0 text-4xl sm:text-5xl font-bold tracking-tighter leading-none text-zinc-900 dark:text-white">
                  Kiran Kumar Rega
                </h1>
                <div className="h-[24px] overflow-hidden pt-1">
                  <span
                    className={`block text-sm sm:text-base font-medium text-zinc-500 dark:text-zinc-400 tracking-tight transition-all duration-320 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[7px]"
                    }`}
                  >
                    {TITLES[titleIdx]}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 w-full">
              {[
                ["Location", "Hyderabad, India"],
                ["Email", "kirankumar.rega@gmail.com"],
                ["Pronouns", "he/him"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col items-start gap-1.5">
                  <span className="text-[11px] tracking-widest uppercase font-bold text-zinc-400 dark:text-zinc-600">{label}</span>
                  <span className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold">{value}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 max-w-[600px] font-normal">
              I build full-stack web products end-to-end, obsessing over small details that make software feel right to use. Currently working with{" "}
              <TechLink href="https://react.dev">React</TechLink>,{" "}
              <TechLink href="https://www.typescriptlang.org">TypeScript</TechLink>,{" "}
              <TechLink href="https://nodejs.org">Node.js</TechLink>, and{" "}
              <TechLink href="https://nextjs.org">Next.js</TechLink>.{" "}
              3 years. Zero rollbacks.
            </p>

            <div className="flex gap-5 flex-wrap mt-2">
              {SOCIALS.map((social) => (
                <SocialLink key={social.label} {...social} />
              ))}
            </div>
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

          {/* ── Impact stats band ── */}
          <section id="highlights" className="scroll-mt-24 py-7">
            <StatsBand stats={highlights} />
          </section>

          <Section id="experience" title="Experience" count={experience.length}>
            <div className="reveal relative border-l border-zinc-200 dark:border-zinc-800 ml-3 mt-4">
              <div className="flex flex-col gap-12">
                {experience.map((job, index) => (
                  <ExperienceItem key={job.company} job={job} index={index} />
                ))}
              </div>
            </div>
          </Section>

          <Section id="projects" title="Projects" count={projects.length}>
            <div className="mb-10 border-t border-b border-zinc-200 py-5 dark:border-zinc-800 reveal">
              <div className="flex justify-center gap-8 sm:gap-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">5</div>
                  <div className="mt-1 text-xs font-semibold uppercase letter-spacing text-zinc-500 dark:text-zinc-400">Projects Shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">2</div>
                  <div className="mt-1 text-xs font-semibold uppercase letter-spacing text-zinc-500 dark:text-zinc-400">In Production</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">0</div>
                  <div className="mt-1 text-xs font-semibold uppercase letter-spacing text-zinc-500 dark:text-zinc-400">Rollbacks</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 reveal">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </Section>

          <Section id="recognition" title="Recognition">
            <Card>
              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                  <Trophy size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-zinc-950 dark:text-zinc-50">
                    Top Performer - Q3 2024
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
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
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                      <GraduationCap size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-950 dark:text-zinc-50">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        {item.school}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
                        <Calendar size={13} aria-hidden="true" />
                        {item.period}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
