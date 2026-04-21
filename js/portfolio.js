/* =========================================================
   AM TALENTS — portfolio.js
   Filtre de projets par catégorie (prévu, non actif actuellement)
========================================================= */

export function initPortfolio() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      document.querySelectorAll('.am-project').forEach(project => {
        const matches = category === 'all' || project.dataset.category === category;
        project.style.display = matches ? '' : 'none';
      });
    });
  });
}
