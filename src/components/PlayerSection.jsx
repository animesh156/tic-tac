import React from 'react';

const PlayerSelection = ({ emojiCategories, onSelect, onStart, player1Category, player2Category }) => {
  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-700">Choose Your Emojis</h2>
      <div className="flex space-x-12 mb-6">
        <div>
          <h3 className="text-xl font-medium mb-2 text-center">Player 1</h3>
          <div className="flex space-x-2">
            {Object.keys(emojiCategories).map((category) => (
              <button
                key={category}
                onClick={() => onSelect(1, category)}
                className={`px-4 py-2 rounded-md text-2xl transition-transform transform hover:scale-110 ${
                  player1Category === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {emojiCategories[category][0]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2 text-center">Player 2</h3>
          <div className="flex space-x-2">
            {Object.keys(emojiCategories).map((category) => (
              <button
                key={category}
                onClick={() => onSelect(2, category)}
                className={`px-4 py-2 rounded-md text-2xl transition-transform transform hover:scale-110 ${
                  player2Category === category ? 'bg-red-500 text-white' : 'bg-gray-200'
                }`}
              >
                {emojiCategories[category][0]}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={onStart}
        disabled={!player1Category || !player2Category}
        className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg text-xl hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Start Game
      </button>
    </div>
  );
};

export default PlayerSelection;