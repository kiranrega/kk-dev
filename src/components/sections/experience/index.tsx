import { Section } from "@/components/layout/section";
import { ExperienceItem } from "./experience-item";
import { experience } from "@/config/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      count={experience.length}
      subtitle="02 / Career Trajectory"
      description="Proven engineering impact delivering high-performance full-stack applications, optimizing frontend load times, and driving production features."
      pinned={true}
    >
      <div className="space-y-6">
        {experience.map((job, index) => (
          <ExperienceItem key={job.company} job={job} index={index} />
        ))}
      </div>
    </Section>
  );
}
