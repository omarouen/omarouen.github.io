/* ============================================================
   Mode daltonien.
   Axe indépendant du clair/sombre : l'attribut data-palette sur
   <html> vaut "daltonien" ou rien. Seules les couleurs porteuses
   de sens changent (accent et couleur de résultat), les neutres
   restent identiques.
   Chargé de façon bloquante dans <head>, comme theme.js, pour que
   la palette soit posée avant le premier rendu.
   ============================================================ */
(function () {
  var root = document.documentElement;
  var STORAGE_KEY = "cv-palette";
  var VALUE = "daltonien";

  function readStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null; // navigation privée, stockage bloqué…
    }
  }

  function isOn() {
    return root.getAttribute("data-palette") === VALUE;
  }

  function sync() {
    var button = document.querySelector(".btn-palette");
    if (!button) { return; }
    button.classList.toggle("active", isOn());
    button.setAttribute("aria-pressed", isOn() ? "true" : "false");
  }

  function apply(on, persist) {
    if (on) {
      root.setAttribute("data-palette", VALUE);
    } else {
      root.removeAttribute("data-palette");
    }
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, on ? VALUE : "standard");
      } catch (e) { /* stockage indisponible */ }
    }
    sync();
  }

  apply(readStored() === VALUE, false);

  document.addEventListener("DOMContentLoaded", function () {
    sync();
    var button = document.querySelector(".btn-palette");
    if (!button) { return; }

    button.addEventListener("click", function () {
      apply(!isOn(), true);
    });
  });
})();
