import Link from "next/link";
import Image from "next/image";
import { TechChip } from "@/components/skill-icons";
import type { Project } from "@/types/index";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group font-geist-sans rounded-xl border border-border bg-card transition-all duration-200 ease-out hover:border-muted"
      style={{ "--reveal-index": index } as React.CSSProperties}
    >
      <div className="flex flex-col sm:flex-row overflow-hidden">
        {/* Image */}
        <div className="relative w-full aspect-video sm:w-[200px] overflow-hidden rounded-t-xl sm:rounded-l-xl border-b sm:border-b-0 sm:border-r border-border">
          <Image
            src={`/project/${project.name.toLowerCase().replace(/\s+/g, "-")}.png`}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 640px) 100vw, 200px"
            className="object-cover"
          />
        </div>
        {/* Content */}
        <div className="flex-1 px-4 sm:px-5 py-4 sm:py-5">
          {/* Title row */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-[15px] sm:text-base font-geist-sans font-medium tracking-tight">
              {project.name}
            </h3>
            <div className="flex gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 dark:text-[#737373] hover:text-zinc-200 dark:hover:text-[#e0e0e0] transition-colors duration-150"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 dark:text-[#737373] hover:text-zinc-200 dark:hover:text-[#e0e0e0] transition-colors duration-150"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1.52 5.09 3A5.07 5.07 0 0 0 5 12 5.07 5.07 0 0 0 5.14 19z"/></svg>
                </Link>
              )}
            </div>
          </div>
          {/* Description */}
          <p className="text-[#b2b2b2] font-geist-sans font-[450] max-w-[20rem] text-[13.5px] sm:text-[14px] leading-[1.75] mb-5">
            {project.description}
          </p>
          {/* Tech chips */}
          <div className="flex flex-wrap gap-3 mt-auto items-center opacity-95">
            {project.tech.map((tech) => (
              <TechChip key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
