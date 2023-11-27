
document.addEventListener('DOMContentLoaded', function () {
    var parallaxContainer = document.querySelector('.parallax-image');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        parallaxContainer.style.transform = `translate3d(0,${scrollPosition * -0.2}px,0)`;
    });
});

// Get the dropdown button and dropdown content
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

// Show the dropdown when the mouse enters the "Work" item
dropdown.addEventListener("mouseenter", () => {
    dropdownContent.style.display = "block";
});

// Hide the dropdown when the mouse leaves the dropdown area
dropdown.addEventListener("mouseleave", () => {
    dropdownContent.style.display = "none";
});



