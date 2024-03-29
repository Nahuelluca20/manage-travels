import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {SelectHotel} from "@/components/dialogs/select-hotel";

export default function page() {
  return (
    <div className="w-full pb-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2 lg:space-y-5">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Sube tu paquete de viaje
              </h1>
              <p className="text-gray-500 dark:text-gray-400">Agrega la información del viaje.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del paquete</Label>
              <Input required id="hotel" placeholder="Cataratas soñadas" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Ciudad</Label>
              <Input required id="city" placeholder="Mendoza" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Localidad</Label>
              <Input required id="location" placeholder="Las Heras" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">País</Label>
              <Input required id="country" placeholder="Argentina" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Imagen URL</Label>
              <Input required id="image" placeholder="URL https://www.example.com" />
            </div>

            <div className="grid space-y-2">
              <Label htmlFor="hotel">Selecciona un hotel</Label>
              <SelectHotel />
              {/* <Input required id="hotel" placeholder="URL https://www.example.com" /> */}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea required id="description" placeholder="Enter the description" />
            </div>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
