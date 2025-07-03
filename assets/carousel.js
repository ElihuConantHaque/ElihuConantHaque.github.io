document.addEventListener('DOMContentLoaded', function () {
  const images = [
    'assets/images/products/Photo 2—1.jpg',
    'assets/images/products/Photo 2—2.jpg',
    'assets/images/products/Photo 2—4.jpg',
    'assets/images/products/Photo 2—16.jpg',
    'assets/images/products/Photo 2—17.jpg',
  ];
  let current = 0;
  let isSliding = false;
  let slideDirection = 0; // -1 for left, 1 for right
  const prevImg = document.getElementById('prevImg');
  const currentImg = document.getElementById('currentImg');
  const nextImg = document.getElementById('nextImg');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function updateCarousel() {
    const prevIndex = (current - 1 + images.length) % images.length;
    const nextIndex = (current + 1) % images.length;
    prevImg.src = images[prevIndex];
    nextImg.src = images[nextIndex];
    currentImg.src = images[current];
    currentImg.style.transform = 'translateX(0)';
    currentImg.style.transition = 'none';
  }

  prevBtn.onclick = () => {
    if (isSliding) return;
    isSliding = true;
    slideDirection = -1;
    current = (current - 1 + images.length) % images.length;
    updateCarousel();
    setTimeout(() => { isSliding = false; }, 100);
  };
  nextBtn.onclick = () => {
    if (isSliding) return;
    isSliding = true;
    slideDirection = 1;
    current = (current + 1) % images.length;
    updateCarousel();
    setTimeout(() => { isSliding = false; }, 100);
  };
  prevImg.onclick = prevBtn.onclick;
  nextImg.onclick = nextBtn.onclick;

  // Initialize
  updateCarousel();
}); 