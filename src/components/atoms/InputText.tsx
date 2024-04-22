'use client'

import { useController, UseControllerProps } from "react-hook-form";
import classNames from "classnames";
import { FormValues } from "@/app/types/FormValues";

function InputText(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);

  const inputClass = classNames(
    "border p-2 w-full rounded text-black",
    {
      "border-red-500": fieldState.invalid,
      "border-green-500": !fieldState.invalid,
    }
  );

  return (
    <div className="mb-4">
      <input {...field} placeholder={props.name} className={inputClass} />
    </div>
  );
}

export default InputText;