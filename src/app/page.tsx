import { NAV_ITEMS } from "@/constants/navigation";
import { Slab } from "@/components/layout/Slab";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Stats } from "@/components/sections/Stats";

/** Looks up a stage's metadata so slabs and the DAG rail stay in sync. */
const stage = (id: string) => NAV_ITEMS.find((item) => item.id === id)!;

export default function Home() {
  return (
    <>
      <Slab id="home" tone="ink">
        <Hero />
      </Slab>

      <Slab id="about" tone={stage("about").tone} stage={stage("about").stage} task={stage("about").task}>
        <About />
      </Slab>

      <Stats />

      <Slab id="experience" tone={stage("experience").tone} stage={stage("experience").stage} task={stage("experience").task}>
        <Experience />
      </Slab>

      <Slab id="projects" tone={stage("projects").tone} stage={stage("projects").stage} task={stage("projects").task}>
        <Projects />
      </Slab>

      <Slab id="skills" tone={stage("skills").tone} stage={stage("skills").stage} task={stage("skills").task}>
        <Skills />
        <Achievements />
      </Slab>

      <Slab id="education" tone={stage("education").tone} stage={stage("education").stage} task={stage("education").task}>
        <Education />
      </Slab>

      <Slab id="certificates" tone={stage("certificates").tone} stage={stage("certificates").stage} task={stage("certificates").task}>
        <Certificates />
      </Slab>

      <Slab id="contact" tone={stage("contact").tone} stage={stage("contact").stage} task={stage("contact").task}>
        <Contact />
      </Slab>
    </>
  );
}
