// src/game.ts

type Player = 'X' | 'O'; // X for Player, O for AI
type Board = ('' | Player)[]; // 1D array with "X", "O", or empty strings

class Game {
  private board: Board;
  private currentPlayer: Player;

  constructor() {
    this.board = Array(9).fill(''); // Create an empty board
    this.currentPlayer = 'X'; // X always starts
  }

  // Get the current board state
  getBoard(): Board {
    return [...this.board]; // Return a copy to prevent direct modification
  }

  // Make a move if valid
  makeMove(position: number): boolean {
    if (this.board[position] === '' && position >= 0 && position < 9) {
      this.board[position] = this.currentPlayer;
      this.switchPlayer();
      return true; // Move was successful
    }
    return false; // Invalid move
  }

  // Check for a winner
  checkWinner(): Player | 'draw' | null {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const [a, b, c] of winningCombinations) {
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a] as Player; // Return winner ("X" or "O")
      }
    }

    return this.board.includes('') ? null : 'draw'; // Return "draw" if board is full
  }

  // Switch the current player
  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }
}
// Types
export { Player, Board };
// Class
export { Game };
