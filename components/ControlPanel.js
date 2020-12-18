import React from "react";
import Counter from "./Counter";
import Reset from "./Reset";
import Timer from "./Timer";
import "./css/ControlPanel.css";

class ControlPanel extends React.Component {
  render() {
    return (
      <div className="control">
        <Counter />
        <Reset />
        <Timer />
      </div>
    );
  }
}

export default ControlPanel;
