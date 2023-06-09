import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


interface SquareProps {
    value: string | null;
    onClick: () => void;
}

// interface SquareState {}


function Square(props: SquareProps) {
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
// class Square extends React.Component<SquareProps, SquareState> {
//   render() {
//     return (
//       <button className="square" onClick={() => 
//         this.props.onClick()
//       }>
//         {this.props.value}
//       </button>
//     );
//   }
// }

interface BoardProps {
    squares: (string | null)[];
    onClick: (i: number) => void;
}

interface BoardState {
    xIsNext: boolean;
}

class Board extends React.Component<BoardProps, BoardState> {
  renderSquare(i: number) {
    return(<Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
    />
    );
   }

  render() {
    return (
      <div>
        <div className="status"></div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

interface GameProps {
}

interface GameState {
    history: { squares: (string | null)[] }[];
    xIsNext: boolean;
    stepNumber: number;
}

class Game extends React.Component<GameProps, GameState> {

  constructor(props:GameProps) {
    super(props);
    this.state = {
        history: [{
            squares: Array(9).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true,
    };
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
          'Revenir au tour n°' + move :
          'Revenir au début de la partie';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  

    let status;
    if (winner) {
        status = winner + ' a gagné';
    } else {
        status = 'Next Player:' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares: any[]) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<Game />);