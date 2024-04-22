'use client'
import Label from "@/components/atoms/Label";
import OrderSummary from "@/components/molecules/OrderSummary";
import LineSvg from '../../public/line.svg';
import CheckSvg from '../../public/check.svg';
import CustomSelect from "@/components/atoms/CustomSelect";
import ValidatedInput from "@/components/atoms/ValidateInput";
import Button from "@/components/atoms/Button";

export default function Home() {


  // Função para validar email
  const validateAddress = (address: string): boolean => {

    const addressRegex = /^.{5,}$/; // Simples regex para verificar se o campo possui mais de 5 caracteres
    return addressRegex.test(address);
  };


  return (
    <>

      <div className="bg-white min-h-screen p-20">

        <div className="grid grid-flow-row-dense grid-cols-7  gap-8 ">

          <div className="col-span-4 bg-[#f6fafd] px-20 py-10 rounded-lg">

            <div className="flex flex-row items-center text-center justify-center gap-2">
              <span className="text-[#3182CE] text-[20px] font-medium">Shipping</span>
              <LineSvg />
              <CheckSvg />
              <LineSvg />
              <span className="text-[#828282] text-[20px] font-medium">Payment</span>
            </div>
            <br></br>

            <Label text="Shipping Details" variant="primary" />
            <br></br>
            <br></br>

            <div className="flex flex-row justify-between items-center">

              <Label text="Use saved address" variant="tertiary" />
              <CustomSelect options={[
                { label: '123 , Electric avenue', value: '1' },
                { label: 'Opção 2', value: '2' },
                { label: 'Opção 3', value: '3' },
              ]} defaultOption="1" />
            </div>

            <br></br>
            <Label text="First line of address" variant="quaternary" />
            <ValidatedInput
              placeholder="Enter your Address"
              onValidate={validateAddress}
            />

            <br></br>
            <Label text="Street name" variant="quaternary" />
            <ValidatedInput
              placeholder="Enter your Street name"
              onValidate={validateAddress}
            />
            <br></br>
            <div className="grid grid-flow-row-dense grid-cols-7  gap-8 ">
              <div className="col-span-3">
                <Label text="Postcode" variant="quaternary" />
                <ValidatedInput
                  placeholder="Enter your Street name"
                  onValidate={validateAddress}
                />
              </div>

              <div className="col-span-4">
                <Label text="Select shipping" variant="quaternary" />
                <CustomSelect options={[
                  { label: 'Free delivery', value: '1' },
                  { label: 'Opção 2', value: '2' },
                  { label: 'Opção 3', value: '3' },
                ]} defaultOption="1" />
              </div>

            </div>
            <br></br>

            <hr className="border-t-1 border-gray-300"></hr>
            <br></br>

            <div className="flex justify-end">
              <Button label="Cancel Order" variant="secondary"></Button>

              <Button label="Payment" variant="primary"></Button>
            </div>



          </div>


          <div className="col-span-3 bg-[#f6fafd] p-10 rounded-lg	">

            <OrderSummary />

          </div>

        </div>
      </div>




      {/* <MyForm></MyForm>

    <div className="flex min-h-screen bg-white flex-col items-center justify-between p-24">

    <Button label="Payment" variant="primary"></Button>
      
    <Button label="Cancel Order" variant="secondary"></Button>

    <Label text="Shipping Details" variant="primary" />
    <Label text="Use saved address" variant="secondary" />
    <Label text="First line of address" variant="tertiary" />
    <Label text="123 , Electric avenue" variant="quaternary" />

    </div> */}
    </>
  );
}
