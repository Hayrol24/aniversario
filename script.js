// script.js
let currentIndex = 0;

function showNextImage() {
    const slides = document.querySelector('.slides');
    const totalImages = document.querySelectorAll('.slides img').length;
    
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 2000); // Cambia la imagen cada 3 segundos