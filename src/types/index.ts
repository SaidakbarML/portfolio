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
  /** Brand names — not translated. */
  label: string;
  href: string;
  handle: string;
  icon: string;
}

/** Values are language-independent; `key` resolves the label in the dictionary. */
export interface Metric {
  key: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  icon: string;
  accent: Accent;
  skills: Skill[];
}

export type Accent = "blue" | "purple" | "cyan";

export interface Experience {
  id: string;
  company: string;
  logo: string;
  metrics: Metric[];
  stack: string[];
  progressionKeys: string[];
}

export interface ProjectLink {
  type: "github" | "demo" | "live" | "caseStudy";
  /** Resolves the button label in the dictionary. */
  key: string;
  href: string;
}

export interface Project {
  id: string;
  slug: string;
  year: string;
  status: "Production" | "Open source" | "Archived" | "Deployed";
  featured?: boolean;
  accent: Accent;
  cover: string;
  /** Logos need 'contain' so they aren't cropped; photos use 'cover'. */
  coverFit?: "cover" | "contain";
  screenshots: string[];
  architectureDiagram: string;
  metricKeys: string[];
  metrics: Metric[];
  stack: string[];
  links: ProjectLink[];
}

export interface EducationItem {
  id: string;
  institutionUrl?: string;
  logo: string;
  image?: string;
}

export interface Certificate {
  id: string;
  issuer: string;
  href?: string;
  logo: string;
}

export interface Achievement {
  id: string;
  icon: string;
  accent: Accent;
  metric: Metric;
}

export interface LanguageSkill {
  key: string;
  proficiency: number;
}
