// nav toggler

const navBar = document.querySelector('.navbar__menu');
const showNav = () => {
  navBar.classList.toggle('navbar-show');
  removeNav();
};

// close nav when nav items is clicked
const removeNav = () => {
  const navLinks = document.querySelectorAll('.navbar__list');
  navLinks.forEach(item => item.addEventListener('click', () => {
    navBar.classList.remove('navbar-show');
  }));
};