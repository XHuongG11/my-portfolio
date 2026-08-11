import { ArrowRight, Download } from "lucide-react";
import avatar from "../assets/avatar.jpg";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/skills/SkillsSection";
import { Reveal } from "../components/common/Reveal";

function HomePage() {
  const scrollToProfile = () => {
    document
      .getElementById("profile-detail")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-[var(--bg)] overflow-hidden space-y-16 py-6 lg:py-10">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-140px)] flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <Reveal
            direction="left"
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <p className="text-lg font-medium text-[var(--text-muted)]">
              Hi, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] !my-2">
              Huong Cao
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--accent)] !mb-4">
              Frontend Developer
            </h2>

            {/* Short intro */}
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
              A passionate Frontend Developer Intern crafting beautiful,
              responsive, and user-friendly web experiences with modern
              technologies.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={scrollToProfile}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl 
                bg-[var(--accent)] text-white font-semibold text-sm 
                cursor-pointer border-none outline-none
                transition-all duration-300 
                hover:bg-[var(--accent-hover)] 
                hover:shadow-[0_0_25px_rgba(250,110,0,0.4)] 
                hover:scale-105"
              >
                Profile Details
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <a
                href="https://drive.google.com/file/d/1itoZYjDeo2NYuF7JRvRfOT5sG2d6gmSw/view?usp=sharing"
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 
                rounded-xl border border-[var(--border)] 
                text-[var(--text-secondary)] 
                font-semibold text-sm 
                transition-all duration-300 
                hover:border-[var(--border-hover)] 
                hover:text-[var(--text)] hover:scale-105"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </Reveal>

          {/* Right Content - Avatar */}
          <Reveal
            direction="right"
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[340px] h-[340px] lg:w-[440px] lg:h-[440px] rounded-full border border-[var(--border)]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[380px] h-[380px] lg:w-[490px] lg:h-[490px] rounded-full border border-[var(--border)]/30" />
              </div>

              {/* Avatar image */}
              <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-2 border-[var(--border)]/50">
                <img
                  src={avatar}
                  alt="Huong Cao - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* accent dot */}
              <div className="absolute top-8 right-4 w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse" />
              <div className="absolute bottom-12 left-2 w-2 h-2 rounded-full bg-[var(--accent)]/60 animate-pulse" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Profile Detail Section */}
      <section id="profile-detail" className="pt-6 space-y-6">
        <Reveal direction="up" className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text)] tracking-tight">
            Profile Details
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Learn more about my background, education, and experience.
          </p>
        </Reveal>
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-6 space-y-6">
        <Reveal direction="up" className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text)] tracking-tight">
            Skills
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Technologies, tools, and soft skills I specialize in.
          </p>
        </Reveal>
        <SkillsSection />
      </section>
    </div>
  );
}

export default HomePage;
