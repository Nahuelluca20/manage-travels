import {currentUser} from "@clerk/nextjs";

import {postHotel} from "@/app/app/add/queries";

import {Input} from "../ui/input";
import {Label} from "../ui/label";
import {Textarea} from "../ui/textarea";
import {Button} from "../ui/button";

interface Field {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

const fields: Field[] = [
  {id: "name", label: "Nombre", type: "text", placeholder: "Hotel California"},
  {id: "province", label: "Provincia", type: "text", placeholder: "Córdoba"},
  {id: "hotelUrl", label: "Hotel URL", type: "text", placeholder: "https://www.example.com"},
  {id: "stars", label: "Estrellas", type: "number", placeholder: "5"},
];

export default async function AddHotelForm() {
  const user = await currentUser();

  return (
    <form action={postHotel}>
      <div className="grid gap-4 md:grid-cols-2 px-1 py-4">
        {fields.map((field: Field) => (
          <div key={field.id} className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor={field.id}>
              {field.label}
            </Label>
            <Input
              className="col-span-3"
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              type={field.type}
            />
          </div>
        ))}
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4">
          <Label className="text-left sm:text-right" htmlFor="description">
            Descripción
          </Label>
          <Textarea
            className="col-span-3"
            id="description"
            name="description"
            placeholder="Agrega una descripción del hotel"
          />
        </div>
        <Input defaultValue={user?.id} id="userId" name="userId" type="hidden" />
      </div>
      <div className="flex justify-center w-full mx-auto max-w-[200px]">
        <Button type="submit" variant={"secondary"}>
          Agregar Hotel
        </Button>
      </div>
    </form>
  );
}
