import {Input} from "../ui/input";
import {Label} from "../ui/label";

export default function AddHotelForm() {
  return (
    <div className="grid gap-4 px-1 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right" htmlFor="name">
          Name
        </Label>
        <Input className="col-span-3" defaultValue="Pedro Duarte" id="name" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right" htmlFor="username">
          Username
        </Label>
        <Input className="col-span-3" defaultValue="@peduarte" id="username" />
      </div>
    </div>
  );
}
