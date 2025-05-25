export const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6],            // diagonals
];

export const checkWinner = (board, playerIndices) => {
  return winningLines.some(([a, b, c]) =>
    playerIndices.includes(a) &&
    playerIndices.includes(b) &&
    playerIndices.includes(c) &&
    board[a] === board[b] &&
    board[b] === board[c]
  );
};
