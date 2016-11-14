angular.module('app').controller('TaskEditController',
    function ($window, $routeParams, tasks) {
        var vm = this;

        vm.update = update;
        vm.task = angular.copy(tasks[$routeParams.id]);
        
        function update() {
            tasks[$routeParams.id] = vm.task;
            $window.history.back();
        }
    });