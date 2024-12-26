const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

const folderPath = './Images/'; 
const imagePrefix = 'i'; 
const imageExtension = '.png'; 
const totalImages = 5; 

let currentIndex = 0;
let autoSlideInterval;

function loadImages() {
    const fragment = document.createDocumentFragment();

    const lastImage = document.createElement('img');
    lastImage.src = `${folderPath}${imagePrefix}${totalImages}${imageExtension}`;
    lastImage.style.width = '100%';
    lastImage.style.objectFit = 'cover';
    fragment.appendChild(lastImage);

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `${folderPath}${imagePrefix}${i}${imageExtension}`;
        img.style.width = '100%';
        img.style.objectFit = 'cover';
        fragment.appendChild(img);
    }

    const firstImage = document.createElement('img');
    firstImage.src = `${folderPath}${imagePrefix}1${imageExtension}`;
    firstImage.style.width = '100%';
    firstImage.style.objectFit = 'cover';
    fragment.appendChild(firstImage);

    carousel.appendChild(fragment);

    carousel.style.transform = `translateX(-100%)`;
}

function updateCarousel() {
    const offset = -(currentIndex + 1) * 100; 
    carousel.style.transition = 'transform 0.8s ease-in-out';
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    currentIndex++;
    updateCarousel();

    if (currentIndex >= totalImages) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = 0;
            carousel.style.transform = `translateX(-100%)`;
        }, 800);
    }

    resetAutoSlide();
}

function prevImage() {
    currentIndex--;
    updateCarousel();

    if (currentIndex < 0) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = totalImages - 1;
            carousel.style.transform = `translateX(-${totalImages * 100}%)`;
        }, 800);
    }

    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 6000); 
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

loadImages();
startAutoSlide();
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);




// code for counter updatation
const conferenceDate = new Date('2026-01-01T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = conferenceDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "Conference has started!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 