import {currentUser} from "@clerk/nextjs";

import {Input} from "../ui/input";
import {Label} from "../ui/label";
import {Textarea} from "../ui/textarea";

export default async function AddHotelForm() {
  const user = await currentUser();

  return (
    <div className="grid gap-4 lg:grid-cols-2 px-1 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right" htmlFor="name">
          Nombre
        </Label>
        <Input className="col-span-3" id="name" placeholder="Hotel California" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right" htmlFor="province">
          Provincia
        </Label>
        <Input className="col-span-3" id="province" placeholder="Córdoba" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right" htmlFor="hotel-url">
          Hotel URL
        </Label>
        <Input className="col-span-3" id="hotel-url" placeholder="https://www.example.com" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right" htmlFor="stars">
          Estrellas
        </Label>
        <Input className="col-span-3" id="stars" placeholder="https://www.example.com" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right" htmlFor="stars">
          Estrellas
        </Label>
        <Input className="col-span-3" id="stars" placeholder="https://www.example.com" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4">
        <Label className="text-left sm:text-right" htmlFor="description">
          Descripción
        </Label>
        <Textarea
          className="col-span-3"
          id="description"
          placeholder="Agrega una descripción del hotel"
        />
      </div>
      <Input defaultValue={user?.id} id="user-id" type="hidden" />
    </div>
  );
}
