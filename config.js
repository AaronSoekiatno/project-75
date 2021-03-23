import * as firebase from 'firebase'
require('@firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSyAAKuJechbMtidj24gwVmNXTl6WMQnCszU",
    authDomain: "story-hub-e3312.firebaseapp.com",
    projectId: "story-hub-e3312",
    storageBucket: "story-hub-e3312.appspot.com",
    messagingSenderId: "868625712878",
    appId: "1:868625712878:web:87e982b902961d389ed5ff",
    databaseURL:'https://story-hub-e3312-default-rtdb.firebaseio.com/'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();