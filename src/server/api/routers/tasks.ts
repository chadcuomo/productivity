import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const taskRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.task.findMany({
        select: {
          name: true,
          id: true,
          createdAt: true,
          date: true,
          note: true,
          tag: true,
          tagColor: true,
          complete: true,
          assigned: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log("error", error)
    }
  }),
  createTask: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        note: z.string(),
        tag: z.string(),
        tagColor: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.task.create({
          data: {
            name: input.name,
            note: input.note,
            tag: input.tag,
            tagColor: input.tagColor
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
