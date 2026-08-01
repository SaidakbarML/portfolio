import { CONTACT, LINKS, SITE } from "@/constants/site";
import { PROJECTS } from "@/data/projects";
import { SKILL_CATEGORIES } from "@/data/skills";
import { EXPERIENCES } from "@/data/experience";
import { en } from "@/i18n/dictionaries/en";

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
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: en.education.items.tsue.institution,
        url: LINKS.university,
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    inLanguage: ["en", "uz", "ru"],
    publisher: { "@id": `${SITE.url}/#person` },
  };

  const works = PROJECTS.map((project) => {
    const copy = en.projects.items[project.id as keyof typeof en.projects.items];
    return {
      "@type": "CreativeWork",
      "@id": `${SITE.url}/projects/${project.slug}#work`,
      name: copy?.name ?? project.slug,
      headline: copy?.tagline,
      description: copy?.summary,
      url: `${SITE.url}/projects/${project.slug}`,
      dateCreated: project.year,
      creator: { "@id": `${SITE.url}/#person` },
      keywords: project.stack.join(", "),
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, ...works],
  };
}
