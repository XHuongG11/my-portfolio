import { Calendar, ExternalLink, GitBranch, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { name, role, period, description, thumbnail, technologies, links } =
    project;

  return (
    <div className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--bg-tertiary)]">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--accent)]">
            {role}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 justify-between gap-5">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200 !m-0">
              {name}
            </h3>
            <div className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] whitespace-nowrap">
              <Calendar size={12} />
              {period}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed text-justify !m-0">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)]">
              <Layers size={12} className="text-[var(--accent)]" />
              <span>Technologies</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-[var(--border)]">
          {/* GitHub Link(s) */}
          {typeof links.github === "string" && links.github !== "" && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] transition-all duration-200"
            >
              <GitBranch size={14} />
              <span>GitHub</span>
            </a>
          )}

          {/* Demo Link */}
          {links.demo ? (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--accent)] text-white text-xs font-semibold hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-sm ml-auto"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          ) : (
            <div className="relative group/tooltip ml-auto">
              <button
                type="button"
                disabled
                title="Not yet implemented"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-disabled)] text-xs font-semibold border border-[var(--border)] cursor-not-allowed opacity-70"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </button>
              <div
                role="tooltip"
                className="absolute bottom-full right-0 mb-2 hidden group-hover/tooltip:flex items-center px-2.5 py-1 rounded-md bg-[var(--card-bg)] text-[var(--text-secondary)] text-[11px] font-medium border border-[var(--border)] shadow-md whitespace-nowrap z-20 pointer-events-none"
              >
                Not yet implemented
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
