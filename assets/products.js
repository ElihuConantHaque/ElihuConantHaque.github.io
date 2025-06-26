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