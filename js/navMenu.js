const toggleBtn = document.getElementById('toggle-nav-burger');
  const menuItems = document.querySelector('.menu-items');

  toggleBtn.addEventListener('click', () => {
    menuItems.classList.toggle('show-menu-items');
  })