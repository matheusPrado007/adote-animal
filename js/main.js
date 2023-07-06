const login = document.querySelector(".login-form");
const loginBtn = document.querySelector("#login-btn");
const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn");

loginBtn.onclick = () => {
  login.classList.toggle('active');
  navbar.classList.remove('active');
};

menuBtn.onclick = () => {
  login.classList.remove('active');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  login.classList.remove('active');
  navbar.classList.remove('active');
};

const swiper = new Swiper(".gallery-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  },
});
