"use client";
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { PortifolioData } from '../interfaces/types';

const ProjectCard: React.FC<PortifolioData> = ({ title, description, imageSrc, gallery, techIcons, projectLink, repoLink }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-neutral-700 rounded-lg shadow-md flex flex-col lg:flex-row max-w-5xl mx-auto overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 cursor-pointer overflow-hidden" onClick={openModal}>
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
                    Ver fotos
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 w-full lg:w-1/2 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <div className="flex space-x-2">
                        {techIcons.map((icon) => (
                            <Image key={icon.key} src={icon.src} alt={icon.alt} width={24} height={24} />
                        ))}
                    </div>
                </div>

                <p className="text-gray-300 text-justify mb-6">{description}</p>

                <div className="flex space-x-4">
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
                        Ver Projeto
                    </a>
                    {repoLink ? (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800"
                        >
                            &lt; Repositório /&gt;
                        </a>
                    ) : (
                        <button
                            disabled
                            className="bg-black text-white px-4 py-2 rounded-full font-semibold opacity-50 cursor-not-allowed"
                        >
                            &lt; Repositório /&gt;
                        </button>
                    )}
                </div>
            </div>

            {/* Modal/Carousel for Gallery */}
            <Dialog open={isModalOpen} onClose={closeModal} className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Manual Overlay */}
                <div className="fixed inset-0 bg-black bg-opacity-80" onClick={closeModal}></div>

                {/* Modal Content */}
                <div className="relative max-w-2xl bg-white rounded-lg p-4 z-10">
                    <button onClick={closeModal} className="absolute top-2 right-2 text-black font-bold">&times;</button>
                    <div className="flex space-x-4 overflow-x-scroll">
                        {gallery.map((img, index) => (
                            <div key={index} className="min-w-full">
                                <Image src={img} alt={`Gallery image ${index + 1}`} width={500} height={300} className="rounded-md" />
                            </div>
                        ))}
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default ProjectCard;
