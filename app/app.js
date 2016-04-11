(function () {
    angular
        .module('app', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider.when('/', {
                template: '<home></home>'
            });
        });
}());