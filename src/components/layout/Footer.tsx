import { Mail, Phone } from "lucide-react";
import github from "../../assets/icons/github-sign.png";
import linkedin from "../../assets/icons/linkedin.png";

function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--bg)]/80 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-6 text-center">
        <h3 className="font-bold text-lg text-[var(--text)]">Contact</h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed">
          Open to Frontend & Full-Stack Developer opportunities. Eager to collaborate on real-world projects and build performant web applications.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/XHuongG11"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <img src={github} alt="github" className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/h%C6%B0%C6%A1ng-cao-9b28bb35b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="linkedin" className="size-4" />
          </a>
        </div>

        {/* Info Items */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-[var(--text)]">
          <div className="flex gap-2 items-center">
            <Mail className="text-[var(--accent)]" size={16} />
            <a
              href="mailto:xhuong112004@gmail.com"
              className="hover:text-[var(--accent)] transition-colors"
            >
              xhuong112004@gmail.com
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="text-[var(--accent)]" size={16} />
            <span>(+84) 354 488 239</span>
          </div>
        </div>

        <div className="w-full max-w-xs border-b border-[var(--border)] pt-2" />

        <p className="text-xs text-[var(--text-muted)]">
          Designed & Built by Huong Cao · React / TypeScript / Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
