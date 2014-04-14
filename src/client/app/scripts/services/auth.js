define(['angular'], function (angular) {
    'use strict';

    angular.module('colibriApp.services.Auth', [])
        .factory('auth', function ($rootScope, $q, $window) {
            return {
                request: function (request) {
                    request.headers = request.headers || {};
                    if ($window.sessionStorage.token) {
                        request.headers.Authorization = 'Bearer 123' + $window.sessionStorage.token;
                    }
                    return request;
                },
                response: function (response) {
                    if (response.status === 401) {
                        // handle the case where the user is not authenticated
                    }
                    return response || $q.when(response);
                }
            };
        });
});
