/* =========================================================
   AM TALENTS — lightbox.js
   Visualisation plein écran des cards projets
========================================================= */

export function initLightbox() {
  const lightbox = document.getElementById('am-lightbox');
  if (!lightbox) return;

  const lbCover = lightbox.querySelector('.am-lightbox__cover');
  const lbNum   = lightbox.querySelector('.am-lightbox__num');
  const lbCat   = lightbox.querySelector('.am-lightbox__cat');
  const lbTitle = lightbox.querySelector('.am-lightbox__title');

  document.querySelectorAll('.am-project').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      const coverEl  = card.querySelector('.am-project__cover');
      const coverImg = coverEl.querySelector('.am-project__cover-img');

      lbCover.removeAttribute('style');
      if (coverImg) {
        lbCover.style.backgroundImage    = `url('${coverImg.src}')`;
        lbCover.style.backgroundSize     = 'contain';
        lbCover.style.backgroundPosition = 'center';
        lbCover.style.backgroundRepeat   = 'no-repeat';
        lbCover.style.backgroundColor    = '#0e1419';
      } else {
        const bg = getComputedStyle(coverEl).backgroundImage;
        if (bg && bg !== 'none') {
          lbCover.style.backgroundImage    = bg;
          lbCover.style.backgroundSize     = 'cover';
          lbCover.style.backgroundPosition = 'center';
        }
      }

      lbNum.textContent   = card.querySelector('.am-project__num')?.textContent   ?? '';
      lbCat.textContent   = card.querySelector('.am-project__cat')?.textContent   ?? '';
      lbTitle.textContent = card.querySelector('.am-project__title')?.textContent ?? '';

      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  lightbox.querySelector('.am-lightbox__close').addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
