import { z } from "zod";

export const TallySchema = z.object({
  fullHouse: z.number().nullable().optional(),
  lastDigit: z.number().nullable().optional(),
  nakedSingle: z.number().nullable().optional(),
  hiddenSingle: z.number().nullable().optional(),
  nakedPair: z.number().nullable().optional(),
  nakedTriple: z.number().nullable().optional(),
  lockedPair: z.number().nullable().optional(),
  lockedCandidatesType1: z.number().nullable().optional(),
  lockedCandidatesType2: z.number().nullable().optional(),
  hiddenPair: z.number().nullable().optional(),
  hiddenTriple: z.number().nullable().optional(),
  nakedQuadruple: z.number().nullable().optional(),
  hiddenQuadruple: z.number().nullable().optional(),
  xWing: z.number().nullable().optional(),
  swordfish: z.number().nullable().optional(),
  jellyfish: z.number().nullable().optional(),
  other: z.number().nullable().optional(),
});
