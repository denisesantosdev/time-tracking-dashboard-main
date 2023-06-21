import { useState } from "react";
import profilePicture from "./assets/images/image-jeremy.png";
import "./App.css";

import Button from "./components/button/Button";
import ReportType from "./components/button/ReportType/ReportType";

function App() {
  return (
    <main className="container">
      <section className="profile">
        <div className="profile__content">
          <img
            className="profile__image"
            src={profilePicture}
            alt=""
          />
          <p className="profile__text">Report for</p>
          <h1 className="profile__title">Jeremy Robson</h1>
        </div>
        <div className="button-group">
          <Button />
        </div>
      </section>

      <section className="report-section">
        <ReportType />
      </section>
    </main>
  );
}

export default App;
