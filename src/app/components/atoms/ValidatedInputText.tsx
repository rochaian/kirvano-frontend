

import { Path, UseFormRegister } from "react-hook-form";
import { ChangeEvent, useEffect, useState } from "react";
import { PaymentFormSchema } from "@/app/types/PaymentFormSchema";

import CheckSvg from '@/app/icons/check.svg'; // Ícone para validação bem-sucedida

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
        className={`w-full bg-c300 text-b800 rounded-lg px-2 py-4 
                          focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {isValid && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <CheckSvg />
        </div>
      )}
    </div>

  </>)

}


export default ValidatedInputText;