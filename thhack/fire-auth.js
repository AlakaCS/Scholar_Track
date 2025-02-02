// 🔥 Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1YgxIOV1LrC1KxsFEmyJztHFmjDa82Lo",
    authDomain: "scholartrack-26009.firebaseapp.com",
    projectId: "scholartrack-26009",
    messagingSenderId: "937787555874",
    appId: "1:937787555874:web:e1fd70dd1fe40b3dc90a7b",
    measurementId: "G-MZY5H6R4K8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 🔹 LOGIN FUNCTION
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "home.html"; // Redirect to home page
        })
        .catch((error) => {
            document.getElementById("error-message").innerText = error.message;
        });
});

// 🔹 SIGN-UP FUNCTION
function registerUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("User Registered Successfully!");
            window.location.href = "home.html"; // Redirect after sign-up
        })
        .catch((error) => {
            document.getElementById("error-message").innerText = error.message;
        });
}
