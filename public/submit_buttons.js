function validateAcc(){
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let retype = document.getElementById('retype-password').value;
    if(email.length === 0 || !email.endsWith("umass.edu")){
        alert("Please enter a valid email in order to sign up.");
    } 
    else if (name.length === 0){
        alert("Please enter your name.");
    }
    else if (username.length === 0){
        alert("Please enter a username");
    }
    else if(password.length === 0){
        alert("Please enter a password");
    }
    else if (retype.length === 0 || retype !== password){
        alert("Please confirm your password");
    }
    else {
        alert("You are now signed up!");
    }
}

document.getElementById('sign-up').addEventListener('click', validateAcc);