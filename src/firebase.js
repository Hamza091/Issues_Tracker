import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // f
// import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyBuQ9Scr6SuRDiD_NVcLAgZCvbNF6lWGls",
    authDomain: "github-issues-c62b5.firebaseapp.com",
    projectId: "github-issues-c62b5",
    storageBucket: "github-issues-c62b5.appspot.com",
    messagingSenderId: "797323205070",
    appId: "1:797323205070:web:968d61977b4570727ef39f",
    measurementId: "G-Z8ZG9C64PK"

}


  firebase.initializeApp(config);
//   firebase.analytics();

export default firebase
// </script>