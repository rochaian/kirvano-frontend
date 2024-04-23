import { useState } from "react";
import Label from "@/components/atoms/Label";
import Button from "@/components/atoms/Button";
import LineSvg from '../../../public/line.svg';
import CheckSvg from '../../../public/check.svg';
import ExpirationSvg from '../../../public/expiration-line.svg';
import CustomSelect from "@/components/atoms/CustomSelect";

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import ValidatedInputText from "../atoms/ValidatedInputText";


import { PaymentFormSchema, paymentFormSchema } from "@/app/types/PaymentFormSchema";
import InputTextForm from "../atoms/InputTextForm";



export default function ShippingPaymentForm() {

    const { register, handleSubmit } = useForm<PaymentFormSchema>({
        resolver: zodResolver(paymentFormSchema),
        mode: 'onChange'
    });

    // // Define uma interface para a resposta da API
    // interface ApiResponse {
    //     success: boolean;
    //     message: string;
    // }

    // const sendFormData = async (data: Record<string, any>): Promise<ApiResponse> => {
    //     try {
    //         const response = await fetch('https://localhost:3000/api/payment', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Erro ao enviar o formulário');
    //         }

    //         const json = await response.json();

    //         return { success: true, message: json.message || 'Formulário enviado com sucesso!' };
    //     } catch (error: any) {
    //         return { success: false, message: error.message };
    //     }
    // };

    // Função para proceder o pagamento
    function handleSubmitForm(data: PaymentFormSchema) {
        console.log("Payment Order");
        console.log(data)
    }

    function validateSimple(value: string): boolean {
        return value.length >= 5; // Pelo menos 5 caracteres
    }

    // Função para validar nome no cartão
    function validateNameOnCard(name: string): boolean {
        return name.length >= 3; // Pelo menos 3 caracteres
    }

    // Função para validar número do cartão
    function validateCardNumber(cardNumber: string): boolean {
        const cardNumberRegex = /^\d{15,16}$/; // Entre 15 e 16 dígitos
        return cardNumberRegex.test(cardNumber);
    }

    // Função para validar mês de expiração
    function validateExpirationMM(expMM: string): boolean {
        const expMMRegex = /^(0[1-9]|1[0-2])$/; // Entre 01 e 12
        return expMMRegex.test(expMM);
    }

    // Função para validar ano de expiração
    function validateExpirationYY(expYY: string): boolean {
        const expYYRegex = /^\d{2}$/; // Dois dígitos
        return expYYRegex.test(expYY);
    }

    // Função para validar CVC
    function validateCVC(cvc: string): boolean {
        const cvcRegex = /^\d{3,4}$/; // Entre 3 e 4 dígitos
        return cvcRegex.test(cvc);
    }

    // Função para cancelar o pedido
    const onCancelOrder = () => {
        console.log("Cancel order");
    };


    const ShippingForm: React.FC<{ onChangeView: () => void }> = ({ onChangeView }) => (
        <div>
            <div className="flex flex-row items-center text-center justify-center gap-2">
                <span
                    className="text-[#3182CE] text-[20px] font-medium cursor-pointer"
                    onClick={onChangeView}
                >
                    Shipping
                </span>
                <LineSvg />
                <CheckSvg />
                <LineSvg />
                <span className="text-[#828282] text-[20px] font-medium">Payment</span>
            </div>

            <br />
            <Label text="Shipping Details" variant="primary" />
            <br />
            <br />

            <div className="flex flex-row justify-between items-center">
                <Label text="Use saved address" variant="tertiary" />
                <CustomSelect
                    options={[
                        { label: '123, Electric avenue', value: '1' },
                        { label: '44, Ayn Streets', value: '2' }
                    ]}
                    defaultOption="1"
                />
            </div>

            <br />
            <Label text="First line of address" variant="quaternary" />
            <InputTextForm
                label="address"
                placeholder="Enter your Address"
                onValidate={validateSimple}

            />
            <br />
            <Label text="Street name" variant="quaternary" />
            <InputTextForm
                label="streetName"
                placeholder="Enter your Street name"
                onValidate={validateSimple}
            />

            <br />

            <div className="grid grid-flow-row-dense grid-cols-7 gap-8">
                <div className="col-span-3">
                    <Label text="Postcode" variant="quaternary" />
                    <InputTextForm
                        label="streetName"
                        placeholder="00000-000"
                        onValidate={validateSimple}
                    />
                </div>

                <div className="col-span-4">
                    <Label text="Select shipping" variant="quaternary" />
                    <CustomSelect
                        options={[
                            { label: 'Free delivery', value: '1' },
                            { label: 'Express delivery', value: '2' },
                            { label: 'Take out', value: '3' },
                        ]}
                        defaultOption="1"
                    />
                </div>
            </div>

            <br />

            <hr className="border-t-1 border-gray-300" />
            <br />

            <div className="flex justify-end">
                <Button typeButton="button" label="Cancel Order" variant="secondary" onClick={onCancelOrder} />
                <Button
                    typeButton="button"
                    label="Payment"
                    variant="primary"
                    onClick={onChangeView}
                />
            </div>
        </div>
    );


    const PaymentForm: React.FC<{ onChangeView: () => void }> = ({ onChangeView }) => (
        <>
            <div className="flex flex-row items-center text-center justify-center gap-2">
                <span
                    className="text-[#3182CE] text-[20px] font-medium"
                    onClick={onChangeView}
                >
                    Shipping
                </span>
                <LineSvg />
                <CheckSvg />
                <LineSvg />
                <span className="text-[#3182CE] text-[20px] font-medium">Payment</span>
            </div>

            <br />
            <Label text="Payment Details" variant="primary" />
            <br />
            <br />

            <div className="flex flex-row justify-between items-center">
                <Label text="Use saved card" variant="tertiary" />
                <CustomSelect
                    options={[
                        { label: 'Mastercard ending 234', value: '1' },
                        { label: 'Mastercard ending 44', value: '2' },
                        { label: 'Visa ending 444', value: '3' },
                    ]}
                    defaultOption="1"
                />
            </div>

            <br />
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <Label text="Name on Card" variant="quaternary" />
                <ValidatedInputText
                    required={true}
                    label="nameOnCard"
                    register={register}
                    placeholder="Enter Name on Card"
                    onValidate={validateNameOnCard}
                />
                <br />

                <Label text="Card Number" variant="quaternary" />
                <ValidatedInputText
                    required={true}
                    label="cardNumber"
                    register={register}
                    placeholder="0000-0000-0000-0000"
                    onValidate={validateCardNumber}
                />
                <br />

                <div className="grid grid-flow-row-dense grid-cols-7 gap-8">
                    <div className="col-span-3">
                        <Label text="Expiration" variant="quaternary" />
                        <div className="flex flex-row items-center text-center justify-center gap-2">
                            <ValidatedInputText
                                required={true}
                                label="expirationMM"
                                register={register}
                                placeholder="MM"
                                onValidate={validateExpirationMM}
                            />

                            <div className="flex">
                                <ExpirationSvg />
                            </div>
                            <ValidatedInputText
                                required={true}
                                label="expirationYY"
                                register={register}
                                placeholder="YY"
                                onValidate={validateExpirationYY}
                            />
                        </div>
                    </div>

                    <div className="col-span-4">
                        <Label text="CVC" variant="quaternary" />
                        <ValidatedInputText
                            required={true}
                            label="cvc"
                            register={register}
                            placeholder="000"
                            onValidate={validateCVC}
                        />
                    </div>
                </div>

                <br />
                <div className="flex justify-end">
                    <Button typeButton="button" label="Cancel Order" variant="secondary" onClick={onCancelOrder} />
                    <Button typeButton="submit" label="Complete Order" variant="primary" />
                </div>
            </form>
        </>
    );

    const [isShippingForm, setIsShippingForm] = useState(true);

    const toggleView = () => {
        setIsShippingForm(!isShippingForm);
    };

    return (
        <div>
            {isShippingForm ? (
                <ShippingForm onChangeView={toggleView} />
            ) : (
                <PaymentForm onChangeView={toggleView} />
            )}
        </div>
    );
}


