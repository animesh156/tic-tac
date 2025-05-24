export const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export const checkWinner = (board, emojis) => {
  return winningLines.some(
    ([a, b, c]) =>
      board[a] &&
      board[a] == board[b] &&
      board[a] == board[c] &&
      emojis.include(board[a])
  );
};
