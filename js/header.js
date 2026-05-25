const header = document.querySelector(".header");

/* SCROLL HEADER */

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    } else{

        header.classList.remove("scrolled");

    }

});

/* MENU MOBILE */

const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

const headerBtn = document.querySelector(".header-btn");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    headerBtn.classList.toggle("active");

});