import React from 'react';

const PlayerSelection = ({ emojiCategories, onSelect, onStart, player1Category, player2Category }) => {
  return (
    // Main container: Adjusted padding for different screen sizes
    <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-2xl">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-700 text-center">Choose Your Emojis</h2>
      
      {/* Player selection sections: Stack vertically on small screens, horizontally on medium screens and up */}
      <div className="flex flex-col md:flex-row md:space-x-12 mb-6 w-full">
        {/* Player 1 Section */}
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="text-lg sm:text-xl font-medium mb-3 text-center text-slate-600">Player 1</h3>
          {/* Emoji category buttons: Centered and responsive spacing */}
          <div className="flex justify-center space-x-2 sm:space-x-3">
            {Object.keys(emojiCategories).map((category) => (
              <button
                key={`p1-${category}`} // Added p1 prefix for unique key
                onClick={() => onSelect(1, category)}
                className={`p-3 sm:px-4 sm:py-2 rounded-lg text-2xl sm:text-3xl transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  player1Category === category 
                    ? 'bg-blue-500 text-white shadow-md focus:ring-blue-400' 
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300 focus:ring-slate-400'
                }`}
                aria-label={`Player 1 select ${category}`} // Accessibility
              >
                {emojiCategories[category][0]}
              </button>
            ))}
          </div>
          {player1Category && (
            <p className="text-center mt-2 text-sm text-blue-600">Selected: {player1Category}</p>
          )}
        </div>

        {/* Divider for small screens, hidden on medium and up */}
        <hr className="md:hidden my-4 border-slate-300" />

        {/* Player 2 Section */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-medium mb-3 text-center text-slate-600">Player 2</h3>
          {/* Emoji category buttons: Centered and responsive spacing */}
          <div className="flex justify-center space-x-2 sm:space-x-3">
            {Object.keys(emojiCategories).map((category) => (
              <button
                key={`p2-${category}`} // Added p2 prefix for unique key
                onClick={() => onSelect(2, category)}
                className={`p-3 sm:px-4 sm:py-2 rounded-lg text-2xl sm:text-3xl transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  player2Category === category 
                    ? 'bg-red-500 text-white shadow-md focus:ring-red-400' 
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300 focus:ring-slate-400'
                }`}
                aria-label={`Player 2 select ${category}`} // Accessibility
              >
                {emojiCategories[category][0]}
              </button>
            ))}
          </div>
           {player2Category && (
            <p className="text-center mt-2 text-sm text-red-600">Selected: {player2Category}</p>
          )}
        </div>
      </div>
      
      <button
        onClick={onStart}
        disabled={!player1Category || !player2Category}
        className="w-full max-w-xs bg-green-500 text-white font-bold py-3 px-6 rounded-lg text-lg sm:text-xl hover:bg-green-600 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      >
        Start Game
      </button>
    </div>
  );
};

export default PlayerSelection;
