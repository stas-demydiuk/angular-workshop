(function () {
    angular
        .module('app', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'components/home/home.html',
                controller: 'HomeController',
                controllerAs: '$ctrl'
            });
        });
}());