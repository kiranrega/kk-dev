import { Section } from "@/components/layout/section";
import { Card } from "@/components/layout/card";
import { SkillPill } from "@/components/features/skill-icons";
import { allSkills } from "@/config/skills";

export function StackSection() {
  return (
    <Section id="stack" title="TECH STACK" count={allSkills.length}>
      <Card className="reveal-item" style={{ "--reveal-index": 0 } as React.CSSProperties}>
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {allSkills.map((item) => (
            <SkillPill key={`stack-flat-${item}`} name={item} />
          ))}
        </div>
      </Card>
    </Section>
  );
}
