import { router } from "../trpc";
import { itemsRouter } from "./example";

export const appRouter = router({
  items: itemsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
