import { portifolio_data } from "@/portifolio_data";
import ProjectCard from "./ProjectCard";
import { PortifolioData } from "../interfaces/types";

export default function Portfolio() {
  return (
    <section id="portfolio" className="container max-w-5xl sm:rounded-lg">
      <h2 className="text-3xl font-bold text-start text-white mb-8">Portfólio</h2>
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
