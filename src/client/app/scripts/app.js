/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/questions']/*deps*/, function (angular, MainCtrl, QuestionsCtrl)/*invoke*/ {
  'use strict';

  return angular.module('colibriApp', ['colibriApp.controllers.MainCtrl',
'colibriApp.controllers.QuestionsCtrl',
/*angJSDeps*/
  'ngResource',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/Questions', {
          templateUrl: 'views/questions.html',
          controller: 'QuestionsCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
