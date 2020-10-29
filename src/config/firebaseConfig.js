import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBaNzA81jHHoSnXCPwGMqzdZIXZajnmRxc",
  authDomain: "todo-app-be080.firebaseapp.com",
  databaseURL: "https://todo-app-be080.firebaseio.com",
  projectId: "todo-app-be080",
  storageBucket: "todo-app-be080.appspot.com",
  messagingSenderId: "925883642214",
  appId: "1:925883642214:web:967b04ef07ad7f701718a7",
  measurementId: "G-T7X9TZT48L",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
