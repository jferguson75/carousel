const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

//grab the dots element from the DOM
const dotsEl = document.getElementsByClassName("dot")
dotsEl[slidePosition].style.backgroundColor = "#fff";

//displays the dots and links them to the slidePosition so that they move simultaneously.
function displayDots() {
    for (let dots of dotsEl){
        dots.style.backgroundColor = "#575757"
        dots = slidePosition
        dotsEl[dots].style.backgroundColor = "#fff"
    }
}    

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

//auto transition slides after 3 secs
setInterval(moveToNextSlide, 3000)

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
    displayDots()
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}