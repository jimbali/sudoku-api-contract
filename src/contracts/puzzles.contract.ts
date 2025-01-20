import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { PuzzleSchema } from '../zod/puzzle.schema';

const c = initContract();

const PuzzleOrderBy = z.object({
  givens: z.enum(['asc', 'desc']),
  createdAt: z.enum(['asc', 'desc']),
  updatedAt: z.enum(['asc', 'desc']),
})

export const puzzlesContract = c.router({
  getPuzzles: {
    method: 'GET',
    path: '/puzzles',
    query: z.object({
      take: z.string().transform(Number).optional(),
      skip: z.string().transform(Number).optional(),
      where: z.object({
        creatorId: z.string().optional(),
        calculatedDifficulty: z.object({
          in: z.array(z.enum(['Easy', 'Medium', 'Hard']))
        }).optional(),
      }).optional(),
      orderBy: z.union([
        PuzzleOrderBy,
        z.array(PuzzleOrderBy),
      ]).optional(),
    }),
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
    body: PuzzleSchema.omit({ createdAt: true, updatedAt: true }),
    responses: {
      201: PuzzleSchema,
      500: z.object({ error: z.string() }),
    },
  },
  updatePuzzle: {
    method: 'PUT',
    path: '/puzzles/:id',
    body: PuzzleSchema.omit({ createdAt: true, updatedAt: true }),
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