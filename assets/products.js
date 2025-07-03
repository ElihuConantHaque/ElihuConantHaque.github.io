document.addEventListener('DOMContentLoaded', () => {
  fetch('assets/products.json')
    .then(response => response.json())
    .then(products => {
      const grid = document.getElementById('products-grid');
      grid.innerHTML = '';
      products.forEach(product => {
        grid.innerHTML += `
          <div class="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <a href="${product.stripeLink}" class="block w-full" target="_blank" rel="noopener">
              <img src="${product.image}" alt="${product.title}" class="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-200 hover:scale-105" />
            </a>
            <a href="${product.stripeLink}" class="text-2xl font-bold text-white hover:text-yellow-400 transition-colors duration-200 mb-2 text-center block" target="_blank" rel="noopener">
              ${product.title}
            </a>
            <p class="text-gray-300 mb-4 text-center">
              ${product.description}
            </p>
            <a href="${product.stripeLink}" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded transition-colors duration-200 text-center w-max" target="_blank" rel="noopener">
              Purchase
            </a>
          </div>
        `;
      });
    });
});

document.addEventListener('DOMContentLoaded', async function() {
    // Fetch items.json
    async function fetchItems() {
        const response = await fetch('assets/items.json');
        return await response.json();
    }

    // Render product cards
    function renderProducts(products) {
        const productsDiv = document.getElementById('products');
        if (!productsDiv) return;
        productsDiv.innerHTML = '';
        products.forEach((product, idx) => {
            // Create card container
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-200';
            card.style.cursor = 'pointer';
            card.onclick = () => {
                window.location.href = `item.html?id=${idx}`;
            };

            // Product image
            if (product.images && product.images.length > 0) {
                const img = document.createElement('img');
                img.src = product.images[0];
                img.alt = product.title;
                img.className = 'w-full h-48 object-contain rounded mb-4';
                card.appendChild(img);
            }

            // Product title
            const title = document.createElement('h2');
            title.className = 'text-lg font-bold text-center';
            title.textContent = product.title;
            card.appendChild(title);

            productsDiv.appendChild(card);
        });
    }

    // Main logic
    try {
        const items = await fetchItems();
        renderProducts(items);
    } catch (err) {
        console.error('Failed to load product data:', err);
    }
});