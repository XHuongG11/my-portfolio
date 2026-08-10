import { Mail, Phone } from "lucide-react";
import github from "../../assets/icons/github-sign.png";
import linkedin from "../../assets/icons/linkedin.png";

function Footer() {
  return <footer className="flex flex-col items-center justify-center gap-4 bg-[var(--bg)]/80 border-t border-[var(--border)] mx-auto w-full-7xl px-6 lg:px:8 py-8">
    <div className="flex justify-start font-bold text-lg text-[var(--text)] ">Contact</div>
    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
    <div className="flex gap-4 ">
      <a href="https://github.com/XHuongG11" target="_blank" className="social-icon"  rel="noopener noreferrer">
        <img src={github} alt="github" className="size-4" />
      </a>
      <a href="https://www.linkedin.com/in/h%C6%B0%C6%A1ng-cao-9b28bb35b/" className="social-icon" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin"   className="size-4" />
      </a>
    </div>
    <div className="flex gap-6 justify-center items-center">
      <div className="flex gap-2 items-center">
      <Mail className="text-[var(--accent)] " size={18} />
      <p>xhuong112004@gmail.com</p>
      </div>
      <div className="flex gap-2  items-center">
        <Phone className="text-[var(--accent)]" size={18}/>
        <p>(+84) 354 488 239</p>
      </div>   
    </div>
   <div className="w-[60%] border-b border-[var(--border)]"/>
   <p className="text-[var(--text-h)] text-sm">Designed & Built by Huong Cao · React / TypeScript</p>
  </footer>;
}

export default Footer;
