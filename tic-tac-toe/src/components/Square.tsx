import type { SquareProps } from '../types';

export function Square({ value, onSquareClick, isWinningSquare }: SquareProps) {
  return (
    <button
      className={`square ${isWinningSquare ? 'winning' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
