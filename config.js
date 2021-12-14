import firebase from 'firebase';
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyBoF8Sxh5-52rjUcYyzynPldj8gQVmkSb8",
    authDomain: "c71-project-story-hub-serios.firebaseapp.com",
    projectId: "c71-project-story-hub-serios",
    storageBucket: "c71-project-story-hub-serios.appspot.com",
    messagingSenderId: "532848726879",
    appId: "1:532848726879:web:e085c3387864f92c291cea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();