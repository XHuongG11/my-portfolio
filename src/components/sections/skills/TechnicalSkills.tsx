import { useState } from "react";
import SectionCard from "../../common/SectionCard";
import { FileCode, Layers, Star, Wrench } from "lucide-react";

/* Icon map for categories */
const categoryIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Languages: FileCode,
  "Frameworks / Libraries": Layers,
  Tools: Wrench,
};

function TechnicalSkills({ categories }: { categories: SkillCategory[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = categories[activeTab];
  const Icon = categoryIcons[activeCategory.category] || FileCode;

  return (
    <SectionCard icon={Icon} title={`Technical Skills`}>
      {/* Tab navigation */}
      <div className="flex gap-1.5 flex-wrap mb-4">
        {categories.map((cat, i) => {
          const TabIcon = categoryIcons[cat.category] || FileCode;
          const isActive = i === activeTab;
          return (
            <button
              key={cat.category}
              className={`px-3.5 py-1.5 rounded-md border text-xs font-medium cursor-pointer transition-all duration-250 outline-none flex items-center gap-1 ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
                  : "border-[var(--border)] bg-transparent text-[var(--text-muted)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] hover:bg-[var(--accent-bg)]"
              }`}
              onClick={() => setActiveTab(i)}
            >
              <TabIcon size={12} />
              {cat.category}
            </button>
          );
        })}
      </div>

      {/* Skills list */}
      <div key={activeCategory.category} className="flex flex-col gap-2.5">
        {activeCategory.skills.map((skill, i) => (
          <SkillRow key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </SectionCard>
  );
}

/* Sub-components */

const MAX_STARS = 5;

const badgeClassMap: Record<string, string> = {
  advanced: "bg-green-500/12 text-green-500",
  intermediate: "bg-[var(--accent-bg)] text-[var(--accent)]",
  beginner: "bg-blue-500/12 text-blue-500",
};

function percentageToStars(pct: number): number {
  return Math.max(1, Math.min(MAX_STARS, Math.round(pct / 20)));
}

function StarRating({
  filled,
  total = MAX_STARS,
}: {
  filled: number;
  total?: number;
}) {
  return (
    <div className="flex items-center gap-[3px] shrink-0">
      {Array.from({ length: total }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={`transition-transform duration-250 ${
            i < filled
              ? "text-[var(--accent)] drop-shadow-[0_0_3px_rgba(250,110,0,0.35)] group-hover:scale-115"
              : "text-[var(--text-disabled)]"
          }`}
          fill={i < filled ? "var(--accent)" : "none"}
          strokeWidth={i < filled ? 0 : 1.5}
        />
      ))}
    </div>
  );
}

function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  const levelClass = skill.level.toLowerCase();
  const stars = percentageToStars(skill.percentage);

  return (
    <div
      className="group flex items-center justify-between gap-3 p-2 rounded-lg transition-colors duration-200 hover:bg-[var(--bg-secondary)] animate-slide-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-[0.8125rem] font-medium text-[var(--text)] whitespace-nowrap">
          {skill.name}
        </span>
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.625rem] font-semibold tracking-[0.3px] uppercase ${badgeClassMap[levelClass] || "bg-[var(--bg-secondary)] text-[var(--text-muted)]"}`}
        >
          {skill.level}
        </span>
      </div>
      <StarRating filled={stars} />
    </div>
  );
}

export default TechnicalSkills;
