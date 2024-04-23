import { PaymentFormSchema } from "../types/PaymentFormSchema";

// const API_BASE_URL = 'http://localhost:3000';
const API_BASE_URL = 'https://kirvano-backend.onrender.com'

// Define uma interface para a resposta da API
interface ApiResponse {
    success: boolean;
    message: string;
}

export const sendPaymentData = async (data: PaymentFormSchema): Promise<ApiResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/payments?access_token=ABCDE12345`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Verifica se a resposta está ok ou não
        if (!response.ok) {
            // Verifica se o status é 400 para fornecer uma mensagem mais clara
            if (response.status === 400) {
                const errorData = await response.json(); // Tenta obter mais detalhes do erro
                return {
                    success: false,
                    message: errorData.message || 'Erro no formulário. Verifique os campos.',
                };
            }
            // Lança um erro genérico para outros códigos de status
            throw new Error('Erro ao enviar o formulário');
        }

        // Se a resposta for bem-sucedida
        const json = await response.json();

        return { success: true, message: json.message || 'Formulário enviado com sucesso!' };
    } catch (error: any) {
        // Se houve uma exceção, retorna uma mensagem de erro
        return { success: false, message: error.message || 'Erro desconhecido ao enviar o formulário' };
    }
};