import React from "react";
import Row from "./Row";
import "./css/Board.css";

class Board extends React.Component {
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
    //console.log(cells);
    /* for (let mines = 0; (mines = 10); mines++) {
      let mined = Math.floor(Math.random() * Math.floor(72));
      console.log("finding a mine");
      //console.log(mined);
      //console.log(cells);

      if (!cells[mined].isMined) {
        cells[mined].isMined = true;
        console.log(mined);
      }
    } */

    this.setState({ cells });
    console.log("set state");
  };

  initMines = () => {
    let cells = { ...this.state.cells };
    console.log(cells);
    for (let mines = 0; (mines = 10); mines++) {
      let mined = Math.floor(Math.random() * Math.floor(72));
      console.log("finding a mine");
      console.log(mined);
      console.log(cells[mined]);

      if (cells[mined].isMined) {
        break;
      } else {
        cells[mined].isMined = true;
        //console.log(mined);
      }
    }
  };

  componentDidMount() {
    this.initState();
    // this.initMines();
  }
  render() {
    return (
      <div className="board">
        <Row state={this.state} />
      </div>
    );
  }
}

export default Board;
