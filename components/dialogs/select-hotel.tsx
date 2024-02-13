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
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";

const tags = Array.from({length: 50}).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export function SelectHotel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="max-w-[200px]" variant="outline">
          Seleccionar hotel
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[90%] sm:w-full rounded-md">
        <DialogHeader>
          <DialogTitle>Seleccionar hotel</DialogTitle>
          <DialogDescription>
            Seleccione el hotel que quiere asociar a su paquete de viaje.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72 w-full rounded-md border" type="always">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Hoteles</h4>
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
        <Accordion collapsible type="single">
          <AccordionItem value="item-1">
            <Button asChild variant="link">
              <AccordionTrigger>Agrega un Hotel</AccordionTrigger>
            </Button>
            <AccordionContent>
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
