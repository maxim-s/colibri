define(['angular'], function (angular) {
    'use strict';

    angular.module('colibriApp.controllers.QuestionViewCtrl', [])
        .controller('QuestionViewCtrl', function ($scope, $resource, $routeParams) {
            $scope.questionResource = $resource('http://localhost:3000/questions/:id');
            $scope.question = $scope.questionResource.get({id: $routeParams.id});
        });
});
