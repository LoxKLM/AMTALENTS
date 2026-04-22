/* =========================================================
   AM TALENTS — main.js
   Point d'entrée — importe et initialise tous les modules
========================================================= */

import { initLoader    } from './loader.js';
import { initNavbar    } from './navbar.js';
import { initAnimations } from './animations.js';
import { initPortfolio  } from './portfolio.js';
import { initContact    } from './contact.js';

// Loader lancé immédiatement, avant DOMContentLoaded
initLoader();

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initPortfolio();
  initContact();
});
