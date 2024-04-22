'use client'

import { useForm } from "react-hook-form";
import InputText from "../atoms/InputText";
import { FormValues } from "@/app/types/FormValues";
import Label from "../atoms/Label";


export default function MyForm() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      cardName: "",
      cardNumber: "",
      cvc: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
  
  
        <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
            <Label text="Card Name" variant="tertiary"></Label>
            <InputText
                control={control}
                name="cardName"
                
                rules={{ required: "Name on card is required" }}
            />

            <Label text="Card Number" variant="secondary"></Label>
            <InputText
                control={control}
                name="cardNumber"
                rules={{ required: "Card number is required" }}
            />

            <Label text="CVC" variant="secondary"></Label>    
            <InputText
                control={control}
                name="cvc"
                rules={{ required: "CVC is required" }}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Submit
            </button>
        </form>
  );
}
