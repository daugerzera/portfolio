import { skillsData } from "../interfaces/icons";
import { SkillIconProps } from "../interfaces/types";
import SkillIcon from "./SkillIcon";


const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-neutral-700 shadow-md py-4 container max-w-5xl px-4 sm:rounded-lg m-3 flex flex-col gap-2">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Skills</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-6 text-center">
        {skillsData.map((icon: SkillIconProps) =>
          <SkillIcon
            key={icon.title}
            src={icon.src}
            title={icon.title}
            alt={icon.alt}
          />
        )}
      </div>
    </section>
  );
}

export default Skills;