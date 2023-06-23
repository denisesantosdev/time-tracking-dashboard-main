import React from "react";
import "./ReportCard.css"

import iconEllipsis from "/src/assets/images/icon-ellipsis.svg";

export default function ReportCard(props) {
  //console.log(props);
  return (
    <div className={`report__card-wrapper ${props.report.title}`}>
      <div className="report__card">
        <header className="report__card-header">
          <h2 className="report__card-title">{props.report.title}</h2>
          <button className="report__card-button">
            <img
              src={iconEllipsis}
              alt=" "
            />
          </button>
        </header>
        <main className="report__card-main">
          <h3 className="report__card-current-number">{props.report.timeframe.current}hrs</h3>
          <p className="report__card-previous-number">Last Week - {props.report.timeframe.previous}hrs</p>
        </main>
      </div>
    </div>
  );
}
