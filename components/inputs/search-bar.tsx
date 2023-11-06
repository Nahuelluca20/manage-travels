import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div>
      <div className="flex justify-center w-full items-center space-x-5">
        <Input
          className="border-[2px] border-secondary-foreground w-full max-w-[600px] focus:outline-none focus-visible:ring-0 focus-visible:ring-transparent	"
          placeholder="Buscar viaje"
          type="text"
        />
        <Button className="h-full" type="submit">
          Buscar
        </Button>
      </div>
    </div>
  );
}
