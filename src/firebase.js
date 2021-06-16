import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyCzVXmTkd_1jY40o-m73SwZDg6NjGkztMk",
  authDomain: "my-won-website.firebaseapp.com",
  databaseURL: "https://my-won-website.firebaseio.com",
  projectId: "my-won-website",
  storageBucket: "my-won-website.appspot.com",
  messagingSenderId: "175747509090",
  appId: "1:175747509090:web:3edc5ecfb5558a7f16da3b",
});

var db = firebaseApp.firestore();

export { db };
