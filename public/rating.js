// const websiteName = 'https://courseoverflow.herokuapp.com/';
const websiteName = 'http://localhost:3000/';

function postReview(coursecode, comment) {
  $.post(websiteName + "course/review/new?comment=" + String(comment) + "&coursecode=" + String(coursecode));
}

function postRating(coursecode, takeagain, enjoyment, resources, weeklyhours) {
  $.post(websiteName + "course/survey/new?takeagain=" + String(takeagain) + "&enjoyment=" + String(enjoyment) + "&resources=" + String(resources) + "&weeklyhours=" + String(weeklyhours) + "&coursecode=" + String(coursecode));
}

window.onload = () => {
let course_name = window.localStorage.getItem('course');
document.getElementById("name").innerText = course_name.substring(1,course_name.length-1);
document.getElementById("name2").innerText = "Write a review for " + course_name.substring(1,course_name.length-1);
};
document.getElementById("review-submit").addEventListener('click', () => {
    const review = document.getElementById('enter-review').value;
    const coursecode = window.localStorage.getItem('coursecode');
    postReview(coursecode.substring(1,coursecode.length-1), review);
});
document.getElementById("rating-submit").addEventListener('click', () => {
    const wouldTakeAgain = document.getElementById("takeagain").value;
    const enjoyedMaterial = document.getElementById("enjoyment").value;
    const resourcesUseful = document.getElementById("resources").value;
    const hoursSpent = document.getElementById("weekly-hours").value;
    const coursecode = window.localStorage.getItem('coursecode');
    postRating(coursecode, wouldTakeAgain, enjoyedMaterial, resourcesUseful, hoursSpent);

});

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
 
 document.getElementById('rating-submit').addEventListener('click', validateRating);
 document.getElementById('review-submit').addEventListener('click', validateReview);
