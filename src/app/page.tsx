import Link from "next/link";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Calendar,
  Check,
  Code2,
  ExternalLink,
  GitPullRequest,
  Globe,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ActiveNav } from "@/components/active-nav";
import { StatsBand } from "@/components/stats-band";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectCard } from "@/components/project-card";
import { getSafeUrl } from "@/lib/utils";
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
import Profile from "../../public/Profile.webp";
import OnekoCat from "@/components/oneko/OnekoCat";

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
        <h2 className="section-label">{title}</h2>
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
        "rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/[0.02] dark:border-zinc-800 dark:bg-zinc-950",
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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <RevealOnScroll />
      <OnekoCat />
      {/* <GridBackground /> */}
      <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl px-4 py-4 sm:px-6">
        <header className="sticky top-0 z-40 -mx-4 border-b border-zinc-200/80 bg-zinc-50/90 px-4 py-3 backdrop-blur dark:border-zinc-800/80 dark:bg-black/85 sm:-mx-6 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <ActiveNav items={navItems} />
            <div className="flex items-center gap-2">
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
                <Image
                  src={Profile}
                  alt={`${profile.name} profile photo`}
                  width={100}
                  height={100}
                  className="rounded-full"
                  priority
                  sizes="100px"
                />
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
            <div className="mt-5 social-pills-row">
              <Link
                href={getSafeUrl("https://twitter.com/kiranrega")}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" className="social-icon fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="social-label">Twitter</span>
              </Link>
              
              <Link
                href={getSafeUrl(`https://${profile.linkedin}`)}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="social-icon stroke-current fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="social-label">LinkedIn</span>
              </Link>

              <Link
                href={getSafeUrl(`https://${profile.github}`)}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="social-icon stroke-current fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span className="social-label">GitHub</span>
              </Link>

              <Link
                href={getSafeUrl(`https://${profile.website}`)}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="Portfolio"
              >
                <svg viewBox="0 0 24 24" className="social-icon stroke-current fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span className="social-label">Portfolio</span>
              </Link>

              <Link
                href={getSafeUrl(`mailto:${profile.email}`)}
                className="social-pill"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" className="social-icon stroke-current fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="social-label">Email</span>
              </Link>

              <Link
                href={getSafeUrl(profile.resume)}
                download
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="Resume"
              >
                <svg viewBox="0 0 24 24" className="social-icon stroke-current fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
                <span className="social-label">Resume</span>
              </Link>
            </div>
          </section>

          {/* ── Impact stats band ── */}
          <section id="highlights" className="scroll-mt-24 py-7">
            <StatsBand stats={highlights} />
          </section>

          <Section id="about" title="About">
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
          </Section>

          <Section id="stack" title="Stack" count={stackGroups.reduce((total, group) => total + group.items.length, 0)}>
            <div className="grid gap-3 reveal">
              {stackGroups.map((group, index) => (
                <Card
                  key={group.title}
                  className="reveal-item"
                  style={{ "--reveal-index": index } as React.CSSProperties}
                >
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
