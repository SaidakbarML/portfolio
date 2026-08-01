import type { Achievement, Metric } from "@/types";

/**
 * Trimmed to the six numbers that actually land. Labels and descriptions live
 * in the dictionaries, keyed by `key` / `id`.
 */
export const HEADLINE_STATS: Metric[] = [
  { key: "years", value: 3, suffix: "+" },
  { key: "vehicles", value: 3, suffix: "M+" },
  { key: "properties", value: 2.3, suffix: "M+", decimals: 1 },
  { key: "orgs", value: 3 },
  { key: "users", value: 1000, suffix: "+" },
  { key: "staff", value: 20, suffix: "+" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "production-banks",
    icon: "landmark",
    accent: "blue",
    metric: { key: "orgs", value: 3 },
  },
  {
    id: "project-lead",
    icon: "trending-up",
    accent: "purple",
    metric: { key: "months", value: 18 },
  },
  {
    id: "data-scale",
    icon: "database",
    accent: "cyan",
    metric: { key: "records", value: 5.3, suffix: "M+", decimals: 1 },
  },
  {
    id: "automation",
    icon: "workflow",
    accent: "blue",
    metric: { key: "manual", value: 0 },
  },
  {
    id: "efahub",
    icon: "users",
    accent: "purple",
    metric: { key: "users", value: 1000, suffix: "+" },
  },
  {
    id: "hackathon",
    icon: "trophy",
    accent: "cyan",
    metric: { key: "placement", value: 2, prefix: "#" },
  },
];
