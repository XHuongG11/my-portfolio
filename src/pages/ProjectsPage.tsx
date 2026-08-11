import { useMemo, useState } from "react";
import { Search, X, FolderX } from "lucide-react";
import projectsData from "../data/projects.json";
import techFiltersData from "../data/tech-filters.json";
import ProjectCard from "../components/common/ProjectCard";
import ProjectFilter from "../components/projects/ProjectFilter";
import { Reveal } from "../components/common/Reveal";

const projects = projectsData as Project[];
const techFilters = techFiltersData as TechFilter[];

function ProjectsPage() {
  const [search, setSearch] = useState<string>("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  // Calculate project counts for each technology
  const techCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      p.technologies.forEach((tech) => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Handle checking/unchecking a technology tag
  const handleToggleTech = (techName: string) => {
    setSelectedTechs((prev) =>
      prev.includes(techName)
        ? prev.filter((t) => t !== techName)
        : [...prev, techName]
    );
  };

  // Reset search and technology filters
  const handleResetFilters = () => {
    setSearch("");
    setSelectedTechs([]);
  };

  // Filter projects based on search and selected technologies
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        search.trim() === "" ||
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(search.toLowerCase())
        );

      const matchesTech =
        selectedTechs.length === 0 ||
        selectedTechs.some((selected) =>
          project.technologies.some(
            (t) => t.toLowerCase() === selected.toLowerCase()
          )
        );

      return matchesSearch && matchesTech;
    });
  }, [search, selectedTechs]);

  const hasActiveFilter = search !== "" || selectedTechs.length > 0;

  return (
    <section className="relative min-h-[calc(100vh-69px)] bg-[var(--bg)] overflow-hidden py-6 lg:py-10">
      <div className="max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <Reveal direction="up">
          <div className="space-y-1 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text)] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-2xl">
              A selection of web applications and full-stack projects I have
              built, showcasing frontend craftsmanship and backend integration.
            </p>
          </div>
        </Reveal>

        {/* Page Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Filter Component (Desktop Sidebar & Mobile Drawer) */}
          <div className="lg:col-span-1">
            <Reveal direction="up" delay={100}>
              <ProjectFilter
                techFilters={techFilters}
                selectedTechs={selectedTechs}
                techCounts={techCounts}
                onToggleTech={handleToggleTech}
                onReset={handleResetFilters}
              />
            </Reveal>
          </div>

          {/* Main Content Area: Search & Projects Grid */}
          <main className="lg:col-span-3 space-y-6">
            {/* Search Input */}
            <Reveal direction="up" delay={100}>
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                />
                <input
                  id="search"
                  type="text"
                  placeholder="Search projects or technologies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 rounded-2xl text-sm bg-[var(--card-bg)] text-[var(--text)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent)] transition-all shadow-xs"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors p-0.5 rounded-full cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </Reveal>

            {/* Active Filter Badges */}
            {selectedTechs.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-[var(--text-muted)]">
                  Active filters:
                </span>
                {selectedTechs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)]"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleToggleTech(tech)}
                      className="hover:text-[var(--accent-hover)] cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] underline ml-1 cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Projects Grid or Empty State */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project, i) => (
                  <Reveal key={project.id} direction="up" delay={i * 100}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal direction="up" delay={0}>
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] space-y-4">
                  <div className="p-4 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]">
                    <FolderX size={32} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-[var(--text)]">
                      No projects found
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] max-w-sm">
                      No projects match your search query or selected technology filters.
                    </p>
                  </div>
                  {hasActiveFilter && (
                    <button
                      type="button"
                      onClick={handleResetFilters}
                      className="px-4 py-2 text-xs font-semibold text-[var(--accent)] bg-[var(--accent-bg)] border border-[var(--accent-border)] rounded-xl hover:bg-[var(--accent-bg-hover)] transition-all cursor-pointer"
                    >
                      Reset all filters
                    </button>
                  )}
                </div>
              </Reveal>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
