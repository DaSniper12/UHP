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

function editProfile(){
  // document.getElementById("trial").innerHTML = "Trial";

  //removing display of edit button to allow display of save Changes
  document.getElementById("edit-profile").style.display = "none";
  document.getElementById("save-changes").style.display = "block";

  //making the textfields changeable
  document.getElementById("firstName").readOnly = false;
  document.getElementById("firstName").style.border = "2px solid black";

  document.getElementById("lastName").readOnly = false;
  document.getElementById("lastName").style.border = "2px solid black";

  document.getElementById("gender").readOnly = false;
  document.getElementById("gender").style.border = "2px solid black";

  document.getElementById("dob").readOnly = false;
  document.getElementById("dob").style.border = "2px solid black";

  document.getElementById("phoneNumber").readOnly = false;
  document.getElementById("phoneNumber").style.border = "2px solid black";

  document.getElementById("email").readOnly = false;
  document.getElementById("email").style.border = "2px solid black";

  document.getElementById("height").readOnly = false;
  document.getElementById("height").style.border = "2px solid black";

  document.getElementById("weight").readOnly = false;
  document.getElementById("weight").style.border = "2px solid black";

  document.getElementById("bloodType").readOnly = false;
  document.getElementById("bloodType").style.border = "2px solid black";

  document.getElementById("hipSize").readOnly = false;
  document.getElementById("hipSize").style.border = "2px solid black";

  document.getElementById("allergies").readOnly = false;
  document.getElementById("allergies").style.border = "2px solid black";

  document.getElementById("eyeColor").readOnly = false;
  document.getElementById("eyeColor").style.border = "2px solid black";

  document.getElementById("substanceAbuse").readOnly = false;
  document.getElementById("substanceAbuse").style.border = "2px solid black";

  document.getElementById("ltd").readOnly = false;
  document.getElementById("ltd").style.border = "2px solid black";

  //document.getElementById().value

}

function saveChanges(){
  //switching back the edit and save changes buttons
  document.getElementById("edit-profile").style.display = "block";
  document.getElementById("save-changes").style.display = "none";

  //getting information from the input textfields
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var eyeColor = document.getElementById("eyeColor").value;
  var bloodType = document.getElementById("bloodType").value;
  var hipSize = document.getElementById("hipSize").value;
  var allergies = document.getElementById("allergies").value;
  var substanceAbuse = document.getElementById("substanceAbuse").value;
  var ltd = document.getElementById("ltd").value;


  // document.getElementById("trial").innerHTML = firstName;

  //making the textfields unchangeable
  document.getElementById("firstName").readOnly = true;
  document.getElementById("firstName").style.border = "none";

  document.getElementById("lastName").readOnly = true;
  document.getElementById("lastName").style.border = "none";

  document.getElementById("gender").readOnly = true;
  document.getElementById("gender").style.border = "none";

  document.getElementById("dob").readOnly = true;
  document.getElementById("dob").style.border = "none";

  document.getElementById("phoneNumber").readOnly = true;
  document.getElementById("phoneNumber").style.border = "none";

  document.getElementById("email").readOnly = true;
  document.getElementById("email").style.border = "none";

  document.getElementById("height").readOnly = true;
  document.getElementById("height").style.border = "none";

  document.getElementById("weight").readOnly = true;
  document.getElementById("weight").style.border = "none";

  document.getElementById("bloodType").readOnly = true;
  document.getElementById("bloodType").style.border = "none";

  document.getElementById("hipSize").readOnly = true;
  document.getElementById("hipSize").style.border = "none";

  document.getElementById("allergies").readOnly = true;
  document.getElementById("allergies").style.border = "none";

  document.getElementById("eyeColor").readOnly = true;
  document.getElementById("eyeColor").style.border = "none";

  document.getElementById("substanceAbuse").readOnly = true;
  document.getElementById("substanceAbuse").style.border = "none";

  document.getElementById("ltd").readOnly = true;
  document.getElementById("ltd").style.border = "none";


}

function billingSetDisabled(){
  document.getElementById("")
}
