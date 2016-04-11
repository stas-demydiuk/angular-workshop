angular.module('app').controller('HomeController',
    function ($interval) {
        var vm = this;

        vm.$onInit = init;

        function init() {
            vm.time = getTime();

            $interval(function() {
                vm.time = getTime();
            }, 1000)
        }

        function getTime() {
            return (new Date()).toISOString();
        }
    });