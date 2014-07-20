define(['angular'], function (angular) {
    'use strict';

    angular.module('colibriApp.controllers.QuestionNewCtrl', [])
        .controller('QuestionNewCtrl', function ($scope, $resource, $routeParams) {
            $scope.questionResource = $resource('http://192.168.75.129:3000/question-new');
	    $scope.addQuestion = function($titleInput, $questionInput) {
		alert('Save Question call.')
	    };
        });

});
