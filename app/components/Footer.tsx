import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-500 text-white py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Coluna 1 - Informações */}
                    <div className="flex flex-col text-center md:text-left">
                        <p className="text-sm mb-2">© 2025 Milena Julião. Todos os direitos reservados.</p>
                        <span className="text-sm text-gray-400">Feito com ♥ em React e Tailwind CSS</span>
                    </div>

                    {/* Coluna 2 - Links */}
                    <div className="flex gap-6 justify-center md:justify-end items-center">
                        <Link
                            href="https://github.com/milena-juliao/florais_lp/tree/main/app/components"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-md font-semibold hover:text-purple-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                            <span>Acesse o projeto no GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/milena-juliao/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-md font-semibold hover:text-purple-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                            <span>Conecte-se comigo no LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
