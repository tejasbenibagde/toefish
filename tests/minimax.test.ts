// src/tests/minimax.test.ts
import { getBestMove } from "../src";
import { Board } from "../src";

describe("AI (Minimax) Tests", () => {
  test("AI should pick a winning move", () => {
    const board: Board = ["O", "O", "", "X", "X", "", "", "", ""];
    expect(getBestMove(board, 10)).toBe(2); // "O" should win by placing at index 2
  });

  test("AI should block opponent's winning move", () => {
    const board: Board = ["X", "X", "", "O", "", "", "", "", ""];
    expect(getBestMove(board, 10)).toBe(2); // "O" should block "X" at index 2
  });

  test("AI should play randomly at lowest difficulty", () => {
    const board: Board = ["X", "", "", "", "", "", "", "", ""];
    const move = getBestMove(board, 1);
    expect(move).toBeGreaterThanOrEqual(1);
    expect(move).toBeLessThanOrEqual(8);
  });

//   test("AI should play optimally at highest difficulty", () => {
//     const board: Board = ["X", "O", "X", "X", "O", "", "", "", ""];
//     expect(getBestMove(board, 10)).toBe(8);
//   });

  test("AI should not make a move if board is full", () => {
    const board: Board = ["X", "O", "X", "X", "O", "X", "O", "X", "O"];
    expect(getBestMove(board, 10)).toBe(-1); // No available moves
  });
});
