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
