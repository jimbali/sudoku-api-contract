import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { PuzzleSchema } from '../zod/puzzle.schema';

const c = initContract();

export const puzzlesContract = c.router({
  getPuzzles: {
    method: 'GET',
    path: '/puzzles',
    responses: {
      200: z.array(PuzzleSchema),
      404: z.object({ error: z.string() }),
      500: z.object({ error: z.string() }),
    },
  },
  getPuzzle: {
    method: 'GET',
    path: '/puzzles/:id',
    responses: {
      200: PuzzleSchema,
      404: z.object({ error: z.string() }),
    },
  },
  createPuzzle: {
    method: 'POST',
    path: '/puzzles',
    body: PuzzleSchema,
    responses: {
      201: PuzzleSchema,
      500: z.object({ error: z.string() }),
    },
  },
  updatePuzzle: {
    method: 'PUT',
    path: '/puzzles/:id',
    body: PuzzleSchema,
    responses: {
      200: PuzzleSchema,
      404: z.object({ error: z.string() }),
      500: z.object({ error: z.string() }),
    },
  },
  deletePuzzle: {
    method: 'DELETE',
    path: `/puzzles/:id`,
    body: null,
    responses: {
      200: z.null(),
      404: z.string(),
    },
  },
}); 