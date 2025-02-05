"use client"
import { Button } from "@/components";
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Button>Default</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"success"} capitalize={true}>success</Button>
      <Button disabled>disable</Button>
      <Button onClick={() => console.log("Hola mnundo")}>Click me</Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
    </div>
  );
}
