import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <section className="h-screen scroll-mt-20 bg-[url('/bg_herbs.png')] bg-cover bg-center text-center">
            <div className="flex h-screen flex-col items-center justify-center px-standard-mobile backdrop-blur-sm lg:px-standard-lg bg-beige/30 dark:bg-black/50">
                <h1 className="mb-standard-title bg-theme px-4 py-2 text-lg font-bold text-beige lg:text-standard-title-lg">
                    Harmonize sua mente, corpo e espírito
                </h1>
                <p className="w-4/5 bg-beige px-4 py-2 text-standard-p-mobile text-brownEarthStrong lg:w-2/5 lg:text-standard-p-lg">
                    Conecte-se com sua essência através de métodos naturais que estimulam o seu autoconhecimento para superar seus desafios diários.
                </p>
                <Link href="#about" className="absolute bottom-0 flex w-full flex-col items-center text-beige">
                    Clique para conhecer mais
                    <FontAwesomeIcon icon={faChevronDown} className="pointer-events-none mt-2 h-14 w-14 animate-bounce" />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
