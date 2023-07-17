let signUpsButton = document.getElementById("signups");
let signInsButton = document.getElementById("signins");
let rootContainer = document.getElementById("rootContainer");

signUpsButton.addEventListener("click", () => {
  rootContainer.classList.add("right-side-active");
});
signInsButton.addEventListener("click", () => {
  rootContainer.classList.remove("right-side-active");
});

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyA3bvI01e5XtUDF_-oPW-EPUl0M42kUjuI",
  authDomain: "wisemonk-67a93.firebaseapp.com",
  projectId: "wisemonk-67a93",
  storageBucket: "wisemonk-67a93.appspot.com",
  messagingSenderId: "1079565482098",
  appId: "1:1079565482098:web:6fd4df25827027e2d6eaeb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

//signup function
let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) =>{
    // prevent default form submission behaviour
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        location.reload();
        alert("user signed up successful");

        //signed in
        var user = userCredential.user;
        console.log("user, user.email");
        window.location = "home.html";

    })

    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error Message", error);
        alert(errorMessage);
    });
});


//Sign in Function
let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("sign in clicked");

    var email = document.getElementById("inputEmails");
    var password = document.getElementById("inputPasswords");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log("user", user.email);
        window.location = "home.html";
        alert("Logged In successful");
    })

    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
});