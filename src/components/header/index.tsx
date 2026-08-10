import { useState } from "react";
import {
  House,
  Wrench,
  FolderGit2,
  Briefcase,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: House },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

function Header() {
  const [active, setActive] = useState("home");

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border)]">
      <div className="flex justify-end items-center gap-1 mx-auto max-w-7xl px-6 lg:px-8 py-3">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`
                flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-sm font-medium
                transition-all duration-300 cursor-pointer border-none outline-none
                ${
                  isActive
                    ? "bg-[#FD6F00]/10 text-[#FD6F00]"
                    : "text-[var(--text)] hover:text-[var(--text-h)] hover:bg-[var(--border)]/50"
                }
              `}
            >
              {isActive && <Icon className="animate-slide-in-left" size={16} strokeWidth={2.5} />}
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Header;
