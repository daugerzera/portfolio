import { skillsData } from "./app/interfaces/icons";
import { PortifolioData, SkillIconProps } from "./app/interfaces/types";
import thumb_logistiko from "@/app/assets/logistiko/thumb_logistiko.jpg";

export const portifolio_data: PortifolioData[] = [
    {
        key: "Logistiko",
        title: "Logistiko",
        description: "SaaS B2B que integra e faz a gestão do estoque de anúncios de diferentes contas de marketplaces. Desenvolvimento Full Stack desde o system design até deploy (em produção).",
        imageSrc: thumb_logistiko.src,
        gallery: [
            "/path/to/image1.jpg",
            "/path/to/image2.jpg",
            "/path/to/image3.jpg",
        ],
        techIcons: skillsData.filter((icon: SkillIconProps) =>
            ["react", "sequelize", "css", "gcp", "node", "git", "postgresql"].includes(icon.key)
        ),
        projectLink: "https://logistiko.com.br/",
        repoLink: null
    },
];
