import type {User} from "@clerk/nextjs/api";

import {currentUser} from "@clerk/nextjs";
import {Suspense} from "react";

import TravelCard from "@/components/cards/travel-card";

import {serverClient} from "../../_trpc/server-client";

import Loading from "./loading";

export default async function page() {
  const user: User | null = await currentUser();
  const travelsIds = user?.id && (await serverClient.getTravelsIds(user?.id));

  return (
    <main>
      <div className="flex flex-wrap max-w-[1024px] gap-4 mt-10">
        {travelsIds &&
          travelsIds.map((travel) => (
            <Suspense key={travel.id} fallback={<Loading />}>
              <TravelCard travelId={travel.id} />
            </Suspense>
          ))}
      </div>
    </main>
  );
}
