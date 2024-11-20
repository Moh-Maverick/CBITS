// Function to show the selected section and hide the others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.members');

    // Loop through sections and hide them
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Default: Show Faculty Section on Page Load
document.addEventListener('DOMContentLoaded', () => {
    showSection('faculty');
});