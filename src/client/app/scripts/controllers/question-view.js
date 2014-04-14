define(['angular'], function (angular) {
    'use strict';

    angular.module('colibriApp.controllers.QuestionViewCtrl', [])
        .controller('QuestionViewCtrl', function ($scope, $resource, $routeParams) {
            $scope.questionResource = $resource('http://192.168.206.136:3000/questions/:id');
            $scope.question = $scope.questionResource.get({id: $routeParams.id});
            $scope.ratingClick = function ($answer, $value) { alert('\nAnswerObject = ' + $answer + "\nAnswerBody=" + $answer.body + '\nValue = ' + $value) };
	    $scope.sendAnswer = function($text) { alert('QId = ' + $routeParams.id + '\nText = ' + $text) };
	    $scope.addQuestionComment = function($text) { alert('QId = ' + $routeParams.id + '\nText = ' + $text) };
	    $scope.addAnswerComment = function($answer, $text) { alert('\nAnswerObject = ' + $answer + "\nAnswerBody=" + $answer.body + '\nText = ' + $text) };
        });

});
