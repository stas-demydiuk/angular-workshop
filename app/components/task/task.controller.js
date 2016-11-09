angular
    .module('app')
    .controller('TaskController', function ($routeParams, tasks) {
        var vm = this;

        vm.task = tasks[$routeParams.id];
    });