define(['angular'], function (angular) {
  'use strict';

  angular.module('colibriApp.controllers.QuestionsCtrl', ['ngResource'])
    .controller('QuestionsCtrl', function ($scope, $resource) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      $scope.questionResource = $resource('http://localhost:3000/questions/:id');

//      $scope.questions = [ $scope.questionResource.get({id:'531883f3160e09ff595f2cb2'}) ];

      $scope.questions = $scope.questionResource.query();
      console.log($scope.questions);
    });
});
