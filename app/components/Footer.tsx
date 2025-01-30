import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#332A20] text-beige py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-sm mb-2">© 2025 Desenvolvido por Milena Julião.</p>
            <span className="text-sm text-gray-400">Feito com ♥ em React e Tailwind CSS</span>
          </div>

          <div className="flex gap-6 justify-center sm:justify-end items-center">
            <Link
              href="https://github.com/milena-juliao/florais_lp/tree/main/app/components"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-md font-semibold hover:text-[#D1B48F] transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              <span className="hidden sm:inline">Acesse o projeto no GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/milenajuliao/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-md font-semibold hover:text-[#D1B48F] transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              <span className="hidden sm:inline">Conecte-se comigo no LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
