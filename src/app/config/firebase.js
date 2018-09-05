import firebase from 'firebase';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyBUas-lGb9QjsubJp7KoRqDzXel34OVgbo",
    authDomain: "xptours123.firebaseapp.com",
    databaseURL: "https://xptours123.firebaseio.com",
    projectId: "xptours123",
    storageBucket: "xptours123.appspot.com",
    messagingSenderId: "824771565381"
  };
  firebase.initializeApp(config);
firebase.firestore();

export default firebase;