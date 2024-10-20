var sqlite3 = require('sqlite3');

db = new sqlite3.Database('./database/wallet.db')
// user inputs
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
//buttons
const loginbtn = document.getElementById('loginbtn');
const signupbtn = document.getElementById('signupbtn');

function getLogin(){
// get login and store it into database
 if (db.get("SELECT email FROM Users Where type = ? ",[emailInput]) == null){
     alert("no email found");
 }
// else if (db.get("SELECT * FROM Users Where type = ? ",[emailInput]) ){
//     alert("wrong password");
// }

//for now it just send user to home page
window.location.href = "index.html"
}
function Signup(){
    window.location.href = "signUp.html"
}

//when buttons are clicked 
loginbtn.addEventListener('click',getLogin)
signupbtn.addEventListener('click',Signup)