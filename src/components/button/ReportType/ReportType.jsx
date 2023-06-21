import React from "react";

import iconEllipsis from "/src/assets/images/icon-ellipsis.svg";

export default function ReportType() {
  return (
    <div className="report__card-wrapper">
      <div className="report__card">
        <header className="report__card-header">
          <h2 className="report__card-title">Work</h2>
          <button className="report__card-button">
            <img
              src={iconEllipsis}
              alt=""
            />
          </button>
        </header>
        <main className="report__card-main">
          <h3 className="report__card-current-number">32hrs</h3>
          <p className="report__card-previous-number">Last Week - 36hrs</p>
        </main>
      </div>
    </div>
  );
}
