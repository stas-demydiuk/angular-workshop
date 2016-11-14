angular.module('app').factory('logInterceptor',
    function ($log) {
        return {
            request: function (config) {
                $log.log('Request start', config);

                return config;
            },
            response: function (response) {
                $log.log('Request end', response);

                return response;
            }
        };
    });