  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAUmYtAUsfOZG3XbCwGUBeEC7go5eWRdFQ",
    authDomain: "feets-authentication.firebaseapp.com",
    projectId: "feets-authentication",
    storageBucket: "feets-authentication.appspot.com",
    messagingSenderId: "589241135130",
    appId: "1:589241135130:web:6070c28a0b18ac399761a3"
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
 
     var email = document.getElementById("inputEmail");
     var password = document.getElementById("inputPassword");
 
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