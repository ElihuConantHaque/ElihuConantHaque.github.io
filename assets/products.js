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

document.addEventListener('DOMContentLoaded', () => {
  fetch('assets/items.json')
    .then(response => response.json())
    .then(products => {
      const grid = document.getElementById('products');
      grid.innerHTML = '';
      products.forEach((product, idx) => {
        grid.innerHTML += `
          <a href="item.html?id=${idx}" class="card p-4 flex flex-col h-full items-center bg-white rounded shadow hover:shadow-lg transition-shadow duration-200">
              <div class="w-full h-64 flex items-center justify-center">
                  <img src="${product.images[0]}" class="object-contain h-full w-full rounded" />
              </div>
              <h2 class="text-2xl text-black mt-4 text-center">${product.title}</h2>
              <p class="text-gray-600 mt-2 text-center">${product.description}</p>
              <span class="text-lg text-black font-bold mt-2">$${product.price.toFixed(2)}</span>
          </a>
        `;
      });
    });
});