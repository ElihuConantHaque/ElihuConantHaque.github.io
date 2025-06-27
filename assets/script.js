// Mobile menu functionality
const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

if (menuButton && dropdownMenu) {
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!dropdownMenu.classList.contains('hidden') && !dropdownMenu.contains(e.target) && e.target !== menuButton) {
            dropdownMenu.classList.add('hidden');
        }
    });
}

const carousel = document.getElementById('carousel');
const images = carousel.children;
const totalImages = images.length;
let index = 0;

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
