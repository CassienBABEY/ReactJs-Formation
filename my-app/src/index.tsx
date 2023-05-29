import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface SquareProps {
    readonly value: string | null;
    onClick: () => void;
}

interface SquareState {
    readonly value: string | null;}

class Square extends React.Component<SquareProps, SquareState> {
  render() {
    return (
      <button className="square" onClick={() => 
        this.props.onClick()
      }>
        {this.props.value}
      </button>
    );
  }
}

interface BoardProps {
  // Ajoutez ici les propriétés spécifiques au composant Board, le cas échéant
}

interface BoardState {
    readonly squares: any[];
}

class Board extends React.Component<BoardProps, BoardState> {

  constructor(props: BoardProps){
    super(props);
    this.state = {
        squares: Array(9).fill(null)
    }
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({squares: squares});
  }

  renderSquare(i: number) {
    return <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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
  // Ajoutez ici les propriétés spécifiques au composant Game, le cas échéant
}

interface GameState {
  // Ajoutez ici les états spécifiques au composant Game, le cas échéant
}

class Game extends React.Component<GameProps, GameState> {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<Game />);