import type { Achievement, Metric } from "@/types";

/** Headline counters shown directly under the hero. */
export const HEADLINE_STATS: Metric[] = [
  {
    label: "Years in production",
    value: 3,
    suffix: "+",
    description: "ML · data engineering · MLOps",
  },
  {
    label: "Vehicle records",
    value: 3,
    suffix: "M+",
    description: "many sources, one layer",
  },
  {
    label: "Property records",
    value: 2.3,
    suffix: "M+",
    decimals: 1,
    description: "powers ASINT-Home",
  },
  {
    label: "Records in dashboards",
    value: 1,
    suffix: "M+",
    description: "Power BI monitoring layer",
  },
  {
    label: "EfaHub users, month one",
    value: 1000,
    suffix: "+",
    description: "solo build, organic growth",
  },
  {
    label: "Staff trained",
    value: 20,
    suffix: "+",
    description: "support instructor, ISLAB",
  },
  {
    label: "Orgs running ASINT",
    value: 3,
    suffix: "",
    description: "incl. OFB Bank, OTP Bank",
  },
  {
    label: "Hackathon placement",
    value: 2,
    prefix: "#",
    description: "computer-vision hackathon",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "production-banks",
    title: "Banks run my code",
    description:
      "ASINT runs at three organisations including OFB Bank and OTP Bank, where valuations feed real lending decisions.",
    icon: "landmark",
    accent: "blue",
    metric: { label: "Organisations in production", value: 3 },
  },
  {
    id: "project-lead",
    title: "Intern to project lead",
    description:
      "Intern in July 2024, now leading ASINT and owning a major part of the company's flagship platform.",
    icon: "trending-up",
    accent: "purple",
    metric: { label: "Months to lead", value: 18, suffix: "" },
  },
  {
    id: "data-scale",
    title: "5.3M+ records, one layer",
    description:
      "Designed the warehouse consolidating 3M+ vehicle and 2.3M+ property records into one source of truth.",
    icon: "database",
    accent: "cyan",
    metric: { label: "Records consolidated", value: 5.3, suffix: "M+", decimals: 1 },
  },
  {
    id: "automation",
    title: "Zero manual steps",
    description:
      "Airflow loads BigQuery and triggers retraining on the same schedule. Nobody touches it.",
    icon: "workflow",
    accent: "blue",
    metric: { label: "Manual refresh steps", value: 0 },
  },
  {
    id: "cloud",
    title: "Multi-cloud deployments",
    description:
      "Model services and web platforms on AWS, Hetzner and eCompute — Docker behind Nginx.",
    icon: "cloud",
    accent: "purple",
    metric: { label: "Cloud & VPS providers", value: 4, suffix: "+" },
  },
  {
    id: "dashboards",
    title: "1M+ records visualised",
    description:
      "Power BI dashboards over 1M+ records, so model output is observable instead of opaque.",
    icon: "bar-chart-3",
    accent: "cyan",
    metric: { label: "Records visualised", value: 1, suffix: "M+" },
  },
  {
    id: "efahub",
    title: "1,000+ users in a single month",
    description:
      "Built solo. Replaced manual Telegram trading with searchable listings, then open-sourced it.",
    icon: "users",
    accent: "blue",
    metric: { label: "Users in month one", value: 1000, suffix: "+" },
  },
  {
    id: "hackathon",
    title: "2nd place hackathon",
    description:
      "Attendance tracking with TensorFlow, OpenCV and face recognition, under a hard deadline.",
    icon: "trophy",
    accent: "purple",
    metric: { label: "Placement", value: 2, prefix: "#" },
  },
  {
    id: "teaching",
    title: "20+ people trained",
    description:
      "Taught AI tooling, ML fundamentals and Git as a support instructor at ISLAB.",
    icon: "graduation-cap",
    accent: "cyan",
    metric: { label: "People trained", value: 20, suffix: "+" },
  },
];
