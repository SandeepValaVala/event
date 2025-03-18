// Slideshow functionality
let images = ["event.jpg", "image.jpeg", "outdoor.jpg"];
let index = 0;
let slide = document.getElementById("slide");

function changeSlide() {
    slide.style.opacity = 0;
    setTimeout(() => {
        slide.src = images[index];
        slide.style.opacity = 1;
        index = (index + 1) % images.length;
    }, 500);
}

setInterval(changeSlide, 3000);

// Toggle mobile menu
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}
