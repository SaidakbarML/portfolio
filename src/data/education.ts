import { ASSET_PATHS } from "@/constants/assets";
import { LINKS } from "@/constants/site";
import type { Certificate, EducationItem, LanguageSkill } from "@/types";

export const EDUCATION: EducationItem[] = [
  {
    id: "tsue",
    institutionUrl: LINKS.university,
    logo: ASSET_PATHS.logos.tsue,
    image: ASSET_PATHS.education.tsueCampus,
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "ibm-data-science",
    issuer: "Coursera · IBM",
    href: "https://www.coursera.org/professional-certificates/ibm-data-science",
    logo: ASSET_PATHS.logos.ibm,
  },
  {
    id: "math-for-ml",
    issuer: "DeepLearning.AI",
    href: "https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science",
    logo: ASSET_PATHS.logos.deeplearningAi,
  },
  {
    id: "datacamp",
    issuer: "DataCamp",
    logo: ASSET_PATHS.logos.datacamp,
  },
];

export const LANGUAGE_SKILLS: LanguageSkill[] = [
  { key: "uzbek", proficiency: 100 },
  { key: "english", proficiency: 85 },
  { key: "russian", proficiency: 55 },
];
