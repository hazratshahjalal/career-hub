const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
  menuItems.classList.toggle('open');
});
