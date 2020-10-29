import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import firebase from "./config/firebaseConfig";
import AppRouter from "./router/AppRouter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let cred = { name: user.displayName, uid: user.uid };
        dispatch({ type: "USER_LOGIN", payload: cred });
      } else {
        dispatch({ type: "USER_LOGOUT" });
      }
    });
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
