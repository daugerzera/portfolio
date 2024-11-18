import { portifolio_data } from "@/portifolio_data";
import ProjectCard from "./ProjectCard";
import { PortifolioData } from "../interfaces/types";
import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations('Projects');
  return (
    <section id="portfolio" className="container mx-auto max-w-5xl my-[1.5rem] px-[1rem] lg:px-0">
      <h2 className="text-[1.2rem] md:text-[1.5rem] font-oleo-script">
        {t('someProjects')}
      </h2>
      <p className="text-[0.875rem] mb-[2rem]">
        {t('compliance')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
        {portifolio_data.map((project: PortifolioData) =>
          <ProjectCard
            key={project.key}
            title={project.title}
            descriptions={project.descriptions}
            imageSrc={project.imageSrc}
            gallery={project.gallery}
            techIcons={project.techIcons}
            projectLink={project.projectLink}
            repoLink={project.repoLink}
          />
        )}
      </div>
    </section>
  );
}
