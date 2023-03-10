let slideButton = document.querySelector('.slide-button');
let button = document.querySelector('.slide-button > button');

let body = document.querySelector('body');

function changeTheme() {
    slideButton.classList.toggle('slide-button-light');
    button.classList.toggle('button-light');
    body.classList.toggle('light');
}
slideButton.addEventListener('click', changeTheme);