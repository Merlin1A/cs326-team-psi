const websiteName = window.location.protocol + "//" + window.location.hostname + "/";

function postReview(coursecode, comment) {
  $.post(websiteName + "course/review/new?comment=" + String(comment) + "&coursecode=" + String(coursecode));
}

function postRating(coursecode, difficulty, rating, enjoyment, weeklyhours) {
  $.post(websiteName + "course/survey/new?difficulty=" + String(difficulty) + "&enjoyment=" + String(enjoyment) + "&rating=" + String(rating) + "&weeklyhours=" + String(weeklyhours) + "&coursecode=" + String(coursecode));
}

window.onload = () => {
    const course_name = window.localStorage.getItem('course');
    document.getElementById("name").innerText = course_name.substring(1,course_name.length-1);
    document.getElementById("name2").innerText = "Write a review for " + course_name.substring(1,course_name.length-1);
};

document.getElementById("review-submit").addEventListener('click', () => {
    const review = document.getElementById('enter-review').value;
    const coursecode = window.localStorage.getItem('coursecode');
    postReview(coursecode.substring(1,coursecode.length-1), review);
});

document.getElementById("rating-submit").addEventListener('click', () => {
    const difficulty = document.getElementById("difficulty").value;
    const rating = document.getElementById("rating").value;
    const enjoyment = document.getElementById("enjoyment").value;
    const hoursSpent = document.getElementById("weekly-hours").value;
    const coursecode = window.localStorage.getItem('coursecode');
    postRating(coursecode, difficulty, rating, enjoyment, hoursSpent);

});

function validateRating(){
    const firstYes = document.getElementById("yes-ans");
    const secYes = document.getElementById("yes-ans-1");
    const thirdYes = document.getElementById("yes-ans-2");
 
    const firstMay = document.getElementById("maybe-ans");
    const secMay = document.getElementById("maybe-ans-1");
    const thirdMay = document.getElementById("maybe-ans-2");
 
    const firstNo = document.getElementById("no-ans");
    const secNo = document.getElementById("no-ans-1");
    const thirdNo = document.getElementById("no-ans-2");
 
    const time = document.getElementById("weekly-hours");
 
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
     const review = document.getElementById('enter-review').value;
     if(review.length === 0){
         alert("Please enter a review.");
     }
     else{
         alert("Review succesfully submitted");
     }
 }
 
 document.getElementById('rating-submit').addEventListener('click', validateRating);
 document.getElementById('review-submit').addEventListener('click', validateReview);
