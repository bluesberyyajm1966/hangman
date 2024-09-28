function openModal(project) {
    document.getElementById(project + '-modal').style.display = 'block';
    document.querySelector('.back-to-top').style.display = 'none'; // Hide button when modal is open
}

function closeModal(project) {
    document.getElementById(project + '-modal').style.display = 'none';
    document.querySelector('.back-to-top').style.display = 'block'; // Show button when modal is closed
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the back to top button based on scroll position
window.onscroll = function() {
    const button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

