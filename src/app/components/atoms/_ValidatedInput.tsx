import React, { ChangeEvent, forwardRef, Ref, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import CheckSvg from '@/app/icons/check.svg'; // Ícone para validação bem-sucedida




interface ValidatedInputProps extends UseFormRegisterReturn {
  placeholder: string;
  onValidate: (value: string) => boolean; // Função de validação personalizada
}

const ValidatedInput = forwardRef<HTMLInputElement, ValidatedInputProps>(
  ({ placeholder, onValidate, onChange, ...rest }, ref) => {
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e); // Chama a função de registro do React Hook Form
      }
    };

    const [value, setValue] = useState('');
    const isValid = onValidate(value); // Verificar a validação com a função personalizada

    return (
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value?.toString() ?? ''}
          onChange={handleChange}
          className={`w-full bg-[#E2E8F0] text-[#2D3748] rounded-lg px-4 py-4 
                      focus:outline-none focus:ring-2 focus:ring-blue-500`}
          // ref={ref} // Apenas um ref deve ser definido
          {...rest} // Outras propriedades do React Hook Form
        />
        {isValid && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <CheckSvg />
          </div>
        )}
      </div>
    );
  }
);

ValidatedInput.displayName = 'ValidatedInput'; // Define um nome de exibição para o componente

export default ValidatedInput;
