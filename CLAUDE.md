# AM Talents — CLAUDE.md

Site vitrine de l'agence digitale AM Talents, basée à Marseille.
Stack : HTML / CSS / JS vanilla, zéro framework, zéro build tool.
Hébergeur cible : Hostinger via Git webhook.

---

## Identité visuelle — NE JAMAIS MODIFIER

### Couleurs principales

| Token                | Hex       | Usage                        |
|----------------------|-----------|------------------------------|
| `--am-orange-400`    | `#E8703A` | Accent principal, CTA        |
| `--am-steel-400`     | `#A8C3D4` | Couleur primaire, navbar CTA |
| `--am-paper` / `--am-bg` | `#FAFAF7` | Fond général             |
| `--am-ink-900`       | `#0E1419` | Texte principal              |

Toute la palette complète (steel, orange, ink) est définie dans `css/main.css` sous `:root`.

### Typographies

| Variable               | Famille              | Usage              |
|------------------------|----------------------|--------------------|
| `--am-font-display`    | Space Grotesk        | Titres, UI         |
| `--am-font-body`       | Inter                | Corps de texte     |
| `--am-font-serif`      | Instrument Serif     | Accents italiques  |

Chargées via Google Fonts dans `<head>` — ne pas changer les graisses importées.

---

## Structure du projet

```
am-talents/
├── index.html          ← HTML sémantique pur, aucun style ni script inline
├── css/
│   ├── main.css        ← Variables :root, reset, utilitaires partagés
│   ├── animations.css  ← Toutes les @keyframes
│   ├── layout.css      ← Navbar et footer
│   ├── hero.css
│   ├── services.css    ← Section services + maquette téléphone
│   ├── expertise.css   ← Section expertise + pilliers
│   ├── stats.css       ← Compteurs 23 / 180+ / 10j / 4.9
│   ├── portfolio.css
│   └── contact.css     ← Formulaire EmailJS
└── js/
    ├── main.js         ← DOMContentLoaded + imports
    ├── navbar.js
    ├── animations.js   ← Scroll reveal + counters
    ├── portfolio.js    ← Filtre projets
    └── contact.js      ← Logique EmailJS
```

---

## Règles de code

- **CSS** : nommage BEM strict (`am-hero__title`, `am-service-row__n`), variables dans `:root`, indentation 2 espaces, commentaires en français
- **JS** : ES6+ vanilla uniquement, chaque module exporte ses fonctions (`export function initX()`), `main.js` importe tout
- **HTML** : chemins relatifs (`./css/`, `./js/`), CSS via `<link>` dans `<head>`, JS via `<script type="module">` avant `</body>`
- Zéro `!important` sauf exception justifiée en commentaire
- Zéro jQuery, zéro dépendance externe sauf EmailJS

---

## Ce que Claude ne doit PAS faire

- Modifier les couleurs sans instruction explicite du client
- Ajouter des dépendances JS externes (frameworks, librairies)
- Toucher au design, aux animations ou à l'identité visuelle
- Mettre du style inline dans le HTML
- Créer de fichiers CSS ou JS supplémentaires sans accord préalable
- Utiliser `!important` sans commenter pourquoi

---

## EmailJS — configuration

Les credentials sont dans `js/contact.js` sous forme de constantes commentées `[À CONFIGURER]`.
À renseigner avant la mise en production :
- `EMAILJS_PUBLIC_KEY`
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`

---

## Déploiement

Hostinger — dépôt Git connecté via webhook.
Brancher sur `main`, pousser déclenche le déploiement automatique.
