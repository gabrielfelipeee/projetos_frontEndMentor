let iconMenu = document.querySelector('.icon-menu');
let menu = document.querySelector('menu');
let menuClose = document.querySelector('.menu-close');

iconMenu.onclick = function() {
    menu.style.display = 'block';
}
menuClose.onclick = function() {
    menu.style.display = 'none';
};


function screenWidth() {
    if (window.innerWidth >= 992) {
        iconMenu.style.display = 'none';
        menu.style.display = 'block';
        menuClose.style.display = 'none';
    } else {
        iconMenu.style.display = 'block';
        menu.style.display = 'none';
        menuClose.style.display = 'block';
    }
}