import Label from "@/app/components/atoms/Label";
import NumberPicker from "@/app/components/molecules/NumberPicker";

import Image from 'next/image'
import GiftCard from "./GiftCard";

export default function OrderSummary() {


  return (
    <>
      <Label text="Order Summary" variant="primary" />
      <Image
        className="py-4"
        src="/phone-product.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} // optional
        priority={true}
        alt="Sony wireless headphones"
      />

      <div className="flex flex-row justify-between">
        <Label text="Sony wireless headphones" variant="primary" />
        <NumberPicker initialValue={1} min={1} max={10}></NumberPicker>
      </div>

      <Label text="£320.45" variant="bold" />
      

      <GiftCard/>

      <div className="flex flex-row justify-between">
        <Label text="Sub total" variant="secondary" />
        <Label text="£316.55" variant="price" />
      </div>

      <div className="flex flex-row justify-between">
        <Label text="Tax" variant="secondary" />
        <Label text="£3.45" variant="price" />
      </div>

      <div className="flex flex-row justify-between">
        <Label text="Shipping" variant="secondary" />
        <Label text="Free" variant="green" />
      </div>

      <div className="flex flex-row justify-between">
        <Label text="Total" variant="bold" />
        <Label text="£320.45" variant="price" />
      </div>


    </>



  );
}
