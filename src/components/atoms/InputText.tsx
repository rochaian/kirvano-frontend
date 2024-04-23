

import { Path, UseFormRegister } from "react-hook-form";
import { ChangeEvent, useEffect, useState } from "react";
import { IFormValues } from '@/app/types/IFormValues';
import { PaymentFormSchema } from "@/app/types/PaymentFormSchema";

import CheckSvg from '../../../public/check.svg'; // Ícone para validação bem-sucedida

type InputProps = {
  label: Path<PaymentFormSchema>
  register: UseFormRegister<PaymentFormSchema>
  required: boolean
  placeholder?: string;
  onValidate?: (value: string) => boolean; // Função de validação personalizada
}

const InputText = ({ label, register, required, placeholder, onValidate }: InputProps) => {

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



// const InputText = (props: ValidatedInputProps({ placeholder, onValidate })) {
//   const { field, fieldState } = useController(props);

//   // const inputClass = classNames(
//   //   "border p-2 w-full rounded text-[#2D3748] bg-[#E2E8F0]",
//   //   {
//   //     "border-red-500": fieldState.invalid,
//   //     "border-green-500": !fieldState.invalid,
//   //   }
//   // );

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (onChange) {
//       onChange(e); // Chama a função de registro do React Hook Form
//     }
//   };

//   const [value, setValue] = useState('');
//   const isValid = onValidate(value); // Verificar a validação com a função personalizada

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder={placeholder}
//         onChange={handleChange}
//         className={`w-full bg-[#E2E8F0] text-[#2D3748] rounded-lg px-4 py-4 
//                       focus:outline-none focus:ring-2 focus:ring-blue-500`}
//       />
//       {isValid && (
//         <div className="absolute inset-y-0 right-0 flex items-center pr-4">
//           <CheckSvg />
//         </div>
//       )}
//     </div>
//   );
// }

export default InputText;