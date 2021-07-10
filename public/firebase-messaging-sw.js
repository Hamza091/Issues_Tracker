importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyBuQ9Scr6SuRDiD_NVcLAgZCvbNF6lWGls",
  authDomain: "github-issues-c62b5.firebaseapp.com",
  projectId: "github-issues-c62b5",
  storageBucket: "github-issues-c62b5.appspot.com",
  messagingSenderId: "797323205070",
  appId: "1:797323205070:web:968d61977b4570727ef39f",
  measurementId: "G-Z8ZG9C64PK"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("my notification title");
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});

// messaging.onBackgroundMessage((payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

// initMessaging.setBackgroundMessageHandler(function(payload) {
//   const promiseChain = clients
//     .matchAll({
//       type: "window",
//       includeUncontrolled: true
//     })
//     .then(windowClients => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i];
//         windowClient.postMessage(payload);
//       }
//     })
//     .then(() => {
//       return registration.showNotification("my notification title");
//     });
//   return promiseChain;
// });
// self.addEventListener('notificationclick', function(event) {
//   // do what you want
//   // ...
// });

// BOA5xu5Ke3CyBJAvETGaRbQ8QRz6pXKAGJpCZqi2RhEOwUJv4soCxfSagw-qiO6_NgRbkIb0LBPGDz9Nk1hhOBQ

// AAAAuaQqmc4:APA91bE0vSsckUk3ORD09HnLnN9hyx7oWfvTMmKu14Y2NQks1pX2Kf0Ow9YAXJz2nN_Gz_JkZWi2_gMXm652hKm0AD4_etqf0YRNU53VY8oapydoh1uEtmAHgMUFL_I8pjpegRjoOXWu