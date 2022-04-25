import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

const auth = getAuth();

try {
  document.getElementById("signupbtn").addEventListener('click', register);
} catch (error) {
  console.log(error);
}


//signup function
function register() {
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      window.location.replace('home.html');

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error, errorMessage);

      // ..
    });

}
try {
  document.getElementById("signinbtn").addEventListener('click', login);

} catch (error) {
  console.log(error);
}

function login() {

  var email = document.getElementById("signin-email").value;
  var password = document.getElementById("signin-password").value;
  console.log(email, password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      window.location.replace('home.html');

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error, errorMessage);

      // ..
    });
}
try {
  document.getElementById("logout-btn").addEventListener("click", signout)

} catch (error) {
  console.log(error)
}



function signout() {
  console.log("siging out")
  signOut(auth).then(() => {
    window.location.replace("index.html");
  }).catch((error) => {
    console.log(error);
  });

}

