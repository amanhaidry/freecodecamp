const { useState } = React;

export function Board() {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || winner) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newSquares.includes(null)) {
      setIsDraw(true);
    }
  }

  function resetGame() {
    setSquares(initialSquares);
    setXIsNext(true);
    setWinner(null);
    setIsDraw(false);
  }

  return (
    <div className="game-container">
      <div className="board">
        {squares.map((value, i) => (
          <button key={i} className="square" onClick={() => handleClick(i)}>
            {value}
          </button>
        ))}
      </div>
      <button id="reset" onClick={resetGame}>
        Reset
      </button>
      <div id="message" className="status">
        {winner
          ? `Winner: ${winner}`
          : isDraw
            ? "Draw!"
            : `Next Player: ${xIsNext ? "X" : "O"}`}
      </div>
    </div>
  );
}
