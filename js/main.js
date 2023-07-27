document.addEventListener("DOMContentLoaded", function() {
  const login = document.querySelector(".login-form");
  const loginBtn = document.getElementById("login-btn");
  const navbar = document.querySelector(".header .navbar");
  const menuBtn = document.getElementById("menu-btn");
  const btnUser = document.getElementById('user');

  loginBtn.addEventListener('click', () => {
    login.classList.toggle('active');
    navbar.classList.remove('active');
  });

  menuBtn.addEventListener('click', () => {
    login.classList.remove('active');
    navbar.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    login.classList.remove('active');
    navbar.classList.remove('active');
  });

  const swiper = new Swiper(".swiper-container", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    // spaceBetween: 20,
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

  const checkboxStorage = document.getElementById('storage');
  const emailUser = document.getElementById('email');
  const password = document.getElementById('password');

  const dataUser = [
    {
      email: 'matheuspradodeveloper@gmail.com',
      senha: 'Pitchichito'
    },
    {
      email: 'lucianobatuta@live.com',
      senha: 'Amarelão'
    }
  ];

  function saveToLocalStorage() {
    if (checkboxStorage.checked) {
      localStorage.setItem('email', emailUser.value);
      localStorage.setItem('senha', password.value);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('senha');
      console.log('Dados removidos do localStorage');
    }
  }

  function verification(event) {
    event.preventDefault();
    const emailValue = emailUser.value;
    const senhaValue = password.value;

    const regex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
    const verifyUser = dataUser.find(user => user.email === emailValue && user.senha === senhaValue);

    if (!regex.test(emailValue) || senhaValue.length < 3 || !verifyUser) {
      alert('Email ou senha inválidos.');
    } else {
      window.location.href = '/pages/user/user.html';
      saveToLocalStorage();
    }
  }

  btnUser.addEventListener('click', verification);

  const savedEmail = localStorage.getItem('email');
  const savedPassword = localStorage.getItem('senha');
  if (savedEmail && savedPassword) {
    emailUser.value = savedEmail;
    password.value = savedPassword;
  }
});
