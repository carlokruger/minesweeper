import React from "react";
import Row from "./Row";
import "./css/Board.css";

class Board extends React.Component {
  state = {};

  initState = () => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row) => {
      this.initRow(row);
    });
  };

  initRow = (row) => {
    [0, 1, 2, 3, 4, 5, 6, 7].map((col) => {
      const rowNum = "row " + row.toString();
      const colNum = "col " + col.toString();
      const cellNum = "cell " + (row * 8 + col).toString();
      this.state[rowNum] = {
        cellNum: {
          isMined: false,
          isFlagged: false,
          isOpen: true,
        },
      };
    });
  };

  render() {
    this.initState();
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <Row key={num} number={num} state={this.state} />
    ));
    return <div className="board">{rows}</div>;
  }
}

export default Board;
