import {z} from 'zod';

export const paymentFormSchema = z.object({
    nameOnCard: z.string().min(3, 'Nome no cartão deve ter pelo menos 3 caracteres'),
    cardNumber: z
      .string()
      .regex(/^\d{15,16}$/, 'O número do cartão deve ter entre 15 e 16 dígitos'),
    expirationDateMM: z
      .string()
      .regex(/^(0[1-9]|1[0-2])$/, 'Mês de expiração deve ser entre 01 e 12'),
    expirationDateYY: z
      .string()
      .regex(/^\d{2}$/, 'Ano de expiração deve ter 2 dígitos'),
    cvc: z
      .string()
      .regex(/^\d{3,4}$/, 'CVC deve ter entre 3 e 4 dígitos'),
})

export type PaymentFormSchema = z.infer<typeof paymentFormSchema>