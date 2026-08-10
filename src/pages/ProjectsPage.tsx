import projectsData from "../data/projects.json";
import ProjectCard from "../components/common/ProjectCard";
import { Reveal } from "../components/common/Reveal";

const projects = projectsData as Project[];

function ProjectsPage() {
  return (
    <section className="relative min-h-[calc(100vh-69px)] bg-[var(--bg)] overflow-hidden py-6 lg:py-10">
      <div className="max-w-7xl mx-auto space-y-8">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} direction="up" delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
