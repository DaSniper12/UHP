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
var uAuth
let uDb
var userType
let appointmentNum = 0
let db

(function() {
  firebase.initializeApp(firebaseConfig);
  db = firebase.database()
  authChange()
})()

function signUp() {
  // List of data gathered: date, name, email, password
  let inputEmail = document.getElementById("signup-email").value;
  let inputPassword = document.getElementById("signup-password").value;
  let inputName = document.getElementById("signup-name").value;
  let inputDate = document.getElementById("signup-date").value;
  firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPassword).then(userCredential => {
    uAuth = userCredential.user
    console.log(uAuth);
    ref = db.ref("Users/" + uAuth.uid)
    ref.set({
      email: inputEmail,
      dob: inputDate,
      name: inputName
    }).then((result) => {
      // The signed-in user info.
      console.log("success");
    }).catch((error) => {
      // Handle Errors here.
      console.log("error");
      console.err(error.code);
    })
    window.location.href = "dashboard.html"
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
    uAuth = user.user
    console.log(uAuth);
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
    uAuth = null
    window.location.href = "index.html"
    console.log("sign out succesful");
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}
function authChange() {
  firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
      uAuth = user
      let ref = db.ref("Users/" + uAuth.uid)
      await ref.once('value', (snapshot => uDb = snapshot.val()), (err => {
        if (error) {
          console.error(error.code);
          console.log(error.message);
        }
      }))

      let account = document.getElementById("account")
      if (account)
        account.innerHTML = uDb.name

      if (window.location.pathname == "/profile.html")
        await fillProfileInfo()
      if (window.location.pathname == "/appointments.html")
        await getAppointmentData()
    } else
    uAuth = null
  });
  return true
}

function fillProfileInfo() {
  console.log(uDb);
  let email       = uDb.email,
      dob         = uDb.dob,
      name        = uDb.name,
      gender      = uDb.gender,
      phoneNumber = uDb.phoneNumber,
      height      = uDb.height,
      weight      = uDb.weight,
      bloodType   = uDb.bloodType,
      hipSize     = uDb.hipSize,
      eyeColor    = uDb.eyeColor,
      allergies   = uDb.allergies,
      substanceAbuse = uDb.substanceAbuse,
      ltd         = uDb.ltd;

  document.getElementById("nameInput").value = name;
  document.getElementById("genderInput").value = gender;
  document.getElementById("dobInput").value = dob;
  document.getElementById("emailInput").value = email;
  document.getElementById("phoneNumberInput").value = phoneNumber;
  document.getElementById("heightInput").value = height;
  document.getElementById("weightInput").value = weight;
  document.getElementById("eyeColorInput").value = eyeColor;
  document.getElementById("bloodTypeInput").value = bloodType;
  document.getElementById("hipSizeInput").value = hipSize;
  document.getElementById("allergiesInput").value = allergies;
  document.getElementById("substanceAbuseInput").value = substanceAbuse;
  document.getElementById("ltdInput").value = ltd;
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

  updateProfile(nameInput, dobInput, genderInput, emailInput, phoneNumberInput, heightInput, weightInput,
   eyeColorInput, bloodTypeInput, hipSizeInput, allergiesInput, substanceAbuseInput, ltdInput);


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

function updateProfile(nameInput, dobInput, genderInput, emailInput,
  phoneNumberInput, heightInput, weightInput, eyeColorInput, bloodTypeInput,
  hipSizeInput, allergiesInput, substanceAbuseInput, ltdInput) {
  ref = db.ref("Users/" + uAuth.uid)
  ref.update({
    email: emailInput,
    dob: dobInput,
    name: nameInput,
    gender: genderInput,
    phoneNumber: phoneNumberInput,
    height: heightInput,
    weight: weightInput,
    bloodType: bloodTypeInput,
    hipSize: hipSizeInput,
    eyeColor: eyeColorInput,
    allergies: allergiesInput,
    substanceAbuse: substanceAbuseInput,
    ltd: ltdInput
  }).then((result) => {
    // The signed-in user info.
    console.log("success");
  }).catch((error) => {
    // Handle Errors here.
    console.log("error");
    console.err(error.code);
  })
}

function billingSetDisabled(){
  document.getElementById("")
}

function submitAppointmentData() {
  let inputDoctor = document.getElementById("newDoctorsName").value;
  let inputDate = document.getElementById("newDate").value;
  appointmentRef = db.ref("Appointments/").push()
  userRef = db.ref("Users/" + uAuth.uid + "/Appointments/")
  let appointmentKey = appointmentRef.key
  let updates = {}
  updates['/' + appointmentKey] = true;

  appointmentRef.set({
    doctor: inputDoctor,
    date: inputDate,
    patient: uAuth.uid
  }).then((result) => {
    // The signed-in user info.
    console.log("success");
  }).catch((error) => {
    // Handle Errors here.
    console.log("error");
    console.err(error.code);
  })
  userRef.update(updates)
  .then((result) => {
    // The signed-in user info.
    console.log("success");
  })
  .catch((error) => {
    // Handle Errors here.
    console.log("error");
    console.err(error.code);
  })
  // userRef.update({
  //   appointmentKey: true
  // }
}
function getAppointmentData() {
  let userRef = db.ref("Users/" + uAuth.uid + "/Appointments");
  userRef.on('child_added', (snapshot => {
    let appointmentRef  = db.ref("Appointments/" + snapshot.key);
    console.log(snapshot.key);
    console.log(appointmentRef);
    appointmentRef.once('value').then(function(snapshot) {
      let data = snapshot.val(),
          doctorName = data.doctor,
          date = data.date;
      console.log(data);
      createAppointmentDiv(appointmentNum++, doctorName, date)
    })
  }), (err => {
    console.log(error.message);
    console.err(error.code);
  }))
}
