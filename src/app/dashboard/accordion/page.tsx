import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";

const items = [
  {
    id: "item-1",
    question: "Primera pregunta",
    answer: "La respuesta de la primera pregunta",
  },
  {
    id: "item-2",
    question: "Segunda pregunta",
    answer: "La respuesta de la segunda pregunta",
  },
  {
    id: "item-3",
    question: "Tercera pregunta",
    answer: "La respuesta de la tercera pregunta",
  },
  {
    id: "item-4",
    question: "Cuarta pregunta",
    answer: "La respuesta de la cuarta pregunta",
  },
];

export default function AccordionPage() {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
