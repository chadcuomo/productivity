import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const noteRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.note.findMany({
        select: {
          name: true,
          id: true,
          createdAt: true,
          note: true,
          tag: true,
          tagColor: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log("error", error)
    }
  }),
  createNote: protectedProcedure
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
        await ctx.prisma.note.create({
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
    deleteNote: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.note.delete({
          where: {
            id: input.id
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});