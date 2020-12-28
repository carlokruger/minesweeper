import React from "react";
import Row from "./Row";
import "./css/Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board">
        <Row state={this.props.state} openCell={this.props.openCell} />
      </div>
    );
  }
}

export default Board;
