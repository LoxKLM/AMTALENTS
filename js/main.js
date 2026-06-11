/* =========================================================
   AM TALENTS — main.js
   Point d'entrée — importe et initialise tous les modules
========================================================= */

import { initLoader    } from './loader.js';
import { initNavbar    } from './navbar.js';
import { initAnimations } from './animations.js';
import { initPortfolio  } from './portfolio.js';
import { initContact    } from './contact.js';
import { initLightbox   } from './lightbox.js';

// Loader lancé uniquement sur index.html (les autres pages n'ont pas l'élément #loader)
if (document.getElementById('loader')) {
  initLoader();
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initPortfolio();
  initContact();
  initLightbox();
});
