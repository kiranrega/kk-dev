import { Section } from "@/components/layout/section";
import { ProjectCard } from "./project-card";
import { projects } from "@/config/projects";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" count={projects.length}>
      <div className="grid gap-4 reveal">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
