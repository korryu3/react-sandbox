import type { CalculateWinnerResult, SquareValue } from './types';
import { WINNING_LINES } from './constants';

export function calculateWinner(squares: SquareValue[]): CalculateWinnerResult {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c], isDraw: false};
    }
  }

  const isFull = squares.every(square => square !== null);

  return { winner: null, line: null, isDraw: isFull };
}
