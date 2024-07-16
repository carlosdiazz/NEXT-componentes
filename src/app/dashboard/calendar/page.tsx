"use client";
import { Calendar } from "@/components";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, SetMultipleDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES",{
    weekday: "long",
    day: 'numeric',
    month:"long"
  })

  return (
    <div className="flex-col gap-4 sm:flex-row sm:flex sm:flex-wrap">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date)=>date.getDay() === 0 ||  date.getDay() === 6 }
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date)=>date>new Date() }
      />

      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={SetMultipleDates}
        className="rounded-md border shadow"
      />

      <div>
        <h1 className="text-3xl">Informacion</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{ multipleDates?.map((date)=> date.toLocaleDateString()).join(", ")}</p>
    </div>

    </div>
  );
}
