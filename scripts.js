document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Carousel functionality
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');

    function showCarouselItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextCarouselItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showCarouselItem(currentIndex);
    }

    setInterval(nextCarouselItem, 5000); // Change image every 5 seconds

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
