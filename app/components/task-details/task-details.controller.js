angular.module('app').controller('TaskDetailsController',
    function($window, $routeParams, tasks) {
        var vm = this;

        vm.task = tasks[$routeParams.id];
        vm.myvar = $routeParams.myvar;
        vm.goBack = goBack;

        function goBack() {
            $window.history.back();
        }
    });