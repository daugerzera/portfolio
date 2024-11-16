import { skillsData } from "./app/interfaces/icons";
import { PortifolioData, SkillIconProps } from "./app/interfaces/types";
import logistiko_thumb from "@/app/assets/logistiko/logistiko_thumb.jpg";
import logistiko_1 from "@/app/assets/logistiko/logistiko_1.jpg";
import logistiko_2 from "@/app/assets/logistiko/logistiko_2.jpg";
import logistiko_3 from "@/app/assets/logistiko/logistiko_3.jpg";
import logistiko_4 from "@/app/assets/logistiko/logistiko_4.jpg";
import blinker_thumb from "@/app/assets/blinker/blinker_thumb.jpg";
import blinker_1 from "@/app/assets/blinker/blinker_1.jpg";
import blinker_2 from "@/app/assets/blinker/blinker_2.jpg";
import blinker_3 from "@/app/assets/blinker/blinker_3.jpg";
import blinker_4 from "@/app/assets/blinker/blinker_4.jpg";
import blinker_5 from "@/app/assets/blinker/blinker_5.jpg";
import meals_thumb from "@/app/assets/meals/meals_thumb.jpg";
import meals_1 from "@/app/assets/meals/meals_1.jpg";
import meals_2 from "@/app/assets/meals/meals_2.jpg";
import meals_3 from "@/app/assets/meals/meals_3.jpg";
import portfolio_thumb from "@/app/assets/portfolio/portfolio_thumb.jpg";
import portfolio_1 from "@/app/assets/portfolio/portfolio_1.jpg";
import portfolio_2 from "@/app/assets/portfolio/portfolio_2.jpg";
import portfolio_3 from "@/app/assets/portfolio/portfolio_3.jpg";

export const portifolio_data: PortifolioData[] = [
    {
        key: "Blinker",
        title: "Blinker",
        description: "PWA para facilitar a interação entre pessoas presentes no mesmo evento ou estabelecimento. Utiliza geolocalização, autenticação por SMS e notificações push. MVP em fase de validação.",
        imageSrc: blinker_thumb.src,
        gallery: [
            blinker_1.src,
            blinker_2.src,
            blinker_3.src,
            blinker_4.src,
            blinker_5.src,
        ],
        techIcons: skillsData.filter((icon: SkillIconProps) =>
            ["react", "typescript", "firebase"].includes(icon.key)
        ),
        projectLink: "https://blinkerapp.com/",
        repoLink: null
    },
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
            ["react", "sequelize", "gcp", "node"].includes(icon.key)
        ),
        projectLink: "https://logistiko.com.br/",
        repoLink: null
    },
    {
        key: "Next_Meals",
        title: "Next Level Food",
        description: "Projeto para treinar todas a funcionalidades basicas do NextJS. Sendo elas client-side, server-side, routes, dynamic routes, error pages, not-found page, loadings, caching, actions e outros hooks.",
        imageSrc: meals_thumb.src,
        gallery: [
            meals_1.src,
            meals_2.src,
            meals_3.src,
        ],
        techIcons: skillsData.filter((icon: SkillIconProps) =>
            ["next", "css3"].includes(icon.key)
        ),
        projectLink: "https://next-level-food-ct0s.onrender.com",
        repoLink: "https://github.com/daugerzera/next_meal"
    },
    {
        key: "Portfolio",
        title: "Portfolio",
        description: "Esse projeto tem como objetivo, além de ser meu portfólio, treinar tecnologias tais como: NextJS, Tailwind e TypeScript. Garantindo responsividade em qualquer dispositivo.",
        imageSrc: portfolio_thumb.src,
        gallery: [
            portfolio_1.src,
            portfolio_2.src,
            portfolio_3.src,
        ],
        techIcons: skillsData.filter((icon: SkillIconProps) =>
            ["next", "tailwindcss", "typescript"].includes(icon.key)
        ),
        projectLink: "https://portifolio-iota-bay.vercel.app/",
        repoLink: "https://github.com/daugerzera/portfolio"
    },
];
