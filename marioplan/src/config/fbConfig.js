import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCkdiyGnkw4YtZT6uRAmm6wcEVQ4p8KAuc",
  authDomain: "react-redux-app-f1d9f.firebaseapp.com",
  databaseURL: "https://react-redux-app-f1d9f.firebaseio.com",
  projectId: "react-redux-app-f1d9f",
  storageBucket: "react-redux-app-f1d9f.appspot.com",
  messagingSenderId: "587539052523"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
