let currentSlide = 0;
const images = document.querySelectorAll(".gallery img");
const totalSlides = images.length;

function showSlide(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) currentSlide = 0;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    showSlide(currentSlide);
}

/* FULLSCREEN MODE */
function toggleFullscreen() {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
            alert(`Gagal fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}
