import React from "react";
import "./signIn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignInContainer = (props) => {
  return (
    <div className="sign_in_container">
      <div className="sign_in_box">
        <h2 className="display-4">Todo App</h2>
        <div className="sign_in_btn">
          <button type="button" onClick={props.login}>
            Login with
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInContainer;
