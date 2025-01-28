"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brownEarth fixed top-0 w-full  z-50 text-gray-800">
      <div className="container relative shadow-md mx-auto flex items-center justify-between py-4 px-standard-mobile lg:px-standard-lg">
        <Link href="/">
          <img src="/logo.png" alt="Priscilla Piccin - Radiestesista Terapêutica" className="h-12 lg:h-16" />
        </Link>
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
              <Link href="#about" className="hover:text-gray-600">Sobre</Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-gray-600">Serviços</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-600">Agendar Consulta</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`lg:hidden shadow-md ${isMenuOpen ? "block" : "hidden"} bg-brownEarth`}>
        <ul className="space-y-4 py-2 lg:py-4 px-10 text-right">
          <li>
            <Link href="#about" className="hover:text-gray-600">Sobre</Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-gray-600">Serviços</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-600">Agendar Consulta</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
