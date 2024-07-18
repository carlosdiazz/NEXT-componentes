import { RouterApp } from "@/config";
import { redirect } from "next/navigation";

export default function Home() {

  redirect(`${RouterApp.dashboard}`)

  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
}
