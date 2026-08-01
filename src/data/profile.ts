import { CONTACT, LINKS } from "@/constants/site";
import type { SocialLink } from "@/types";

/** Names and handles are language-independent; all copy lives in the dictionaries. */
export const PROFILE = {
  firstName: "Saidakbar",
  lastName: "Usmonov",
  fullName: "Saidakbar Usmonov",
} as const;

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: LINKS.github, handle: "@SaidakbarML", icon: "github" },
  { label: "LinkedIn", href: LINKS.linkedin, handle: "saidakbar-usmonov", icon: "linkedin" },
  { label: "LeetCode", href: LINKS.leetcode, handle: "saidakbarml", icon: "leetcode" },
  { label: "DataLemur", href: LINKS.datalemur, handle: "Saidakbar", icon: "datalemur" },
  { label: "Email", href: `mailto:${CONTACT.email}`, handle: CONTACT.email, icon: "mail" },
];

/** Keys into `t.about.principles`, in display order. */
export const PRINCIPLE_KEYS = ["ship", "data", "automate", "stack"] as const;
export const PRINCIPLE_ICONS: Record<(typeof PRINCIPLE_KEYS)[number], string> = {
  ship: "rocket",
  data: "database",
  automate: "workflow",
  stack: "layers",
};

/** Keys into `t.about.facts`, in display order. */
export const FACT_KEYS = [
  "basedIn",
  "focus",
  "currently",
  "experience",
  "studying",
  "status",
] as const;
