// import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer";
// import { Preloader } from "@/components/effects/preloader";
// import { CursorGlow } from "@/components/effects/cursor-glow";
// import { ScrollProgress } from "@/components/effects/scroll-progress";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/effects/preloader";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { ParticleField } from "@/components/effects/particle-field";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <ParticleField />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
