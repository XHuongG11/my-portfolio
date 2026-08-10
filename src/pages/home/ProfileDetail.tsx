import {
  ArrowLeft,
  Calendar,
  MapPin,
  Mail,
  Phone,
  User,
  GraduationCap,
  Briefcase,
  Heart,
  Target,
} from "lucide-react";
import SectionCard from "../../components/cards/section-card";

interface ProfileDetailProps {
  onBack: () => void;
}

function ProfileDetail({ onBack }: ProfileDetailProps) {
  return (
    <div className="flex-1 space-y-6 text-left animate-slide-in-left max-h-[calc(100vh-180px)] overflow-y-auto pr-2 custom-scrollbar">
      {/* Back button */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-[var(--text-muted)]
          text-sm font-medium
          cursor-pointer border-none outline-none bg-transparent
          transition-all duration-300 hover:text-[var(--accent)]"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        Back to Intro
      </button>

      {/* Personal Info */}
      <SectionCard icon={User} title="Personal Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InfoItem icon={Calendar} label="Date of Birth" value="11/11/2004" />
          <InfoItem icon={User} label="Gender" value="Female" />
          <InfoItem icon={MapPin} label="Location" value="Linh Xuan, Ho Chi Minh City" />
          <InfoItem icon={Mail} label="Email" value="xhuong112004@gmail.com" />
          <InfoItem icon={Phone} label="Phone" value="(+84) 354 488 239" />
        </div>
      </SectionCard>

      {/* Career Objective */}
      <SectionCard icon={Target} title="Career Objective">
        <p className="text-[var(--text-secondary)] text-sm">
          Seeking a Frontend Developer Intern position where I can apply my knowledge of
          React, TypeScript, and modern web technologies. I am eager to learn from experienced
          developers, contribute to real-world projects, and grow my skills in building
          responsive, accessible, and performant user interfaces.
        </p>
      </SectionCard>

      {/* Education */}
      <SectionCard icon={GraduationCap} title="Education">
        <TimelineItem
          title="Ho Chi Minh City University of Technology and Engineering - HCM-UTE"
          subtitle="Information Technology"
          period="2022 – 2026"
          details={["GPA: 3.7 / 4.0"]}
        />
      </SectionCard>

      {/* Work Experience */}
      <SectionCard icon={Briefcase} title="Work Experience">
        <TimelineItem
          title="Hitek Solution"
          subtitle="Software Developer Intern"
          period="07/2025 – 10/2025"
          details={[
               "Built and optimized a Map Tracking Web Application using .NET Minimal API, Entity Framework Core, and SQL Server",
    "Researched and integrated a secure, real-time QR-based payment module with BIDV Bank API, ensuring seamless transaction handling",
          ]}
        />
      </SectionCard>

      {/* Extracurricular Activities */}
      <SectionCard icon={Heart} title="Extracurricular Activities">
        <TimelineItem
          title="Saigon Children's Charity"
          subtitle="Member"
          period="2023 – Present"
          details={[
            "Participated in club activities and community events",
            "Participated in the UGO Scholarship Program for female students",
          ]}
        />
      </SectionCard>
    </div>
  );
}

// Sub-components
function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={14} className="text-[var(--accent)] shrink-0" />
      <div>
        <span className="text-[var(--text-muted)] text-xs block">{label}</span>
        <span className="text-[var(--text)] text-sm font-medium">{value}</span>
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  subtitle,
  period,
  details,
}: {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
}) {
  return (
    <div className="relative pl-4 border-l-2 border-[var(--accent)]/30">
      <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
      <h4 className="text-[var(--text)] text-sm font-semibold !m-0">{title}</h4>
      <p className="text-[var(--accent)] text-xs font-medium mt-0.5">{subtitle}</p>
      <p className="text-[var(--text-muted)] text-xs flex items-center gap-1 mt-0.5">
        <Calendar size={10} />
        {period}
      </p>
      <ul className="mt-2 space-y-1 list-none p-0">
        {details.map((detail, i) => (
          <li
            key={i}
            className="text-[var(--text-secondary)] text-xs flex items-start gap-2"
          >
            <span className="text-[var(--accent)] mt-1 shrink-0">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileDetail;
