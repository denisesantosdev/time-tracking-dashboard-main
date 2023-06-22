import React from "react";
import { useEffect } from "react";

import profilePicture from "./assets/images/image-jeremy.png";
import "./App.css";

import Button from "./components/Button/Button";
import ReportCard from "./components/ReportCard/ReportCard";

import reportData from "./assets/data.json";
//console.log(reportData);

function App() {
  const weeklyTimeframe = reportData.map((data) => {
    return {
      title: data.title,
      timeframe: data.timeframes.weekly,
    };
  });

  const [reportTimeframe, setReportTimeframe] = React.useState(weeklyTimeframe);

  return (
    <main className="container">
      <section className="profile">
        <div className="profile__content">
          <img
            className="profile__image"
            src="{}"
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
        {reportTimeframe.map((data) => {
          return <ReportCard report={data} />;
        })}
      </section>
    </main>
  );
}

export default App;
