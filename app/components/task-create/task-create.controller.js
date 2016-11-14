angular.module('app').controller('TaskCreateController',
    function ($window, tasks) {
        var vm = this;

        vm.create = create;

        vm.task = {
            name: '',
            description: ''
        };
        
        function create() {
            tasks.push(vm.task);
            $window.history.back();
        }
    });