import {serverClient} from "@/app/_trpc/server-client";

import {Card, CardDescription, CardHeader, CardTitle} from "../ui/card";

export default async function TravelCard({travelId}: {travelId: string}) {
  const travelInfo = travelId && (await serverClient.getTravelInfoById(travelId));

  if (!travelInfo) {
    throw travelInfo;
  }

  return (
    <Card className="w-full max-w-[300px]">
      <CardHeader>
        <CardTitle>{travelInfo[0].title}</CardTitle>
        <CardDescription>
          {travelInfo[0].city}, {travelInfo[0].country}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
