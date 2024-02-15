import {currentUser} from "@clerk/nextjs";

import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import {getHotels} from "@/app/app/add/queries";

import AddHotelForm from "../forms/add-hotel";

export async function SelectHotel() {
  const {data} = await getHotels({userId: "user_2cKXU9HgDRr1HapXnQiykmOYrUG", province: "MenDozA"});

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="max-w-[200px]" variant="outline">
          Seleccionar hotel
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px] w-[90%] lg:w-full rounded-md overflow-y-auto  max-h-[95%]">
        <DialogHeader>
          <DialogTitle>Seleccionar hotel</DialogTitle>
          <DialogDescription>
            Seleccione el hotel que quiere asociar a su paquete de viaje.
          </DialogDescription>
        </DialogHeader>
        {data?.success && data?.success?.length <= 0 ? (
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">No hay hoteles disponibles</h3>
            <h4 className="text-muted-foreground font-medium">
              Agregue hoteles para poder seleccionar
            </h4>
          </div>
        ) : (
          <ScrollArea className="h-64 w-full rounded-md border" type="always">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Hoteles</h4>
              {data?.success?.map((tag) => (
                <>
                  <div key={tag.id} className="text-sm">
                    {tag.name}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
        )}

        <Accordion collapsible type="single">
          <AccordionItem value="item-1">
            <Button asChild variant="link">
              <AccordionTrigger>Agrega un Hotel</AccordionTrigger>
            </Button>
            <AccordionContent>
              <AddHotelForm />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
