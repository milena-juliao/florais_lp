import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <section className="bg-[url('/bg_hero.png')] bg-cover bg-center text-center h-screen scroll-mt-28">
            <div className="flex flex-col items-center justify-center py-standard-lg px-standard-mobile lg:px-standard-lg h-screen bg-opacity-80 bg-brownEarth">
                <h1 className="text-standard-title-mobile lg:text-standard-title-lg font-bold text-gray-800 mb-standard-title">
                    Harmonize sua mente, corpo e espírito
                </h1>
                <p className="text-standard-p-mobile lg:text-standard-p-lg text-gray-700 lg:w-1/2">
                    Conecte-se com sua essência através de métodos naturais que estimulam o seu autoconhecimento para superar seus desafios diários.
                </p>
                <Link href="#about" className="absolute bottom-0 flex flex-col items-center text-gray-600 w-full">
                    Clique para conhecer mais
                    <FontAwesomeIcon icon={faChevronDown} className="w-14 h-14 mt-2 animate-bounce pointer-events-none"/>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
