const menuButton = document.querySelector('.header__menu-label');
const menu = document.querySelector('.header__menu-wrapper');
const logo = document.querySelector('.header__logo');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  logo.classList.toggle('transparent');
})
