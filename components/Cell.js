import React from "react";
import "./css/Cell.css";

class Cell extends React.Component {
  render() {
    let cellClass;
    if (!this.props.isOpen && !this.props.isFlagged && !this.props.isMined) {
      cellClass = "cell closed";
    } else if (!this.props.isOpen && this.props.isFlagged) {
      cellClass = "cell flagged";
    } else if (this.props.isOpen && this.props.isMined) {
      cellClass = "cell mined";
    } else if (
      this.props.isOpen &&
      !this.props.isFlagged &&
      !this.props.isMined
    ) {
      cellClass = "cell open";
    }

    return (
      <div
        className={cellClass}
        onClick={() => console.log(this.props.coords)}
        onContextMenu={() => console.log("Right clicked")}
      ></div>
    );
  }
}

export default Cell;
