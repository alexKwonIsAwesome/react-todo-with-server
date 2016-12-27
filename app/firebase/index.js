import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBDqadYGEG847tUqxFODIlfacVd48Q6YMc",
    authDomain: "alex-todo-app-bbd97.firebaseapp.com",
    databaseURL: "https://alex-todo-app-bbd97.firebaseio.com",
    storageBucket: "alex-todo-app-bbd97.appspot.com",
    messagingSenderId: "490787991651"
  };
  
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
