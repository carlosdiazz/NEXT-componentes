import { Badge } from "@/components";

export default function BadgePage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge>Default</Badge>
      <Badge variant={"destructive"}>destructive</Badge>
      <Badge variant={"outline"}>outline</Badge>
      <Badge variant={"secondary"}>secondary</Badge>
      <Badge variant={"info"}>info</Badge>
      <Badge variant={"success"} capitalize={true}>success</Badge>
    </div>
  )
}