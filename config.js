import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBoMfIQptfW769ktNBesQIShhcA1HFIpC4",
  authDomain: "bibliotecaeletronica-d9e83.firebaseapp.com",
  projectId: "bibliotecaeletronica-d9e83",
  storageBucket: "bibliotecaeletronica-d9e83.appspot.com",
  messagingSenderId: "680057492540",
  appId: "1:680057492540:web:4072bc39d8348eecf3df39"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
