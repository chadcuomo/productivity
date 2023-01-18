import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { taskRouter } from "./routers/tasks";
import { noteRouter } from "./routers/notes";
import { tagRouter } from "./routers/tags";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  task: taskRouter,
  note: noteRouter,
  tag: tagRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
