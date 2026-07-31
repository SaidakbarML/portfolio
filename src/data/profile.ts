import { CONTACT, LINKS } from "@/constants/site";
import type { Language, SocialLink } from "@/types";

export const PROFILE = {
  firstName: "Saidakbar",
  lastName: "Usmonov",
  fullName: "Saidakbar Usmonov",
  headline: "Machine Learning Engineer · Data Engineer",

  /** Rotating roles for the hero typing effect. */
  roles: [
    "Machine Learning Engineer",
    "Data Engineer",
    "MLOps Engineer",
    "AI Systems Builder",
    "Production AI Specialist",
  ],

  tagline: "I build ML systems that survive production.",

  intro:
    "3 years shipping models, pipelines and cloud infra. I lead ASINT — an asset-valuation platform live at OFB Bank and OTP Bank.",

  /** About section — short, scannable paragraphs. */
  about: [
    "I work where ML meets the systems that keep it alive. The problem usually arrives without a clean dataset: what is this car worth, what is this flat worth, which of these 5 million scraped records can you trust.",
    "I own it end to end — model the data, train the model, wrap it in an API, ship it to a server that has to answer correctly on Monday morning.",
    "At Link Data I lead ASINT. 3M+ vehicle listings and 2.3M+ property records, consolidated into one BigQuery layer, refreshed and retrained by Airflow. Three organisations run it. Two are banks.",
    "On the side: EfaHub hit 1,000+ users in a month, I've trained 20+ staff in ML and Git, and placed 2nd in a CV hackathon.",
  ],

  facts: [
    { label: "Based in", value: CONTACT.location },
    { label: "Focus", value: "Production ML · Data Engineering" },
    { label: "Currently", value: "Project Lead, ASINT @ Link Data" },
    { label: "Experience", value: "3+ years in production" },
    { label: "Studying", value: "BSc, Tashkent State Univ. of Economics" },
    { label: "Status", value: CONTACT.availability },
  ],

  /** Engineering point of view — one line each. */
  principles: [
    {
      title: "Ship it, then measure it",
      body: "A model that isn't serving traffic hasn't been evaluated.",
      icon: "rocket",
    },
    {
      title: "The data layer is the product",
      body: "Most model problems are data problems in disguise. Fix the warehouse first.",
      icon: "database",
    },
    {
      title: "Automate the boring path",
      body: "Extract, load, retrain, deploy — on a schedule, without me.",
      icon: "workflow",
    },
    {
      title: "Own the whole stack",
      body: "Model, API, container, server. Debugging is fast when you can follow the whole path.",
      icon: "layers",
    },
  ],
} as const;

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: LINKS.github, handle: "@SaidakbarML", icon: "github" },
  {
    label: "LinkedIn",
    href: LINKS.linkedin,
    handle: "saidakbar-usmonov",
    icon: "linkedin",
  },
  { label: "LeetCode", href: LINKS.leetcode, handle: "saidakbarml", icon: "leetcode" },
  { label: "DataLemur", href: LINKS.datalemur, handle: "Saidakbar", icon: "datalemur" },
  { label: "Email", href: `mailto:${CONTACT.email}`, handle: CONTACT.email, icon: "mail" },
];

export const LANGUAGES: Language[] = [
  { name: "Uzbek", level: "Native", proficiency: 100 },
  { name: "English", level: "Professional", proficiency: 85 },
  { name: "Russian", level: "B1", proficiency: 55 },
];
