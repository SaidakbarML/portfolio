import { LINKS } from "@/constants/site";
import type { Project } from "@/types";

/**
 * Structural data only — every string a visitor reads lives in
 * src/i18n/dictionaries/*, keyed by the `id` below.
 */
export const PROJECTS: Project[] = [
  {
    id: "asint",
    slug: "asint",
    year: "2024 — Present",
    status: "Production",
    featured: true,
    accent: "blue",
    cover: "/images/projects/asint-cover.png",
    screenshots: ["/images/projects/asint-shot-1.png", "/images/projects/asint-shot-2.png"],
    architectureDiagram: "/images/diagrams/asint-architecture.png",
    metricKeys: ["vehicles", "properties", "dashboards", "orgs"],
    metrics: [
      { key: "vehicles", value: 3, suffix: "M+" },
      { key: "properties", value: 2.3, suffix: "M+", decimals: 1 },
      { key: "dashboards", value: 1, suffix: "M+" },
      { key: "orgs", value: 3 },
    ],
    stack: [
      "Python",
      "BigQuery",
      "BigQuery ML",
      "Airflow",
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "AWS",
      "Nginx",
      "Power BI",
      "Scikit-learn",
    ],
    links: [{ type: "live", key: "live", href: LINKS.asint }],
  },
  {
    id: "asint-dwh",
    slug: "asint-data-warehouse",
    year: "2024 — Present",
    status: "Production",
    accent: "cyan",
    cover: "/images/projects/dwh-cover.png",
    screenshots: [],
    architectureDiagram: "/images/diagrams/dwh-architecture.png",
    metricKeys: ["records", "consumers", "manual"],
    metrics: [
      { key: "records", value: 5.3, suffix: "M+", decimals: 1 },
      { key: "consumers", value: 4, suffix: "+" },
      { key: "manual", value: 0 },
    ],
    stack: ["Airflow", "BigQuery", "BigQuery ML", "Python", "SQL", "ETL/ELT", "Data Modeling"],
    links: [],
  },
  {
    id: "efahub",
    slug: "efahub",
    year: "2024",
    status: "Open source",
    accent: "purple",
    cover: "/images/projects/efahub-cover.jpg",
    coverFit: "logo",
    screenshots: [],
    architectureDiagram: "/images/diagrams/efahub-architecture.png",
    metricKeys: ["users", "builtBy"],
    metrics: [
      { key: "users", value: 1000, suffix: "+" },
      { key: "builtBy", value: 1 },
    ],
    stack: [
      "Python",
      "Web Scraping",
      "Vector Databases",
      "Face Recognition",
      "OpenCV",
      "FastAPI",
      "PostgreSQL",
      "Nginx",
    ],
    links: [{ type: "github", key: "github", href: LINKS.github }],
  },
  {
    id: "ai-call-operator",
    slug: "ai-call-operator",
    year: "2024",
    status: "Deployed",
    accent: "cyan",
    cover: "/images/projects/call-operator-cover.png",
    coverFit: "logo",
    screenshots: [],
    architectureDiagram: "/images/diagrams/call-operator-architecture.png",
    metricKeys: ["stages", "integrations"],
    metrics: [
      { key: "stages", value: 3 },
      { key: "integrations", value: 1 },
    ],
    stack: ["AWS", "Docker", "Python", "NLP", "TTS", "STT", "REST APIs", "Linux"],
    links: [{ type: "live", key: "live", href: LINKS.itv }],
  },
  {
    id: "face-attendance",
    slug: "face-attendance-system",
    year: "2023",
    status: "Archived",
    accent: "purple",
    cover: "/images/projects/attendance-cover.png",
    screenshots: [],
    architectureDiagram: "/images/diagrams/attendance-architecture.png",
    metricKeys: ["placement", "stages"],
    metrics: [
      { key: "placement", value: 2, prefix: "#" },
      { key: "stages", value: 4 },
    ],
    stack: ["TensorFlow", "OpenCV", "Face Recognition", "Python", "NumPy"],
    links: [{ type: "github", key: "github", href: LINKS.github }],
  },
];

export const FEATURED_PROJECT = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
export const OTHER_PROJECTS = PROJECTS.filter((p) => !p.featured);
