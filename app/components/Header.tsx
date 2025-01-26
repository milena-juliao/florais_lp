"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brownEarth fixed top-0 w-full h-16 lg:h-auto z-50 text-gray-800">
      <div className="container relative shadow-md mx-auto flex items-center justify-between py-2 lg:py-4 px-10">
        <a href="/">
          <img src="/logo.png" alt="Priscilla Piccin - Radiestesista Terapêutica" className="h-12 lg:h-16" />
        </a>
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} className="w-5 h-5"/>
          </button>
        </div>
        <nav className={`lg:flex hidden`}>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-gray-600">Sobre</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-600">Serviços</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-600">Agendar Consulta</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`lg:hidden shadow-md ${isMenuOpen ? "block" : "hidden"} bg-brownEarth`}>
        <ul className="space-y-4 py-2 lg:py-4 px-10 text-right">
          <li>
            <a href="#about" className="hover:text-gray-600">Sobre</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-600">Serviços</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-600">Agendar Consulta</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
