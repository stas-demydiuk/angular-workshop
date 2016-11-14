angular.module('app').factory('taskService',
    function(tasks, $http) {
       return {
           addTask: addTask,
           getTasks: getTasks,
           getTaskByIndex: getTaskByIndex,
           updateTaskByIndex: updateTaskByIndex
       };

       function addTask(task) {
           return $http.post('/task', task);
       }

       function getTaskByIndex(index) {
           return $http.get('/task/' + index).then(extractResponse);
       }

       function updateTaskByIndex(index, task) {
           return $http.put('/task/' + index, task);
       }

       function getTasks() {
           return $http.get('/task').then(extractResponse);
       }

       function extractResponse(response) {
           return response.data;
       }
    });