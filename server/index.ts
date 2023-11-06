import {z} from "zod";

import {prisma} from "@/lib/prisma";

import {publicProcedure, router} from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),

  addTodo: publicProcedure.input(z.string()).query(async (opts) => {
    const {input} = opts;

    return `esto es el input ${input}`;
  }),

  getTravelInfoById: publicProcedure.input(z.string()).query(async (opts) => {
    return prisma.post_travels.findMany({
      where: {
        id: opts.input,
      },
      select: {
        title: true,
        country: true,
        city: true,
        image: true,
      },
    });
  }),

  getTravelsIds: publicProcedure.input(z.string()).query(async (opts) => {
    return prisma.post_travels.findMany({
      where: {
        user: {
          external_id: opts.input,
        },
      },
      select: {
        id: true,
      },
    });
  }),

  getTravels: publicProcedure.input(z.string()).query(async (opts) => {
    return prisma.post_travels.findMany({
      where: {
        user: {
          external_id: opts.input,
        },
      },
    });
  }),
});

export type AppRouter = typeof appRouter;
