'use client'

import OrderSummary from "@/components/molecules/OrderSummary";
import ShippingPaymentForm from "@/components/molecules/ShippingPaymentForm";

export default function Home() {


  


  return (
    <>

      <div className="bg-white min-h-screen p-20">

        <div className="grid grid-flow-row-dense grid-cols-7  gap-8 ">

          <div className="col-span-4 bg-[#f6fafd] px-20 py-10 rounded-lg">

            <ShippingPaymentForm />



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
