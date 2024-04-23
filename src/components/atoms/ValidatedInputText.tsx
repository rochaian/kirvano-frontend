

import { Path, UseFormRegister } from "react-hook-form";
import { ChangeEvent, useEffect, useState } from "react";
import { PaymentFormSchema } from "@/app/types/PaymentFormSchema";

import CheckSvg from '../../../public/check.svg'; // Ícone para validação bem-sucedida

type InputProps = {
  label: Path<PaymentFormSchema>
  register: UseFormRegister<PaymentFormSchema>
  required: boolean
  placeholder?: string;
  onValidate?: (value: string) => boolean; // Função de validação personalizada
}

const ValidatedInputText = ({ label, register, required, placeholder, onValidate }: InputProps) => {

  const [isValid, setIsValidate] = useState(false)
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(onValidate)
      setIsValidate(onValidate(e.target.value));
  };


  return (<>

    <div className="relative">
      <input
        {...register(label, { required })}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className={`w-full bg-[#E2E8F0] text-[#2D3748] rounded-lg px-4 py-4 
                          focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {isValid && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <CheckSvg />
        </div>
      )}
    </div>

  </>)

}


export default ValidatedInputText;