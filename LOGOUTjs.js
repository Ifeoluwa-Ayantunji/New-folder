
//logout function

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("logout clicked");
  auth.signOut();
  alert("Signed out");
  window.location = "index.html";
}) 