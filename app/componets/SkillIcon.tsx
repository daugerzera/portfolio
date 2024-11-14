import Image from "next/image";
import { SkillIconProps } from "../interfaces/types";


const SkillIcon: React.FC<SkillIconProps> = ({ src, title, alt }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <Image src={src} alt={alt} width={50} height={50} />
            <p>{title}</p>
        </div>
    );
}

export default SkillIcon;