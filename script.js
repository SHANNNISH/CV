const slides = document.querySelectorAll(".favourite-games__slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();

    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

const slidesPortfolio = document.querySelectorAll(".portfolio__slide");

for (const slidePortfolio of slidesPortfolio) {
  slidePortfolio.addEventListener("click", () => {
    clearActiveClasses();

    slidePortfolio.classList.add("active");
  });
}

function clearActiveClasses() {
  slidesPortfolio.forEach((slidePortfolio) => {
    slidePortfolio.classList.remove("active");
  });
}
