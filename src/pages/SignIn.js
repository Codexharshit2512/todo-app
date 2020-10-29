import React from "react";
import SignInContainer from "../components/signIn/SignInContainer";
import firebase from "../config/firebaseConfig";

const SignIn = () => {
  const login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <SignInContainer login={login} />
    </div>
  );
};

export default SignIn;
