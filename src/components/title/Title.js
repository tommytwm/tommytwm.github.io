import React from "react";
import "./Title.css";
import { ReactComponent as SmartGrids } from "../../assets/smart_grids.svg";

export default function Title() {
  return (
    <div className="Title-container">
      <h1 className="Title-header">Tommy Tho</h1>
      <SmartGrids className="Title-grids" />
      <p className="Title-subheader">
        BSc. Computer Science | Software Developer | Graphic Designer |
        Coffee Addict
      </p>
    </div>
  );
}
