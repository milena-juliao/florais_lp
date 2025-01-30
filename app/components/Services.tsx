"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles, faHandHoldingHand, faSpa, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Services: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const services = [
        {
            title: "Radiestesia",
            description: "Com a radiestesia, equilibramos as energias do ambiente e do corpo, utilizando instrumentos que detectam e corrigem bloqueios energéticos, promovendo harmonia e bem-estar.",
            icon: faHandSparkles,
        },
        {
            title: "Psicanálise",
            description: "A psicanálise oferece uma jornada de autoconhecimento, explorando o inconsciente para entender padrões emocionais e comportamentais, favorecendo o crescimento pessoal e a cura.",
            icon: faHandHoldingHand,
        },
        {
            title: "Florais de Bach",
            description: "Os florais são uma abordagem natural para o equilíbrio emocional, agindo de forma sutil e eficaz para tratar sentimentos, pensamentos e estados emocionais, restaurando a paz interior.",
            icon: faSpa,
        },
    ];

    const toggleDescription = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="services" className="bg-[url('/bg_herbs.png')] bg-cover bg-right lg:bg-center scroll-mt-20">
            <div className="flex flex-col items-center justify-center py-standard-lg px-standard-mobile lg:px-standard-lg backdrop-blur-sm">
                <h2 className="text-standard-title-mobile px-4 lg:text-standard-title-lg font-bold mb-standard-title bg-beige text-brownEarthStrong">
                    Serviços
                </h2>
                <div className="w-full flex flex-col items-center justify-center lg:flex-row gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-full md:w-96 flex flex-col items-start lg:items-center justify-center bg-greenOlive p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 lg:hover:scale-105"
                            onClick={() => toggleDescription(index)}
                        >
                            <div className="flex items-center lg:flex-col">
                                <FontAwesomeIcon icon={service.icon} className="h-8 w-8 mr-5 lg:mr-0 lg:h-16 lg:w-16 text-beige" />
                                <h3 className="text-xl font-bold text-beige text-center">
                                    {service.title}
                                </h3>

                                <div className="absolute right-0 flex items-center mr-6 gap-2 cursor-pointer lg:hidden">
                                    <FontAwesomeIcon
                                        icon={expandedIndex === index ? faChevronUp : faChevronDown}
                                        className="text-beige"
                                    />
                                </div>
                            </div>

                            <p className={`${expandedIndex === index ? "flex" : "hidden"} lg:flex text-beige text-justify lg:text-center mt-2 text-standard-p-mobile lg:text-standard-p-lg`}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
