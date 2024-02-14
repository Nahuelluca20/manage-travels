import {z} from "zod";
import {zfd} from "zod-form-data";

export const getHotelsSchema = z.object({
  userId: z.string().optional(),
  province: z.string(),
});

export const postHotelSchema = zfd.formData({
  name: zfd.text(z.string()),
  description: zfd.text(z.string().max(256)),
  province: zfd.text(z.string()),
  userId: zfd.text(z.string()),
  stars: zfd.numeric(z.number().int().min(1).max(5)),
  hotelUrl: zfd.text(z.string().url()),
});
