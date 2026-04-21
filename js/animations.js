/* =========================================================
   AM TALENTS — animations.js
   Animations d'entrée hero, scroll reveal, compteurs,
   détection vidéo de fond
========================================================= */

/**
 * Déclenche les animations d'entrée du hero en ajoutant .am-hero--ready.
 * Les éléments [data-hero-anim] démarrent à opacity:0 (CSS) et s'animent
 * selon leur type et leur animation-delay inline.
 * Les chips flottent après la fin de leur animation d'entrée.
 */
function initHeroAnimations() {
  const hero = document.querySelector('.am-hero');
  if (!hero) return;

  /* Petite pause pour que le premier frame soit peint avant l'animation */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      hero.classList.add('am-hero--ready');
    });
  });

  /* Ajoute l'animation de flottement aux chips après leur entrée
     am-float utilise la propriété CSS `translate` (indépendante de transform)
     donc pas de conflit avec am-slide-in-right qui utilise transform. */
  const chips = hero.querySelectorAll('.am-hero__chip');
  chips.forEach((chip, i) => {
    /* chip 0 : delay 0.8s + durée 0.6s = 1.4s → float à 1400ms
       chip 1 : delay 1.2s + durée 0.6s = 1.8s → float à 1800ms */
    const floatStart = i === 0 ? 1400 : 1800;
    const floatOffset = i === 1 ? '-3s' : '0s'; /* décalage de phase */

    setTimeout(() => {
      chip.style.animation = `am-float 6s ease-in-out ${floatOffset} infinite`;
    }, floatStart);
  });
}

/**
 * Fait apparaître la vidéo de fond en fondu quand elle peut jouer.
 * Utilise .am-hero--video-ready pour déclencher la transition CSS.
 */
function initHeroVideo() {
  const hero  = document.querySelector('.am-hero');
  const video = hero?.querySelector('.am-hero__video-bg');
  if (!video || !hero) return;

  function activate() {
    hero.classList.add('am-hero--video-ready');
  }

  video.addEventListener('canplay', activate, { once: true });
  if (video.readyState >= 3) activate();
}

/**
 * Révèle les éléments [data-reveal] au passage dans le viewport.
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/**
 * Anime les compteurs [data-counter] de 0 à leur valeur cible.
 * Exemple : <span data-counter="180" data-counter-suffix="+">180+</span>
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.counterSuffix || '';
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (Number.isInteger(target)
          ? Math.round(target * eased)
          : (target * eased).toFixed(1)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

export function initAnimations() {
  initHeroVideo();
  initHeroAnimations();
  initScrollReveal();
  initCounters();
}
