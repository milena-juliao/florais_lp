export const sendFormData = async (formData: { name: string; contato: string; optionSelected: string; message: string }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
        throw new Error('A variável NEXT_PUBLIC_API_URL não está definida.');
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        throw new Error('Erro ao enviar o formulário');
    }
};
