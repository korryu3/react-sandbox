export interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  isWinningSquare: boolean;
}

export interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

export interface CalculateWinnerResult {
  winner: string | null;
  line: number[] | null;
}
