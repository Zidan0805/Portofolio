//Navbar
const line = document.querySelector('#line');
const navbar = document.querySelector('#navbar');

line.addEventListener('click', function() {
    line.classList.toggle('line-active');
    navbar.classList.toggle('hidden');
});

//Navbar Fixed

window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};