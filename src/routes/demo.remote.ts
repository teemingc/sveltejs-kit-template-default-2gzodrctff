import { form } from '$app/server';
import * as z from 'zod';

export const demo = form(
  z.object({
    name: z.object({
      first: z.string(),
      last: z.string(),
    }),
  }),
  ({ name }) => {
    console.log(name);
  }
);
