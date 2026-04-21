# AM Talents — Site vitrine

Site vitrine de l'agence digitale AM Talents, Marseille.
HTML / CSS / JS vanilla — aucun prérequis, aucun build.

---

## Prérequis

Aucun. Le projet est en HTML/CSS/JS pur, sans Node.js ni bundler.

---

## Lancer en local

**Option 1 — Live Server (VS Code)**

1. Ouvrir le dossier dans VS Code
2. Installer l'extension Live Server (Ritwick Dey)
3. Clic droit sur `index.html` → *Open with Live Server*

**Option 2 — Python**

```bash
python -m http.server 8080
# puis ouvrir http://localhost:8080
```

**Option 3 — Node.js**

```bash
npx serve .
```

> Le site doit être servi via HTTP (pas `file://`) pour que les modules ES6 et EmailJS fonctionnent.

---

## Structure des fichiers

```
am-talents/
├── index.html          ← Unique page HTML
├── css/
│   ├── main.css        ← Variables CSS, reset, utilitaires
│   ├── animations.css  ← Toutes les @keyframes
│   ├── layout.css      ← Navbar + footer
│   ├── hero.css
│   ├── services.css
│   ├── expertise.css
│   ├── stats.css
│   ├── portfolio.css
│   └── contact.css
└── js/
    ├── main.js         ← Point d'entrée
    ├── navbar.js
    ├── animations.js
    ├── portfolio.js
    └── contact.js
```

---

## Déploiement Hostinger (Git webhook)

1. Dans Hostinger, aller dans **Git** → **Créer un dépôt**
2. Copier l'URL SSH du dépôt distant Hostinger
3. En local :
   ```bash
   git remote add hostinger git@ssh.hostinger.com:votre-compte/amtalents.git
   git push hostinger main
   ```
4. Chaque `git push hostinger main` déploie automatiquement le site

---

## Configuration EmailJS

Avant la mise en ligne, renseigner les trois constantes dans [js/contact.js](js/contact.js) :

| Constante              | Où trouver               |
|------------------------|--------------------------|
| `EMAILJS_PUBLIC_KEY`   | Dashboard EmailJS → Account → Public Key |
| `EMAILJS_SERVICE_ID`   | Dashboard EmailJS → Email Services       |
| `EMAILJS_TEMPLATE_ID`  | Dashboard EmailJS → Email Templates      |

Le template EmailJS doit contenir les variables `{{nom}}`, `{{email}}`, `{{activite}}`, `{{message}}`.

---

## Variables à personnaliser avant livraison

| Fichier          | Élément                          | Valeur à remplacer               |
|------------------|----------------------------------|----------------------------------|
| `js/contact.js`  | `EMAILJS_PUBLIC_KEY`             | Clé publique EmailJS             |
| `js/contact.js`  | `EMAILJS_SERVICE_ID`             | ID du service EmailJS            |
| `js/contact.js`  | `EMAILJS_TEMPLATE_ID`            | ID du template EmailJS           |
| `index.html`     | URL canonical                    | `https://amtalents.fr/`          |
| `index.html`     | `og:image` / `twitter:image`     | URL absolue de l'image OG        |
| `sitemap.xml`    | `<lastmod>`                      | Date de la dernière modification |

---

## Identité visuelle

Ne jamais modifier sans accord explicite du client. Voir [CLAUDE.md](CLAUDE.md) pour le détail complet des couleurs et typographies.
