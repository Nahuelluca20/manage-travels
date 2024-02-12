import {createSafeActionClient} from "next-safe-action";
import {Ratelimit} from "@upstash/ratelimit";

import {redis} from "@/server/upstash";

export const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "120s"),
});

export const action = createSafeActionClient();
