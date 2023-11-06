import Link from "next/link";

import {Badge} from "@/components/ui/badge";
import {Button, buttonVariants} from "@/components/ui/button";

// py-6 rounded-full text-zeppelinGray-100 font-semibold gap-2
export default function Home() {
  return (
    <main className="w-full">
      <Link
        className={`${buttonVariants({
          variant: "outline",
        })} py-6 rounded-[999px] text-zeppelinGray-100 font-semibold gap-2`}
        href={"/help"}
      >
        <Badge className="bg-neutral-900 hover:bg-neutral-900">Badge</Badge>
        Guía de como utilizar Zeppelin
      </Link>
      <h1 className="text-neutral-900 mt-16 font-bold text-[34px] md:text-[50px] leading-[40px] lg:text-[80px] lg:leading-[80px]">
        Administra los viajes <br />y los paquetes que vendes.
      </h1>
      <Button className="w-[200px] lg:mt-16 mt-10 bg-orange-500 h-[52px]">
        <span className="text-xl">Comenzar gratis</span>
      </Button>
    </main>
  );
}
