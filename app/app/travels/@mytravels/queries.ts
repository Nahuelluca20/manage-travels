"use server";

import {z} from "zod";

import {prisma} from "@/lib/prisma";
import {action} from "@/lib/safe-action";
import {handleRateLimit} from "@/utils/handleRateLimit";

const getTravelsIdsSchema = z.object({
  userId: z.string().optional(),
  title: z.string(),
});

export const getTravelsIds = action(getTravelsIdsSchema, async ({userId, title}) => {
  if (userId) {
    try {
      const rateLimitResult = await handleRateLimit();

      if (rateLimitResult.error) {
        return rateLimitResult;
      }

      console.log(rateLimitResult.limit, rateLimitResult.remaining);

      const travelsIds = await prisma.post_travels.findMany({
        where: {
          user: {
            external_id: userId,
          },
          title: {
            contains: title,
            mode: "insensitive",
          },
        },
        select: {
          id: true,
        },
      });

      return {success: travelsIds};
    } catch (err) {
      return {error: err};
    }
  }
});

const getTravelInfoByIdSchema = z.object({
  id: z.string().optional(),
});

export const getTravelInfoById = action(getTravelInfoByIdSchema, async ({id}) => {
  if (id) {
    try {
      const travelInfo = await prisma.post_travels.findMany({
        where: {
          id: id,
        },
        select: {
          title: true,
          country: true,
          city: true,
          image: true,
        },
      });

      return {success: travelInfo};
    } catch (err) {
      return {error: err};
    }
  }
});
