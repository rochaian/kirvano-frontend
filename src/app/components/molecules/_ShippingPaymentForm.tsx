import { useState } from "react";
import Label from "@/app/components/atoms/Label";
import Button from "@/app/components/atoms/Button";
import LineSvg from '@/app/icons//line.svg';
import CheckSvg from '@/app/icons//check.svg';
import ExpirationSvg from '@/app/icons//expiration-line.svg';
import CustomSelect from "@/app/components/atoms/CustomSelect";
import InputTextForm from "@/app/components/atoms/InputTextForm";

export default function ShippingPaymentForm() {


    // Função para validar campo
    const validateAddress = (address: string): boolean => {

        const addressRegex = /^.{5,}$/; // Simples regex para verificar se o campo possui mais de 5 caracteres
        return addressRegex.test(address);
    };

    // Função para cancelar o pedido
    const onCancelOrder = () => {
        console.log("Cancel order");
    };

    // Função para proceder o pagamento
    const onCompleteOrder = () => {
        console.log("Payment Order");
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
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                    ]}
                    defaultOption="1"
                />
            </div>

            <br />
            <Label text="First line of address" variant="quaternary" />
            <InputTextForm
                label="address"
                placeholder="Enter your Address"
                onValidate={(val) => val.length > 5}
            />

            <br />
            <Label text="Street name" variant="quaternary" />
            <InputTextForm
                label="streetName"
                placeholder="Enter your Street name"
                onValidate={validateAddress}
            />

            <br />

            <div className="grid grid-flow-row-dense grid-cols-7 gap-8">
                <div className="col-span-3">
                    <Label text="Postcode" variant="quaternary" />
                    <InputTextForm
                        label="postcode"
                        placeholder="Enter your Street name"
                        onValidate={validateAddress}
                    />
                </div>

                <div className="col-span-4">
                    <Label text="Select shipping" variant="quaternary" />
                    <CustomSelect
                        options={[
                            { label: 'Free delivery', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                        ]}
                        defaultOption="1"
                    />
                </div>
            </div>

            <br />

            <hr className="border-t-1 border-gray-300" />
            <br />

            <div className="flex justify-end">
                <Button label="Cancel Order" variant="secondary" onClick={onCancelOrder} />
                <Button
                    label="Payment"
                    variant="primary"
                    onClick={onChangeView}
                />
            </div>
        </div>
    );


    const PaymentForm: React.FC<{ onChangeView: () => void }> = ({ onChangeView }) => (
        <div>
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
                        { label: 'Opção 2', value: '2' },
                        { label: 'Opção 3', value: '3' },
                    ]}
                    defaultOption="1"
                />
            </div>

            <br />
            <Label text="Name on card" variant="quaternary" />
            <InputTextForm
                label="nameOnCard"
                placeholder="Enter Name on Card"
                onValidate={validateAddress}
            />

            <br />
            <Label text="Card number" variant="quaternary" />
            <InputTextForm
                label="cardNumber"
                placeholder="Enter Card number"
                onValidate={validateAddress}
            />

            <br />

            <div className="grid grid-flow-row-dense grid-cols-7 gap-8">
                <div className="col-span-3">
                    <Label text="Expiration" variant="quaternary" />
                    <div className="flex flex-row items-center text-center justify-center gap-2">
                        <InputTextForm
                            label="expirationMM"
                            placeholder="MM"
                            onValidate={validateAddress}
                        />
                        <div className="flex">
                            <ExpirationSvg />
                        </div>

                        <InputTextForm
                            label="expirationYY"
                            placeholder="YY"
                            onValidate={validateAddress}
                        />
                    </div>

                </div>

                <div className="col-span-4">
                    <Label text="CVC" variant="quaternary" />
                    <InputTextForm
                        label="cvc"
                        placeholder="123"
                        onValidate={validateAddress}
                    />
                </div>
            </div>

            <br />

            <hr className="border-t-1 border-gray-300" />
            <br />

            <div className="flex justify-end">
                <Button
                    label="Cancel Order"
                    variant="secondary"
                    onClick={onCancelOrder}
                />
                <Button
                    label="Complete order"
                    variant="primary"
                    onClick={onCompleteOrder}
                />
            </div>
        </div>
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


