const modalLogin = document.querySelector('.backdrop');
const loginBtnOpen = document.querySelector('.login-btn-open');
const jsLoginBtnClose = document.querySelector('.js-login-btn-close');

const toggleModalLogin = () => modalLogin.classList.toggle('is-hidden');

loginBtnOpen.addEventListener('click', toggleModalLogin);
jsLoginBtnClose.addEventListener('click', toggleModalLogin);
