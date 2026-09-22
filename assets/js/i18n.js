/* ============================================================
   Bascule de langue.
   Les textes traduits vivent dans assets/js/translations.js
   (window.CV_I18N) ; ce fichier ne contient que la logique.
   Chaque élément traduisible porte data-i18n="clé".
   ============================================================ */
(function () {
  var config = window.CV_I18N;
  if (!config) {
    return; // translations.js absent : la page reste en français
  }

  var STORAGE_KEY = "cv-lang";
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var source = {};

  // Le français est la langue source : on la relit depuis le DOM.
  nodes.forEach(function (node) {
    var key = node.getAttribute("data-i18n");
    if (!(key in source)) {
      source[key] = node.textContent.trim().replace(/\s+/g, " ");
    }
  });

  var dictionaries = { fr: source };
  Object.keys(config.translations).forEach(function (lang) {
    dictionaries[lang] = config.translations[lang];
  });

  function setLang(lang) {
    if (!dictionaries[lang]) { lang = "fr"; }
    var table = dictionaries[lang];

    nodes.forEach(function (node) {
      var value = table[node.getAttribute("data-i18n")];
      if (value) { node.textContent = value; }
    });

    document.documentElement.lang = lang;
    document.title = config.titles[lang] || document.title;

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* stockage indisponible */ }
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"));
    });
  });

  // Langue initiale : choix mémorisé, sinon langue du navigateur.
  var initial = null;
  try {
    initial = localStorage.getItem(STORAGE_KEY);
  } catch (e) { /* stockage indisponible */ }

  if (!initial) {
    initial = (navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  }
  setLang(initial);
})();
