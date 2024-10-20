// user inputs
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
//buttons
const loginbtn = document.getElementById('loginbtn');
const signupbtn = document.getElementById('signupbtn');

function getLogin(){
// get login and store it into database
//for now it just send user to home page
window.location.href = "index.html"
}
function Signup(){
    window.location.href = "signUp.html"
}

//when buttons are clicked 
loginbtn.addEventListener('click',getLogin)
signupbtn.addEventListener('click',Signup)