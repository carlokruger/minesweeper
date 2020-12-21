import React from "react";
import Cell from "./Cell";
import "./css/Row.css";

class Row extends React.Component {
  render() {
    const cells = [0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
      <Cell
        key={num + this.props.number * 8}
        value={num + this.props.number * 8}
        row={this.props.number}
        col={num}
        coords={this.props.number.toString() + num.toString()}
        isOpen={this.props.state.isOpen}
        isMined={this.props.isMined}
        isFlagged={this.props.isFlagged}
      />
    ));
    return <div className="row">{cells}</div>;
  }
}

export default Row;
