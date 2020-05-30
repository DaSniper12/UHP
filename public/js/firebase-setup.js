// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCosTe8fqB4buDgE_i3u8yjwGce-61tMkQ",
  authDomain: "uhp-project.firebaseapp.com",
  databaseURL: "https://uhp-project.firebaseio.com",
  projectId: "uhp-project",
  storageBucket: "uhp-project.appspot.com",
  messagingSenderId: "615262963126",
  appId: "1:615262963126:web:70a5d974a3d7dc39d6ed17"
};
// Initialize Firebase
var user
var userType
let db

(function() {
  var $login = $('#login');
  var $signOut = $('#sign-out');

  firebase.initializeApp(firebaseConfig);
  db = firebase.database()

})()
