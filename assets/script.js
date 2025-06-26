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

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission (page reload)

        statusMessage.textContent = 'Sending...';
        statusMessage.className = 'mt-4 text-center text-lg text-blue-400';

        // These IDs are from your EmailJS Dashboard -> Email Services and Email Templates
        const serviceID = 'YOUR_EMAILJS_SERVICE_ID'; // e.g., 'default_service'
        const templateID = 'YOUR_EMAILJS_TEMPLATE_ID'; // e.g., 'contact_form_template'

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                statusMessage.textContent = 'Message sent successfully!';
                statusMessage.className = 'mt-4 text-center text-lg text-green-400';
                contactForm.reset(); // Clear the form
            }, (error) => {
                console.error('FAILED...', error);
                statusMessage.textContent = `Failed to send message: ${error.text || error}`;
                statusMessage.className = 'mt-4 text-center text-lg text-red-500';
            });
    });
});