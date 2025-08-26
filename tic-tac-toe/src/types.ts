import { PLAYERS } from './constants';

type PlayerSymbol = typeof PLAYERS[keyof typeof PLAYERS];

export type SquareValue = PlayerSymbol | null;

export interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
  isWinningSquare: boolean;
}

export interface BoardProps {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
}

export interface CalculateWinnerResult {
  winner: PlayerSymbol | null;
  isDraw: boolean;
  line: number[] | null;
}
