"use server";

import {z} from "zod";
import {zfd} from "zod-form-data";

import {action} from "@/lib/safe-action";
import {handleRateLimit} from "@/utils/handleRateLimit";
import {prisma} from "@/lib/prisma";

const schema = zfd.formData({
  email: zfd.text(z.string().email()),
  password: zfd.text(z.string().min(8)),
});

const getHotelsSchema = z.object({
  userId: z.string().optional(),
  province: z.string(),
});

export const getHotels = action(getHotelsSchema, async ({userId, province}) => {
  if (userId) {
    try {
      const rateLimitResult = await handleRateLimit();

      if (rateLimitResult.error) {
        return rateLimitResult;
      }

      const hotels = await prisma.hotels.findMany({
        where: {
          user: {
            external_id: userId,
          },
          province: {
            contains: province,
            mode: "insensitive",
          },
        },
        select: {
          id: true,
          name: true,
        },
      });

      return {success: hotels};
    } catch (err) {
      return {error: err};
    }
  }
});
