var app = angular
    .module('app', [
        // Modules angular official
        'ngAnimate',
        'ngCookies',
        'ngSanitize',
        'ui.router'
    ]);
app.constant('APP_LANGUAGES', [{
    name: 'GLOBAL.LANGUAGES.ENGLISH',
    key: 'en'
}, {
    name: 'GLOBAL.LANGUAGES.FRENCH',
    key: 'fr'
}, {
    name: 'GLOBAL.LANGUAGES.ARABIC',
    key: 'ar'
}]);