// ==================== HAMBURGER MENU TOGGLE ====================
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (!hamburgerBtn || !navMenu) return;

  const icon = hamburgerBtn.querySelector('i');

  // Toggle menu open/close
  hamburgerBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    navMenu.classList.toggle('active');

    // Swap icon between bars and X
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      navMenu.classList.remove('active');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Reset menu when resizing back to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});