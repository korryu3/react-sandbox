import { useState } from 'react';
import { TOTAL_SQUARES } from '../constants';
import { Board } from './Board';

export function Game() {
  const initialSquares = Array(TOTAL_SQUARES).fill(null);
  const initialMove = 0;
  const [history, setHistory] = useState([initialSquares]);
  const [currentMove, setCurrentMove] = useState(initialMove);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function restartGame() {
    setHistory([initialSquares]);
    setCurrentMove(initialMove);
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
