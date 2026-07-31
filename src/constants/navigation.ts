import type { NavItem } from "@/types";

/**
 * The page is modelled as a pipeline. Each nav item is a stage node in the
 * DAG rail, and `tone` decides whether that stage renders on ink or paper —
 * the site alternates rather than committing to a dark or light theme.
 */
export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", stage: "00", task: "ingest", tone: "ink" },
  { id: "about", label: "About", stage: "01", task: "profile", tone: "paper" },
  { id: "experience", label: "Experience", stage: "02", task: "transform", tone: "ink" },
  { id: "projects", label: "Projects", stage: "03", task: "build", tone: "paper" },
  { id: "skills", label: "Skills", stage: "04", task: "stack", tone: "ink" },
  { id: "education", label: "Education", stage: "05", task: "train", tone: "paper" },
  { id: "certificates", label: "Certificates", stage: "06", task: "validate", tone: "ink" },
  { id: "contact", label: "Contact", stage: "07", task: "deploy", tone: "paper" },
];
