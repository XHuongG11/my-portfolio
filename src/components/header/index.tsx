import {
  FolderGit2,
  House,
  Mail,
  Wrench
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../theme-toggle";

const navItems = [
  { id: "home", label: "Home", icon: House, url: "/" },
  { id: "skills", label: "Skills", icon: Wrench, url: "/skills" },
  { id: "projects", label: "Projects", icon: FolderGit2, url: "/projects" },
  { id: "contact", label: "Contact", icon: Mail, url: "/contact" },
];

function Header() {
  const navigate = useNavigate();
  const handleClickNav = (url: string, id: string) => {
    navigate(url);
    setActive(id);
  }
  const [active, setActive] = useState("home");

  return (
    <header>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border)]">
      <div className="flex justify-end items-center gap-1 mx-auto max-w-7xl px-6 lg:px-8 py-3">
        {navItems.map(({ id, label, icon: Icon, url }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => handleClickNav(url, id)}
              className={`
                flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-sm font-medium
                transition-all duration-300 cursor-pointer border-none outline-none
                ${
                  isActive
                    ? "bg-[#FD6F00]/10 text-[#FD6F00]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--border)]/50"
                }
              `}
            >
              {isActive && <Icon className="animate-slide-in-left" size={16} strokeWidth={2.5} />}
              {label}
            </button>
          );
        })}
        <div className="ml-2 pl-3 border-l border-[var(--border)]">
          <ThemeToggle />
        </div>
      </div>
    </nav>
    </header>
    
  );
}

export default Header;
