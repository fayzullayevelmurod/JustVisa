
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

let swiper = new Swiper(".clientSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".client-next",
    prevEl: ".client-prev",
  },
});
