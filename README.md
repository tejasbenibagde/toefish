# 🐟 ToeFish - Tic Tac Toe AI Engine

ToeFish is a powerful, customizable AI for Tic-Tac-Toe built with **TypeScript** and **Minimax Algorithm**. It supports different difficulty levels (1-10) and can be used in **web apps, games**.

## 🚀 Features
- 🔥 **AI-powered moves** using Minimax algorithm.
- 🎚️ **Adjustable difficulty (1-10)** for different skill levels.
- 🖥️ **Play against AI** and integrate into web apps.
- ✅ **Fully tested** with Jest.

---

## 📦 Installation
Install ToeFish using **npm** or **yarn**:

```sh
npm install toefish
# OR
yarn add toefish

```

## Usage

### basic AI move Calculation
```ts
import { getBestMove } from "toefish";

const board = ["X", "O", "X", "", "O", "", "", "", ""]; // Current board state
const difficulty = 5; // AI skill level (1-10)

const aiMove = getBestMove(board, difficulty);
console.log(`AI plays at index: ${aiMove}`);
```

### Full Game Simulation
```ts
import { Game } from "toefish";

const game = new Game();
game.makeMove(0); // Player 'X' moves
const aiMove = getBestMove(game.getBoard(), 10);
game.makeMove(aiMove); // AI 'O' moves
console.log(game.getBoard());
```

## 📖 API Reference

## `getBestMove(board: string[], difficulty: number): number`
Finds the best move for the AI based on the Minimax algorithm.

- **`board`**: The current Tic-Tac-Toe board (`["X", "", "O", ...]`).
- **`difficulty`**: AI skill level (`1` = easy, `10` = hard).
- **Returns**: The **best move index** (0-8) or `-1` if no moves left.

---

## **`Game` Class**
Handles Tic-Tac-Toe game logic.

### `new Game()`
Creates a new game.

### `game.getBoard()`
Returns the **current board state**.

### `game.makeMove(index: number)`
Attempts a move at `index`.  
- **Returns**: `true` if valid, `false` otherwise.

### `game.checkWinner()`
Returns one of the following:
- `"X"` (X wins)
- `"O"` (O wins)
- `"draw"` (Game is a draw)
- `null` (Game still ongoing)

---

## 🎯 **Contributing**
We welcome contributions! Feel free to:
- Report bugs  
- Suggest new features  
- Improve AI strategy  

Fork the repo and submit a PR!

---

## 📜 **License**
MIT License. Free to use and modify.

---

🚀 **ToeFish – Smartest Tic-Tac-Toe AI!**  
🐟 Made with ❤️ by Tejas Benibagde
