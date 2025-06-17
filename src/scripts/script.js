// Banner Carousel Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Get all overlap elements
    const overlaps = document.querySelectorAll('.banner .overlap, .banner .overlap-2, .banner .overlap-3, .banner .overlap-4, .banner .overlap-5, .banner .overlap-6');

    // Current slide index
    let currentSlide = 0;

    // Hide all overlaps initially except the first one
    function showSlide(index) {
        overlaps.forEach((overlap, i) => {
            if (i === index) {
                overlap.style.display = 'block';
            } else {
                overlap.style.display = 'none';
            }
        });
    }

    // Initialize carousel - show first slide
    showSlide(currentSlide);

    // Get click areas from all overlaps
    const clickLefts = document.querySelectorAll('.overlap-group-wrapper');
    const clickRights = document.querySelectorAll('.arrow-rightaa-3');

    // Left arrow click handlers
    clickLefts.forEach(clickLeft => {
        if (clickLeft) {
            clickLeft.addEventListener('click', function () {
                currentSlide = (currentSlide - 1 + overlaps.length) % overlaps.length;
                showSlide(currentSlide);
            });

            // Add cursor pointer to indicate clickable
            clickLeft.style.cursor = 'pointer';
        }
    });

    // Right arrow click handlers
    clickRights.forEach(clickRight => {
        if (clickRight) {
            clickRight.addEventListener('click', function () {
                currentSlide = (currentSlide + 1) % overlaps.length;
                showSlide(currentSlide);
            });

            // Add cursor pointer to indicate clickable
            clickRight.style.cursor = 'pointer';
        }
    });

    // Optional: Auto-play functionality (uncomment if needed)
    /*
    setInterval(function() {
        currentSlide = (currentSlide + 1) % overlaps.length;
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds
    */

    const mobile_button = document.getElementById("mobile-menu");
    mobile_button.addEventListener("click", ()=>{
        const topNav = document.querySelector(".top-navigations");
        topNav.classList.toggle("!h-auto");
        // topNav.style.height = "auto";
    })
});