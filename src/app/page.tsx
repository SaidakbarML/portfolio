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

export default function Home() {
  return (
    <>
      <Slab id="home" tone="ink">
        <Hero />
      </Slab>

      <Slab id="about" tone="ink">
        <About />
      </Slab>

      <Stats />

      <Slab id="experience" tone="ink">
        <Experience />
      </Slab>

      <Slab id="projects" tone="ink">
        <Projects />
      </Slab>

      <Slab id="skills" tone="ink">
        <Skills />
        <Achievements />
      </Slab>

      <Slab id="education" tone="ink">
        <Education />
      </Slab>

      <Slab id="certificates" tone="ink">
        <Certificates />
      </Slab>

      <Slab id="contact" tone="ink">
        <Contact />
      </Slab>
    </>
  );
}
