import { SIDES_PROJECTS } from "@/data/Projects_Items";
import { getDictionary } from "@/lib/dictionary";
import { title } from "@/style/site";
import { Reveal } from "@/utils/Reveal";
import { Locale } from "../../../../../../i18n.config";
import ProjectCard from "./ProjectCard";

export default async function ProjectsSection({ lang }: { lang: Locale }) {
  const { pages } = await getDictionary(lang);

  return (
    <section
      id="projects"
      className=" relative z-40 mb-10 flex size-full scroll-mt-0.5 flex-col items-center justify-center gap-6 p-8 font-sans md:scroll-mt-96 "
    >
      <Reveal width="w-fit">
        <h2 className={` ${title({ size: "md", color: "violet" })} `}>{pages.projects.title}</h2>
      </Reveal>
      <div>
        {SIDES_PROJECTS.map(project => (
          <ProjectCard
            key={project.slug}
            name={project.name}
            description={lang === "fr" ? project.descriptionFR : project.descriptionEN}
            skills={project.skills}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
}
