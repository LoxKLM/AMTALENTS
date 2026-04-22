/* =========================================================
   AM TALENTS — loader.js
   Écran de chargement : barre de progression + sortie fluide
========================================================= */

export function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const fill = loader.querySelector('.loader__progress-fill');

  document.body.style.overflow = 'hidden';

  // setTimeout 50ms force un reflow entre width:0% et width:100%
  setTimeout(() => {
    fill.style.width = '100%';
  }, 50);

  // Flash opacity quand la barre atteint 100% (1.85s après le départ)
  setTimeout(() => {
    fill.style.transition = 'opacity 0.15s ease';
    fill.style.opacity = '0.5';
    setTimeout(() => { fill.style.opacity = '1'; }, 150);
  }, 1900);

  setTimeout(() => {
    loader.classList.add('loader--hidden');
    document.body.style.overflow = '';

    setTimeout(() => loader.remove(), 700);
  }, 2200);
}
