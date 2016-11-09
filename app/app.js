(function () {
    angular
        .module('app', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeController',
                    controllerAs: '$ctrl'
                })
                .when('/task/:id', {
                    templateUrl: 'components/task/task.html',
                    controller: 'TaskController',
                    controllerAs: '$ctrl'
                });
        });
}());