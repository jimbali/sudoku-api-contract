import { z } from "zod";
import { UserSchema } from "./user.schema";
import { PuzzleSchema } from "./puzzle.schema";

export const SolveAttemptSchema = z.object({
  id: z.string(),
  puzzle: PuzzleSchema,
  puzzleId: z.string(),
  user: UserSchema,
  userId: z.string(),
  timeTakenSeconds: z.number(),
  mistakes: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const SolveAttemptStats = z.object({
  averageMistakes: z.number().nullable().optional(),
  averageTimeTaken: z.number().nullable().optional(),
  solveAttemptCount: z.number().nullable().optional(),
  timePercentile: z.number().nullable().optional(),
})

export const SolveAttemptInput =
  SolveAttemptSchema.pick({ puzzleId: true, timeTakenSeconds: true, mistakes: true })

export const SolveAttemptResult = z.object({
  solveAttempt: SolveAttemptSchema.partial().required({ id: true }),
  stats: SolveAttemptStats,
});
