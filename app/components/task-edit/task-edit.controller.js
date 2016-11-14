angular.module('app').controller('TaskEditController',
    function ($window, $routeParams, taskService) {
        var vm = this;

        vm.update = update;
        vm.$onInit = init;

        function init() {
            taskService.getTaskByIndex($routeParams.id).then(function (task) {
                vm.task = task;
            });
        }

        function update() {
            taskService.updateTaskByIndex($routeParams.id, vm.task).then(function () {
                $window.history.back();
            });
        }
    });