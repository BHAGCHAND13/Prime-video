document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const scrollThreshold = 100; // Minimum pixels to scroll before navbar appears
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbarVisibility() {
    const currentScrollY = window.scrollY;
    
    // If scrolled up and past threshold, show navbar
    if (currentScrollY < lastScrollY && currentScrollY > scrollThreshold) {
      navbar.classList.add('visible');
    } 
    // If scrolled down or at top, hide navbar
    else {
      navbar.classList.remove('visible');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbarVisibility);
      ticking = true;
    }
  });

  // Initialize navbar state
  updateNavbarVisibility();
});