const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactivo');
}

function toggleMobilMenu(){
    mobileMenu.classList.toggle('inactivo');
}