import React from 'react';

const GameOver = ({ winner, onPlayAgain }) => {
  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Player {winner} Wins!
      </h2>
      <button
        onClick={onPlayAgain}
        className="mt-4 bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-xl hover:bg-blue-600 transition-colors"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;