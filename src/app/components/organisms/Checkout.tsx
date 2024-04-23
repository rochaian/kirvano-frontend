'use client'

import OrderSummary from "@/app/components/molecules/OrderSummary";
import ShippingPaymentForm from "@/app/components/molecules/ShippingPaymentForm";

export default function Checkout() {

    return (
        <>

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


        </>
    );
}
