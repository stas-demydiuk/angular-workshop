angular.module('app').controller('TaskDetailsController',
    function ($window, $routeParams, taskService) {
        var vm = this;

        taskService.getTaskByIndex($routeParams.id).then(function (task) {
            vm.task = task;
        });

        vm.goBack = goBack;

        function goBack() {
            $window.history.back();
        }
    });