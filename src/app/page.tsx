import Image from "next/image";
import {
  Calendar,
  GraduationCap,
  Trophy,
  Link,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { StatsBand } from "@/components/stats-band";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectCard } from "@/components/project-card";
import { useState } from "react";
import {
  education,
  experience,
  highlights,
  navItems,
  projects,
  stackGroups,
} from "@/data/portfolio";
import { SkillPill } from "@/components/skill-icons";
import { GridBackground } from "@/components/grid-background";
import { HeroTitle } from "@/components/hero-title";
import { CatSummoner } from "@/components/cat-summoner";

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
    <section id={id} className="scroll-mt-16 py-6 reveal">
      <div className="mb-4 flex flex-wrap items-center gap-2">
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
        "rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-200",
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
  const [active, setActive] = useState("");

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      <GridBackground />
      <RevealOnScroll />
      
      <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl px-4 py-4 sm:px-6">
        <header className="sticky top-0 z-40 -mx-4 border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <nav className="flex min-w-0 items-center gap-4 overflow-x-auto md:gap-5" aria-label="Primary navigation">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = active === id;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "relative shrink-0 font-geist-sans text-sm transition-colors",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Profile (2).webp"
                alt="Kiran Kumar Rega"
                width={32}
                height={32}
                priority
                className="rounded-full object-cover"
              />
              <h1 className="text-2xl font-bold text-foreground">
                Kiran Kumar Rega
              </h1>
            </div>
          </div>
        </header>

        <div id="overview" className="pt-8 sm:pt-8 pb-6">
          {/* ── Hero ── */}
          <section className="flex flex-col items-start justify-start gap-6 sm:flex-row sm:items-center">
            <div className="flex-1 min-w-0">
              <Image
                src="/assets/Profile (2).webp"
                alt="Kiran Kumar Rega"
                width={200}
                height={200}
                priority
                className="rounded-full object-cover w-48 h-48 sm:w-64 sm:h-64"
              />
            </div>
            <div className="flex-1 space-y-4 text-center sm:text-left">
              <h1 className="m-0 text-4xl sm:text-5xl font-bold tracking-tighter leading-none animate-blur-in">
                Kiran Kumar Rega
              </h1>
              <p className="text-xl font-semibold text-muted-foreground">
                Full-Stack Developer
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[600px]">
                I build full-stack web products end-to-end, obsessing over small details that make software feel right to use.
              </p>
            </div>
          </section>

          {/* ── Contact Info Grid ── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 w-full mt-8">
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

          {/* ── Social Links ── */}
          <div className="flex gap-6 flex-wrap mt-6">
            {SOCIALS.map((social) => (
              <SocialLink key={social.label} {...social} />
            ))}
          </div>

          {/* ── Highlights Section ── */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 pt-4 border-t border-neutral-800">
            {highlights.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">{stat.label}</span>
                </div>
                {i < highlights.length - 1 && <div className="h-3 w-[0.5px] bg-neutral-700" />}
              </div>
            ))}
          </div>
        </div>

          <Section id="stack" title="TECH STACK" count={allSkills.length}>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 reveal">
              {allSkills.map((skill, index) => (
                <div key={skill} className="reveal-item" style={{ "--reveal-index": index } as React.CSSProperties}>
                  <SkillPill name={skill} />
                </div>
              ))}
            </div>
          </Section>

          <Section id="experience" title="EXPERIENCE" count={experience.length}>
            <div className="space-y-6 reveal">
              {experience.map((job, index) => (
                <ExperienceItem key={job.company} job={job} index={index} />
              ))}
            </div>
          </Section>

          <Section id="contact" title="LET'S WORK TOGETHER">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission (could integrate with email service)
                alert("Thank you for your message! I'll get back to you soon.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-foreground text-background font-medium rounded-lg hover:bg-muted/20 transition-colors disabled:opacity-50"
              >
                Send Message
              </button>
            </form>
          </Section>

          <Section id="projects" title="PROJECTS" count={projects.length}>
            <div className="grid gap-6 reveal">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </Section>

          {/* ── Footer ── */}
          <footer className="border-t border-border mt-16 pt-10">
            <div className="flex flex-col items-center gap-6">
              <div className="text-xs text-muted-foreground">
                © 2026 Kiran Kumar Rega.
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <a href="#about" className="hover:text-foreground transition-colors">About</a>
                <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
                <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
                <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
                <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://twitter.com/kiranrega" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                <a href="https://linkedin.com/in/kiranrega" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/></svg>
                </a>
                <a href="https://github.com/kiranrega" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1.52 5.09 3A5.07 5.07 0 0 0 5 12 5.07 5.07 0 0 0 5.14 19z"/></svg>
                </a>
                <a href="mailto:kirankumar.rega@gmail.com" className="hover:text-foreground transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
                <div className="flex items-center gap-4">
                  <CatSummoner />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
}
