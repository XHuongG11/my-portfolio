import { useState } from "react";
import { createPortal } from "react-dom";
import { Filter, X, RotateCcw, SlidersHorizontal } from "lucide-react";
import TechCheckboxes from "./TechCheckboxes";

interface ProjectFilterProps {
  techFilters: TechFilter[];
  selectedTechs: string[];
  techCounts?: Record<string, number>;
  onToggleTech: (techName: string) => void;
  onReset: () => void;
}

export function ProjectFilter({
  techFilters,
  selectedTechs,
  techCounts = {},
  onToggleTech,
  onReset,
}: ProjectFilterProps) {
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);
  const isAllSelected = selectedTechs.length === 0;

  return (
    <>
      {/* Desktop View: Sidebar Filter Card */}
      <aside className="hidden lg:block sticky top-24">
        <div className="flex flex-col gap-5 p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
            <div className="flex items-center gap-2 text-[var(--text)]">
              <Filter size={18} className="text-[var(--accent)]" />
              <h3 className="text-sm font-bold tracking-tight">
                Filter by Technology
              </h3>
            </div>
            {!isAllSelected && (
              <button
                type="button"
                onClick={onReset}
                title="Reset filters"
                className="p-1 rounded-lg text-xs font-medium text-[var(--accent)] hover:bg-[var(--accent-bg)] transition-colors cursor-pointer flex items-center gap-1"
              >
                <RotateCcw size={13} />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>

          {/* Tech Checkboxes Component */}
          <TechCheckboxes
            techFilters={techFilters}
            selectedTechs={selectedTechs}
            techCounts={techCounts}
            onToggleTech={onToggleTech}
            onReset={onReset}
          />
        </div>
      </aside>

      {/* Mobile View: Trigger Button */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpenMobile(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-[var(--card-bg)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent-border)] transition-all cursor-pointer shadow-xs"
        >
          <SlidersHorizontal size={16} className="text-[var(--accent)]" />
          <span>Filter ({selectedTechs.length})</span>
        </button>
      </div>

      {/* Mobile View: Overlay Slide-in Drawer via React Portal */}
      {isOpenMobile &&
        createPortal(
          <div className="fixed inset-0 z-[9999] lg:hidden flex justify-start">
            {/* Overlay Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
              onClick={() => setIsOpenMobile(false)}
            />

            {/* Left Drawer Container */}
            <div className="relative z-10 w-full max-w-xs bg-[var(--card-bg)] border-r border-[var(--border)] h-screen h-dvh p-5 flex flex-col justify-between shadow-2xl animate-slide-in-left overflow-y-auto custom-scrollbar">
              <div className="flex flex-col gap-5">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2 text-[var(--text)]">
                    <Filter size={18} className="text-[var(--accent)]" />
                    <h3 className="text-sm font-bold tracking-tight">
                      Filter by Technology
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {!isAllSelected && (
                      <button
                        type="button"
                        onClick={onReset}
                        title="Reset filters"
                        className="p-1 rounded-lg text-xs font-medium text-[var(--accent)] hover:bg-[var(--accent-bg)] transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <RotateCcw size={13} />
                        <span>Reset</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsOpenMobile(false)}
                      className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Tech Checkboxes Component */}
                <TechCheckboxes
                  techFilters={techFilters}
                  selectedTechs={selectedTechs}
                  techCounts={techCounts}
                  onToggleTech={onToggleTech}
                  onReset={onReset}
                />
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-[var(--border)] mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpenMobile(false)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all cursor-pointer shadow-xs text-center"
                >
                  Done
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ProjectFilter;
