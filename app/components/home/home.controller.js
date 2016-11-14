angular.module('app').controller('HomeController',
    function (tasks) {
        var vm = this;

        vm.tasks = tasks;
        vm.message = 'Hello Angular';
    });