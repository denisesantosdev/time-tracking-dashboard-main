import React from "react";
import { useEffect } from "react";

import profilePicture from "./assets/images/image-jeremy.png";
import "./App.css";

import Button from "./components/button/Button";
import ReportCard from "./components/ReportCard/ReportCard";

import reportData from "./assets/data.json";

function App() {
  const weeklyTimeframe = reportData.map((data) => {
    return {
      title: data.title,
      timeframe: data.timeframes.weekly,
    };
  });

  const [reportTimeframe, setReportTimeframe] = React.useState(weeklyTimeframe);

  const dailyBtn = "Daily";
  const weeklyBtn = "Weekly";
  const monthlyBtn = "Monthly";

  const [activeBtn, setActiveBtn] = React.useState(weeklyBtn);

  function changeToWeeklyData() {
    setReportTimeframe(weeklyTimeframe);
    setActiveBtn(weeklyBtn);
  }

  function changeToDailyData() {
    const dailyTimeframe = reportData.map((data) => {
      return {
        title: data.title,
        timeframe: data.timeframes.daily,
      };
    });

    setReportTimeframe(dailyTimeframe);
    setActiveBtn(dailyBtn);
  }

  function changeToMonthlyData() {
    const monthlyTimeframe = reportData.map((data) => {
      return {
        title: data.title,
        timeframe: data.timeframes.monthly,
      };
    });

    setReportTimeframe(monthlyTimeframe);
    setActiveBtn(monthlyBtn);
  }

  function changeActiveBtnClass(btn) {
    return activeBtn === btn ? "active-btn" : "";
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
            title={dailyBtn}
            handleClick={changeToDailyData}
            activeBtn={changeActiveBtnClass(dailyBtn)}
          />
          <Button
            title={weeklyBtn}
            handleClick={changeToWeeklyData}
            activeBtn={changeActiveBtnClass(weeklyBtn)}
          />
          <Button
            title={monthlyBtn}
            handleClick={changeToMonthlyData}
            activeBtn={changeActiveBtnClass(monthlyBtn)}
          />
        </div>
      </section>

      <section className="report-section">
        {reportTimeframe.map((data, index) => {
          return (
            <ReportCard
              report={data}
              key={index}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
