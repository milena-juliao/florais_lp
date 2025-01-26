import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-brownEarth shadow-md fixed top-0 w-full z-50 text-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/">
          <img src="/logo.png" alt="Priscilla Piccin - Radiestesista Terapêutica" className="h-16" />
        </a>
        <nav>
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
    </header>
  );
};

export default Header;
