import type { SkillCategory } from "@/types";

/**
 * Levels are a self-assessment (0–100) driving the density meters, weighted
 * toward depth of *production* use. Titles, blurbs and notes live in the
 * dictionaries, keyed by category `id` and skill `name`.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    icon: "code",
    accent: "blue",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 92 },
      { name: "Bash", level: 75 },
      { name: "R", level: 65 },
    ],
  },
  {
    id: "machine-learning",
    icon: "brain",
    accent: "purple",
    skills: [
      { name: "Scikit-learn", level: 90 },
      { name: "Feature Engineering", level: 88 },
      { name: "BigQuery ML", level: 82 },
      { name: "Model Evaluation", level: 85 },
    ],
  },
  {
    id: "deep-learning",
    icon: "network",
    accent: "cyan",
    skills: [
      { name: "TensorFlow", level: 68 },
      { name: "PyTorch", level: 62 },
      { name: "Embeddings & Vector Search", level: 78 },
      { name: "LLM Integration", level: 70 },
    ],
  },
  {
    id: "computer-vision",
    icon: "scan-eye",
    accent: "blue",
    skills: [
      { name: "OpenCV", level: 82 },
      { name: "Face Recognition", level: 85 },
      { name: "Image Preprocessing", level: 80 },
      { name: "Vector Databases", level: 78 },
    ],
  },
  {
    id: "data-engineering",
    icon: "database-zap",
    accent: "cyan",
    skills: [
      { name: "Apache Airflow", level: 90 },
      { name: "ETL / ELT", level: 92 },
      { name: "Data Warehousing", level: 88 },
      { name: "Data Modeling", level: 85 },
      { name: "Web Scraping", level: 90 },
    ],
  },
  {
    id: "cloud",
    icon: "cloud",
    accent: "purple",
    skills: [
      { name: "AWS", level: 80 },
      { name: "GCP", level: 82 },
      { name: "Nginx", level: 78 },
      { name: "VPS Administration", level: 85 },
    ],
  },
  {
    id: "databases",
    icon: "database",
    accent: "blue",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "BigQuery", level: 88 },
      { name: "MySQL", level: 80 },
      { name: "Query Optimisation", level: 82 },
    ],
  },
  {
    id: "mlops",
    icon: "settings-2",
    accent: "purple",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Git", level: 90 },
      { name: "Scheduled Retraining", level: 84 },
      { name: "REST API Design", level: 86 },
    ],
  },
  {
    id: "visualization",
    icon: "bar-chart-3",
    accent: "cyan",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Plotly", level: 82 },
      { name: "Dash", level: 80 },
    ],
  },
  {
    id: "tools",
    icon: "wrench",
    accent: "blue",
    skills: [
      { name: "Linux", level: 84 },
      { name: "Code Review", level: 80 },
      { name: "Technical Mentoring", level: 85 },
      { name: "Agile Delivery", level: 78 },
    ],
  },
];

/** Flat list for the ticker. */
export const TECH_BADGES: string[] = [
  "Python",
  "SQL",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "OpenCV",
  "FastAPI",
  "Airflow",
  "BigQuery",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GCP",
  "Hetzner",
  "Nginx",
  "Power BI",
  "Plotly",
  "Git",
  "Bash",
  "Linux",
  "Vector DB",
  "ETL / ELT",
];
