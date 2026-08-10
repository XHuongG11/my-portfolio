type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

interface Skill {
  name: string;
  level: SkillLevel;
  percentage: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface Language {
  name: string;
  level: string;
}

interface SkillsData {
  technical: SkillCategory[];
  softSkills: string[];
  languages: Language[];
}

interface ProjectLinks {
  github?: {
    backend?: string;
    frontend?: string;
  };
  demo?: string;
}

interface Project {
  id: number;
  name: string;
  role: string;
  period: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  highlights?: string[];
  links: ProjectLinks;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
}
