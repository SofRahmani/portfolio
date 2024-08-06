import { Locale } from "../../../i18n.config";
import Separator from "./components/sections/Separator";
import AboutSection from "./components/sections/about_section/AboutSection";
import ContactSection from "./components/sections/contact_section/ContactSection";
import HeroSection from "./components/sections/hero_section/HeroSection";
import ProjectsSection from "./components/sections/project_section/ProjectSection";
import SkillsSection from "./components/sections/skills_section/SkillsSection";
import TestimonialsSection from "./components/sections/testimoniels_section/TestimonialsSection";

export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <main className=" mx-auto mt-6 flex max-w-7xl flex-col items-center justify-center gap-8 ">
      <HeroSection lang={params.lang} />
      <Separator />
      <AboutSection lang={params.lang} />
      <SkillsSection lang={params.lang} />
      <ProjectsSection lang={params.lang} />
      <TestimonialsSection lang={params.lang} />
      <ContactSection lang={params.lang} />
    </main>
  );
}
