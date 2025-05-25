import React from 'react';

const Cell = ({ value, onClick }) => {
  return (
    <button
      className="w-24 h-24 bg-white rounded-md flex items-center justify-center text-5xl font-bold text-gray-800 cursor-pointer hover:bg-gray-200 transition-colors"
      onClick={onClick}
    >
     
      {value ? value.emoji : ''}
    </button>
  );
};

export default Cell;