import bomb from "./bomb.svg";
import "./App.css";
import React from "react";
import ControlPanel from "./components/ControlPanel";
import Board from "./components/Board";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

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
          <Board />
        </header>
      </div>
    );
  }
}

export default App;
