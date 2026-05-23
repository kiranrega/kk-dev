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
  MapPin,
  Phone,
  Star,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { GridBackground } from "@/components/grid-background";
import { ThemeToggle } from "@/components/theme-toggle";
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

function InfoItem({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
      <Icon size={15} className="shrink-0 text-zinc-400" aria-hidden="true" />
      {children}
    </li>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
      {children}
    </span>
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
            <nav className="flex min-w-0 items-center gap-1 overflow-x-auto" aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-lg px-2.5 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <CommandMenu />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div id="overview" className="pt-10">
          <section className="relative">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <h1 className="text-3xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50">
                  {profile.name}
                </h1>
                <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {profile.headline}
                </p>
              </div>
              <div className="avatar-shell shrink-0" aria-label={`${profile.name} avatar`}>
                <div className="avatar-glow" />
                <div className="avatar-face">KR</div>
              </div>
            </div>

            <Card>
              <div className="mb-4 flex items-center gap-2">
                <BriefcaseBusiness size={16} className="text-zinc-400" aria-hidden="true" />
                <h2 className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                  Overview
                </h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                <InfoItem icon={BriefcaseBusiness}>{profile.role}</InfoItem>
                <InfoItem icon={MapPin}>{profile.location}</InfoItem>
                <InfoItem icon={Phone}>
                  <Link href={`tel:${profile.phone.replaceAll(" ", "")}`} className="hover:text-zinc-950 dark:hover:text-zinc-50">
                    {profile.phone}
                  </Link>
                </InfoItem>
                <InfoItem icon={Mail}>
                  <Link href={`mailto:${profile.email}`} className="hover:text-zinc-950 dark:hover:text-zinc-50">
                    {profile.email}
                  </Link>
                </InfoItem>
                <InfoItem icon={Globe}>
                  <Link href={`https://${profile.website}`} className="hover:text-zinc-950 dark:hover:text-zinc-50">
                    {profile.website}
                  </Link>
                </InfoItem>
                <InfoItem icon={GitPullRequest}>
                  <Link href={`https://${profile.github}`} className="hover:text-zinc-950 dark:hover:text-zinc-50">
                    {profile.github}
                  </Link>
                </InfoItem>
              </ul>
            </Card>
          </section>

          <Section id="highlights" title="Impact">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map((item) => (
                <Card key={item.label}>
                  <p className="text-2xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </p>
                </Card>
              ))}
            </div>
          </Section>

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
