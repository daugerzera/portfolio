import Image from "next/image";
import { SkillIconProps } from "../interfaces/types";


const SkillIcon: React.FC<SkillIconProps> = ({ src, title, alt }) => {
    return (
        <div className="flex flex-col items-center gap-[0.5rem] sm:gap-[0.75rem]">
            <Image src={src} alt={alt} width={50} height={50} className="w-[2rem]"/>
            <p className="text-[0.7rem]">{title}</p>
        </div>
    );
}

export default SkillIcon;