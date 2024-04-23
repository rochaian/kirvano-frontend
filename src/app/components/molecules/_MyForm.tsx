import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Esquema Zod para validação do formulário
const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().regex(/^\d{10,11}$/, 'Número de telefone deve ter 10 ou 11 dígitos'),
});

type FormSchema = z.infer<typeof formSchema>;

const MyForm = () => {
  const { control, handleSubmit, formState } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data); // Dados do formulário
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        {/* <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <InputTextForm
              {...field}
              placeholder="Digite seu nome"
              isValid={!fieldState.invalid}
            />
          )}
        /> */}
        {formState.errors.name && (
          <span className="text-red-500 text-sm">{formState.errors.name.message}</span>
        )}
      </div>

      <div className="mb-4">
        {/* <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <InputTextForm
              {...field}
              placeholder="Digite seu telefone"
              isValid={!fieldState.invalid}
            />
          )}
        /> */}
        {formState.errors.phone && (
          <span className="text-red-500 text-sm">{formState.errors.phone.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default MyForm;
