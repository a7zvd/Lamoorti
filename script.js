let slideIndex = 0;
const slides = document.getElementsByClassName('slide');
function showSlides() {
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4500);
}
showSlides();

// Timer since June 20, 2025
const startDate = new Date("2025-06-20T00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = now - startDate;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('timer').innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s together 💖";
}, 1000);

// Falling hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.innerHTML = '❤️';
    document.querySelector('.overlay').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 200);
