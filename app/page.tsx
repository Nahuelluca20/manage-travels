import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="font-bold text-[34px] md:text-[50px] leading-[40px] lg:text-[80px] lg:leading-[80px]">
        Administra los viajes <br />y los paquetes que vendes.
      </h1>
      <Button className="w-[200px] lg:mt-16 mt-10 bg-orange-500 h-[52px]">
        <span className="text-xl">Comenzar gratis</span>
      </Button>
    </main>
  );
}
