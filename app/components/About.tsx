import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-brownEarth py-28 px-10 lg:px-28">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Sobre
      </h2>
      <div className="relative flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col justify-center lg:w-2/5">
          <p className="text-gray-700 text-3lg lg:text-lg mt-6 md:mt-0">
            Sou <span className="text-gray-900">Priscilla Piccin</span>, uma apaixonada pelo cuidado humano e dedicada a auxiliar meus pacientes em suas jornadas de autoconhecimento e bem-estar. Minha prática terapêutica integra a Radiestesia, a Psicanálise e o trabalho com Florais, buscando oferecer um suporte holístico e personalizado para cada indivíduo.
          </p>

          <p className="text-gray-700 text-3lg lg:text-lg mt-5 md:mt-10">
            Acredito profundamente no potencial de transformação que reside em cada um de nós. Movida por um amor genuíno pela vida e uma busca incessante por evolução, dedico-me a aprimorar minhas habilidades e conhecimentos para oferecer um acompanhamento terapêutico eficaz e acolhedor.
          </p>
        </div>
        <Image
          src="/sobre_priscilla_piccin.png"
          alt="Foto Priscilla Piccin"
          width={200}
          height={200}
          className="w-1/2 lg:w-1/4 max-w-md ml-40 rounded-lg shadow-xl z-10"
        />
        <img src="./borboleta.svg" alt="" className="absolute right-8 lg:right-2/3 top-3/4 lg:-top-44 w-auto lg:w-3/5 opacity-15" />
      </div>
    </section>
  );
};

export default About;
