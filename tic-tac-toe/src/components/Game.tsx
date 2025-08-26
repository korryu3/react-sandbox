import { useState } from 'react';
import { TOTAL_SQUARES } from '../constants';
import type { SquareValue } from '../types';
import { Board } from './Board';

export function Game() {
  const [history, setHistory] = useState([Array(TOTAL_SQUARES).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function restartGame() {
    setHistory([Array(TOTAL_SQUARES).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((_, move) => {
    let description;
    if (currentMove === move) {
      description = "You are at move #" + move;
    } else if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        {currentMove === move ? (
          <strong>{description}</strong>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  return (
    <>
      <button onClick={restartGame}>Restart Game</button>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
