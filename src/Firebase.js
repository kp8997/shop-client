import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCJ-kn89KfOG7fFKfLWYBrKKPWhfO5e924",
    authDomain: "mystorage-e3329.firebaseapp.com",
    databaseURL: "https://mystorage-e3329.firebaseio.com/",
    projectId: "mystorage-e3329",
    storageBucket: "gs://mystorage-e3329.appspot.com",
    messagingSenderId: "803218809690"
};

//firebase.initializeApp(config);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
//export default firebase;