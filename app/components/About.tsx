import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-brownEarth py-standard-lg px-standard-mobile lg:px-standard-lg scroll-mt-28">
      <h2 className="text-standard-title-mobile lg:text-standard-title-lg font-semibold text-center text-gray-800 mb-standard-title">
        Sobre
      </h2>
      <div className="relative flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col justify-center gap-5 lg:gap-14 md:w-2/3 lg:w-2/5 mb-8 md:mb-0">
          <p className="text-gray-700 text-standard-p-mobile lg:text-standard-p-lg text-justify lg:text-left">
            Sou <span className="text-gray-900">Priscilla Piccin</span>, uma apaixonada pelo cuidado humano e dedicada a auxiliar meus pacientes em suas jornadas de autoconhecimento e bem-estar. Minha prática terapêutica integra a Radiestesia, a Psicanálise e o trabalho com Florais, buscando oferecer um suporte holístico e personalizado para cada indivíduo.
          </p>

          <p className="text-gray-700 text-standard-p-mobile lg:text-standard-p-lg">
            Acredito profundamente no potencial de transformação que reside em cada um de nós. Movida por um amor genuíno pela vida e uma busca incessante por evolução, dedico-me a aprimorar minhas habilidades e conhecimentos para oferecer um acompanhamento terapêutico eficaz e acolhedor.
          </p>
        </div>

        <div className="flex justify-end md:justify-center w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
          <Image
            src="/sobre_priscilla_piccin.png"
            alt="Foto Priscilla Piccin"
            width={200}
            height={200}
            className="w-1/3 rounded-lg shadow-xl"
          />
        </div>
        
        <img src="./borboleta.svg" alt="" className="absolute right-16 lg:right-2/3 top-2/3 lg:-top-44 w-1/2 lg:w-3/5 opacity-15" />
      </div>
    </section>
  );
};

export default About;
