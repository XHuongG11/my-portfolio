import { FolderGit2, House, Mail, Menu } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";

const navItems = [
  { id: "home", label: "Home", icon: House, url: "/" },
  { id: "projects", label: "Projects", icon: FolderGit2, url: "/projects" },
  { id: "contact", label: "Contact", icon: Mail, url: "/contact" },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClickNav = (url: string) => {
    navigate(url);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border)]">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-3">
        {/* Desktop */}
        <div className="hidden md:flex justify-end items-center gap-1">
          {navItems.map(({ id, label, icon: Icon, url }) => {
            const isActive =
              url === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(url);
            return (
              <button
                key={id}
                onClick={() => handleClickNav(url)}
                className={`
              flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium
              transition-all duration-300 cursor-pointer border-none outline-none
              ${
                isActive
                  ? "bg-[var(--accent-bg)] text-[var(--accent)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--border)]/50"
              }
            `}
              >
                {isActive && (
                  <Icon
                    className="animate-slide-in-left"
                    size={16}
                    strokeWidth={2.5}
                  />
                )}
                {label}
              </button>
            );
          })}
          <div className="ml-2 pl-3 border-l border-[var(--border)]">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex justify-end items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="p-1 text-[var(--accent)] cursor-pointer"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div
            className="absolute right-6 top-full z-50 mt-2 w-52 overflow-hidden
             rounded-xl border border-[var(--border)] md:hidden
             bg-[var(--card-bg)] p-1.5 shadow-lg animate-slide-in-right"
          >
            {navItems.map(({ id, label, icon: Icon, url }) => {
              const isActive =
                url === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(url);

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    handleClickNav(url);
                    setIsMenuOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 
                    rounded-lg px-3 py-2.5 text-sm font-medium
                    transition-all duration-200 cursor-pointer
                    ${
                      isActive
                        ? "bg-[var(--accent-bg)] text-[var(--accent)] font-semibold"
                        : "text-[var(--text-secondary)] hover:bg-[var(--border)]/50 hover:text-[var(--text)]"
                    }`}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
