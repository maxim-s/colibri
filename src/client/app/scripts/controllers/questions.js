define(['angular'], function (angular) {
  'use strict';

  angular.module('colibriApp.controllers.QuestionsCtrl', [])
    .controller('QuestionsCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
