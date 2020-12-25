import React from "react";
import Row from "./Row";
import "./css/Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: {},
    };
    // this.initState();
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

    this.setState({ cells });
  };

  componentDidMount() {
    this.initState();
  }
  render() {
    /* const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      
    )); */
    return (
      <div className="board">
        <Row state={this.state} />
      </div>
    );
  }
}

export default Board;
