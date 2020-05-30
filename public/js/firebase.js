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
    window.location.href = "dashboard.html"
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
  firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).then(user => {
    u = user.user
    window.location.href = "dashboard.html"
  }).catch(function(error) {
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
    window.location.href = "index.html"
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

function getProfileInfo(){
  document.getElementById("trial").innerHTML = "Load Works";
  // var name;//firebase name etc
  // var gender;
  // var dob;
  // var email;
  // var phoneNumber;
  // var height;
  // var weight;
  // var eyeColor;
  // var bloodType;
  // var hipSize;
  // var allergies;
  // var substanceAbuse;
  // var ltd;
  //
  // document.getElementById("nameInput").placeholder = name;
  // document.getElementById("genderInput").placeholder = gender;
  // document.getElementById("dobInput").placeholder = dob;
  // document.getElementById("emailIbput").placeholder = email;
  // document.getElementById("phoneNumberInput").placeholder = phoneNumber;
  // document.getElementById("heightInput").placeholder = height;
  // document.getElementById("weightInput").placeholder = weight;
  // document.getElementById("eyeColorInput").placeholder = eyeColor;
  // document.getElementById("bloodTypeInput").placeholder = bloodType;
  // document.getElementById("hipSizeInput").placeholder = hipSize;
  // document.getElementById("allergiesnput").placeholder = allergies;
  // document.getElementById("substanceAbuseInput").placeholder = substanceAbuse;
  // document.getElementById("ltdInput").placeholder = ltd;
}

function editProfile(){
  // document.getElementById("trial").innerHTML = "Trial";

  //removing display of edit button to allow display of save Changes
  document.getElementById("edit-profile").style.display = "none";
  document.getElementById("save-changes").style.display = "block";

  //making the textfields changeable
  document.getElementById("nameInput").readOnly = false;
  document.getElementById("nameInput").style.border = "2px solid black";

  // document.getElementById("lastName").readOnly = false;
  // document.getElementById("lastName").style.border = "2px solid black";

  document.getElementById("genderInput").readOnly = false;
  document.getElementById("genderInput").style.border = "2px solid black";

  document.getElementById("dobInput").readOnly = false;
  document.getElementById("dobInput").style.border = "2px solid black";

  document.getElementById("phoneNumberInput").readOnly = false;
  document.getElementById("phoneNumberInput").style.border = "2px solid black";

  document.getElementById("emailInput").readOnly = false;
  document.getElementById("emailInput").style.border = "2px solid black";

  document.getElementById("heightInput").readOnly = false;
  document.getElementById("heightInput").style.border = "2px solid black";

  document.getElementById("weightInput").readOnly = false;
  document.getElementById("weightInput").style.border = "2px solid black";

  document.getElementById("bloodTypeInput").readOnly = false;
  document.getElementById("bloodTypeInput").style.border = "2px solid black";

  document.getElementById("hipSizeInput").readOnly = false;
  document.getElementById("hipSizeInput").style.border = "2px solid black";

  document.getElementById("allergiesInput").readOnly = false;
  document.getElementById("allergiesInput").style.border = "2px solid black";

  document.getElementById("eyeColorInput").readOnly = false;
  document.getElementById("eyeColorInput").style.border = "2px solid black";

  document.getElementById("substanceAbuseInput").readOnly = false;
  document.getElementById("substanceAbuseInput").style.border = "2px solid black";

  document.getElementById("ltdInput").readOnly = false;
  document.getElementById("ltdInput").style.border = "2px solid black";

  //document.getElementById().value

}

function saveChanges(){
  //switching back the edit and save changes buttons
  document.getElementById("edit-profile").style.display = "block";
  document.getElementById("save-changes").style.display = "none";

  //getting information from the input textfields
  var nameInput = document.getElementById("nameInput").value;
  // var lastName = document.getElementById("lastName").value;
  var dobInput = document.getElementById("dobInput").value;
  var genderInput = document.getElementById("genderInput").value;
  var emailInput = document.getElementById("emailInput").value;
  var phoneNumberInput = document.getElementById("phoneNumberInput").value;
  var heightInput = document.getElementById("heightInput").value;
  var weightInput = document.getElementById("weightInput").value;
  var eyeColorInput = document.getElementById("eyeColorInput").value;
  var bloodTypeInput = document.getElementById("bloodTypeInput").value;
  var hipSizeInput = document.getElementById("hipSizeInput").value;
  var allergiesInput = document.getElementById("allergiesInput").value;
  var substanceAbuseInput = document.getElementById("substanceAbuseInput").value;
  var ltdInput = document.getElementById("ltdInput").value;

  // updateProfile(nameInput, dobInput, genderInput, emailInput, phoneNumberInput, heightInput, weightInput,
  //  eyeColorInput, bloodTypeInput, hipSizeInput, allergiesInput, substanceAbuseInput, ltdInput);


  // document.getElementById("trial").innerHTML = firstName;

  //making the textfields unchangeable
  document.getElementById("nameInput").readOnly = true;
  document.getElementById("nameInput").style.border = "none";

  // document.getElementById("lastName").readOnly = true;
  // document.getElementById("lastName").style.border = "none";

  document.getElementById("genderInput").readOnly = true;
  document.getElementById("genderInput").style.border = "none";

  document.getElementById("dobInput").readOnly = true;
  document.getElementById("dobInput").style.border = "none";

  document.getElementById("phoneNumberInput").readOnly = true;
  document.getElementById("phoneNumberInput").style.border = "none";

  document.getElementById("emailInput").readOnly = true;
  document.getElementById("emailInput").style.border = "none";

  document.getElementById("heightInput").readOnly = true;
  document.getElementById("heightInput").style.border = "none";

  document.getElementById("weightInput").readOnly = true;
  document.getElementById("weightInput").style.border = "none";

  document.getElementById("bloodTypeInput").readOnly = true;
  document.getElementById("bloodTypeInput").style.border = "none";

  document.getElementById("hipSizeInput").readOnly = true;
  document.getElementById("hipSizeInput").style.border = "none";

  document.getElementById("allergiesInput").readOnly = true;
  document.getElementById("allergiesInput").style.border = "none";

  document.getElementById("eyeColorInput").readOnly = true;
  document.getElementById("eyeColorInput").style.border = "none";

  document.getElementById("substanceAbuseInput").readOnly = true;
  document.getElementById("substanceAbuseInput").style.border = "none";

  document.getElementById("ltdInput").readOnly = true;
  document.getElementById("ltdInput").style.border = "none";


}

function billingSetDisabled(){
  document.getElementById("")
}
