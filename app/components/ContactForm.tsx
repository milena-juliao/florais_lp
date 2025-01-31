"use client";
import React, { useState } from "react";
import { InputMask } from '@react-input/mask';
import { sendFormData } from "../services/formService";

const servicesOptions = [
    "Tratamento com Radiestesia",
    "Tratamento com Psicanálise",
    "Tratamento com Florais de Bach",
    "Tratamento completo",
    "Mais informações"
];

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        contato: "",
        message: "",
        optionSelected: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await sendFormData(formData);
            console.log(result);
            setFormData({ name: "", contato: "", message: "", optionSelected: "" });
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            alert('Erro ao enviar o formulário.');
        }
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center mx-auto py-standard-lg px-standard-mobile lg:px-standard-lg bg-theme scroll-mt-20"
        >
            <h2 className="text-standard-title-mobile lg:text-standard-title-lg font-bold mb-4 bg-beige text-brownEarthStrong text-center px-6">
                Quero te conhecer melhor!
            </h2>
            <p className="text-center text-standard-p-mobile lg:text-standard-p-lg text-theme mb-standard-title font-bold">
                Preencha os campos abaixo.
            </p>
            <form className="flex flex-col items-center max-w-lg w-full mx-auto z-10" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    className="w-full p-3 rounded-md input-theme outline-none focus-within::shadow-md"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <InputMask
                    name="contato"
                    placeholder="Whatsapp para contato"
                    className="w-full p-3 mt-4 rounded-md input-theme outline-none focus-within::shadow-md"
                    mask="(__) _ ____-____"
                    replacement={{ _: /\d/ }}
                    value={formData.contato}
                    onChange={handleChange}
                    required
                />
                <select
                    name="optionSelected"
                    className={`w-full p-3 rounded-md mt-4 input-theme outline-none focus:shadow-md`}
                    value={formData.optionSelected}
                    onChange={handleChange}
                >
                    <option value="" disabled>
                        Qual tratamento te interessou mais?
                    </option>
                    {servicesOptions.map((option, index) => (
                        <option key={index} value={option} className="text-brownEarthStrong">
                            {option}
                        </option>
                    ))}
                </select>

                <textarea
                    name="message"
                    placeholder="Atualmente, em que eu poderia te ajudar?"
                    className="w-full p-3 rounded-md mt-4 input-theme outline-none focus:shadow-md"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                {/* <p className="text-center mt-8 text-standard-p-mobile lg:text-standard-p-lg text-theme font-bold">
                    Você será redirecionado para o Whatsapp.
                </p> */}
                <button
                    type="submit"
                    className="w-1/2 py-3 rounded-md mt-2 bg-greenOlive text-white hover:bg-opacity-80"
                >
                    Enviar
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
