import logo from './bomb.svg';
import './App.css';
import React from "react";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p class="textLoading">
            Minesweeper is loading...
          </p>
          {/*
        <a
          className="App-link"
          href="https://reactjs.org"

          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/}
        </header>
      </div>
  );
}

export default App;