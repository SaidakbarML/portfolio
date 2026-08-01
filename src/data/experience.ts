import { ASSET_PATHS } from "@/constants/assets";
import type { Experience } from "@/types";

/** Structural only — all copy lives in src/i18n/dictionaries, keyed by `id`. */
export const EXPERIENCES: Experience[] = [
  {
    id: "link-data",
    company: "Link Data",
    logo: ASSET_PATHS.logos.linkData,
    progressionKeys: ["intern", "partTime", "fullTime", "lead"],
    metrics: [
      { key: "orgs", value: 3 },
      { key: "vehicles", value: 3, suffix: "M+" },
      { key: "properties", value: 2.3, suffix: "M+", decimals: 1 },
      { key: "team", value: 10 },
    ],
    stack: [
      "Python",
      "BigQuery",
      "Airflow",
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "AWS",
      "GCP",
      "Nginx",
      "Power BI",
    ],
  },
  {
    id: "islab",
    company: "ISLAB",
    logo: ASSET_PATHS.logos.islab,
    progressionKeys: [],
    metrics: [{ key: "staff", value: 20, suffix: "+" }],
    stack: ["Machine Learning", "AI Tooling", "Git", "Python", "Mentoring"],
  },
];
