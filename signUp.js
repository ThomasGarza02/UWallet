// user inputs
const emailInput = document.getElementById('emailInput');
const paswordInput = document.getElementById('passwordInput');
const fnameInput = document.getElementById('fnameInput');
const lnameInput = document.getElementById('lnameInput');
const schoolInput = document.getElementById('schoolInput');
const incomeInput = document.getElementById('incomeInput');
const ageInput = document.getElementById('ageInput');

//buttons
const signupbtn = document.getElementById('signupbtn');


function Signup(){
    window.location.href = "login.html"
    //TO-DO
    // add user using user inputs into some database
}

//when buttons are clicked 
signupbtn.addEventListener('click',Signup)