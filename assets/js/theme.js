/* ============================================================
   Mode clair / sombre.
   - L'état courant est porté par data-theme sur <html> ; Bootstrap
     5.3 est aligné dessus via data-bs-theme.
   - Sans choix explicite, la préférence système fait foi.
   - Le choix de l'utilisateur est mémorisé (localStorage).
   Ce fichier est chargé de façon bloquante dans <head> : le thème
   est posé avant le premier rendu, donc pas de flash de couleur.
   ============================================================ */
(function () {
  var root = document.documentElement;
  var STORAGE_KEY = "cv-theme";
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function readStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null; // navigation privée, stockage bloqué…
    }
  }

  /** Thème réellement appliqué : choix explicite, sinon système. */
  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") {
      return attr;
    }
    return media.matches ? "dark" : "light";
  }

  /** Aligne Bootstrap et l'état du bouton sur le thème courant. */
  function sync() {
    var theme = currentTheme();
    root.setAttribute("data-bs-theme", theme);

    var button = document.querySelector(".btn-theme");
    if (!button) { return; }

    var icon = button.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-sun", theme === "dark");
      icon.classList.toggle("fa-moon", theme !== "dark");
    }
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) { /* stockage indisponible */ }
    }
    sync();
  }

  var saved = readStored();
  if (saved === "dark" || saved === "light") {
    applyTheme(saved, false);
  } else {
    sync();
  }

  // La préférence système reste suivie tant qu'aucun choix n'est mémorisé.
  try {
    media.addEventListener("change", sync);
  } catch (e) { /* navigateur ancien */ }

  document.addEventListener("DOMContentLoaded", function () {
    sync();
    var button = document.querySelector(".btn-theme");
    if (!button) { return; }

    button.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  });
})();
