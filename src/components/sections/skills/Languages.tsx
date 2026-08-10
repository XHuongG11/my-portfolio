import { Globe } from "lucide-react";
import SectionCard from "../../common/SectionCard";

function Languages({ languages }: { languages: Language[] }) {
  return (
    <SectionCard icon={Globe} title="Languages">
      <div className="flex flex-col gap-2.5">
        {languages.map((lang, i) => (
          <div
            key={lang.name}
            className="flex items-center gap-3 p-3 px-4 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] transition-all duration-300 hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] hover:-translate-y-0.5 animate-slide-in-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--accent-bg)] text-[var(--accent)] shrink-0">
              <Globe size={18} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-[var(--text)]">
                {lang.name}
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                {lang.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default Languages;
