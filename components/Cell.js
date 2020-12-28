import React from "react";
import "./css/Cell.css";

class Cell extends React.Component {
  render() {
    let cellClass;
    let cellContents;
    if (!this.props.isOpen && !this.props.isFlagged && !this.props.isMined) {
      cellClass = "cell closed";
      cellContents = "";
    } else if (!this.props.isOpen && this.props.isFlagged) {
      cellClass = "cell flagged";
      cellContents = (
        <img src="https://i.imgur.com/WCiUdPi.png" width="45px" height="45px" />
      );
    } else if (this.props.isOpen && this.props.isMined) {
      cellClass = "cell mined";
      cellContents = (
        <img
          src="https://static.thenounproject.com/png/13018-200.png"
          width="45px"
          height="45px"
        />
      );
    } else if (!this.props.isOpen && this.props.isMined) {
      cellClass = "cell closed";
      cellContents = "";
    } else if (
      this.props.isOpen &&
      !this.props.isFlagged &&
      !this.props.isMined
    ) {
      cellClass = "cell open";
      cellContents = "";
    }

    return (
      <div
        className={cellClass}
        onClick={() => this.props.openCell(this.props.index)}
        onContextMenu={() => console.log("Right clicked")}
      >
        {cellContents}
      </div>
    );
  }
}

export default Cell;
