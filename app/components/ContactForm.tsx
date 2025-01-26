"use client"
import React, { useState } from "react";

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
    console.log(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Olá, meu nome é ${name}./n
      E eu gostaria do conhecer mais sobre o ${optionSelected}!/n
      Pois acredito que poderia me ajudar com ${message}`
    )}`;
    window.open(url, "_blank");
    setName("");
    setMessage("");
  };


  return (
    <section className=" bg-brownEarth mx-auto py-16 text-gray-800" id="contact">
      <h2 className="text-3xl font-bold text-center">Agende sua consulta!</h2>
      <p className="font-bold text-center">Me conte como posso te ajudar.</p>
      <form
        className="mt-8 max-w-lg mx-auto space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Seu nome"
          className="outline-purple-300 w-full p-3 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          className={`outline-purple-300 w-full p-3 border rounded-md ${optionSelected === "" ? 'text-gray-400' : 'text-gray-800' }`}
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
          className="outline-purple-300 w-full p-3 border rounded-md"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
