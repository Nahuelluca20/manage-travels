import {headers} from "next/headers";

import {rateLimit} from "@/lib/safe-action";

export async function handleRateLimit() {
  const ip = headers().get("x-forwarded-for");
  const {remaining, limit, success} = await rateLimit.limit(ip!);

  if (!success) {
    return {error: "Rate limit reached"};
  }

  return {remaining, limit};
}
