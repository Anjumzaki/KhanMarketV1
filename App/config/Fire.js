import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAqB0fnbrfm61lK2cmOz2QwZhngjVvDIRQ",
  authDomain: "khanmarket-75d3e.firebaseapp.com",
  databaseURL: "https://khanmarket-75d3e.firebaseio.com",
  projectId: "khanmarket-75d3e",
  storageBucket: "khanmarket-75d3e.appspot.com",
  messagingSenderId: "1076813179871",
  appId: "1:1076813179871:web:c487c920c4a2ca9c35726a",
  measurementId: "G-Z0RRLZEZWZ"
};

  const fire = firebase.initializeApp(config);
  export default fire;