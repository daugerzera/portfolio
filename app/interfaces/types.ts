export type SkillIconProps = {
    key: string;
    src: string;
    title: string;
    alt: string;
};

export type Languages = {
    en: string;
    pt: string;
}

export type PortifolioData = {
    key: string;
    title: string;
    descriptions: Languages;
    imageSrc: string;
    gallery: string[];
    techIcons: SkillIconProps[];
    projectLink: string;
    repoLink: string | null;
}