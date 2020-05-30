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
var u
var userType
let db

(function() {
  firebase.initializeApp(firebaseConfig);
  db = firebase.database()
})()

function signUp() {
  // List of data gathered: date, name, email, password
  let inputEmail = document.getElementById("signup-email").value;
  let inputPassword = document.getElementById("signup-password").value;
  let inputName = document.getElementById("signup-name").value;
  let inputDate = document.getElementById("signup-date").value;
  firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPassword).then(userCredential => {
    u = userCredential.user
    ref = db.ref("Users/" + u.uid)
    ref.set({
      email: inputEmail,
      date: inputDate,
      name: inputName
    }).then((result) => {
      // The signed-in user info.
      console.log("success");
    }).catch((error) => {
      // Handle Errors here.
      console.log("error");
      console.err(error.code);
    })
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
}
function signIn() {
  // List of data gathered: date, name, email, password
  let inputEmail = document.getElementById("login-email").value;
  let inputPassword = document.getElementById("login-password").value;
  firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).then(user => u = user.user).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}
function signOut() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    u = null
    console.log("sign out succesful");
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}
function authChange() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      u = user
    } else {
      // No user is signed in.
    }
  });
}
