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
    fragment.appendChild(lastImage);
    
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `${folderPath}${imagePrefix}${i}${imageExtension}`;
        fragment.appendChild(img);
    }

    const firstImage = document.createElement('img');
    firstImage.src = `${folderPath}${imagePrefix}1${imageExtension}`;
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
        }, 500); 
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
        }, 500); 
    }

    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 4000); 
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

loadImages();
startAutoSlide();
