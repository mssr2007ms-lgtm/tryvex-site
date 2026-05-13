// Nav behaviour — scroll effect + burger menu
document.addEventListener('DOMContentLoaded', () => {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const links  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  burger?.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close menu on link click
  links?.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
});
