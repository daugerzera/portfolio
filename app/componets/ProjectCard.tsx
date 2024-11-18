"use client";
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { PortifolioData } from '../interfaces/types';
import { useLocale, useTranslations } from 'next-intl';

const ProjectCard: React.FC<PortifolioData> = ({
    title,
    descriptions,
    imageSrc,
    gallery,
    techIcons,
    projectLink,
    repoLink,
}) => {
    const locale = useLocale() as "en" | "pt";
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const t = useTranslations('ProjectCard');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImageIndex(0); // Resetar para a primeira imagem ao fechar
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length
        );
    };

    return (
        <div className="bg-[#121212]  flex flex-col lg:flex-row max-w-5xl mx-auto overflow-hidden">

            <div
                className="relative w-full lg:w-1/2 cursor-pointer overflow-hidden"
                onClick={openModal}
            >
                <Image
                    src={imageSrc}
                    alt={`${title} image`}
                    layout="responsive"
                    width={500}
                    height={300}
                    objectFit="cover"
                    className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none transition-transform duration-300 ease-in-out transform scale-105 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                {t('seePics')}
                </div>
            </div>

            <div className="p-6 w-full lg:w-1/2 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <div className="flex space-x-2">
                        {techIcons.map((icon) => (
                            <Image
                                key={icon.key}
                                src={icon.src}
                                alt={icon.alt}
                                width={24}
                                height={24}
                            />
                        ))}
                    </div>
                </div>

                <p className="text-[0.9rem] mb-6 -mt-2">{`${descriptions[locale]}`}</p>

                <div className="flex space-x-4">
                    <button
                        onClick={() => window.open(projectLink, "_blank", "noopener,noreferrer")}
                        className="bg-purple-500 px-4 py-1.5 text-[0.875rem] hover:bg-purple-600"
                    >
                        {t('seeProject')}
                    </button>
                    {repoLink && (
                        <button
                            onClick={() => window.open(repoLink, "_blank", "noopener,noreferrer")}
                            className="bg-none px-4 py-1.5 text-[0.875rem] text-purple-500 border-2 border-purple-500 px-6 py-2 border-w-2 hover:border-purple-600 hover:text-purple-600"
                        >
                            &lt; {t('repository')} /&gt;
                        </button>
                    )}
                </div>
            </div>



            <Dialog
                open={isModalOpen}
                onClose={closeModal}
                className="fixed inset-0 z-50 flex items-center justify-center"
            >
                <div
                    className="fixed inset-0 bg-black bg-opacity-80"
                    onClick={closeModal}
                ></div>


                <div className="relative w-[90%] h-[90%] max-w-4xl max-h-[80vh] bg-[#121212] rounded-lg p-4 z-10 overflow-hidden flex items-center justify-center">
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-white font-bold z-20 w-8 text-2xl"
                    >
                        &times;
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-20"
                    >
                        &#10094;
                    </button>

                    <div className="w-full h-full flex justify-center items-center">
                        <Image
                            src={gallery[currentImageIndex]}
                            alt={`Gallery image ${currentImageIndex + 1}`}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-md"
                        />
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-20"
                    >
                        &#10095;
                    </button>
                </div>
            </Dialog>
        </div>
    );
};

export default ProjectCard;
