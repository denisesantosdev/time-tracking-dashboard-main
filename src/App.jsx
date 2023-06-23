import React from "react";
import { useEffect } from "react";

import profilePicture from "./assets/images/image-jeremy.png";
import "./App.css";

import Button from "./components/button/Button";
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

  function changeToWeeklyData() {
    setReportTimeframe(weeklyTimeframe)
  }

  function changeToDailyData() {
    const dailyTimeframe = reportData.map((data) => {
      return {
        title: data.title,
        timeframe: data.timeframes.daily,
      };
    });

    setReportTimeframe(dailyTimeframe);
  }

  function changeToMonthlyData() {
    const monthlyTimeframe = reportData.map((data) => {
      return {
        title: data.title,
        timeframe: data.timeframes.monthly,
      };
    });

    setReportTimeframe(monthlyTimeframe);
  }

  return (
    <main className="container">
      <section className="profile">
        <div className="profile__content">
          <img
            className="profile__image"
            src={profilePicture}
            alt=""
          />
          <div className="profile__text-wrapper">
            <p className="profile__text">Report for</p>
            <h1 className="profile__name">Jeremy Robson</h1>
          </div>
        </div>
        <div className="button-group">
          <Button
            title={"Daily"}
            changeTimeframe={changeToDailyData}
          />
          <Button
            title={"Weekly"}
            changeTimeframe={changeToWeeklyData}
          />
          <Button
            title={"Monthly"}
            changeTimeframe={changeToMonthlyData}
          />
        </div>
      </section>

      <section className="report-section">
        {reportTimeframe.map((data, index) => {
          return <ReportCard report={data} key={index}/>;
        })}
      </section>
    </main>
  );
}

export default App;
