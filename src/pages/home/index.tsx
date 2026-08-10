import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import avatar from "../../assets/avatar.jpg";
import ProfileDetail from "./ProfileDetail";

function HomePage() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-69px)] bg-[var(--bg)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-16 lg:py-24">

        {/* Left Content */}
        {!showProfile ? (
          <div className="flex-1 space-y-6 text-center lg:text-left animate-slide-in-left" key="intro">
            <p className="text-[var(--text-muted)] text-lg">
              Hi, I am
            </p>
            <h1 className="text-[var(--text)] text-5xl lg:text-6xl font-bold tracking-tight !my-2">
              Huong Cao
            </h1>
            <h2 className="text-[var(--accent)] text-3xl lg:text-5xl font-bold tracking-tight !mb-4">
              Frontend Developer
            </h2>

            {/* Short intro */}
            <p className="text-[var(--text-muted)] text-base lg:text-lg max-w-lg leading-relaxed">
              A passionate Frontend Developer Intern crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => setShowProfile(true)}
                className="group flex items-center gap-2 px-6 py-3 rounded-lg 
                bg-[var(--accent)] text-white font-semibold text-sm 
                cursor-pointer border-none outline-none
                transition-all duration-300 
                hover:bg-[var(--accent-hover)] 
                hover:shadow-[0_0_25px_rgba(250,110,0,0.4)] 
                hover:scale-105"
              >
                Profile Details
                <ArrowRight size={16} className="transition-transform duration-300 
                group-hover:translate-x-1" />
              </button>
              <a
                href="/cv.pdf"
                download
                className="group flex items-center gap-2 px-6 py-3 
                rounded-lg border border-[var(--border)] 
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
          </div>
        ) : (
          <ProfileDetail key="profile" onBack={() => setShowProfile(false)} />
        )}

        {/* Right Content - Avatar */}
        <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
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

            {/*  accent dot */}
            <div className="absolute top-8 right-4 w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse" />
            <div className="absolute bottom-12 left-2 w-2 h-2 rounded-full bg-[var(--accent)]/60 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
