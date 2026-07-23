import { Section } from "@/components/layout/section";
import { ExperienceItem } from "./experience-item";
import { experience } from "@/config/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" count={experience.length}>
      <div className="reveal relative border-l border-border ml-3 mt-4">
        <div className="flex flex-col gap-12">
          {experience.map((job, index) => (
            <ExperienceItem key={job.company} job={job} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
