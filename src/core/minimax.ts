// src/minimax.ts
import { Board, Player } from './Game';

// Score system for Minimax
const SCORES: Record<Player, number> = { X: -10, O: 10 };

function getBestMove(board: Board, difficulty: number): number {
  const AI: Player = 'O';

  // Get all available moves
  const availableMoves = board.reduce<number[]>((acc, val, idx) => {
    if (val === '') acc.push(idx);
    return acc;
  }, []);

  // 🔥 1️⃣ **Check for an immediate winning move**
  for (const move of availableMoves) {
    board[move] = AI;
    if (checkWinner(board) === AI) {
      board[move] = ''; // Reset board state
      return move; // Play winning move instantly
    }
    board[move] = ''; // Reset board state
  }

  // 🔥 2️⃣ **Continue with Minimax if no instant win**
  if (difficulty < 3) {
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }

  let bestMove = -1;
  let bestScore = -Infinity;

  for (const move of availableMoves) {
    board[move] = AI;
    const score = minimax(board, 0, false, difficulty);
    board[move] = '';

    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
}

// Minimax Algorithm with Depth Control
function minimax(board: Board, depth: number, isMaximizing: boolean, maxDepth: number): number {
  const winner = checkWinner(board);
  if (winner) return SCORES[winner] || 0;

  // Limit depth for easier difficulties
  if (depth >= maxDepth) return 0;

  // Get available moves
  const availableMoves = board.reduce<number[]>((acc, val, idx) => {
    if (val === '') acc.push(idx);
    return acc;
  }, []);

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (const move of availableMoves) {
      board[move] = 'O';
      bestScore = Math.max(bestScore, minimax(board, depth + 1, false, maxDepth));
      board[move] = '';
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (const move of availableMoves) {
      board[move] = 'X';
      bestScore = Math.min(bestScore, minimax(board, depth + 1, true, maxDepth));
      board[move] = '';
    }
    return bestScore;
  }
}

// Simple function to check winner
function checkWinner(board: Board): Player | null {
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
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player;
    }
  }

  return null;
}

export { getBestMove };
