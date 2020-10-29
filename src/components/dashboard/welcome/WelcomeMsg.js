import React from "react";
import LogoutBtn from "./LogoutBtn";

const WelcomeMsg = (props) => {
  return (
    <div className="welcome_msg_container row col-6 justify-content-center">
      <div className="col-12 col-md-8">
        <p className="welcome_msg" style={{ fontSize: "24px" }}>
          Welcome,{props.username}
        </p>
      </div>
      <div className="col-12 col-md-4">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default WelcomeMsg;
