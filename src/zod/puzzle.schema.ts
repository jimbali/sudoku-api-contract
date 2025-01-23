import { z } from "zod";
import { TallySchema } from "./tally.schema";
import { UserSchema } from "./user.schema";

export const PuzzleSchema = z.object({
  id: z.string().nullable().optional(),
  gridString: z.string().nullable().optional(),
  solutionString: z.string().nullable().optional(),
  solved: z.boolean().default(false),
  tally: TallySchema.nullable().optional(),
  intendedDifficulty: z.number().nullable().optional(),
  givens: z.number().nullable().optional(),
  calculatedDifficulty: z.string().nullable().optional(),
  creator: UserSchema.nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const PuzzleResult =
  PuzzleSchema
    .omit({ creator: true })
    .extend({
      creator: UserSchema.pick({ id: true, displayName: true })
    })
