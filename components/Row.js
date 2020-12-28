import React from "react";
import Cell from "./Cell";
import "./css/Row.css";

class Row extends React.Component {
  render() {
    return Object.keys(this.props.state.cells).map((key) => (
      <Cell
        key={key}
        index={key}
        isOpen={this.props.state.cells[key].isOpen}
        isMined={this.props.state.cells[key].isMined}
        isFlagged={this.props.state.cells[key].isFlagged}
        openCell={this.props.openCell}
        flagCell={this.props.flagCell}
      />
    ));
  }
}

export default Row;
