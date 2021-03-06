const websiteName = window.location.protocol + "//" + window.location.hostname + "/";


function populateUser(data) {
    const user_field = document.getElementById('user_email');
    user_field.innerText = data;
}

function getUser() {
    $.getJSON(websiteName + "account/user", function (data) { populateUser(data); });
}

document.getElementById("delete-acc").addEventListener('click', () => {
    window.alert("Your account has been successfully deleted.");
});

document.getElementById("change-pass").addEventListener('click', () => {
    window.alert("Your password has sucessfully been changed.");
});

window.onload = getUser();