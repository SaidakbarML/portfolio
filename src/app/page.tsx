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
      <section id="home" className="scroll-mt-16">
        <Hero />
      </section>

      <section id="about" aria-label="About" className="scroll-mt-16 border-t border-black/8">
        <About />
      </section>

      <Stats />

      <section id="experience" aria-label="Experience" className="scroll-mt-16 border-t border-black/8">
        <Experience />
      </section>

      <section id="projects" aria-label="Projects" className="scroll-mt-16 border-t border-black/8">
        <Projects />
      </section>

      <section id="skills" aria-label="Skills" className="scroll-mt-16 border-t border-black/8">
        <Skills />
        <Achievements />
      </section>

      <section id="education" aria-label="Education" className="scroll-mt-16 border-t border-black/8">
        <Education />
      </section>

      <section id="certificates" aria-label="Certificates" className="scroll-mt-16 border-t border-black/8">
        <Certificates />
      </section>

      <section id="contact" aria-label="Contact" className="scroll-mt-16 border-t border-black/8">
        <Contact />
      </section>
    </>
  );
}
