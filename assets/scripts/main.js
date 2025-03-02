// burger
let header_burger = document.querySelector('.header_burger');
let header_link = document.querySelector('.header_link');
let menu_close = document.querySelector('.menu_close');
let body = document.querySelector('body');
let navLinks = document.querySelectorAll('.header_link a');

header_burger.addEventListener('click', () => {
  header_link.classList.add('active');
  body.classList.add('active');
})

menu_close.addEventListener('click', () => {
  header_link.classList.remove('active')
  body.classList.remove('active');
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header_link.classList.remove('active');
    body.classList.remove('active');
  });
});
// burger

// form
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const forms = document.querySelectorAll(".form");
  const submitButton = document.querySelector(".submit-btn");
  const contactForm = document.querySelector(".contact-form");
  const successMessage = document.querySelector(".success-message");
  const successMessageClose = document.querySelector(".contact_request_close");

  tabs.forEach(tab => {
      tab.addEventListener("click", function () {
          tabs.forEach(t => t.classList.remove("active"));
          this.classList.add("active");

          forms.forEach(form => form.classList.remove("active"));
          document.getElementById(this.getAttribute("data-tab")).classList.add("active");
      });
  });

  submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      contactForm.style.display = "none";
      successMessage.style.display = "flex";

      setTimeout(() => {
          successMessage.style.display = "none";
          contactForm.style.display = "flex";
      }, 13000);
  });

  successMessageClose.addEventListener("click", function () {
      successMessage.style.display = "none";
      contactForm.style.display = "flex";
  });
});
// form


// select
// flag
// document.addEventListener("DOMContentLoaded", () => {
//   const selectedLanguage = document.querySelector(".selected-language");
//   const languageList = document.querySelector(".language-list");

//   selectedLanguage.addEventListener("click", () => {
//     languageList.classList.toggle("show");
//     selectedLanguage.classList.toggle("open");
//   });

//   document.querySelectorAll(".language-list li").forEach(item => {
//     item.addEventListener("click", () => {
//       const selectedImg = item.querySelector("img").src;
//       selectedLanguage.querySelector("img").src = selectedImg;
//       languageList.classList.remove("show");
//       selectedLanguage.classList.remove("open");
//     });
//   });

//   // Click outside to close
//   document.addEventListener("click", (e) => {
//     if (!selectedLanguage.contains(e.target) && !languageList.contains(e.target)) {
//       languageList.classList.remove("show");
//       selectedLanguage.classList.remove("open");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const selectBtn = document.querySelector(".selected-language");
  const languageList = document.querySelector(".language-list");
  const languageSelect = document.querySelector(".language-select");

  selectBtn.addEventListener("click", function () {
      languageSelect.classList.toggle("open");
  });

  languageList.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
          selectBtn.innerHTML = event.target.textContent + ' <span class="arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 4L6 8.25L1.75 4" stroke="#007BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
          languageSelect.classList.remove("open");
      }
  });

  document.addEventListener("click", function (event) {
      if (!languageSelect.contains(event.target)) {
          languageSelect.classList.remove("open");
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
  //   textInputs.forEach(input => {
  //     input.addEventListener("input", function () {
  //         if (/\d/.test(this.value)) {  // Agar raqam bo‘lsa
  //             this.style.border = "2px solid red";
  //             this.nextElementSibling.textContent = "Faqat harflar kiritish mumkin!";
  //         } else {
  //             this.style.border = "2px solid #ccc"; // Normal holatga qaytarish
  //             this.nextElementSibling.textContent = "";
  //         }
  //     });
  // });

let swiper = new Swiper(".clientSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".client-next",
    prevEl: ".client-prev",
  },
});
