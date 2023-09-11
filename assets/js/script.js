'use strict';
/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



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
