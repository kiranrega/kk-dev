import { Section } from "@/components/layout/section";
import { ProjectCard } from "./project-card";
import { projects } from "@/config/projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="PROJECTS"
      count={projects.length}
      subtitle="03 / Selected Works"
      description="Curated web apps and developer tooling built with an obsession for performance, clean architecture, and intuitive UX."
      pinned={true}
    >
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
