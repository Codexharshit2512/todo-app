import React from "react";
import { useSelector } from "react-redux";
import WelcomeMsg from "./WelcomeMsg";

const WelcomeContainer = () => {
  const username = useSelector((state) => state.auth.user.username);
  return (
    <div className="welcome_container row justify-content-center mt-4">
      <WelcomeMsg username={username} />
    </div>
  );
};

export default WelcomeContainer;
