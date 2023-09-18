// Get all accordion sections
const accordionSections = document.querySelectorAll('.accordion-section');

// Add click event listeners to toggle content
accordionSections.forEach(section => {
    section.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked section
        section.classList.toggle('active');

        // Get the associated content element
        const content = section.nextElementSibling;

        // Toggle the display of the content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});