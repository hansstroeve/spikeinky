let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slider-track img');
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}