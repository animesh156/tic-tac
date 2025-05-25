import React, { useState } from 'react';
import GameBoard from './components/Board';
import PlayerSelection from './components/PlayerSection';
import GameOver from './components/GameOver';

const emojiCategories = {
  Animals: ['🐶', '🐱', '🐭', '🐹'],
  Food: ['🍎', '🍌', '🍇', '🍉'],
  Sports: ['⚽️', '🏀', '🏈', '⚾️'],
};

function App() {
  const [player1Category, setPlayer1Category] = useState(null);
  const [player2Category, setPlayer2Category] = useState(null);
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handlePlayerSelection = (player, category) => {
    if (player === 1) {
      setPlayer1Category(category);
    } else {
      setPlayer2Category(category);
    }
  };

  const startGame = () => {
    if (player1Category && player2Category) {
      setGameStarted(true);
    }
  };

  const handleGameOver = (player) => {
    setWinner(player);
  };

  const handlePlayAgain = () => {
    setPlayer1Category(null);
    setPlayer2Category(null);
    setWinner(null);
    setGameStarted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-sans">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Twisted Tic Tac Toe</h1>
      {!gameStarted ? (
        <PlayerSelection
          emojiCategories={emojiCategories}
          onSelect={handlePlayerSelection}
          onStart={startGame}
          player1Category={player1Category}
          player2Category={player2Category}
        />
      ) : winner ? (
        <GameOver winner={winner} onPlayAgain={handlePlayAgain} />
      ) : (
        <GameBoard
          player1Emojis={emojiCategories[player1Category]}
          player2Emojis={emojiCategories[player2Category]}
          onGameOver={handleGameOver}
        />
      )}
    </div>
  );
}

export default App;