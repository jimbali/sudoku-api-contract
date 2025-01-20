import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().nullable().optional(),
  displayName: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
