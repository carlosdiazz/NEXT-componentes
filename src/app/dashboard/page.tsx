import { RouterApp } from "@/config";
import { redirect } from "next/navigation";

export default function DashBoardPage() {
  redirect(`${RouterApp.dashboard}/home`)
}