document.addEventListener('DOMContentLoaded', async function() {
    // Helper: Get product ID from URL (?id=0)
    function getProductIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('id'), 10);
        return isNaN(id) ? 0 : id;
    }

    // Fetch items.json
    async function fetchItems() {
        const response = await fetch('assets/items.json');
        return await response.json();
    }

    // Populate the page with product data
    function populateProduct(product) {
        const mainProductImage = document.getElementById('main-product-image');
        const thumbnailGallery = document.getElementById('thumbnail-gallery');
        let currentImageIndex = 0;

        
        function updateMainImage(index) {
            if (product.images && product.images[index]) {
                mainProductImage.src = product.images[index];
                mainProductImage.alt = product.title + ' image ' + (index + 1);
                currentImageIndex = index;
                // Update active state
                document.querySelectorAll('.thumbnail-item').forEach((thumb, i) => {
                    if (i === index) {
                        thumb.classList.add('border-blue-500');
                        thumb.classList.remove('border-gray-300');
                    } else {
                        thumb.classList.remove('border-blue-500');
                        thumb.classList.add('border-gray-300');
                    }
                });
            }
        }

        // Generate thumbnails
        if (thumbnailGallery && product.images && product.images.length > 0) {
            thumbnailGallery.innerHTML = '';
            product.images.forEach((imgUrl, idx) => {
                const thumb = document.createElement('div');
                thumb.className = 'thumbnail-item w-24 h-24 rounded-lg overflow-hidden border-2 cursor-pointer flex-shrink-0 flex-grow-0 transition-all duration-200 mb-2 ' + (idx === 0 ? 'border-blue-500' : 'border-gray-300');
                const img = document.createElement('img');
                img.src = imgUrl;
                img.alt = product.title + ' thumbnail ' + (idx + 1);
                img.className = 'w-full h-full object-cover';
                thumb.appendChild(img);
                thumb.addEventListener('click', () => updateMainImage(idx));
                thumbnailGallery.appendChild(thumb);
            });
        }

        // Set initial main image
        if (product.images && product.images.length > 0) {
            updateMainImage(0);
        }

        // Title
        const productName = document.getElementById('product-name');
        if (productName) productName.textContent = product.title;
        // Description
        const productDescription = document.getElementById('product-description');
        if (productDescription) productDescription.textContent = product.description;
        // Buy Now button
        const buyNowBtn = document.getElementById('buy_now');
        if (buyNowBtn && product.stripeLink) {
            buyNowBtn.onclick = () => { window.open(product.stripeLink, '_blank'); };
        }
        // Price
        const productPrice = document.getElementById('product-price');
        if (productPrice && product.price) {
            productPrice.textContent = `$${product.price.toFixed(2)}`;
        }
    }

    // Main logic
    try {
        const items = await fetchItems();
        const productId = getProductIdFromUrl();
        const product = items[productId] || items[0];
        populateProduct(product);
    } catch (err) {
        console.error('Failed to load product data:', err);
    }
});