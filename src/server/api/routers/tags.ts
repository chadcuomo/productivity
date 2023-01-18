import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const tagRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.tag.findMany({
        select: {
          name: true,
          color: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log("error", error)
    }
  }),
  createTag: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        color: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.tag.create({
          data: {
            name: input.name,
            color: input.color
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});