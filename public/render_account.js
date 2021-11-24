const websiteName = 'https://courseoverflow.herokuapp.com/';
// const websiteName = 'http://localhost:3000/';

function populateUser(data) {
    const user_field = document.getElementById('user_email');
    user_field.innerText += data;
}

function getUser() {
    $.getJSON(websiteName + "account/user", function (data) { populateUser(data); });
}

window.onload = getUser();