(function () {
    angular
        .module('app', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<home></home>'
                })
                .when('/task/:id', {
                    template: '<task-details></task-details>'
                })
                .when('/create', {
                    template: '<task-create></task-create>'
                })
                .when('/update/:id', {
                    template: '<task-edit></task-edit>'
                });
        });
}());