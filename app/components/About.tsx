import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-theme flex flex-col items-center justify-center py-standard-lg px-standard-mobile lg:px-standard-lg scroll-mt-20">
      <h2 className="text-standard-title-mobile px-4 lg:text-standard-title-lg font-bold mb-standard-title bg-beige text-brownEarthStrong">
        Sobre
      </h2>
      <div className="flex flex-col items-center justify-center gap-5 text-justify lg:gap-7 md:w-2/3 ">
        <p className="text-theme text-standard-p-mobile lg:text-standard-p-lg">
          Sou <span className="font-semibold">Priscilla Piccin</span>, uma apaixonada pelo cuidado humano e dedicada a auxiliar meus pacientes em suas jornadas de autoconhecimento e bem-estar. Minha prática terapêutica integra a Radiestesia, a Psicanálise e o trabalho com Florais, buscando oferecer um suporte holístico e personalizado para cada indivíduo.
          <br />
          <br />
          Acredito profundamente no potencial de transformação que reside em cada um de nós. Movida por um amor genuíno pela vida e uma busca incessante por evolução, dedico-me a aprimorar minhas habilidades e conhecimentos para oferecer um acompanhamento terapêutico eficaz e acolhedor.
        </p>

        <div className="relative w-36 lg:w-48 text-center">
          <div className="absolute top-4 lg:top-3 left-2 w-full h-44 lg:h-60 border-2 border-brownEarthStrong dark:border-brownEarth rounded-lg"></div>
          <Image
            src="/sobre_priscilla_piccin.png"
            alt="Foto Priscilla Piccin"
            width={300}
            height={300}
            className="relative rounded-lg shadow-xl mb-4 filter brightness-[.75] sepia-[.15] saturate-150"
          />
          <span className="text-xs text-theme">Foto: Priscilla Piccin - Terapeuta Radiestesista</span>
        </div>
      </div>
    </section>
  );
};

export default About;
