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

/* VERIFICA SE EXISTE */

if(menuToggle && navbar){

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}