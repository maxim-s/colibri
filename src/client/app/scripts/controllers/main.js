define(['angular'], function (angular) {
  'use strict';

  angular.module('colibriApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope, $url) {
      $scope.authUrl = $url.getAuthUrl();
    });
});
