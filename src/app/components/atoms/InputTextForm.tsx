

import { Path, UseFormRegister } from "react-hook-form";
import { ChangeEvent, useEffect, useState } from "react";
import { PaymentFormSchema } from "@/app/types/PaymentFormSchema";

import CheckSvg from '@/app/icons/check.svg'; // Ícone para validação bem-sucedida

type InputProps = {
    label: string
    placeholder?: string;
    onValidate?: (value: string) => boolean; // Função de validação personalizada
}

const InputTextForm = ({ label, placeholder, onValidate }: InputProps) => {
    
    const [isValid, setIsValidate] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onValidate)
            setIsValidate(onValidate(e.target.value));
    };

    return (<>

        <div className="relative">
            <input
                type="text"
                name="label"
                onChange={handleChange}
                placeholder={placeholder}
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


export default InputTextForm;