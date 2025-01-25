import { puzzlesContract } from "./puzzles.contract";
import { solveAttemptsContract } from "./solveAttempts.contract";

export const apiContract = {
  ...puzzlesContract,
  ...solveAttemptsContract,
}
