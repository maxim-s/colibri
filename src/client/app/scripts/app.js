/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/questions', 'controllers/question-view', 'controllers/question-new', 'services/url-resolver', 'services/auth']/*deps*/, function (angular, MainCtrl, QuestionsCtrl, QuestionViewCtrl, QuestionNewCtrl, $url, AuthFactory)/*invoke*/ {
    'use strict';

    return angular.module('colibriApp', ['colibriApp.controllers.MainCtrl',
            'colibriApp.controllers.QuestionsCtrl',
            'colibriApp.controllers.QuestionViewCtrl',
            'colibriApp.controllers.QuestionNewCtrl',
            'colibriApp.services.UrlResolver',
            'colibriApp.services.Auth',
            /*angJSDeps*/
            'ngResource',
            'ngRoute'
        ])
        .config(function ($routeProvider, $httpProvider) {
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
                .when('/question-new', {
                    templateUrl: 'views/question-new.html',
                    controller: 'QuestionNewCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
            $httpProvider.interceptors.push('auth');
        });
});
