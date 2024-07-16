import { Avatar, AvatarFallback, AvatarImage } from "@/components";

export default function AvatarPage() {
  return (
    <div  className="h-[500px] flex justify-center items-center">
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="m-2">@carlosDiaz</p>
    </div>
  )
}