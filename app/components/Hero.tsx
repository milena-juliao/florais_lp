import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
    return (
        <section className="bg-[url('/bg_hero.png')] bg-cover bg-center text-center h-screen lg:mt-16">
            <div className="flex flex-col items-center justify-center py-20 px-10 h-screen bg-opacity-80 bg-brownEarth">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    Harmonize sua mente, corpo e espírito
                </h1>
                <p className="text-lg text-gray-700 mt-10 lg:mt-4 lg:w-1/2">
                    Conecte-se com sua essência através de métodos naturais que estimulam o seu autoconhecimento para superar seus desafios diários.
                </p>
                <a href="#about" className="absolute bottom-0 flex flex-col items-center text-gray-600 w-full">
                    Clique para conhecer mais
                    <FontAwesomeIcon icon={faChevronDown} className="w-14 h-14 mt-2 animate-bounce pointer-events-none"/>
                </a>
            </div>
        </section>
    );
};

export default Hero;
