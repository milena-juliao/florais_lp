import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <section className="bg-[url('/bg_herbs.png')] bg-cover bg-center text-center h-screen scroll-mt-20">
            <div className="flex flex-col items-center justify-center px-standard-mobile lg:px-standard-lg h-screen backdrop-blur-sm">
                <h1 className="text-lg px-4 py-2 lg:text-standard-title-lg font-bold text-beige mb-standard-title bg-theme">
                    Harmonize sua mente, corpo e espírito
                </h1>
                <p className="text-standard-p-mobile lg:text-standard-p-lg py-2 text-brownEarthStrong w-4/5 lg:w-2/5 bg-beige px-4">
                    Conecte-se com sua essência através de métodos naturais que estimulam o seu autoconhecimento para superar seus desafios diários.
                </p>
                <Link href="#about" className="absolute bottom-0 flex flex-col items-center text-beige w-full">
                    Clique para conhecer mais
                    <FontAwesomeIcon icon={faChevronDown} className="w-14 h-14 mt-2 animate-bounce pointer-events-none"/>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
