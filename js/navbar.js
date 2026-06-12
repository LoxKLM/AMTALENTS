/* =========================================================
   AM TALENTS — navbar.js
   Comportement au scroll : rétrécissement et ombre
========================================================= */

export function initNavbar() {
  const nav = document.getElementById('am-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

export function initBurger() {
  const burger   = document.querySelector('.am-nav__burger');
  const mobile   = document.querySelector('.am-nav__mobile');
  const closeBtn = document.querySelector('.am-nav__mobile-close');
  const links    = document.querySelectorAll('.am-nav__mobile-links a');

  if (!burger || !mobile) return;

  function closeMenu() {
    burger.classList.remove('is-active');
    mobile.classList.remove('is-open');
    document.body.style.overflow = '';
    burger.setAttribute('aria-expanded', 'false');
    mobile.setAttribute('aria-hidden', 'true');
  }

  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('is-active');
    mobile.classList.toggle('is-open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    burger.setAttribute('aria-expanded', isOpen);
    mobile.setAttribute('aria-hidden', !isOpen);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));
}
