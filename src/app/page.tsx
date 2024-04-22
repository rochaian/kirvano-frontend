import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";

export default function Home() {
  return (
    
    <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">

    <Button label="Payment" variant="primary"></Button>
      
    <Button label="Cancel Order" variant="secondary"></Button>

    <Label text="Shipping Details" variant="primary" />
    <Label text="Use saved address" variant="secondary" />
    <Label text="First line of address" variant="tertiary" />
    <Label text="123 , Electric avenue" variant="quaternary" />
    
    </main>
  );
}
