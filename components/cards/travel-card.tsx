import {getTravelInfoById} from "@/app/app/travels/@mytravels/queries";

import {Card, CardDescription, CardHeader, CardTitle} from "../ui/card";

export default async function TravelCard({travelId}: {travelId: string}) {
  const {data: travelInfo} = await getTravelInfoById({id: travelId});

  if (!travelInfo?.success) {
    throw travelInfo;
  }

  return (
    <Card className="w-full max-w-[300px]">
      <CardHeader>
        <CardTitle>{travelInfo.success[0].title}</CardTitle>
        <CardDescription>
          {travelInfo.success[0].city}, {travelInfo.success[0].country}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
