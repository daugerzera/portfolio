import { skillsData } from "../interfaces/icons";
import { SkillIconProps } from "../interfaces/types";
import SkillIcon from "./SkillIcon";


const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full bg-[#121212] pt-8 pb-12">
      <div className="container max-w-5xl mx-auto flex flex-col gap-2  px-4 sm:px-0">
        <h2 className="text-[1.2rem] md:text-[1.5rem] font-oleo-script text-center mb-5">
          Skills
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 text-center">
          {skillsData.map((icon: SkillIconProps) => (
            <SkillIcon
              key={icon.title}
              src={icon.src}
              title={icon.title}
              alt={icon.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
