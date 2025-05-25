import React, { useState, useEffect } from 'react';
import Cell from './Cell';

const GameBoard = ({ player1Emojis, player2Emojis, onGameOver }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayer1Next, setIsPlayer1Next] = useState(true);
  const [player1Placed, setPlayer1Placed] = useState([]);
  const [player2Placed, setPlayer2Placed] = useState([]);

  const currentPlayer = isPlayer1Next ? 1 : 2;
  const currentEmojis = isPlayer1Next ? player1Emojis : player2Emojis;

  const handleClick = (i) => {
    if (board[i]) return;

    const newBoard = [...board];
    const randomEmoji = currentEmojis[Math.floor(Math.random() * currentEmojis.length)];
    newBoard[i] = { emoji: randomEmoji, player: currentPlayer };

    let oldestCellIndex = -1;

    if (isPlayer1Next) {
      const newPlayer1Placed = [...player1Placed, { emoji: randomEmoji, index: i }];
      if (newPlayer1Placed.length > 3) {
        oldestCellIndex = newPlayer1Placed[0].index;
        newBoard[oldestCellIndex] = null;
        setPlayer1Placed(newPlayer1Placed.slice(1));
      } else {
        setPlayer1Placed(newPlayer1Placed);
      }
    } else {
      const newPlayer2Placed = [...player2Placed, { emoji: randomEmoji, index: i }];
      if (newPlayer2Placed.length > 3) {
        oldestCellIndex = newPlayer2Placed[0].index;
        newBoard[oldestCellIndex] = null;
        setPlayer2Placed(newPlayer2Placed.slice(1));
      } else {
        setPlayer2Placed(newPlayer2Placed);
      }
    }

    if (oldestCellIndex === i && newBoard[i]) {
        return;
    }


    setBoard(newBoard);
    setIsPlayer1Next(!isPlayer1Next);
  };

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      onGameOver(winner);
    }
  }, [board, onGameOver]);

  const calculateWinner = (currentBoard) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        currentBoard[a] &&
        currentBoard[b] &&
        currentBoard[c] &&
        currentBoard[a].player === currentBoard[b].player &&
        currentBoard[a].player === currentBoard[c].player
      ) {
        return currentBoard[a].player;
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Player {currentPlayer}'s Turn
        </h2>
        <div className="grid grid-cols-3 gap-3 bg-gray-300 p-3 rounded-lg shadow-md">
            {board.map((cell, i) => (
                <Cell key={i} value={cell} onClick={() => handleClick(i)} />
            ))}
        </div>
    </div>
  );
};

export default GameBoard;