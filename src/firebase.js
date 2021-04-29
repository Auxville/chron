import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCMYHRtpsbGOSQA2mPGuC-HfcnY18IdAgY",
      authDomain: "chronmd.firebaseapp.com",
      databaseURL: "https://chronmd-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "chronmd",
      storageBucket: "chronmd.appspot.com",
      messagingSenderId: "414594651916",
      appId: "1:414594651916:web:3109473b98881a9bf15b29",
      measurementId: "G-L4Z72HEMMR"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;