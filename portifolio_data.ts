import { skillsData } from "./app/interfaces/icons";
import { PortifolioData, SkillIconProps } from "./app/interfaces/types";
import logistiko_thumb from "@/app/assets/logistiko/logistiko_thumb.jpg";
import logistiko_1 from "@/app/assets/logistiko/logistiko_1.jpg";
import logistiko_2 from "@/app/assets/logistiko/logistiko_2.jpg";
import logistiko_3 from "@/app/assets/logistiko/logistiko_3.jpg";
import logistiko_4 from "@/app/assets/logistiko/logistiko_3.jpg";

export const portifolio_data: PortifolioData[] = [
    {
        key: "Logistiko",
        title: "Logistiko",
        description: "SaaS B2B que integra e faz a gestão do estoque de anúncios de diferentes contas de marketplaces. Desenvolvimento Full Stack desde o system design até deploy (em produção).",
        imageSrc: logistiko_thumb.src,
        gallery: [
            logistiko_1.src,
            logistiko_2.src,
            logistiko_3.src,
            logistiko_4.src,
        ],
        techIcons: skillsData.filter((icon: SkillIconProps) =>
            ["react", "sequelize", "css", "gcp", "node"].includes(icon.key)
        ),
        projectLink: "https://logistiko.com.br/",
        repoLink: null
    },
];
