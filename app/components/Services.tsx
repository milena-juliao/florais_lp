import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles, faHandHoldingHand, faSpa } from '@fortawesome/free-solid-svg-icons';

const Services: React.FC = () => {
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

  return (
    <section id="services" className="bg-[url('/bg_servicos.png')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center py-standard-lg px-standard-mobile lg:px-standard-lg scroll-mt-28 bg-opacity-80 bg-brownEarth">
        <h2 className="text-standard-title-mobile lg:text-standard-title-lg font-semibold text-center text-gray-800 mb-standard-title">
          Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={service.icon} className="h-16 w-16 mb-5 text-brownEarth" />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mt-2 text-standard-p-mobile lg:text-standard-p-lg">
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
