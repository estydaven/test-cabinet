const SAVE_BTN = document.querySelector('#save-btn');
const CHANGE_BTN = document.querySelector('.user-name__change');
const USER_NAME = document.querySelector('.user-name');
const FORM_CHANGE_NAME = document.querySelector('#form-name');

function showUserName () {
    USER_NAME.style.display = "flex";
    FORM_CHANGE_NAME.style.display = "none";
}
function hiddenUserName () {
    USER_NAME.style.display = "none";
    FORM_CHANGE_NAME.style.display = "flex";
}

SAVE_BTN.addEventListener('click', showUserName);
CHANGE_BTN.addEventListener('click', hiddenUserName);