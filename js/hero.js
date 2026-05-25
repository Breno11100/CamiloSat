const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

let slideInterval;

/* MOSTRAR SLIDE */

function showSlide(index){

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    indicators.forEach((indicator) => {
        indicator.classList.remove("active");
    });

    slides[index].classList.add("active");

    indicators[index].classList.add("active");

}

/* PRÓXIMO */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

/* ANTERIOR */

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

/* AUTO PLAY */

function startAutoPlay(){

    slideInterval = setInterval(() => {

        nextSlide();

    }, 7000);

}

/* REINICIAR TIMER */

function resetAutoPlay(){

    clearInterval(slideInterval);

    startAutoPlay();

}

/* EVENTOS */

nextBtn.addEventListener("click", () => {

    nextSlide();

    resetAutoPlay();

});

prevBtn.addEventListener("click", () => {

    prevSlide();

    resetAutoPlay();

});

/* INICIAR */

startAutoPlay();