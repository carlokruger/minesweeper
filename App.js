import bomb from "./bomb.svg";
import "./App.css";
import React from "react";
import ControlPanel from "./components/ControlPanel";
import Board from "./components/Board";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: {},
    };
  }

  initState = () => {
    let cells = { ...this.state.cells };
    for (let cell = 0; cell < 72; cell++) {
      cells[cell] = {
        index: cell,
        isMined: false,
        isFlagged: false,
        isOpen: false,
      };
    }
    let mines;
    for (mines = 0; mines < 11; mines++) {
      let mined = Math.floor(Math.random() * Math.floor(72));
      console.log("finding a mine");
      console.log(mined);

      if (!cells[mined].isMined) {
        cells[mined].isMined = true;
      } else if (cells[mined].isMined) {
        console.log("skipped");
        continue;
      }
    }

    this.setState({ cells });
    console.log("set state");
  };

  componentDidMount() {
    this.initState();
  }

  openCell = (key) => {
    let cells = { ...this.state.cells };
    cells[key].isOpen = true;
    this.setState({ cells });
  };

  flagCell = (event, key) => {
    event.preventDefault();
    let cells = { ...this.state.cells };
    cells[key].isFlagged = true;
    this.setState({ cells });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Header">
            <h2>
              Minesweeper
              <img src={bomb} className="App-logo" alt="logo" />
            </h2>
          </div>
          <ControlPanel />
          <Board
            state={this.state}
            flagCell={this.flagCell}
            openCell={this.openCell}
          />
        </header>
      </div>
    );
  }
}

export default App;
