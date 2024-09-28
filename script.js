// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId + '-modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable background scrolling
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId + '-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable background scrolling
}

// Function to scroll back to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the back to top button based on scroll position
window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};
