export const sendFormData = async (data: any) => {
    const apiUrlMessages = process.env.NEXT_PUBLIC_API_URL_MESSAGES;

    if (!apiUrlMessages) {
        throw new Error('A variável NEXT_PUBLIC_API_URL não está definida.');
    }

    const response = await fetch(apiUrlMessages, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
    }

    return response.json();
};
