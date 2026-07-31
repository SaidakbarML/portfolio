import type { LucideIcon } from "lucide-react";

export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "certificates"
  | "contact";

export type SlabTone = "ink" | "paper";

export interface NavItem {
  id: SectionId;
  label: string;
  /** Zero-padded stage number shown in the DAG rail. */
  stage: string;
  /** Short pipeline verb, e.g. "transform". */
  task: string;
  tone: SlabTone;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  accent: "blue" | "purple" | "cyan";
  blurb: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  note?: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  logo: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  summary: string;
  progression?: ExperienceRole[];
  achievements: string[];
  metrics: Metric[];
  stack: string[];
}

export interface ProjectLink {
  type: "github" | "demo" | "live" | "caseStudy" | "video";
  href: string;
  label: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  status: "Production" | "Open source" | "Archived" | "Deployed";
  featured?: boolean;
  accent: "blue" | "purple" | "cyan";
  cover: string;
  screenshots: string[];
  architectureDiagram: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  impact: string;
  scalability: string;
  deployment: string;
  challenges: ProjectSection[];
  lessons: string[];
  future: string[];
  metrics: Metric[];
  stack: string[];
  links: ProjectLink[];
}

export interface EducationItem {
  id: string;
  institution: string;
  institutionUrl?: string;
  logo: string;
  credential: string;
  field: string;
  period: string;
  detail: string;
  highlights: string[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  href?: string;
  logo: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: "blue" | "purple" | "cyan";
  metric?: Metric;
}

export interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export type IconMap = Record<string, LucideIcon>;
