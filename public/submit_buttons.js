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

function validateRating(){
   let firstYes = document.getElementById("yes-ans");
   let secYes = document.getElementById("yes-ans-1");
   let thirdYes = document.getElementById("yes-ans-2");

   let firstMay = document.getElementById("maybe-ans");
   let secMay = document.getElementById("maybe-ans-1");
   let thirdMay = document.getElementById("maybe-ans-2");

   let firstNo = document.getElementById("no-ans");
   let secNo = document.getElementById("no-ans-1");
   let thirdNo = document.getElementById("no-ans-2");

   let time = document.getElementById("weekly-hours");

   if(!firstYes.checked && !firstMay.checked && !firstNo.checked){
       alert("Please select a choice for 'Would you take this course again?'.");
   }
   else if(!secYes.checked && !secMay.checked && !secNo.checked){
    alert("Please select a choice for 'Did you enjoy the material for this course?'.");
    }
    else if(!thirdYes.checked && !thirdMay.checked && !thirdNo.checked){
        alert("Please select a choice for 'Did you find the resources helpful?'.");
    }
    else if(time.length === 0){
        alert("Please enter the amount of time you have spent on this course.");
    }
    else{
        alert("You have successfully submitted your rating for this course!");
    }
}

function validateReview(){
    let review = document.getElementById('enter-review').value;
    if(review.length === 0){
        alert("Please enter a review.");
    }
    else{
        alert("Review succesfully submitted");
    }
}

document.getElementById('sign-up').addEventListener('click', validateAcc);
document.getElementById('rating-submit').addEventListener('click', validateRating);
document.getElementById('review-submit').addEventListener('click', validateReview);