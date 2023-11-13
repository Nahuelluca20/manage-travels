import type {User} from "@clerk/nextjs/api";

import {currentUser} from "@clerk/nextjs";
import {Suspense} from "react";
import Link from "next/link";

import TravelCard from "@/components/cards/travel-card";
import CardTravelSkeleton from "@/components/cards/card-travel-skeleton";
import {Button} from "@/components/ui/button";
import {serverClient} from "@/app/_trpc/server-client";

export default async function page({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  const user: User | null = await currentUser();
  const travelsIds =
    user?.id &&
    (await serverClient.getTravelsIds({
      userId: user?.id,
      title: (searchParams.search as string) ?? "",
    }));

  if (travelsIds && travelsIds?.length <= 0) {
    return (
      <div className="flex text-center justify-center max-w-[730px] gap-4 mt-20">
        <div className="grid gap-y-5">
          <h3 className="dark:text-gray-500 text-zeppelinGray-100 text-4xl font-semibold">
            No tienes viajes o paquetes disponibles
          </h3>
          <Link href={"/add"}>
            <Button className="max-w-[130px] h-[40px] text-md bg-zeppelinOrange-500">
              Agregar viaje
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="grid md:grid-cols-3 max-w-[1024px] gap-4 mt-10">
        {travelsIds &&
          travelsIds.map((travel) => (
            <Suspense key={travel.id} fallback={<CardTravelSkeleton />}>
              <Link href={`/travels/${travel.id}`} target="_blank">
                <TravelCard travelId={travel.id} />
              </Link>
            </Suspense>
          ))}
      </div>
    </main>
  );
}
