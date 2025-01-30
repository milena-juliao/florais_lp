"use client"
import React, { useState } from "react";
import Image from "next/image";


const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [optionSelected, setOptionSelected] = useState("");

  const servicesOptions = [
    {
      option: "Tratamento com Radiestesia"
    },
    {
      option: "Tratamento com Psicanálise"
    },
    {
      option: "Tratamento com Florais de Bach"
    },
    {
      option: "Tratamento completo"
    },
    {
      option: "Mais informações"
    },
  ];

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionSelected(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5519971028869";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Olá, meu nome é *${name}*.\n\n*Qual tratamento te interessou mais?*\n${optionSelected}!\n\n*Como posso te ajudar?*\n${message}`
    )}`;
    window.open(url, "_blank");
    setName("");
    setMessage("");
    setOptionSelected("");
  };


  return (
    <section className="relative bg-theme mx-auto py-standard-lg px-standard-mobile lg:px-standard-lg scroll-mt-20" id="contact">
      <h2 className="text-standard-title-mobile lg:text-standard-title-lg font-bold text-center mb-1 text-theme">Quero te conhecer melhor!</h2>
      <p className="text-center text-standard-p-mobile lg:text-standard-p-lg text-theme mb-standard-title">Preencha os campos abaixo.</p>
      <form
        className="relative max-w-lg mx-auto z-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Seu nome"
          className="outline-brownEarthStrong w-full p-3 border rounded-md text-gray-800 "
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          className={`outline-brownEarthStrong w-full p-3 border rounded-md ${optionSelected === "" ? 'text-gray-400' : 'text-gray-800'} mt-4`}
          value={optionSelected}
          onChange={handleOption}
        >
          <option value="" className="text-gray-400">Qual tratamento te interessou mais?</option>
          {
            servicesOptions.map((servicesOptions, index) => (
              <option key={index} value={servicesOptions.option} className="text-gray-800">{servicesOptions.option}</option>
            ))
          }
        </select>


        <textarea
          placeholder="Atualmente, em que eu poderia te ajudar?"
          className="outline-brownEarthStrong w-full p-3 border rounded-md mt-4 text-gray-800"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <p className="text-center mt-8 text-standard-p-mobile lg:text-standard-p-lg text-theme">Você será redirecionado para o Whatsapp.</p>
        <button
          type="submit"
          className="w-full bg-brownEarthStrong dark:bg-[#332A20] text-white py-3 rounded-md hover:bg-opacity-80 mt-2"
        >
          Enviar
        </button>
      </form>
      <Image
        src="/flor_form.svg"
        alt="Sobre nós"
        width={200}
        height={200}
        className="absolute bottom-0 right-0 w-3/4 opacity-5 z-1 "
      />
    </section>
  );
};

export default ContactForm;
