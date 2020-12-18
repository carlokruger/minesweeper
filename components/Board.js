import React from "react";
import Row from "./Row";
import "./css/Board.css";

class Board extends React.Component {
  render() {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <Row key={num} number={num} />
    ));
    return <div className="board">{rows}</div>;
  }
}

export default Board;
