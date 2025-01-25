import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { SolveAttemptResult } from '../zod/solveAttempt.schema';
import { SolveAttemptInput } from '../zod/solveAttempt.schema';

const c = initContract();

export const solveAttemptsContract = c.router({
  registerSolveAttempt: {
    method: 'POST',
    path: '/solve-attempts',
    body: SolveAttemptInput,
    responses: {
      201: SolveAttemptResult,
      404: z.object({ error: z.string() }),
      500: z.object({ error: z.string() }),
    },
  },
});