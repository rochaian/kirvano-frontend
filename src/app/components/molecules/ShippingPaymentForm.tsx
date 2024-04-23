import { useState } from "react";
import Label from "@/app/components/atoms/Label";
import Button from "@/app/components/atoms/Button";
import LineSvg from '@/app/icons/line.svg';
import CheckSvg from '@/app/icons/check.svg';
import ExpirationSvg from '@/app/icons/expiration-line.svg';
import InformationIconSvg from '@/app/icons/information.svg';
import CustomSelect from "@/app/components/atoms/CustomSelect";

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import ValidatedInputText from "../atoms/ValidatedInputText";
import { PaymentFormSchema, paymentFormSchema } from "@/app/types/PaymentFormSchema";
import InputTextForm from "../atoms/InputTextForm";

import { sendPaymentData } from "@/app/services/apiService";



export default function ShippingPaymentForm() {

    //Utilizado para alterar as telas do formulário
    const [isShippingForm, setIsShippingForm] = useState(true);
    const toggleView = () => {
        setIsShippingForm(!isShippingForm);
    };

    //Utilizado para registrar e integrar o react-hook-form com o zod
    const { register, handleSubmit } = useForm<PaymentFormSchema>({
        resolver: zodResolver(paymentFormSchema),
        mode: 'onChange'
    });

    // Função para proceder o pagamento
    async function handleSubmitForm(data: PaymentFormSchema) {
        console.log("Payment Order");
        const result = await sendPaymentData(data);
        console.log('result', result);

        alert(result.message);
    }

    // Função simples de validação
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
    function validateExpirationDateMM(expMM: string): boolean {
        const expMMRegex = /^(0[1-9]|1[0-2])$/; // Entre 01 e 12
        return expMMRegex.test(expMM);
    }

    // Função para validar ano de expiração
    function validateExpirationDateYY(expYY: string): boolean {
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
                    className="text-b600 text-[20px] font-medium cursor-pointer"
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
                    className="text-b600 text-[20px] font-medium"
                    onClick={onChangeView}
                >
                    Shipping
                </span>
                <LineSvg />
                <CheckSvg />
                <LineSvg />
                <span className="text-b600 text-[20px] font-medium">Payment</span>
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

                <div className="grid grid-flow-row-dense grid-cols-7 gap-6">
                    <div className="col-span-3">
                        <Label text="Expiration" variant="quaternary" />
                        <div className="flex flex-row items-center text-center justify-center gap-2">
                            <ValidatedInputText
                                required={true}
                                label="expirationDateMM"
                                register={register}
                                placeholder="MM"
                                onValidate={validateExpirationDateMM}
                            />

                            <div className="flex">
                                <ExpirationSvg />
                            </div>
                            <ValidatedInputText
                                required={true}
                                label="expirationDateYY"
                                register={register}
                                placeholder="YY"
                                onValidate={validateExpirationDateYY}
                            />
                        </div>
                    </div>

                    <div className="col-span-4">
                        <div className="flex row-span-full mb-[-12px]">
                            <Label text="CVC" variant="quaternary" />
                            <InformationIconSvg />
                        </div>

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


