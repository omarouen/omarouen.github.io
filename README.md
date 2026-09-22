# CV — Marouene Ouerghemmi

Page CV statique, sans build ni dépendance à installer : Bootstrap 5.3 et
Font Awesome 6 sont chargés depuis cdnjs avec leur hash d'intégrité (SRI).

## Arborescence

```
index.html                        page (contenu en français, langue source)
assets/css/style.css              thème, composants, styles d'impression
assets/js/theme.js                mode clair / sombre
assets/js/translations.js         dictionnaire anglais + titres de page
assets/js/i18n.js                 logique de bascule de langue
assets/cv-marouene-ouerghemmi.pdf CV téléchargeable (bouton du bandeau)
```

Pour mettre à jour le CV téléchargeable, remplacer le PDF par la nouvelle
version en gardant le même nom de fichier ; le bouton n'a pas à changer.

## Mise en ligne sur GitHub Pages

Le dépôt git est déjà initialisé avec un premier commit sur la branche
`main`. Il reste à créer le dépôt distant et à pousser.

**1. Créer le dépôt sur github.com** (bouton *New repository*), public,
sans README ni .gitignore — le dossier en contient déjà.

Le nom choisi détermine l'adresse du site :

| Nom du dépôt          | Adresse du site                  |
|-----------------------|----------------------------------|
| `omarouen.github.io`  | `https://omarouen.github.io/`    |
| `cv`                  | `https://omarouen.github.io/cv/` |

**2. Pousser le code**, depuis ce dossier :

```bash
git remote add origin https://github.com/omarouen/omarouen.github.io.git
git push -u origin main
```

Avec le dépôt nommé `cv`, remplacer l'URL par
`https://github.com/omarouen/cv.git` et corriger les balises
`canonical` / `og:url` en tête d'`index.html`.

**3. Activer Pages** : *Settings* → *Pages* → *Source: Deploy from a
branch* → branche `main`, dossier `/ (root)` → *Save*. La première
publication prend une à deux minutes, puis l'adresse s'affiche en haut de
cette même page.

Sans ligne de commande, l'alternative fonctionne aussi : créer le dépôt,
puis *Add file* → *Upload files* et y déposer le contenu du dossier
(`index.html` doit se retrouver à la racine du dépôt, pas dans un
sous-dossier), et activer Pages de la même façon.

Le fichier `.nojekyll` à la racine indique à GitHub de servir les fichiers
tels quels, sans passer par Jekyll.

Tous les chemins du site sont relatifs, donc la page fonctionne aussi bien
à la racine d'un domaine que dans un sous-dossier `/cv/`. En local, ouvrir
`index.html` directement suffit — rien n'utilise `fetch()`, donc `file://`
ne pose pas de problème.

## Vie privée

La page affiche un numéro de téléphone et une adresse e-mail : une fois en
ligne, ils sont visibles par les moteurs de recherche et les robots
d'aspiration. Pour rester accessible par lien sans être indexé, ajouter
dans le `<head>` de `index.html` :

```html
<meta name="robots" content="noindex, nofollow">
```

## Thème

Le thème courant est porté par l'attribut `data-theme` sur `<html>`
(`light` ou `dark`), et Bootstrap est aligné dessus via `data-bs-theme`.
Sans choix explicite, la préférence système (`prefers-color-scheme`) fait
foi ; le choix fait avec le bouton est mémorisé dans `localStorage`.

Toutes les couleurs sont des variables CSS déclarées dans `style.css` :

```css
:root { --accent: #12657f; /* … */ }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { /* … */ } }
:root[data-theme="dark"] { /* … */ }
```

Pour changer la palette, il suffit de modifier ces trois blocs — les
variables Bootstrap (`--bs-body-bg`, `--bs-link-color`, etc.) en découlent,
aucune règle du framework n'est surchargée.

## Mode daltonien

Troisième bouton du bandeau (icône œil), indépendant du clair/sombre :
il pose `data-palette="daltonien"` sur `<html>` et le choix est mémorisé.

La palette standard oppose un bleu pétrole à un vert (les valeurs
atteintes dans les métriques SonarQube) — un couple mal discriminé en
deutéranopie et en protanopie. Le mode daltonien le remplace par un axe
bleu / orange inspiré de la palette Okabe-Ito, distinguable pour tous les
types de daltonisme et différencié même en niveaux de gris. Les neutres
ne changent pas : ils ne portent aucun sens.

Contrastes mesurés, tous conformes WCAG AA :

| Rôle    | Clair                | Sombre               |
|---------|----------------------|----------------------|
| Accent  | `#0072b2` — 4,79:1   | `#56b4e9` — 7,97:1   |
| Résultat| `#a64500` — 5,58:1   | `#e69f00` — 8,17:1   |

Comme pour le thème, tout se joue sur quatre variables CSS
(`--accent`, `--accent-ink`, `--accent-soft`, `--pass`) redéfinies dans
les blocs `[data-palette="daltonien"]` de `style.css`.

## Traductions

Le français est la langue source : il est écrit directement dans
`index.html` et relu depuis le DOM au chargement. Seul l'anglais est
déclaré, dans `assets/js/translations.js`.

Pour modifier un texte français, éditer `index.html`. Pour l'anglais,
éditer l'entrée correspondante dans `translations.js` — la clé est
l'attribut `data-i18n` de l'élément.

Pour ajouter une troisième langue :

1. ajouter `es: { … }` dans `translations` et `es: "…"` dans `titles` ;
2. ajouter un bouton `<button data-lang="es">ES</button>` dans l'en-tête.

## Impression

Une feuille d'impression dédiée masque l'en-tête, les boutons et les
ombres, et évite les coupures au milieu d'une mission — `Ctrl/Cmd + P`
produit un CV propre en A4.
