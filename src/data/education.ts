import { LINKS } from "@/constants/site";
import type { Certificate, EducationItem } from "@/types";

export const EDUCATION: EducationItem[] = [
  {
    id: "tsue",
    institution: "Tashkent State University of Economics",
    institutionUrl: LINKS.university,
    logo: "/images/logos/tsue.svg",
    credential: "BSc",
    field: "Economics",
    period: "Sep 2023 — May 2027",
    detail: "GPA 4.3 / 5.0",
    highlights: [
      "Quantitative and statistical foundation applied directly to valuation modelling at work.",
      "Studying alongside full-time engineering — production experience and coursework running in parallel.",
      "Self-directed study through Mathematics for Machine Learning (Deisenroth, Faisal & Ong).",
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "ibm-data-science",
    name: "IBM Data Science Professional Certificate",
    issuer: "Coursera · IBM",
    href: "https://www.coursera.org/professional-certificates/ibm-data-science",
    logo: "/images/logos/ibm.svg",
    skills: ["Python", "SQL", "Data Analysis", "Visualization"],
  },
  {
    id: "math-for-ml",
    name: "Mathematics for Machine Learning and Data Science",
    issuer: "DeepLearning.AI",
    href: "https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science",
    logo: "/images/logos/deeplearning-ai.svg",
    skills: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
  },
  {
    id: "datacamp",
    name: "Power BI, SQL, Dash & Plotly Tracks",
    issuer: "DataCamp",
    logo: "/images/logos/datacamp.svg",
    skills: ["Power BI", "SQL", "Dash", "Plotly"],
  },
];
