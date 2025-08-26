import type { CalculateWinnerResult } from './types';
import { WINNING_LINES } from './constants';

export function calculateWinner(squares: (string | null)[]): CalculateWinnerResult {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }

  if (squares.every(square => square !== null)) {
    return { winner: 'Draw', line: null };
  }

  return { winner: null, line: null };
}
