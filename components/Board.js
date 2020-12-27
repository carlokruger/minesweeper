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
    let mines;
    for (mines = 0; mines < 11; mines++) {
      let mined = Math.floor(Math.random() * Math.floor(72));
      console.log("finding a mine");
      console.log(mined);

      if (!cells[mined].isMined) {
        cells[mined].isMined = true;
      } else if (cells[mined].isMined) {
        console.log("skipped");
        continue;
      }
    }

    this.setState({ cells });
    console.log("set state");
  };

  componentDidMount() {
    this.initState();
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
