import Image from "next/image";
import {
  Calendar,
  GraduationCap,
  Trophy,
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
// import { GridBackground } from "@/components/grid-background";
import { HeroTitle } from "@/components/hero-title";
import { CatSummoner } from "@/components/cat-summoner";
import { StatusBadge } from "@/components/StatusBadge";

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
        "rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200",
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

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-[0.82rem] text-muted-foreground hover:text-foreground transition-colors"
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

export default function Home() {
  const allSkills = stackGroups.flatMap((group) => group.items);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      {/* <GridBackground /> */}
      <RevealOnScroll />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl px-4 py-4 sm:px-6">
        <header className="sticky top-0 z-40 -mx-4 border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <ActiveNav items={navItems} />
            <div className="flex items-center gap-2">
              <CatSummoner />
              <ThemeToggle />
              {/* <StatusBadge /> */}
            </div>
          </div>
        </header>

        <div id="overview" className="pt-10 sm:pt-10 pb-4">
          {/* ── Hero ── */}
          <section className="flex flex-col items-start justify-start">
            {/* Status badge placed above profile image and right‑hand content */}
            <StatusBadge />
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
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 w-full">
              {[
                ["Location", "Hyderabad, India"],
                ["Email", "kirankumar.rega@gmail.com"],
                ["Pronouns", "he/him"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col items-start gap-1.5">
                  <span className="text-[11px] tracking-widest uppercase font-bold text-muted">{label}</span>
                  <span className="text-sm font-semibold">{value}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mt-2 max-w-[600px] font-normal">
              I build full-stack web products end-to-end, obsessing over small details that make software feel right to use. Currently working with{" "}
              <TechLink href="https://react.dev">React</TechLink>,{" "}
              <TechLink href="https://www.typescriptlang.org">TypeScript</TechLink>,{" "}
              <TechLink href="https://nodejs.org">Node.js</TechLink>, and{" "}
              <TechLink href="https://nextjs.org">Next.js</TechLink> — 3 years, zero rollbacks.
            </p>

            <div className="flex gap-5 flex-wrap mt-6">
              {SOCIALS.map((social) => (
                <SocialLink key={social.label} {...social} />
              ))}
            </div>

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
            <div className="mb-10 border-t border-b border-border py-5 reveal">
              <div className="flex justify-center gap-8 sm:gap-12">
                <div className="text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="mt-1 text-xs font-semibold uppercase letter-spacing text-muted-foreground">Projects Shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="mt-1 text-xs font-semibold uppercase letter-spacing text-muted-foreground">In Production</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">0</div>
                  <div className="mt-1 text-xs font-semibold uppercase letter-spacing text-muted-foreground">Rollbacks</div>
                </div>
              </div>
            </div>

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
      </div>
</main>
  );
}
