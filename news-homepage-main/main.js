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
    let web3Mobile = document.querySelector('.img-web3-mobile');
    let web3Desktop = document.querySelector('.img-web3-desktop');


    if (window.innerWidth >= 992) {
        web3Mobile.style.display = 'none';
        web3Desktop.style.display = 'block';

        iconMenu.style.display = 'none';
        menu.style.display = 'block';
        menuClose.style.display = 'none';
    } else {
        web3Mobile.style.display = 'block';
        web3Desktop.style.display = 'none';

        iconMenu.style.display = 'block';
        menu.style.display = 'none';
        menuClose.style.display = 'block';
    }
}