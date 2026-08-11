import { Check } from "lucide-react";

interface TechCheckboxesProps {
  techFilters: TechFilter[];
  selectedTechs: string[];
  techCounts?: Record<string, number>;
  onToggleTech: (techName: string) => void;
  onReset: () => void;
}

export function TechCheckboxes({
  techFilters,
  selectedTechs,
  techCounts = {},
  onToggleTech,
  onReset,
}: TechCheckboxesProps) {
  const isAllSelected = selectedTechs.length === 0;

  return (
    <div className="space-y-2 max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
      {/* All Projects Option */}
      <button
        type="button"
        onClick={() => onReset()}
        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
          isAllSelected
            ? "bg-[var(--accent-bg)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]"
            : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text)]"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-4 h-4 rounded flex items-center justify-center transition-all ${
              isAllSelected
                ? "bg-[var(--accent)] border-none text-white shadow-xs"
                : "border border-[var(--border)] bg-[var(--bg)]"
            }`}
          >
            {isAllSelected && <Check size={12} strokeWidth={3} />}
          </div>
          <span>All Projects</span>
        </div>
      </button>

      {/* Technology Checkbox Options */}
      {techFilters.map((filter) => {
        const isSelected = selectedTechs.includes(filter.name);
        const count = techCounts[filter.name];

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onToggleTech(filter.name)}
            className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
              isSelected
                ? "bg-[var(--accent-bg)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]"
                : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text)]"
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-4 h-4 rounded shrink-0 flex items-center justify-center transition-all ${
                  isSelected
                    ? "bg-[var(--accent)] border-none text-white shadow-xs"
                    : "border border-[var(--border)] bg-[var(--bg)]"
                }`}
              >
                {isSelected && <Check size={12} strokeWidth={3} />}
              </div>
              <span className="truncate">{filter.name}</span>
            </div>
            {count !== undefined && (
              <span className="text-[11px] text-[var(--text-muted)] font-normal shrink-0 ml-2">
                ({count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default TechCheckboxes;
