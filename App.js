import bomb from './bomb.svg';
import './App.css';
import React from "react";

function Cell(props) {
    return (
        <div className="cell">

        </div>
    );
}

function Row(props) {
    const cells = [0, 1, 2, 3, 4, 5, 6, 7].map(num => <Cell value={num + props.number * 8}/>);
    return (
        <div className="row">
            {cells}
        </div>
    );
}

function Board(props) {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => <Row number={num} />);
    return (
        <div className="board">
            {rows}
        </div>
    );
}

function Counter(props) {
    return (
        <div className="counter">
            💣 10
        </div>
    );
}

function Reset(props) {
    return(
        <button className="reset">😄</button>
    );
}

function Timer(props) {
    return (
        <div className="timer">0:00</div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    renderBoard() {
        return (
            <Board />
        );
    }

    renderControl() {
        return (
            <div className="control">
                <Counter />
                <Reset />
                <Timer />
            </div>
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="Header">
                        <h2>Minesweeper
                        <img src={bomb} className="App-logo" alt="logo" /></h2>
                    </div>
                    {this.renderControl()}
                    {this.renderBoard()}
                </header>
            </div>
        );
    }
}

export default App;