document.addEventListener("DOMContentLoaded", function () {
  const sliderItems = document.querySelectorAll(".slider-item");
  let currentIndex = 0;

  function showSlide(index) {
    sliderItems.forEach((item, i) => {
      item.classList.remove("active");
    });

    sliderItems[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
  }

  const nextButton = document.querySelector("[data-next-btn]");
  const prevButton = document.querySelector("[data-prev-btn]");

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Automatically advance to the next slide every 5 seconds (5000 milliseconds)
  setInterval(nextSlide, 5000);
});
