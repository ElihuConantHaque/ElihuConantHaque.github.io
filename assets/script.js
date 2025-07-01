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

// ... existing code ...

function scheduleAppointment() {
    // Initialize Appointy configuration if not already set
    if (typeof(window.Appointy) === 'undefined') {
        window.Appointy = {};
    }
    
    window.Appointy.config = {
        business: 'ElihuMusic',
        defaultTab: 'Schedule',
        extraParameter: '',
        buttonImg: '',
        modal: {
            height: '100%',
            width: '100%'
        },
        // buttonAlign: "Right", /* You may set 'Left' or 'Right', default value is 'Right'*/
        // buttonPosition: "40", /*You may set 'Top', 'Bottom' or any number from 0 to 100, default value is '40'*/
    };

    // Check if Appointy widget is available
    if (typeof(window.Appointy) !== 'undefined' && window.Appointy.config) {
        // Use jQuery if available, otherwise use vanilla JS
        if (typeof(jQuery) !== 'undefined') {
            jQuery("#app-widget-btn").click();
        } else {
            // Fallback if jQuery is not available
            const appointyBtn = document.getElementById('app-widget-btn');
            if (appointyBtn) {
                appointyBtn.click();
            } else {
                // If no Appointy widget found, show a message
                alert('Appointment scheduling is not available at the moment. Please contact us directly.');
            }
        }
    } else {
        // Fallback message if Appointy is not loaded
        alert('Appointment scheduling is not available at the moment. Please contact us directly.');
    }
}