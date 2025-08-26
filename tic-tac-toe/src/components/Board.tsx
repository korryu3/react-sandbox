import type { BoardProps } from '../types';
import { calculateWinner } from '../utils';
import { BOARD_SIZE, PLAYERS } from '../constants';
import { Square } from './Square';

export function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares).winner) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = PLAYERS.X;
    } else {
      nextSquares[i] = PLAYERS.O;
    }
    onPlay(nextSquares);
  }

  const { winner, line } = calculateWinner(squares);
  let status;
  if (winner === 'Draw') {
    status = 'Game ended in a draw.';
  } else if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? PLAYERS.X : PLAYERS.O);
  }

  return (
    <>
      <div className="status">{status}</div>
      {Array.from({ length: BOARD_SIZE }, (_, row) => (
        <div key={row} className="board-row">
          {Array.from({ length: BOARD_SIZE }, (_, col) => {
            const index = row * BOARD_SIZE + col;
            const isWinningSquare = line ? line.includes(index) : false;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                isWinningSquare={isWinningSquare}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}
