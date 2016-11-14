angular.module('app').controller('HomeController',
    function (taskService) {
        var vm = this;

        taskService.getTasks().then(function(tasks) {
            vm.tasks = tasks;
        });

        vm.message = 'Hello Angular';
    });