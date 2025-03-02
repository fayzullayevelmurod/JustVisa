
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

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const forms = document.querySelectorAll(".form");

  tabs.forEach(tab => {
      tab.addEventListener("click", () => {
          tabs.forEach(t => t.classList.remove("active"));
          forms.forEach(f => f.classList.remove("active"));

          tab.classList.add("active");
          document.getElementById(tab.dataset.tab).classList.add("active");
      });
  });
});


    // Input validation
    textInputs.forEach(input => {
      input.addEventListener("input", function () {
          if (/\d/.test(this.value)) {  // Agar raqam bo‘lsa
              this.style.border = "2px solid red";
              this.nextElementSibling.textContent = "Faqat harflar kiritish mumkin!";
          } else {
              this.style.border = "2px solid #ccc"; // Normal holatga qaytarish
              this.nextElementSibling.textContent = "";
          }
      });
  });

let swiper = new Swiper(".clientSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".client-next",
    prevEl: ".client-prev",
  },
});
