'use client'

import { useForm } from "react-hook-form";
import InputText from "../atoms/InputText";
import { FormValues } from "@/app/types/FormValues";


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
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        control={control}
        name="cardName"
        rules={{ required: "Name on card is required" }}
      />
      <InputText
        control={control}
        name="cardNumber"
        rules={{ required: "Card number is required" }}
      />
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
