import React from "react";
import firebase from "../../../config/firebaseConfig";

const LogoutBtn = () => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div className="logout_btn_container">
      <button type="button" onClick={logout} className="btn btn-outline-danger">
        Log Out
      </button>
    </div>
  );
};

export default LogoutBtn;
