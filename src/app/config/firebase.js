import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBUas-lGb9QjsubJp7KoRqDzXel34OVgbo",
  authDomain: "xptours123.firebaseapp.com",
  //databaseURL: "https://xptours123.firebaseio.com",
  projectId: "xptours123",
  storageBucket: "xptours123.appspot.com",
  messagingSenderId: "824771565381"
  };
  
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  // const settings = {
  //   timestampsInSnapshots: true
  // }
  // firestore.settings(settings)
  export default firebase;