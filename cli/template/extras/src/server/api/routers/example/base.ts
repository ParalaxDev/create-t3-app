import { z } from "zod";

import { createTrpcRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTrpcRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});