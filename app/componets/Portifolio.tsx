import { portifolio_data } from "@/portifolio_data";
import ProjectCard from "./ProjectCard";
import { PortifolioData } from "../interfaces/types";

export default function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto max-w-5xl my-[1.5rem] px-[1rem] lg:px-0">
      <h2 className="text-[1.2rem] md:text-[1.5rem] font-oleo-script">
        Alguns dos meus projetos
      </h2>
      <p className="text-[0.875rem] mb-[2rem]">
        Por razões de compliance, alguns repositórios não podem ser compartilhados
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
        {portifolio_data.map((project: PortifolioData) =>
          <ProjectCard
            key={project.key}
            title={project.title}
            description={project.description}
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
