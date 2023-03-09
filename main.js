const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactivo');

    if(!isAsideClosed){
         aside.classList.add('inactivo');
    }

    desktopMenu.classList.toggle('inactivo');
}

function toggleMobilMenu(){
   const isAsideClosed = aside.classList.contains('inactivo');

   if(!isAsideClosed){
        aside.classList.add('inactivo');
   }

    mobileMenu.classList.toggle('inactivo');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactivo');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactivo');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactivo')
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactivo')
    }
    
    aside.classList.toggle('inactivo');
}