import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 flex flex-col items-center justify-center bg-theme px-standard-mobile py-standard-lg lg:px-standard-lg">
      <h2 className="mb-standard-title bg-beige px-4 text-standard-title-mobile font-bold text-brownEarthStrong lg:text-standard-title-lg">
        Sobre
      </h2>
      <div className="flex flex-col items-center justify-center gap-5 text-justify md:w-2/3 lg:gap-7">
        <p className="text-standard-p-mobile text-theme lg:text-standard-p-lg">
          Sou <span className="font-semibold">Priscilla Piccin</span>, uma apaixonada pelo cuidado humano e dedicada a auxiliar meus pacientes em suas jornadas de autoconhecimento e bem-estar. Minha prática terapêutica integra a Radiestesia, a Psicanálise e o trabalho com Florais, buscando oferecer um suporte holístico e personalizado para cada indivíduo.
          <br />
          <br />
          Acredito profundamente no potencial de transformação que reside em cada um de nós. Movida por um amor genuíno pela vida e uma busca incessante por evolução, dedico-me a aprimorar minhas habilidades e conhecimentos para oferecer um acompanhamento terapêutico eficaz e acolhedor.
        </p>
        <div className="relative w-36 text-center lg:w-48">
          <div className="absolute left-2 top-4 h-44 w-full border-2 border-brownEarthStrong dark:border-brownEarth rounded-lg lg:top-3 lg:h-60"></div>
          <Image
            src="/sobre_priscilla_piccin.png"
            alt="Foto Priscilla Piccin"
            width={300}
            height={300}
            className="relative mb-4 rounded-lg shadow-xl filter brightness-[.75] sepia-[.15] saturate-150"
          />
          <span className="text-xs text-theme">Foto: Priscilla Piccin - Terapeuta Radiestesista</span>
        </div>
      </div>
    </section>
  );
};

export default About;
