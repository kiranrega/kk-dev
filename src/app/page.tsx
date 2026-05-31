"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Check,
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
  about,
  education,
  experience,
  highlights,
  navItems,
  profile,
  projects,
  stackGroups,
} from "@/data/portfolio";
import { SkillPill } from "@/components/skill-icons";
import OnekoCat from "@/components/oneko/OnekoCat";

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
    <section id={id} className="scroll-mt-24 py-7 reveal">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <h2 className="text-xs tracking-[0.22em] text-zinc-600 uppercase">{title}</h2>
        {typeof count === "number" ? (
          <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
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
        "rounded-2xl border border-zinc-800 bg-zinc-950 p-4 shadow-sm shadow-black/20",
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
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: hovered ? "#f0f0f0" : "#aaa",
        textDecoration: "none",
        borderBottom: "1px solid #2a2a2a",
        paddingBottom: "1px",
        transition: "color 0.15s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        color: hovered ? "#e0e0e0" : "#555",
        fontSize: "0.82rem",
        textDecoration: "none",
        transition: "color 0.15s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
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

const s: Record<string, React.CSSProperties> = {
  section: {
    background: "transparent",
    minHeight: "auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "0",
    fontFamily: "var(--font-geist-sans, 'DM Sans', system-ui, sans-serif)",
  },
  container: {
    maxWidth: "640px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1.1rem",
  },
  heroRow: {
    display: "flex",
    alignItems: "center",
    gap: "1.25rem",
    flexWrap: "nowrap",
  },
  avatar: {
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #1c1c1c",
  },
  name: {
    margin: 0,
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: 700,
    color: "#f0f0f0",
    letterSpacing: "-0.025em",
    lineHeight: 1.2,
    whiteSpace: "nowrap",
  },
  titleWrap: { height: "22px", overflow: "hidden", marginTop: "6px" },
  title: {
    display: "block",
    fontSize: "0.85rem",
    color: "#666",
    transition: "opacity 0.32s ease, transform 0.32s ease",
  },
  infoGrid: { display: "flex", flexDirection: "column", gap: "7px", marginTop: "2px" },
  infoRow: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.4rem" },
  infoLabel: {
    fontSize: "0.75rem",
    color: "#3d3d3d",
    width: "64px",
    flexShrink: 0,
    letterSpacing: "0.02em",
  },
  infoValue: { fontSize: "0.82rem", color: "#c0c0c0" },
  bio: {
    fontSize: "0.875rem",
    color: "#666",
    lineHeight: "1.85",
    margin: "4px 0 0",
    maxWidth: "520px",
  },
  socials: { display: "flex", gap: "1.1rem", flexWrap: "wrap", marginTop: "2px" },
};

export default function Home() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTitleIdx((i) => (i + 1) % TITLES.length);
        setVisible(true);
      }, 320);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <RevealOnScroll />
      <OnekoCat />
      {/* <GridBackground /> */}
      <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl px-4 py-4 sm:px-6">
        <header className="sticky top-0 z-40 -mx-4 border-b border-zinc-900/80 bg-[#0a0a0a]/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <ActiveNav items={navItems} />
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div id="overview" className="pt-10">
          {/* ── Hero ── */}
          <section style={s.section}>
            <div style={s.container}>
              <div style={s.heroRow}>
                <img
                  src="/Profile.webp"
                  alt="Kiran Kumar Rega"
                  width={120}
                  height={120}
                  style={s.avatar}
                />

                <div>
                  <h1 style={s.name}>Kiran Kumar Rega</h1>
                  <div style={s.titleWrap}>
                    <span
                      style={{
                        ...s.title,
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(-7px)",
                      }}
                    >
                      {TITLES[titleIdx]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  ["Location", "Hyderabad, India"],
                  ["Email", "kirankumar.rega@gmail.com"],
                  ["Pronouns", "he/him"],
                ].map(([label, value]) => (
                  <div key={label} style={s.infoRow}>
                    <span style={s.infoLabel}>{label}</span>
                    <span style={s.infoValue}>{value}</span>
                  </div>
                ))}
              </div>

              <p style={s.bio}>
                I build full-stack web products end-to-end, obsessing over small details that make software feel right to use. Currently working with{" "}
                <TechLink href="https://react.dev">React</TechLink>,{" "}
                <TechLink href="https://www.typescriptlang.org">TypeScript</TechLink>,{" "}
                <TechLink href="https://nodejs.org">Node.js</TechLink>, and{" "}
                <TechLink href="https://nextjs.org">Next.js</TechLink>.{" "}
                3 years. Zero rollbacks.
              </p>

              <div style={s.socials}>
                {SOCIALS.map((social) => (
                  <SocialLink key={social.label} {...social} />
                ))}
              </div>

            </div>
          </section>

          <Section id="stack" title="TECH STACK" count={stackGroups.reduce((total, group) => total + group.items.length, 0)}>
            <div className="reveal">
              <Card className="reveal-item" style={{ "--reveal-index": 0 } as React.CSSProperties}>
                <div className="flex flex-wrap gap-2">
                  {stackGroups.flatMap((group) => group.items).map((item) => (
                    <SkillPill key={`stack-flat-${item}`} name={item} />
                  ))}
                </div>
              </Card>
            </div>
          </Section>

          {/* ── Impact stats band ── */}
          <section id="highlights" className="scroll-mt-24 py-7">
            <StatsBand stats={highlights} />
          </section>

          {/* <Section id="about" title="About">
            <Card className="reveal-item" style={{ "--reveal-index": 0 } as React.CSSProperties}>
              <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                {profile.summary}
              </p>
              <ul className="mt-5 grid gap-3">
                {about.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300 reveal-item"
                    style={{ "--reveal-index": index } as React.CSSProperties}
                  >
                    <Check size={16} className="mt-1 shrink-0 text-zinc-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Section> */}

          <Section id="experience" title="Experience" count={experience.length}>
            <div className="reveal">
              {/** track reveal index via CSS var on each item */}
              <div className="grid gap-4">
                {experience.map((job, index) => (
                  <ExperienceItem key={job.company} job={job} index={index} />
                ))}
              </div>
            </div>
          </Section>

          <Section id="projects" title="Projects" count={projects.length}>
            {/* Highlights bar */}
            <div className="mb-10 border-t border-b border-zinc-200 py-5 dark:border-zinc-800 reveal">
              <div className="flex justify-center gap-8 sm:gap-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">5</div>
                  <div className="mt-1 text-xs font-semibold uppercase letter-spacing text-zinc-500 dark:text-zinc-400">Projects Shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">3</div>
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

          {/* <Section id="contact" title="Contact">
            <Card className="reveal-item" style={{ "--reveal-index": 0 } as React.CSSProperties}>
              <div className="space-y-6">
                <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  I&#39;m currently open to senior/mid frontend or full-stack roles. Reach out via the form below.
                </p>
                <form action="https://formspree.io/f/{YOUR_FORM_ID}" method="POST" className="grid gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">Name</label>
                    <input type="text" id="name" name="name" required className="rounded-lg border border-zinc-300 bg-white dark:bg-zinc-800 dark:border-zinc-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">Email</label>
                    <input type="email" id="email" name="email" required className="rounded-lg border border-zinc-300 bg-white dark:bg-zinc-800 dark:border-zinc-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="mb-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">Message</label>
                    <textarea id="message" name="message" rows={4} required className="rounded-lg border border-zinc-300 bg-white dark:bg-zinc-800 dark:border-zinc-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" />
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-20)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
                    Send Message
                  </button>
                </form>
              </div>
            </Card>
          </Section> */}
        </div>
      </div>
    </main>
  );
}
