import {
  Lightbulb,
  MessageCircle,
  Puzzle,
  RefreshCw,
  Timer,
  Users,
} from "lucide-react";
import SectionCard from "../../common/SectionCard";

/* Icon map for soft skills */
const softSkillIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  "Problem Solving": Lightbulb,
  Teamwork: Users,
  Communication: MessageCircle,
  Adaptability: RefreshCw,
  "Time Management": Timer,
};

function SoftSkills({ skills }: { skills: string[] }) {
  return (
    <SectionCard icon={Puzzle} title="Soft Skills">
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, i) => {
          const ChipIcon = softSkillIcons[skill] || Lightbulb;
          return (
            <div
              key={skill}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text)] text-[0.8125rem] font-medium transition-all duration-300 hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(250,110,0,0.1)] animate-slide-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="w-[18px] h-[18px] flex items-center justify-center rounded-md bg-[var(--accent-bg)] text-[var(--accent)] text-[10px]">
                <ChipIcon size={10} />
              </span>
              {skill}
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

export default SoftSkills;
