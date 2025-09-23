  const toggleTB = document.getElementById('top-banner_close');
  const topBanner = document.querySelector('.top-banner');

  toggleTB.addEventListener('click', () => {
    topBanner.style.display = "none";
  })