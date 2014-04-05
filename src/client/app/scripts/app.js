/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/questions', 'controllers/question-view', 'services/url-resolver']/*deps*/, function (angular, MainCtrl, QuestionsCtrl, QuestionViewCtrl, $url)/*invoke*/ {
  'use strict';

  return angular.module('colibriApp', ['colibriApp.controllers.MainCtrl',
'colibriApp.controllers.QuestionsCtrl',
'colibriApp.controllers.QuestionViewCtrl',
'colibriApp.services.UrlResolver',
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
        .when('/question-view/:id', {
          templateUrl: 'views/question-view.html',
          controller: 'QuestionViewCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
