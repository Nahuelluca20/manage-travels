import {Card, CardDescription, CardHeader, CardTitle} from "../ui/card";
import {Skeleton} from "../ui/skeleton";

export default function CardTravelSkeleton() {
  return (
    <Card className="w-full max-w-[300px]">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-[24px] w-[200px] rounded-md" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-[20px] w-[100px] rounded-md" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
