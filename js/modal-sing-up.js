const modalSingUp = document.querySelector('.backdrop-sing-up');
const singUpBtnOpen = document.querySelector('.sing-up-btn-open');
const jsSingUpBtnClose = document.querySelector('.js-sing-up-btn-close');

const toggleModalSingUp = () => modalSingUp.classList.toggle('is-hidden');

singUpBtnOpen.addEventListener('click', toggleModalSingUp);
jsSingUpBtnClose.addEventListener('click', toggleModalSingUp);