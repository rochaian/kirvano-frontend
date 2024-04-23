'use client'

import OrderSummary from "@/components/molecules/OrderSummary";
import ShippingPaymentForm from "@/components/molecules/ShippingPaymentForm";

export default function Home() {


  


  return (
    <>


<div className="bg-white min-h-screen p-5 md:p-10 lg:p-20">

  <div className="grid grid-flow-row-dense gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">

    {/* O formulário de envio e pagamento ocupa 100% no mobile, 50% no tablet, e 4 colunas no desktop */}
    <div className="bg-[#f6fafd] p-5 md:p-10 lg:px-20 lg:py-10 rounded-lg lg:col-span-4 col-span-1 md:col-span-1">

      <ShippingPaymentForm />

    </div>

    {/* O resumo do pedido ocupa 100% no mobile, 50% no tablet, e 3 colunas no desktop */}
    <div className="bg-[#f6fafd] p-5 md:p-10 lg:p-10 rounded-lg lg:col-span-3 col-span-1 md:col-span-1">

      <OrderSummary />

    </div>

  </div>

</div>
{/* 
      <div className="bg-white min-h-screen p-20">

        <div className="grid grid-flow-row-dense grid-cols-7  gap-8 ">

          <div className="col-span-4 bg-[#f6fafd] px-20 py-10 rounded-lg">

            <ShippingPaymentForm />



          </div>


          <div className="col-span-3 bg-[#f6fafd] p-10 rounded-lg	">

            <OrderSummary />

          </div>

        </div>
      </div> */}




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
