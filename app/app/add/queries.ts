"use server";

import {action} from "@/lib/safe-action";
import {handleRateLimit} from "@/utils/handleRateLimit";
import {prisma} from "@/lib/prisma";

import {getHotelsSchema, postHotelSchema} from "./queries-schemas";

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

export const postHotel = action(
  postHotelSchema,
  async ({name, description, province, userId, stars, hotelUrl}) => {
    const someFormData = new FormData();
    const dataObject = postHotelSchema.parse(someFormData);

    try {
      const rateLimitResult = await handleRateLimit();

      if (rateLimitResult.error) {
        return rateLimitResult;
      }

      const hotel = await prisma.hotels.create({
        data: {
          name,
          description,
          province,
          stars,
          hotel_url: hotelUrl,
          user: {
            connect: {
              external_id: userId,
            },
          },
        },
      });

      return {success: hotel};
    } catch (err) {
      return {error: err};
    }
  },
);
