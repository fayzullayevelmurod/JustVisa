
// select
document.addEventListener("DOMContentLoaded", () => {
  const selectedLanguage = document.querySelector(".selected-language");
  const languageList = document.querySelector(".language-list");

  selectedLanguage.addEventListener("click", () => {
    languageList.classList.toggle("show");
    selectedLanguage.classList.toggle("open");
  });

  document.querySelectorAll(".language-list li").forEach(item => {
    item.addEventListener("click", () => {
      const selectedImg = item.querySelector("img").src;
      selectedLanguage.querySelector("img").src = selectedImg;
      languageList.classList.remove("show");
      selectedLanguage.classList.remove("open");
    });
  });

  // Click outside to close
  document.addEventListener("click", (e) => {
    if (!selectedLanguage.contains(e.target) && !languageList.contains(e.target)) {
      languageList.classList.remove("show");
      selectedLanguage.classList.remove("open");
    }
  });
});

// select

let swiper = new Swiper(".treatmentsSwiper", {
  slidesPerView: 1.10,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 28,
    },
    993: {
      slidesPerView: 3.2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 3.6,
      spaceBetween: 40,
    },
  },
});
