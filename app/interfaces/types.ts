export type SkillIconProps = {
    key: string;
    src: string;
    title: string;
    alt: string;
};

export type PortifolioData = {
    key: string;
    title: string;
    description: string;
    imageSrc: string;
    gallery: string[];
    techIcons: SkillIconProps[];
    projectLink: string;
    repoLink: string | null;
}