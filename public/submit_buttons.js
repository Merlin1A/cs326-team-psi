function validateAcc(){
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let retype = document.getElementById('retype-password').value;
    if(email.length === 0 || name === "Name" || username === "Username" || password === "Passoword" || retype === "Retype password"){
        alert("Please fill in all fields in order to sign up.")
    } 
    else {
        alert("You are now signed up!");
    }
}

document.getElementById('sign-up').addEventListener('click', validateAcc);