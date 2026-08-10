export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface Skill {
  name: string;
  level: SkillLevel;
  percentage: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillsData {
  technical: SkillCategory[];
  softSkills: string[];
  languages: Language[];
}

export interface ProjectLinks {
  github?: {
    backend?: string;
    frontend?: string;
  };
  demo?: string;
}

export interface Project {
  id: number;
  name: string;
  role: string;
  period: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  highlights: string[];
  links: ProjectLinks;
}

export interface Experience {
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