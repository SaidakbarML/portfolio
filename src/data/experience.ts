import type { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    id: "link-data",
    company: "Link Data",
    logo: "/images/logos/link-data.svg",
    role: "Data Scientist / ML Engineer",
    employmentType: "Project Lead — ASINT",
    period: "Jul 2024 — Present",
    location: "Tashkent, Uzbekistan",
    summary:
      "Joined as an intern, now technical lead on the company's flagship product. I own ASINT end to end — the warehouse, the models, and the infra serving three client organisations.",
    progression: [
      { title: "Intern", period: "Jul 2024" },
      { title: "Part-time", period: "2024" },
      { title: "Full-time", period: "2025" },
      { title: "Project Lead", period: "Present" },
    ],
    achievements: [
      "Lead ASINT, live at three organisations including OFB Bank and OTP Bank.",
      "Designed the data warehouse behind ASINT and GeoScore — many sources, one modelled layer.",
      "Built Airflow pipelines that load into BigQuery and retrain models on the same schedule.",
      "Ship FastAPI model-serving APIs on AWS, Hetzner and eCompute, behind Docker and Nginx.",
      "Improved the production ASINT-Auto and ASINT-Home valuation models.",
      "Work across ML, data engineering and MLOps in a 10-person team.",
    ],
    metrics: [
      { label: "Orgs in production", value: 3 },
      { label: "Vehicle records", value: 3, suffix: "M+" },
      { label: "Property records", value: 2.3, suffix: "M+", decimals: 1 },
      { label: "Team size", value: 10 },
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
      "Scikit-learn",
    ],
  },
  {
    id: "islab",
    company: "ISLAB",
    logo: "/images/logos/islab.svg",
    role: "Support Instructor",
    employmentType: "Part-time · 1 year",
    // NOTE: Dates copied verbatim from the CV, which reads "Aug 2026 – Aug 2027".
    // Verify and correct here if that was a typo.
    period: "Aug 2026 — Aug 2027",
    location: "Tashkent, Uzbekistan",
    summary:
      "Taught applied AI to non-specialists — the fastest way to find out whether you actually understand something.",
    achievements: [
      "Trained 20+ staff in AI tooling, ML fundamentals and Git.",
      "Go-to instructor across every topic in the programme.",
      "Translated production ML concepts into work non-engineers could apply.",
    ],
    metrics: [{ label: "Staff trained", value: 20, suffix: "+" }],
    stack: ["Machine Learning", "AI Tooling", "Git", "Python", "Mentoring"],
  },
];
