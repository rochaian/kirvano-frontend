import React, { useState } from 'react';
import CheckSvg from '../../../public/check.svg'; // Ícone para validação bem-sucedida

interface ValidatedInputProps {
  placeholder: string;
  onValidate: (value: string) => boolean; // Função de validação personalizada
}

const ValidatedInput: React.FC<ValidatedInputProps> = ({ placeholder, onValidate }) => {
  const [value, setValue] = useState('');
  const isValid = onValidate(value); // Verificar a validação com a função personalizada

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative"> 
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`w-full bg-[#E2E8F0] text-[#2D3748] rounded-lg px-4 py-4 
                    focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {isValid && ( // Exibe o ícone quando a validação é bem-sucedida
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <CheckSvg/>
        </div>
      )}
    </div>
  );
};

export default ValidatedInput;
