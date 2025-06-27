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