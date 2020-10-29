import React from "react";
import "./date.scss";

const DateContainer = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <div className="row justify-content-center mt-5">
      <div className="date_container col-10 col-md-6">
        <p className="date">
          {new Date().toLocaleDateString(undefined, options)}
        </p>
      </div>
    </div>
  );
};

export default DateContainer;
