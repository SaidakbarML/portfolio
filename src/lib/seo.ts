import { CONTACT, LINKS, SITE } from "@/constants/site";
import { PROJECTS } from "@/data/projects";
import { SKILL_CATEGORIES } from "@/data/skills";
import { EXPERIENCES } from "@/data/experience";
import { EDUCATION } from "@/data/education";

/** JSON-LD graph: Person + WebSite + the portfolio's creative works. */
export function buildStructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.name,
    givenName: "Saidakbar",
    familyName: "Usmonov",
    jobTitle: SITE.role,
    description: SITE.description,
    email: `mailto:${CONTACT.email}`,
    telephone: CONTACT.phone,
    url: SITE.url,
    image: `${SITE.url}/images/profile.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    sameAs: [LINKS.github, LINKS.linkedin, LINKS.leetcode, LINKS.datalemur],
    knowsAbout: SKILL_CATEGORIES.flatMap((category) =>
      category.skills.map((skill) => skill.name),
    ),
    knowsLanguage: ["Uzbek", "English", "Russian"],
    worksFor: EXPERIENCES.map((experience) => ({
      "@type": "Organization",
      name: experience.company,
    })),
    alumniOf: EDUCATION.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.institution,
      url: item.institutionUrl,
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": `${SITE.url}/#person` },
  };

  const works = PROJECTS.map((project) => ({
    "@type": "CreativeWork",
    "@id": `${SITE.url}/projects/${project.slug}#work`,
    name: project.name,
    headline: project.tagline,
    description: project.summary,
    url: `${SITE.url}/projects/${project.slug}`,
    dateCreated: project.year,
    creator: { "@id": `${SITE.url}/#person` },
    keywords: project.stack.join(", "),
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, ...works],
  };
}
