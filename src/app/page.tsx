import Link from "next/link";
import {
  BriefcaseBusiness,
  Calendar,
  Check,
  Code2,
  ExternalLink,
  GitPullRequest,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  Star,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { GridBackground } from "@/components/grid-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { ActiveNav } from "@/components/active-nav";
import { StatsBand } from "@/components/stats-band";
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
import { SkillPill, TechChip } from "@/components/skill-icons";

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
    <section id={id} className="scroll-mt-24 py-7">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
          {title}
        </h2>
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

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
      {children}
    </span>
  );
}

function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group relative inline-flex">
      {children}
      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-zinc-900 shadow-md ring-1 ring-zinc-200 opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-zinc-700"
      >
        {label}
        {/* arrow */}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white dark:border-t-zinc-900" />
      </div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/[0.02] dark:border-zinc-800 dark:bg-zinc-950">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <GridBackground />
      <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl px-4 py-4 sm:px-6">
        <header className="sticky top-0 z-40 -mx-4 border-b border-zinc-200/80 bg-zinc-50/90 px-4 py-3 backdrop-blur dark:border-zinc-800/80 dark:bg-black/85 sm:-mx-6 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <ActiveNav items={navItems} />
            <div className="flex items-center gap-2">
              <CommandMenu />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div id="overview" className="pt-10">
          {/* ── Hero ── */}
          <section className="relative pb-8 border-b border-zinc-200 dark:border-zinc-800">
            {/* Avatar + name row */}
            <div className="flex items-center gap-5">
              <div className="avatar-shell shrink-0" aria-label={`${profile.name} avatar`}>
                <div className="avatar-glow" />
                <div className="avatar-face">KR</div>
              </div>
              <div className="min-w-0">
                <h1 className="hero-name text-zinc-950 dark:text-zinc-50">
                  {profile.name}
                </h1>
                <p className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                  <span>{profile.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{profile.location}</span>
                  <span aria-hidden="true">·</span>
                  <Link
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                  >
                    {profile.email}
                    <ExternalLink size={11} aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </div>

            {/* Sharp tagline */}
            <p className="mt-6 text-lg font-medium text-zinc-950 dark:text-zinc-50">
              <span className="hero-tagline">React / TypeScript / Node.js</span>
              {". "}
              <span className="text-zinc-500 dark:text-zinc-400">3 years.</span>
              {" "}
              <span className="hero-cursor text-zinc-500 dark:text-zinc-400">Zero rollbacks</span>
            </p>

            {/* Bio */}
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {profile.headline}
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-1">
              <Tooltip label="Twitter / X">
                <Link href="https://twitter.com/kiranrega" target="_blank" rel="noreferrer" aria-label="Twitter / X"
                  className="grid h-8 w-8 place-items-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50">
                  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </Tooltip>
              <Tooltip label="LinkedIn">
                <Link href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                  className="grid h-8 w-8 place-items-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50">
                  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] fill-current" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </Tooltip>
              <Tooltip label="GitHub">
                <Link href={`https://${profile.github}`} target="_blank" rel="noreferrer" aria-label="GitHub"
                  className="grid h-8 w-8 place-items-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50">
                  <GitPullRequest size={15} aria-hidden="true" />
                </Link>
              </Tooltip>
              <Tooltip label="Website">
                <Link href={`https://${profile.website}`} target="_blank" rel="noreferrer" aria-label="Website"
                  className="grid h-8 w-8 place-items-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50">
                  <Globe size={15} aria-hidden="true" />
                </Link>
              </Tooltip>
              <Tooltip label="Email">
                <Link href={`mailto:${profile.email}`} aria-label="Email"
                  className="grid h-8 w-8 place-items-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50">
                  <Mail size={15} aria-hidden="true" />
                </Link>
              </Tooltip>
            </div>
          </section>

          {/* ── Impact stats band ── */}
          <section id="highlights" className="scroll-mt-24 py-7">
            <StatsBand stats={highlights} />
          </section>

          <Section id="about" title="About">
            <Card>
              <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                {profile.summary}
              </p>
              <ul className="mt-5 grid gap-3">
                {about.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                    <Check size={16} className="mt-1 shrink-0 text-zinc-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Section>

          <Section id="stack" title="Stack" count={stackGroups.reduce((total, group) => total + group.items.length, 0)}>
            <div className="grid gap-3">
              {stackGroups.map((group) => (
                <Card key={group.title}>
                  <div className="flex items-start gap-3">
                    <Code2 size={16} className="mt-1 text-zinc-400" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                        {group.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <SkillPill key={item} name={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experience" count={experience.length}>
            <div className="grid gap-4">
              {experience.map((job) => (
                <Card key={job.company}>
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                      {job.company.slice(0, 2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-medium text-zinc-950 dark:text-zinc-50">
                            {job.company}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {job.role}
                          </p>
                        </div>
                        <div className="text-left text-xs text-zinc-500 dark:text-zinc-500 sm:text-right">
                          <p>{job.period}</p>
                          <p>{job.duration}</p>
                        </div>
                      </div>
                      <dl className="mt-4 grid gap-2 text-xs text-zinc-500 dark:text-zinc-400 sm:grid-cols-3">
                        <div>
                          <dt className="text-zinc-400">Employment Type</dt>
                          <dd>{job.type}</dd>
                        </div>
                        <div>
                          <dt className="text-zinc-400">Location</dt>
                          <dd>{job.location}</dd>
                        </div>
                        <div>
                          <dt className="text-zinc-400">Period</dt>
                          <dd>{job.period}</dd>
                        </div>
                      </dl>
                      <ul className="mt-4 grid gap-2">
                        {job.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                            <Star size={14} className="mt-1.5 shrink-0 text-zinc-400" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.tech.map((item) => (
                          <TechChip key={item} name={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projects" count={projects.length}>
            <div className="grid gap-4">
              {projects.map((project) => (
                <Card key={project.name}>
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                      <Layers size={18} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-medium text-zinc-950 dark:text-zinc-50">
                            {project.name}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {project.subtitle}
                          </p>
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500">
                          {project.period}
                        </p>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                        {project.description}
                      </p>
                      <ul className="mt-3 grid gap-2">
                        {project.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                            <Check size={15} className="mt-1.5 shrink-0 text-zinc-400" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <TechChip key={item} name={item} />
                        ))}
                      </div>
                      {project.githubUrl || project.liveUrl ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.liveUrl ? (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
                            >
                              <Globe size={14} aria-hidden="true" />
                              Live
                              <ExternalLink size={13} aria-hidden="true" />
                            </Link>
                          ) : null}
                          {project.githubUrl ? (
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
                            >
                              <GitPullRequest size={14} aria-hidden="true" />
                              GitHub
                              <ExternalLink size={13} aria-hidden="true" />
                            </Link>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Card>
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
            <div className="grid gap-3">
              {education.map((item) => (
                <Card key={item.degree}>
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

          <Section id="contact" title="Contact">
            <Card>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 p-3 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
                >
                  <span className="flex items-center gap-2">
                    <Mail size={16} aria-hidden="true" />
                    Email
                  </span>
                  <ExternalLink size={14} aria-hidden="true" />
                </Link>
                <Link
                  href={`https://${profile.linkedin}`}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 p-3 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
                >
                  <span className="flex items-center gap-2">
                    <BriefcaseBusiness size={16} aria-hidden="true" />
                    LinkedIn
                  </span>
                  <ExternalLink size={14} aria-hidden="true" />
                </Link>
                <Link
                  href={`https://${profile.github}`}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 p-3 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
                >
                  <span className="flex items-center gap-2">
                    <GitPullRequest size={16} aria-hidden="true" />
                    GitHub
                  </span>
                  <ExternalLink size={14} aria-hidden="true" />
                </Link>
                <Link
                  href={`https://${profile.website}`}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 p-3 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
                >
                  <span className="flex items-center gap-2">
                    <Globe size={16} aria-hidden="true" />
                    Website
                  </span>
                  <ExternalLink size={14} aria-hidden="true" />
                </Link>
              </div>
            </Card>
          </Section>
        </div>
      </div>
    </main>
  );
}
