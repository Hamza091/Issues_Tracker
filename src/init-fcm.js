// import * as firebase from "firebase/app";
import "firebase/messaging";

import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // f
const initializedFirebaseApp = firebase.initializeApp({
     // Project Settings => Add Firebase to your web app
     messagingSenderId: "797323205070",
});
const messaging = initializedFirebaseApp.messaging();
export { messaging };