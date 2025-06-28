document.addEventListener('DOMContentLoaded', function() {
    const mainProductImage = document.getElementById('main-product-image');
    const thumbnailGallery = document.getElementById('thumbnail-gallery');
    const prevImageBtn = document.getElementById('prev-image-btn');
    const nextImageBtn = document.getElementById('next-image-btn');
    const quantityInput = document.getElementById('quantity');
    const zoomBtn = document.getElementById('zoom-btn');

    // Array of image and video URLs (including a placeholder for video)
    const productMedia = [
        { type: 'image', url: 'assets/images/products/Products_ Main Images/Product 1 Photo 1.jpg' }, // Replace with actual image URLs
        { type: 'image', url: 'assets/images/products/Products_ Main Images/Product 2 Photo 2.jpg' },
        { type: 'image', url: 'assets/images/products/Products_ Main Images/Product 3 Photo 1.jpg' }
        // { type: 'image', url: 'assets/images/products/Products_ Main Images/Product 1 Photo 4.jpg' },
        // { type: 'image', url: 'assets/images/products/Products_ Main Images/Product 1 Photo 5.jpg' },
        // { type: 'image', url: 'assets/images/products/Products_ Main Images/Product 1 Photo 6.jpg' },
    ];

    let currentImageIndex = 0; // To track the currently displayed main image

    // Zoom functionality
    let isZoomed = false;
    let currentScale = 1;

    function toggleZoom() {
        if (isZoomed) {
            // Reset zoom
            mainProductImage.style.transform = 'scale(1)';
            currentScale = 1;
            isZoomed = false;
            zoomBtn.innerHTML = '<i class="fas fa-search-plus text-lg"></i>';
        } else {
            // Apply zoom
            mainProductImage.style.transform = 'scale(1.5)';
            currentScale = 1.5;
            isZoomed = true;
            zoomBtn.innerHTML = '<i class="fas fa-search-minus text-lg"></i>';
        }
    }

    // Function to update the main product image
    function updateMainImage(index) {
        if (index >= 0 && index < productMedia.length) {
            currentImageIndex = index;
            const media = productMedia[index];
            mainProductImage.src = media.url;
            // You might want to hide/show video player based on media.type
            // For now, we're just changing the image source.

            // Update active state of thumbnails
            document.querySelectorAll('.thumbnail-item').forEach((thumb, i) => {
                if (i === index) {
                    thumb.classList.add('border-blue-500'); // Active border
                    thumb.classList.remove('border-gray-300');
                    // Scroll active thumbnail into view if it's out of bounds
                    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    thumb.classList.remove('border-blue-500');
                    thumb.classList.add('border-gray-300');
                }
            });
        }
    }

    // Function to generate thumbnails
    function generateThumbnails() {
        thumbnailGallery.innerHTML = ''; // Clear existing thumbnails

        productMedia.forEach((media, index) => {
            const thumbnailContainer = document.createElement('div');
            thumbnailContainer.classList.add(
                'thumbnail-item',
                'relative', // For video overlay positioning
                'w-24', 'h-24',
                'rounded-lg',
                'overflow-hidden',
                'border-2',
                'border-gray-300',
                'cursor-pointer',
                'flex-shrink-0', // Prevent shrinking
                'flex-grow-0',
                'transition-all', 'duration-200',
                'mb-2' // Add margin bottom for spacing when wrapped
            );

            if (index === currentImageIndex) {
                thumbnailContainer.classList.add('border-blue-500'); // Initial active
            }

            const img = document.createElement('img');
            img.src = media.url;
            img.alt = `Thumbnail ${index + 1}`;
            img.classList.add('w-full', 'h-full', 'object-cover'); // object-cover to maintain aspect ratio and fill square

            thumbnailContainer.appendChild(img);

            // Add video play icon overlay if it's a video thumbnail
            if (media.type === 'video') {
                const videoOverlay = document.createElement('div');
                videoOverlay.classList.add('absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-30');
                const playIcon = document.createElement('i');
                playIcon.classList.add('fas', 'fa-play-circle', 'text-white', 'text-2xl');
                videoOverlay.appendChild(playIcon);
                thumbnailContainer.appendChild(videoOverlay);
            }

            // Add click listener to change main image
            thumbnailContainer.addEventListener('click', () => {
                updateMainImage(index);
            });

            thumbnailGallery.appendChild(thumbnailContainer);
        });
    }

    // Initial load
    generateThumbnails();
    updateMainImage(0);

    // Navigation buttons for main image
    if (prevImageBtn) {
        prevImageBtn.addEventListener('click', () => {
            let newIndex = currentImageIndex - 1;
            if (newIndex < 0) {
                newIndex = productMedia.length - 1; // Wrap around to last image
            }
            updateMainImage(newIndex);
        });
    }

    if (nextImageBtn) {
        nextImageBtn.addEventListener('click', () => {
            let newIndex = currentImageIndex + 1;
            if (newIndex >= productMedia.length) {
                newIndex = 0; // Wrap around to first image
            }
            updateMainImage(newIndex);
        });
    }

    // Basic quantity input logic (to prevent going below 1, max is 1 here)
    if (quantityInput) {
        quantityInput.addEventListener('change', () => {
            if (parseInt(quantityInput.value) < 1) {
                quantityInput.value = 1;
            }
            // Add any other quantity validation here if needed
        });
    }

    // Add zoom button functionality
    if (zoomBtn) {
        zoomBtn.addEventListener('click', toggleZoom);
    }

    // Add click to zoom on image
    if (mainProductImage) {
        mainProductImage.addEventListener('click', function(e) {
            // Only toggle zoom if clicking on the image itself, not on buttons
            if (e.target === mainProductImage) {
                toggleZoom();
            }
        });
    }
});