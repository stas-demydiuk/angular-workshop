(function () {
    angular
        .module('app', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'components/home/home.html'
            });
        });
}());