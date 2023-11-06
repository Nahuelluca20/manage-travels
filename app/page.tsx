import Link from "next/link";
import {ArrowRightIcon} from "@radix-ui/react-icons";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full">
      <Link href={"/help"}>
        <Button
          className="py-6 w-full sm:w-fit rounded-[1000px] dark:text-gray-200 text-zeppelinGray-100 font-semibold gap-2"
          variant={"outline"}
        >
          <Badge className="dark:bg-white dark:text-black bg-neutral-900 hover:bg-neutral-900">
            Badge
          </Badge>
          <span className="flex items-center gap-1">
            Guía de cómo utilizar Zeppelin
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </Button>
      </Link>
      <h1 className="dark:text-white text-neutral-900 mt-5 md:mt-16 font-bold text-[34px] md:text-[50px] leading-[40px] lg:text-[80px] lg:leading-[80px]">
        Administra los viajes <br />y los paquetes que vendes.
      </h1>
      <Button className="w-[200px] lg:mt-16 mt-10 bg-zeppelinOrange-500 h-[52px]">
        <span className="text-xl">Comenzar gratis</span>
      </Button>
    </main>
  );
}
