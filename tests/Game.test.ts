// src/tests/game.test.ts
import { Game } from '../src';

describe('Game Class', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game(); // Create a new game before each test
  });

  test('should create an empty board', () => {
    expect(game.getBoard()).toEqual(['', '', '', '', '', '', '', '', '']);
  });

  test('should allow valid moves', () => {
    expect(game.makeMove(0)).toBe(true); // X moves
    expect(game.makeMove(1)).toBe(true); // O moves
    expect(game.getBoard()).toEqual(['X', 'O', '', '', '', '', '', '', '']);
  });

  test('should not allow moves on occupied positions', () => {
    game.makeMove(0); // X moves
    expect(game.makeMove(0)).toBe(false); // O tries to move in the same spot
  });

  test('should detect a winner', () => {
    game.makeMove(0); // X
    game.makeMove(3); // O
    game.makeMove(1); // X
    game.makeMove(4); // O
    game.makeMove(2); // X wins!
    expect(game.checkWinner()).toBe('X');
  });

  test('should detect a draw', () => {
    game.makeMove(0); // X
    game.makeMove(1); // O
    game.makeMove(2); // X
    game.makeMove(4); // O
    game.makeMove(3); // X
    game.makeMove(5); // O
    game.makeMove(7); // X
    game.makeMove(6); // O
    game.makeMove(8); // X - Board is full
    expect(game.checkWinner()).toBe('draw');
  });

  test('should not declare a winner if no one has won yet', () => {
    game.makeMove(0); // X
    game.makeMove(4); // O
    expect(game.checkWinner()).toBe(null);
  });
});
