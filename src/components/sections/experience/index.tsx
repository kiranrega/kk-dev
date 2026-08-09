import { Section } from "@/components/layout/section";
import { ExperienceItem } from "./experience-item";
import { experience } from "@/config/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="EXPERIENCE"
      count={experience.length}
      subtitle="02 / Career Trajectory"
      description="Proven engineering impact delivering high-performance full-stack applications, optimizing frontend load times, and driving production features."
      pinned={true}
    >
      <div className="relative border-l border-neutral-300 dark:border-neutral-800 ml-2 sm:ml-4 space-y-8">
        {experience.map((job, index) => (
          <ExperienceItem key={job.company} job={job} index={index} />
        ))}
      </div>
    </Section>
  );
}
