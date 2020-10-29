import React from "react";
import DateContainer from "../components/dashboard/date/DateContainer";
import WelcomeContainer from "../components/dashboard/welcome/WelcomeContainer";
import MainContainer from "../components/dashboard/todos/MainContainer";

const DashBoard = () => {
  return (
    <div className="dashboard_container container">
      <WelcomeContainer />
      <DateContainer />
      <MainContainer />
    </div>
  );
};

export default DashBoard;
