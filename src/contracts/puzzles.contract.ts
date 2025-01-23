import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { PuzzleResult, PuzzleSchema } from '../zod/puzzle.schema';

const c = initContract();

const PuzzleOrderBy = z.object({
  givens: z.enum(['asc', 'desc']).optional(),
  createdAt: z.enum(['asc', 'desc']).optional(),
  updatedAt: z.enum(['asc', 'desc']).optional(),
})

const PuzzleWhereClause = z.object({
  creatorId: z.string().optional(),
  calculatedDifficulty: z.object({
    in: z.array(z.enum(['Easy', 'Medium', 'Hard']))
  }).optional(),
}).optional()

export const puzzlesContract = c.router({
  getPuzzles: {
    method: 'GET',
    path: '/puzzles',
    query: z.object({
      take: z.string().transform(Number).optional(),
      skip: z.string().transform(Number).optional(),
      where: PuzzleWhereClause,
      orderBy: z.union([
        PuzzleOrderBy,
        z.array(PuzzleOrderBy),
      ]).optional(),
    }),
    responses: {
      200: z.array(PuzzleResult),
      500: z.object({ error: z.string() }),
    },
  },
  getPuzzle: {
    method: 'GET',
    path: '/puzzles/:id',
    responses: {
      200: PuzzleResult,
      404: z.object({ error: z.string() }),
      500: z.object({ error: z.string() }),
    },
  },
  getRandomPuzzle: {
    method: 'GET',
    path: '/puzzles/random',
    query: z.object({
      where: PuzzleWhereClause,
    }),
    responses: {
      200: PuzzleResult,
      404: z.object({ error: z.string() }),
      500: z.object({ error: z.string() }),
    },
  },
  createPuzzle: {
    method: 'POST',
    path: '/puzzles',
    body: PuzzleSchema.omit({ createdAt: true, updatedAt: true }),
    responses: {
      201: PuzzleResult,
      500: z.object({ error: z.string() }),
    },
  },
  updatePuzzle: {
    method: 'PUT',
    path: '/puzzles/:id',
    body: PuzzleSchema.omit({ createdAt: true, updatedAt: true }),
    responses: {
      200: PuzzleResult,
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